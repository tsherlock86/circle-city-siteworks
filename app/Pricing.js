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
  const pricingRef = useRef(null);

  function switchPricing(next) {
    if (switching || showLaunch === next) return;
    setSwitching(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setShowLaunch(next);

      requestAnimationFrame(() => {
        setSwitching(false);

        if (window.matchMedia("(max-width: 850px)").matches && pricingRef.current) {
          requestAnimationFrame(() => {
            const top = pricingRef.current.getBoundingClientRect().top + window.scrollY - 18;
            window.scrollTo({ top, behavior: "smooth" });
          });
        }
      });
    }, 220);
  }

  return (
    <div ref={pricingRef} className={"pricingSwitcher " + (switching ? "pricingSwitching" : "")}>
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
            <div className="launchTopCopy">
              <span className="launchBadge">Just getting started</span>
              <span className="launchHandNote">Simple site. Real business presence.</span>
            </div>
            <button type="button" className="launchBack" onClick={() => switchPricing(false)}>
              ← Back to standard packages
            </button>
          </div>

          <article className="launchShowcase">
            <div className="launchShowcaseLeft">
              <div className="launchBlueprint" aria-hidden="true"></div>
              <div className="launchArc" aria-hidden="true"></div>
              <span className="launchCornerMark" aria-hidden="true">+</span>

              <div className="launchShowcaseCopy">
                <p className="launchMini">A focused starter option</p>
                <h3>Launch<br/>Website</h3>
                <p className="launchPitch">A clean, professional website for a small business that needs to get online without paying for a bunch of extras.</p>

                <div className="launchPriceWrap">
                  <span className="launchFrom">From</span>
                  <div className="launchPrice"><span>$</span>299</div>
                  <span className="launchPriceLine" aria-hidden="true"></span>
                </div>

                <p className="launchSmallNote">One-time project starting price</p>

                <a className="button launchCta" href="#quote">
                  Start With the $299 Package <span aria-hidden="true">→</span>
                </a>

                <div className="launchScriptNote">simple. professional. affordable.</div>
              </div>
            </div>

            <div className="launchShowcaseRight">
              <div className="launchFeatureHeading">
                <span className="launchFeatureKicker">Everything you need</span>
                <h4>To launch with confidence.</h4>
                <span className="launchFeatureRule" aria-hidden="true"></span>
              </div>

              <div className="launchFeatureGrid launchFeatureGridCards">
                {launchItems.map((item) => (
                  <div className="launchFeatureCard" key={item}>
                    <span className="check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="launchScope launchScopeFancy">
                <div>
                  <span className="launchScopeLabel">Kept intentionally simple.</span>
                  <strong>Need more later? Move up when you're ready.</strong>
                </div>
                <p>Online stores, multi-page builds, custom systems, advanced integrations, and larger content needs move into the standard packages.</p>
              </div>
            </div>
          </article>
        </div>
      )}
      </div>
    </div>
  );
}
