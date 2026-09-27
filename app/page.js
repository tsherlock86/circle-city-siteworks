import QuoteForm from "./QuoteForm";

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


const projects = [
  {
    title: "Circle City Cleanup",
    type: "Lead-generation website + local SEO",
    image: "data:image/webp;base64,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",
    alt: "Circle City Cleanup website with an Indianapolis junk-removal quote form",
    copy: "A service-business website built to turn local traffic into cleanup and junk-removal quote requests across the Indianapolis area.",
    points: ["Quote capture flow", "City + service SEO pages", "Conversion-focused design"],
  },
  {
    title: "Sponsored Fundraising",
    type: "Fundraising platform + storefronts",
    image: "data:image/webp;base64,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",
    alt: "Sponsored Fundraising public website",
    copy: "A fundraising platform combining public campaign pages, sponsor-backed merchandise, charity workflows, and administrative tools.",
    points: ["Branded campaign pages", "Sponsor + charity workflows", "Admin management tools"],
  },
  {
    title: "Warehouse Operations Platform",
    type: "Custom internal business software",
    image: "data:image/webp;base64,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",
    alt: "Custom warehouse operations and inventory software interface",
    copy: "Internal software for inventory, intake, containers, marketplace listings, and day-to-day operational workflows in one system.",
    points: ["Inventory + intake", "Marketplace workflows", "Custom operational tooling"],
    privateWork: true,
  },
];

export default function Home() {
  return <main>
    <nav className="nav wrap">
      <a className="brand" href="#"><span>Circle City</span><small>Siteworks</small></a>
      <div className="navlinks"><a href="#services">Services</a><a href="#process">How It Works</a><a href="#work">Work</a><a href="#pricing">Pricing</a></div>
      <a className="button small" href="#quote">Get a Free Quote</a>
    </nav>

    <section className="hero heroPhoto">
      <div className="streetmark" aria-hidden="true"><div className="ring"></div><div className="roads"></div></div>
      <div className="wrap heroGrid">
        <div>
          <p className="eyebrow">Indianapolis · Local businesses · Real solutions</p>
          <h1>A WEBSITE THAT<br/>WORKS AS HARD<br/><em>AS YOU DO.</em></h1>
          <p className="lead">Modern websites, online stores, and custom business tools built for small businesses that need more than a pretty homepage.</p>
          <div className="actions"><a className="button" href="#quote">Get a Free Project Quote</a><a className="textLink" href="#services">See what we build →</a></div>
        </div>
        <div className="browserShowcase" aria-hidden="true">
          <div className="browserBack">
            <div className="browserBar"><i></i><i></i><i></i></div>
            <div className="dashSidebar"></div>
            <div className="dashContent"><span></span><span></span><span></span><span></span></div>
          </div>
          <div className="browserFront">
            <div className="browserBar"><i></i><i></i><i></i><b>yourbusiness.com</b></div>
            <div className="siteNav"><strong>YOUR BUSINESS</strong><span>Services&nbsp;&nbsp; Work&nbsp;&nbsp; Contact</span></div>
            <div className="siteMock"><small>LOCAL. PROFESSIONAL. READY TO WORK.</small><h3>BUILT TO<br/>BRING IN<br/><em>BUSINESS.</em></h3><p>Clear message. Strong design. Easy next step.</p><button>GET A QUOTE</button></div>
          </div>
          <div className="resultTag"><b>WEB + COMMERCE</b><span>Designed around the business.</span></div>
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

    <section id="work" className="work section">
      <div className="wrap">
        <p className="eyebrow">Selected work</p>
        <div className="workIntro">
          <h2>BUILT FOR<br/>REAL WORK.</h2>
          <p>From lead-generation websites to fundraising platforms and internal operations software, these projects show the range of problems Circle City Siteworks can solve.</p>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => <article className="projectCard" key={project.title}>
            <div className="projectImageWrap">
              <img src={project.image} alt={project.alt}/>
              <span className="projectNumber">0{index + 1}</span>
              {project.privateWork && <span className="projectPrivacy">Client details anonymized</span>}
            </div>
            <div className="projectBody">
              <p className="projectType">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <ul>{project.points.map((point)=><li key={point}>{point}</li>)}</ul>
            </div>
          </article>)}
        </div>
        <div className="workCta">
          <p>Need something that doesn't fit neatly into a template?</p>
          <a className="button" href="#quote">Tell Me What You Need</a>
        </div>
      </div>
    </section>

    <section id="pricing" className="pricing section pricingPhoto">
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

    <section id="quote" className="quote section"><div className="wrap quoteGrid">
      <div><p className="eyebrow">Let's build something useful</p><h2>GET A FREE<br/>PROJECT QUOTE.</h2><p>Tell us what your business needs. We'll recommend an approach and give you a clear price before work begins.</p></div>
      <QuoteForm/>
    </div></section>

    <footer className="siteFooter">
      <div className="wrap footerTop">
        <div className="footerIntro">
          <a className="brand footerBrand" href="#"><span>Circle City</span><small>Siteworks</small></a>
          <p>Websites, online stores, and custom business tools built for Indianapolis businesses and beyond.</p>
          <div className="footerContact">
            <a href="mailto:hello@circlecitysiteworks.com">hello@circlecitysiteworks.com</a>
            <a href="https://circlecitysiteworks.com">circlecitysiteworks.com</a>
          </div>
          <a className="button small" href="#quote">Start a Project</a>
        </div>
        <div className="footerLinks"><h4>Explore</h4><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#process">How It Works</a><a href="#work">Custom Solutions</a></div>
        <div className="footerLinks"><h4>Services</h4><span>Business Websites</span><span>Online Stores</span><span>Custom Tools</span><span>Automation & Integrations</span></div>
        <div className="footerLocal"><p className="eyebrow">Circle City · Indianapolis</p><h3>BUILT LOCAL.<br/>BUILT TO WORK.</h3><p>Practical digital tools without the agency runaround.</p><a className="footerEmail" href="mailto:hello@circlecitysiteworks.com">Email Circle City Siteworks →</a></div>
      </div>
      <div className="wrap footerBottom"><span>© 2026 Circle City Siteworks</span><span>Indianapolis, Indiana</span><a href="#quote">Get a Free Quote ↑</a></div>
    </footer>
  </main>;
}
