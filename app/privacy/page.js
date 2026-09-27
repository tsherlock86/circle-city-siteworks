export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Circle City Siteworks and the project quote form.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      <nav className="nav wrap legalNav">
        <a className="brand" href="/"><span>Circle City</span><small>Siteworks</small></a>
        <a className="button small" href="/#quote">Get a Free Quote</a>
      </nav>

      <header className="legalHero">
        <div className="wrap">
          <p className="eyebrow">Circle City Siteworks</p>
          <h1>Privacy Policy</h1>
          <p>This page explains what information is processed when you use circlecitysiteworks.com or send a project quote request.</p>
          <p><strong>Last updated:</strong> September 27, 2026</p>
        </div>
      </header>

      <article className="wrap legalContent">
        <p className="legalNote">This policy covers the Circle City Siteworks website and its quote form. It does not control the privacy practices of websites or services that may be linked from this site.</p>

        <h2>Information you provide</h2>
        <p>When you submit the quote form, we may receive the information you choose to provide, including your name, business name, email address, the type of project you are interested in, and the project details you enter.</p>

        <h2>Information processed automatically</h2>
        <p>The site may process limited technical information needed to operate securely. For example, the quote endpoint uses network information such as an IP address for rate limiting and spam prevention. Cloudflare Turnstile also processes information needed to determine whether a form submission appears legitimate.</p>

        <h2>How information is used</h2>
        <ul>
          <li>To respond to your project inquiry and communicate about requested services.</li>
          <li>To prepare estimates, project scopes, or follow-up questions.</li>
          <li>To protect the quote form and website from spam, automated abuse, and excessive requests.</li>
          <li>To operate, troubleshoot, and improve the website and its business workflows.</li>
        </ul>

        <h2>Service providers</h2>
        <p>Circle City Siteworks uses third-party services to operate this site. These currently include Vercel for website hosting and delivery, Cloudflare Turnstile for spam protection, and Resend for sending quote-request emails. Those providers may process technical or message-delivery information as needed to provide their services and under their own privacy terms.</p>

        <h2>Sharing and selling information</h2>
        <p>We do not sell or rent information submitted through the quote form. Information may be shared with service providers that help operate the website or send communications, or when disclosure is required by law.</p>

        <h2>Retention</h2>
        <p>Project inquiries and related emails may be kept for as long as reasonably needed to respond to the request, manage a potential or active business relationship, and maintain appropriate business records. Email and infrastructure providers may retain delivery or security logs according to their own policies.</p>

        <h2>Your choices</h2>
        <p>You may ask to correct or delete information you submitted through the quote form by emailing <a href="mailto:hello@circlecitysiteworks.com">hello@circlecitysiteworks.com</a>. Some information may need to be retained when reasonably necessary for legal, security, or business-record purposes.</p>

        <h2>Security</h2>
        <p>Reasonable measures are used to protect the site and quote form, including spam verification, server-side validation, request limits, and secure hosting. No internet service can guarantee absolute security.</p>

        <h2>Children</h2>
        <p>This website is intended for businesses and people seeking business services. It is not directed to children under 13, and Circle City Siteworks does not knowingly seek personal information from children.</p>

        <h2>Changes to this policy</h2>
        <p>This policy may be updated as the website, business practices, or service providers change. The updated date at the top of this page will be revised when material changes are made.</p>

        <h2>Contact</h2>
        <p>Questions about this policy can be sent to <a href="mailto:hello@circlecitysiteworks.com">hello@circlecitysiteworks.com</a>.</p>
      </article>

      <footer className="legalFooter">
        <div className="wrap">
          <span>© 2026 Circle City Siteworks · Indianapolis, Indiana</span>
          <a href="/">Back to Circle City Siteworks →</a>
        </div>
      </footer>
    </main>
  );
}
