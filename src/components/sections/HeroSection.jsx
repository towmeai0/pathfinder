import Silhouette from "../diagrams/Silhouette";
import ArrowDown from "../common/ArrowDown";
import DotNav from "../common/DotNav";
import { HOME_TOTAL } from "../../constants/theme";

function HeroSection({ active, goTo }) {
  return (
    <section className="pf-section pf-hero">
      <div className="pf-hero-body">
        <div className="pf-hero-figure-wrapper">
          <div className="pf-hero-capsule">
            <Silhouette height={360} />
          </div>
        </div>

        <div className="pf-hero-copy">
          <div className="pf-hero-heading-row">
            <div className="pf-title-stack">
              <h1 className="pf-hero-title pf-hero-title-bold">Bold</h1>

              <div className="pf-fig-row">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    className="pf-fig-icon"
                    key={i}
                    viewBox="0 0 24 48"
                    fill="none"
                  >
                    <circle cx="12" cy="10" r="5" fill="#12A98E" />
                    <path
                      d="M6 44v-16c0-4 3-6 6-6s6 2 6 6v16"
                      stroke="#12A98E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ))}
              </div>

              <h1 className="pf-hero-title pf-hero-title-innovators">
                Innovators
              </h1>
            </div>
          </div>

          <div className="pf-hero-tagline">
            <span className="pf-choose">choose </span>
            <span className="pf-accent">Enduring</span>
            <br />
            <span className="pf-accent-paths">Paths</span>
          </div>
        </div>
      </div>

      <div className="pf-hero-footer">
        <p className="pf-hero-desc">
          Pathfinder is the Strategy Studio built to power your early-stage
          ascent.
        </p>
        <div className="pf-footer-arrow-container">
          <ArrowDown />
        </div>
      </div>

      <DotNav count={HOME_TOTAL} active={active} onSelect={goTo} />
    </section>
  );
}

export default HeroSection;