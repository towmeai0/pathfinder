import Silhouette from "../diagrams/Silhouette";
import DotNav from "../common/DotNav";
import { HOME_TOTAL, COLORS } from "../../constants/theme";

function NextStepSection({ active, goTo }) {
  return (
    <section className="pf-section pf-hslide" style={{ justifyContent: "center" }}>
      <div
        className="pf-care-card"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "stretch",
          margin: "40px 60px 20px",
          minHeight: 500,
        }}
      >
        {/* LEFT - Avatar */}
        <div
          style={{
            flex: "0 0 48%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            className="pf-hero-capsule"
            style={{
              width: 220,
              height: 450,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Silhouette height={450} />
          </div>
        </div>

        {/* RIGHT - Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "80px 70px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 52,
              lineHeight: "58px",
              color: COLORS.INK,
              margin: 0,
              textAlign: "left",
              letterSpacing: 1,
            }}
          >
            CHOOSE YOUR
            <br />
            NEXT STEP
          </h1>

          <div style={{ display: "flex", gap: 24, marginTop: 40 }}>
            <button
              type="button"
              onClick={() => goTo(0)}
              style={{
                boxSizing: "border-box",
                width: 160,
                height: 110,
                background:
                  "linear-gradient(157.52deg, #01F669 -119.68%, #C6F357 48.07%, #34F564 100%)",
                border: "0.5px solid rgba(115,115,115,0.75)",
                boxShadow: "0px 4.04px 2.69px rgba(0,0,0,0.25)",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: COLORS.INK,
                fontFamily: "'Anton', sans-serif",
                fontSize: 18,
                letterSpacing: "0.6px",
                cursor: "pointer",
                transition: "transform .2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              DISCOVER
              <br />
              THE PATH
            </button>

            <button
              type="button"
              onClick={() => goTo(3)}
              style={{
                boxSizing: "border-box",
                width: 160,
                height: 110,
                background:
                  "linear-gradient(157.52deg, #01F669 -119.68%, #C6F357 48.07%, #34F564 100%)",
                border: "0.5px solid rgba(115,115,115,0.75)",
                boxShadow: "0px 4.04px 2.69px rgba(0,0,0,0.25)",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: COLORS.INK,
                fontFamily: "'Anton', sans-serif",
                fontSize: 18,
                letterSpacing: "0.6px",
                cursor: "pointer",
                transition: "transform .2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              BEGIN THE
              <br />
              ASCENT
            </button>
          </div>
        </div>
      </div>

      <DotNav count={HOME_TOTAL} active={active} onSelect={goTo} />
    </section>
  );
}

export default NextStepSection;