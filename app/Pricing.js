"use client";

import { useRef, useState } from "react";

const launchItems = [
  "Professional one-page business website",
  "Up to 5–6 focused sections",
  "Mobile-friendly design",
  "Contact or quote form",
  "Domain connection",
  "Basic SEO setup",
  "Google Search Console setup",
  "Basic analytics",
  "One revision round",
  "Launch + handoff",
];

export default function Pricing({ plans }) {
  const [showLaunch, setShowLaunch] = useState(false);
  const [switching, setSwitching] = useState(false);
  const timerRef = useRef(null);

  function switchPricing(next) {
    if (switching || showLaunch === next) return;
    setSwitching(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setShowLaunch(next);
      requestAnimationFrame(() => setSwitching(false));
    }, 220);
  }

  return (
    <div className={"pricingSwitcher " + (switching ? "pricingSwitching" : "")}>
      <div className={"pricingView " + (switching ? "pricingViewExit" : "pricingViewEnter")}>
      {!showLaunch ? (
        <>
          <div className="plans">
            {plans.map((p) => (
              <article className={"plan " + (p.popular ? "featured" : "")} key={p.title}>
                {p.popular && <div className="popular">Most Popular</div>}
                <div className="planIcon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p className="kicker">{p.kicker}</p>
                {p.prefix && <small>{p.prefix}</small>}
                <div className="price">{p.price}</div>
                <ul>
                  {p.items.map((item) => (
                    <li key={item}>
                      <span className="check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#quote" className={p.popular ? "button full" : "outline full"}>
                  Get a Quote
                </a>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="launchScript"
            onClick={() => switchPricing(true)}
            aria-label="See the $299 Launch Package"
          >
            <span className="launchScriptTop">Not finding something in your price range?</span>
            <span className="launchScriptBottom">Take a look at our <strong>$299 Launch Package</strong></span>
            <span className="launchScriptArrow" aria-hidden="true">↝</span>
          </button>
        </>
      ) : (
        <div className="launchReveal">
          <div className="launchTopline">
            <span className="launchBadge">Just getting started</span>
            <button type="button" className="launchBack" onClick={() => switchPricing(false)}>
              ← Back to standard packages
            </button>
          </div>

          <article className="launchPlan">
            <div className="launchPlanIntro">
              <p className="launchMini">A focused starter option</p>
              <h3>Launch Website</h3>
              <p>For a small business that needs a real online presence without paying for features it does not need yet.</p>
              <div className="launchPrice"><span>$</span>299</div>
              <small>One-time project starting price</small>
              <a className="button full launchCta" href="#quote">Start With the $299 Package</a>
            </div>

            <div className="launchFeatures">
              <p className="launchFeatureTitle">Everything you need to launch</p>
              <div className="launchFeatureGrid">
                {launchItems.map((item) => (
                  <div className="launchFeature" key={item}>
                    <span className="check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="launchScope">
                <strong>Kept intentionally simple.</strong>
                <span>Online stores, multi-page builds, custom systems, advanced integrations, and larger content needs move into the standard packages above.</span>
              </div>
            </div>
          </article>
        </div>
      )}
      </div>
    </div>
  );
}
