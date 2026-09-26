const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value, max = 4000) => String(value || "").trim().slice(0, max);
const escapeHtml = (value) => value.replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));

const rateLimitStore = globalThis.__circleCityQuoteRateLimit || new Map();
globalThis.__circleCityQuoteRateLimit = rateLimitStore;

function clientIp(request) {
  return (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
}

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxAttempts = 5;
  const recent = (rateLimitStore.get(ip) || []).filter((time) => now - time < windowMs);
  if (recent.length >= maxAttempts) return true;
  recent.push(now);
  rateLimitStore.set(ip, recent);
  return false;
}

async function verifyTurnstile(token, ip) {
  if (!process.env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  const form = new URLSearchParams();
  form.set("secret", process.env.TURNSTILE_SECRET_KEY);
  form.set("response", token);
  if (ip && ip !== "unknown") form.set("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });

  if (!response.ok) return false;
  const result = await response.json();
  return result.success === true;
}

export async function POST(request) {
  try {
    const size = Number(request.headers.get("content-length") || 0);
    if (size > 20000) return Response.json({ error: "Request too large." }, { status: 413 });

    const ip = clientIp(request);
    if (isRateLimited(ip)) {
      return Response.json({ error: "Too many quote requests. Please wait a few minutes and try again." }, { status: 429 });
    }

    const body = await request.json();

    // Honeypot bots get a fake success so they do not learn how the filter works.
    if (body.website) return Response.json({ ok: true });

    const startedAt = Number(body.startedAt || 0);
    if (!startedAt || Date.now() - startedAt < 1500) {
      return Response.json({ error: "Please wait a moment and try again." }, { status: 400 });
    }

    const turnstileOk = await verifyTurnstile(clean(body["cf-turnstile-response"], 2048), ip);
    if (!turnstileOk) {
      return Response.json({ error: "Spam check failed. Please try again." }, { status: 400 });
    }

    const name = clean(body.name, 100);
    const business = clean(body.business, 120);
    const email = clean(body.email, 160);
    const project = clean(body.project, 80);
    const details = clean(body.details, 4000);

    if (!name || !EMAIL_RE.test(email) || !details) {
      return Response.json({ error: "Please complete your name, email, and project details." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: "The quote form is temporarily unavailable." }, { status: 500 });
    }

    const text = [
      "New Circle City Siteworks quote request",
      "",
      "Name: " + name,
      "Business: " + (business || "Not provided"),
      "Email: " + email,
      "Project: " + project,
      "",
      "Project details:",
      details,
    ].join("\n");

    const html = `<h2>New quote request</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Business:</strong> ${escapeHtml(business || "Not provided")}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Project:</strong> ${escapeHtml(project)}</p><p><strong>Project details:</strong></p><p style="white-space:pre-wrap">${escapeHtml(details)}</p>`;

    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Circle City Siteworks <website@circlecitysiteworks.com>",
        to: ["quotes@circlecitysiteworks.com"],
        reply_to: email,
        subject: `New quote request — ${business || name}`,
        text,
        html,
      }),
    });

    if (!resend.ok) {
      console.error("Resend error", await resend.text());
      return Response.json({ error: "We couldn't send your request. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Quote form error", error);
    return Response.json({ error: "We couldn't send your request. Please try again." }, { status: 500 });
  }
}
