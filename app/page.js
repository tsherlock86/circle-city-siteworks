const Check = () => <span className="check">✓</span>;

const plans = [
  {
    icon: "▣",
    title: "Starter Website",
    kicker: "Professional online presence for your business",
    price: "$599",
    prefix: "From",
    items: ["Modern, mobile-friendly design","Contact & lead forms","Basic SEO setup","Domain connection","Analytics setup","A site you can manage"],
  },
  {
    icon: "◆",
    title: "Online Store",
    kicker: "Everything you need to sell online",
    price: "$999",
    prefix: "From",
    popular: true,
    items: ["Shopify or e-commerce setup","Products & collections","Payments & checkout","Shipping or local pickup","Discount codes & email signup","Order management","Training so you can run it"],
  },
  {
    icon: "⚙",
    title: "Custom Solution",
    kicker: "Built around your business",
    price: "Let's Talk",
    items: ["Custom websites & web apps","Inventory & internal tools","Customer portals","Integrations & automation","Databases & APIs","Unique business workflows","Scalable for future growth"],
  },
];

export default function Home() {
  return <main>
    <nav className="nav wrap">
      <a className="brand" href="#"><span>Circle City</span><small>Siteworks</small></a>
      <div className="navlinks"><a href="#services">Services</a><a href="#process">How It Works</a><a href="#work">Work</a><a href="#pricing">Pricing</a></div>
      <a className="button small" href="#quote">Get a Free Quote</a>
    </nav>

    <section className="hero">
      <div className="streetmark" aria-hidden="true"><div className="ring"></div><div className="roads"></div></div>
      <div className="wrap heroGrid">
        <div>
          <p className="eyebrow">Indianapolis · Local businesses · Real solutions</p>
          <h1>A WEBSITE THAT<br/>WORKS AS HARD<br/><em>AS YOU DO.</em></h1>
          <p className="lead">Modern websites, online stores, and custom business tools built for small businesses that need more than a pretty homepage.</p>
          <div className="actions"><a className="button" href="#quote">Get a Free Project Quote</a><a className="textLink" href="#services">See what we build →</a></div>
        </div>
        <div className="heroCard">
          <p>Built for business.</p>
          <strong>Not just clicks.</strong>
          <div className="miniGrid"><span>Mobile ready</span><span>SEO setup</span><span>You own it</span><span>Launch support</span></div>
        </div>
      </div>
    </section>

    <section id="services" className="section wrap">
      <p className="eyebrow">What we build</p>
      <div className="sectionHead"><h2>THE RIGHT TOOL<br/>FOR THE JOB.</h2><p>From a straightforward business site to a system built around the way your company actually works.</p></div>
      <div className="serviceGrid">
        <article><b>01</b><h3>Business Websites</h3><p>Fast, professional sites that explain what you do and turn visitors into leads.</p></article>
        <article><b>02</b><h3>Online Stores</h3><p>Stores with products, payments, pickup or shipping, discounts, and order management.</p></article>
        <article><b>03</b><h3>Custom Tools</h3><p>Portals, inventory systems, dashboards, automations, integrations, and web apps.</p></article>
      </div>
    </section>

    <section id="pricing" className="pricing section">
      <div className="wrap">
        <p className="eyebrow">Simple starting points</p>
        <div className="sectionHead"><h2>START WHERE<br/>YOU NEED.</h2><p>No confusing page-count ladder. We scope the project around what your business actually needs.</p></div>
        <div className="plans">{plans.map((p) => <article className={"plan "+(p.popular?"featured":"")} key={p.title}>
          {p.popular && <div className="popular">Most Popular</div>}
          <div className="planIcon">{p.icon}</div><h3>{p.title}</h3><p className="kicker">{p.kicker}</p>
          {p.prefix && <small>{p.prefix}</small>}<div className="price">{p.price}</div>
          <ul>{p.items.map(i=><li key={i}><Check/>{i}</li>)}</ul>
          <a href="#quote" className={p.popular?"button full":"outline full"}>Get a Quote</a>
        </article>)}</div>
      </div>
    </section>

    <section id="process" className="section wrap">
      <p className="eyebrow">How it works</p><div className="sectionHead"><h2>NO MYSTERY.<br/>NO RUNAROUND.</h2><p>You tell us the problem. We define the scope, build it, and make sure you know how to use what you paid for.</p></div>
      <div className="steps"><div><b>01</b><h3>Tell us what you need</h3><p>Send the basics. Existing site, new idea, store, or custom workflow.</p></div><div><b>02</b><h3>Get a clear scope</h3><p>We recommend the right approach and price before work begins.</p></div><div><b>03</b><h3>We build it</h3><p>Responsive, practical, and designed around your business.</p></div><div><b>04</b><h3>Launch & handoff</h3><p>We connect your domain and show you how to manage your site.</p></div></div>
    </section>

    <section id="work" className="work section"><div className="wrap workInner"><div><p className="eyebrow">Built to solve real problems</p><h2>MORE THAN<br/>A TEMPLATE.</h2></div><p>Need something unusual? That's where Circle City Siteworks shines. If your business has a process held together by spreadsheets, manual steps, or disconnected tools, we can talk about turning it into something better.</p></div></section>

    <section id="quote" className="quote section"><div className="wrap quoteGrid">
      <div><p className="eyebrow">Let's build something useful</p><h2>GET A FREE<br/>PROJECT QUOTE.</h2><p>Tell us what your business needs. We'll recommend an approach and give you a clear price before work begins.</p></div>
      <form action="mailto:" method="post" encType="text/plain">
        <label>Name<input name="name" required placeholder="Your name"/></label>
        <label>Business<input name="business" placeholder="Business name"/></label>
        <label>Email<input name="email" type="email" required placeholder="you@business.com"/></label>
        <label>What do you need?<select name="project"><option>Business website</option><option>Online store</option><option>Custom solution</option><option>Not sure yet</option></select></label>
        <label className="wide">Tell us about the project<textarea name="details" rows="5" placeholder="What are you trying to build or improve?"/></label>
        <button className="button wide" type="submit">Request My Free Quote</button>
      </form>
    </div></section>

    <footer><div className="wrap footer"><div className="brand"><span>Circle City</span><small>Siteworks</small></div><p>Modern websites and business tools for Indianapolis and beyond.</p><a href="#quote">Get a Quote ↑</a></div></footer>
  </main>;
}
