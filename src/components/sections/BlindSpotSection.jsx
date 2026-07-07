import IcebergDiagram from "../diagrams/IcebergDiagram";
import ArrowRight from "../common/ArrowRight";
import DotNav from "../common/DotNav";
import { HOME_TOTAL, COLORS } from "../../constants/theme";

function BlindSpotSection({ active, goTo }) {
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
        {/* LEFT - Iceberg Diagram */}
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
              maxWidth: 430,
              height: 430,
              background: COLORS.LIME,
              borderRadius: 24,
              padding: 28,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 30,
                color: COLORS.INK,
                margin: 0,
                marginBottom: 20,
              }}
            >
              The Blind(Spot)
            </h2>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IcebergDiagram />
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
              lineHeight: 1.8,
              marginTop: 0,
              marginBottom: 24,
            }}
          >
            In <strong>0–1</strong>, founders often see attracting capital and
            acquiring customers as their biggest obstacles.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: COLORS.INK,
              marginBottom: 20,
            }}
          >
            But these are lagging indicators of:
          </p>

          <ul
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: COLORS.INK,
              paddingLeft: 24,
              lineHeight: 2,
              marginTop: 0,
              marginBottom: 30,
            }}
          >
            <li>Unclear market maps.</li>
            <li>A loose value proposition.</li>
            <li>A noisy view of "traction".</li>
            <li>Incoherent sequence to scale.</li>
          </ul>

          <ArrowRight />
        </div>
      </div>

      <DotNav count={HOME_TOTAL} active={active} onSelect={goTo} />
    </section>
  );
}

export default BlindSpotSection;