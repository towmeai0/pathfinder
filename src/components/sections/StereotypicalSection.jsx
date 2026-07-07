import MazeDiagram from "../diagrams/MazeDiagram";
import ArrowRight from "../common/ArrowRight";
import DotNav from "../common/DotNav";
import { HOME_TOTAL, COLORS } from "../../constants/theme";

function StereotypicalSection({ active, goTo }) {
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
        {/* LEFT - Maze Diagram */}
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
              The Stereo(Typical)
              <br />
              0-1
            </h2>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MazeDiagram />
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
              fontFamily: "'Anton', sans-serif",
              fontSize: 28,
              color: COLORS.INK,
              marginTop: 0,
              marginBottom: 24,
            }}
          >
            Idea → MVP → Traction → "Growth"
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              color: COLORS.INK,
              marginBottom: 18,
            }}
          >
            In the rush to <strong>"show progress"</strong>, founders:
          </p>

          <ul
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: COLORS.INK,
              paddingLeft: 24,
              lineHeight: 2,
              marginTop: 0,
              marginBottom: 28,
            }}
          >
            <li>Fixate on value before deciphering the opportunity.</li>
            <li>Add features instead of sharpening the problem.</li>
            <li>Chase channels without understanding adoption.</li>
            <li>Follow trends and expect disproportionate returns.</li>
          </ul>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              fontWeight: 700,
              color: COLORS.INK,
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            The risk isn't just uncertainty.
            <br />
            It's what you choose to overlook.
          </p>

          <ArrowRight />
        </div>
      </div>

      <DotNav count={HOME_TOTAL} active={active} onSelect={goTo} />
    </section>
  );
}

export default StereotypicalSection;