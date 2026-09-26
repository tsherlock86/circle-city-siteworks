"use client";

import Script from "next/script";
import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [startedAt] = useState(() => Date.now());
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function submitQuote(event) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const turnstileToken = formData.get("cf-turnstile-response");

    if (turnstileSiteKey && !turnstileToken) {
      setStatus("error");
      setMessage("Please complete the spam check and try again.");
      return;
    }

    setStatus("sending");
    setMessage("");

    const payload = Object.fromEntries(formData.entries());
    payload.startedAt = startedAt;

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "We couldn't send your request.");

      form.reset();
      if (window.turnstile) window.turnstile.reset();
      setStatus("success");
      setMessage("Quote request received. We'll be in touch soon.");
    } catch (error) {
      if (window.turnstile) window.turnstile.reset();
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  }

  return <>
    {turnstileSiteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive"/>}
    <form onSubmit={submitQuote}>
      <label>Name<input name="name" required maxLength="100" placeholder="Your name"/></label>
      <label>Business<input name="business" maxLength="120" placeholder="Business name"/></label>
      <label>Email<input name="email" type="email" required maxLength="160" placeholder="you@business.com"/></label>
      <label>What do you need?<select name="project"><option>Business website</option><option>Online store</option><option>Custom solution</option><option>Not sure yet</option></select></label>
      <label className="wide">Tell us about the project<textarea name="details" required maxLength="4000" rows="5" placeholder="What are you trying to build or improve?"/></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off"/></label>
      {turnstileSiteKey && <div className="turnstileWrap wide"><div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light"></div></div>}
      <button className="button wide" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Request My Free Quote"}</button>
      {message && <p className={"formStatus wide " + status} role="status">{message}</p>}
    </form>
  </>;
}
