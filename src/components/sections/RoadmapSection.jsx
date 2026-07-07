import HelixDiagram from "../diagrams/HelixDiagram";
import ArrowRight from "../common/ArrowRight";
import DotNav from "../common/DotNav";
import { HOME_TOTAL, COLORS } from "../../constants/theme";

function RoadmapSection({ active, goTo }) {
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
        {/* LEFT - Helix Diagram */}
        <div
          style={{
            flex: "0 0 48%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 420,
              height: 430,
              background: COLORS.LIME,
              borderRadius: 24,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 28,
                color: COLORS.INK,
                margin: 0,
                alignSelf: "flex-start",
              }}
            >
              The Pathfinder
              <br />
              Road(Map)
            </h2>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <HelixDiagram />
            </div>
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
            padding: "70px",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              color: COLORS.INK,
              marginTop: 0,
              marginBottom: 20,
            }}
          >
            We translate <strong>0–1</strong> into a deliberate climb where you:
          </p>

          <ul
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: COLORS.INK,
              paddingLeft: 22,
              lineHeight: 2,
              marginTop: 0,
              marginBottom: 28,
            }}
          >
            <li>
              <strong>Ideate</strong> – What to champion?
            </li>
            <li>
              <strong>Innovate</strong> – What to build first?
            </li>
            <li>
              <strong>Elevate</strong> – How to compound results?
            </li>
          </ul>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              fontWeight: 700,
              color: COLORS.INK,
              marginBottom: 30,
            }}
          >
            Integrate choices. Define purpose. Own outcomes.
          </p>

          <div
            style={{
              width: "100%",
              maxWidth: 430,
              background: COLORS.TEAL,
              borderRadius: 18,
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 22,
                color: "#fff",
                margin: "0 0 10px",
              }}
            >
              Ready to Course(Correct)
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#E6FBF6",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              We work with you to strategize through sharper choices and chart
              the winning path.
            </p>
          </div>

          <div style={{ marginTop: 32 }}>
            <ArrowRight />
          </div>
        </div>
      </div>

      <DotNav count={HOME_TOTAL} active={active} onSelect={goTo} />
    </section>
  );
}

export default RoadmapSection;