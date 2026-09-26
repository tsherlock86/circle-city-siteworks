const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value, max = 4000) => String(value || "").trim().slice(0, max);
const escapeHtml = (value) => value.replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));

export async function POST(request) {
  try {
    const body = await request.json();
    if (body.website) return Response.json({ ok: true });
    const name = clean(body.name, 100), business = clean(body.business, 120), email = clean(body.email, 160), project = clean(body.project, 80), details = clean(body.details, 4000);
    if (!name || !EMAIL_RE.test(email) || !details) return Response.json({ error: "Please complete your name, email, and project details." }, { status: 400 });
    if (!process.env.RESEND_API_KEY) return Response.json({ error: "The quote form is temporarily unavailable." }, { status: 500 });

    const text = ["New Circle City Siteworks quote request","","Name: "+name,"Business: "+(business || "Not provided"),"Email: "+email,"Project: "+project,"","Project details:",details].join("\n");
    const html = `<h2>New quote request</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Business:</strong> ${escapeHtml(business || "Not provided")}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Project:</strong> ${escapeHtml(project)}</p><p><strong>Project details:</strong></p><p style="white-space:pre-wrap">${escapeHtml(details)}</p>`;

    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: "Circle City Siteworks <website@circlecitysiteworks.com>", to: ["quotes@circlecitysiteworks.com"], reply_to: email, subject: `New quote request — ${business || name}`, text, html })
    });
    if (!resend.ok) { console.error("Resend error", await resend.text()); return Response.json({ error: "We couldn't send your request. Please try again." }, { status: 502 }); }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Quote form error", error);
    return Response.json({ error: "We couldn't send your request. Please try again." }, { status: 500 });
  }
}
