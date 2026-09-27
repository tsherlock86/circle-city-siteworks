"use client";

import { useEffect, useState } from "react";

export default function Portfolio({ projects }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modalOpen");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modalOpen");
    };
  }, [active]);

  return (
    <>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <article className="projectCard" key={project.title}>
            <button
              className="projectCardButton"
              type="button"
              onClick={() => setActive(project)}
              aria-label={`View ${project.title} case study`}
            >
              <div className="projectImageWrap">
                <img src={project.image} alt={project.alt} />
                <span className="projectNumber">0{index + 1}</span>
                {project.privateWork && (
                  <span className="projectPrivacy">Client details anonymized</span>
                )}
              </div>

              <div className="projectBody">
                <p className="projectType">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <span className="projectView">View Case Study →</span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="caseStudyBackdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <section
            className="caseStudyModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            <button
              className="caseStudyClose"
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close case study"
            >
              ×
            </button>

            <div className="caseStudyHero">
              <img src={active.image} alt={active.alt} />
              {active.privateWork && (
                <span className="caseStudyPrivacy">Client details anonymized</span>
              )}
            </div>

            <div className="caseStudyContent">
              <p className="projectType">{active.type}</p>
              <h2 id="case-study-title">{active.title}</h2>
              <p className="caseStudyLead">{active.copy}</p>

              <div className="caseStudyColumns">
                <div>
                  <span className="caseLabel">The challenge</span>
                  <p>{active.challenge}</p>
                </div>
                <div>
                  <span className="caseLabel">What I built</span>
                  <p>{active.solution}</p>
                </div>
              </div>

              <div className="caseStudyBottom">
                <div>
                  <span className="caseLabel">Capabilities</span>
                  <ul className="caseCapabilities">
                    {active.capabilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="caseResult">
                  <span className="caseLabel">The result</span>
                  <p>{active.result}</p>
                </div>
              </div>

              <div className="caseStudyActions">
                <button
                  className="outline caseCloseSecondary"
                  type="button"
                  onClick={() => setActive(null)}
                >
                  Back to Work
                </button>
                <a className="button" href="#quote" onClick={() => setActive(null)}>
                  Start a Similar Project
                </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
