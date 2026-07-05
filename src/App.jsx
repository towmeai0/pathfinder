import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";


const LIME = "#C6F94A";
const INK = "#151A1F";
const TEAL = "#12A98E";

const H_SLIDES = 4; // Home2, Home3, Home4, Home5
const TOTAL = 1 + H_SLIDES;

function CardIcon({ type, isLibrary, small }) {
  const strokeColor = (small || isLibrary) ? TEAL : INK;
  const common = {
    width: 40,
    height: 40,
    stroke: strokeColor,
    strokeWidth: 2,
    fill: "none",
  };
  switch (type) {
    case "spiral":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3c4 0 7 3 7 6.5S16.5 15 13.5 15 9 12.8 9 10.8 10.7 8 12.8 8" strokeLinecap="round" />
        </svg>
      );
    case "infinity":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 9a3 3 0 100 6 5 5 0 004-2 5 5 0 004 2 3 3 0 100-6 5 5 0 00-4 2 5 5 0 00-4-2z" />
        </svg>
      );
    case "orbit":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="1" />
          <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 19V5a2 2 0 012-2h4v16H6a2 2 0 00-2 2zM20 19V5a2 2 0 00-2-2h-4v16h4a2 2 0 012 2z" strokeLinejoin="round" />
        </svg>
      );
    case "loop":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M17 12H3M21 12h-2M7 8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

function Eyebrow({ icon, text, isLibrary, small }) {
  return (
    <div
      className="eyebrow"
      style={{
        color: (small || isLibrary) ? TEAL : "rgba(21,26,31,.6)",
      }}
    >
      <CardIcon
        type={icon}
        isLibrary={isLibrary}
        small={small}
      />
      <span>{text}</span>
    </div>
  );
}

function NavCluster() {
  const navigate = useNavigate();
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`pf-nav-container ${small ? "nav-small" : ""}`}>
      <div className="pf-nav-row">
        <div
          className="pf-nav-card pf-card-lime card-program"
          onClick={() => navigate("/program")}
          style={{ cursor: "pointer" }}
        >
          <Eyebrow icon="spiral" text="strategic coherence" />
          <div className="label">PROGRAM</div>
        </div>

        <div className="pf-nav-card pf-card-lime card-team">
          <Eyebrow icon="infinity" text="savant partner" />
          <div className="label">TEAM</div>
        </div>

        <div className="pf-nav-card pf-card-lime card-orbit">
          <Eyebrow icon="orbit" text="blogs" />
          <div className="label">ORBIT</div>
        </div>
      </div>

      <div className="pf-nav-row second-row">
        <div className="pf-nav-card pf-card-lime card-library">
          <Eyebrow icon="book" text="resources" isLibrary />
          <div className="label">LIBRARY</div>
        </div>

        <div className="pf-nav-card pf-card-lime card-careers">
          <Eyebrow icon="loop" text="opportunities" />
          <div className="label">CAREERS</div>
        </div>
      </div>
    </div>
  );
}



function ScrollingLogo() {
  const [logoStyle, setLogoStyle] = useState({
    background: LIME,
    stroke: INK,
    transform: 'translate(0, 0)'
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Change logo background and stroke on scroll
      if (scrollY > 120) {
        setLogoStyle({
          background: INK,
          stroke: LIME,
          transform: 'translate(0, 0)' // Keep position or change it
        });
      } else {
        setLogoStyle({
          background: LIME,
          stroke: INK,
          transform: 'translate(0, 0)'
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="pf-logo-container"
      style={{
        background: logoStyle.background,
        transform: logoStyle.transform,
        transition: 'all 0.45s ease'
      }}
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3a9 9 0 019 9c0 2.5-1 4.5-3 6l-6-6 6-6M3 12a9 9 0 019-9v6l-6 3"
          stroke={logoStyle.stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          transition="stroke 0.45s ease"
        />
      </svg>
    </div>
  );
}

function Silhouette({ height = 300 }) {
  return (
    <svg width={height * 0.45} height={height} viewBox="0 0 120 300" fill="none">
      <defs>
        <linearGradient id="silGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E7A8C" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#151A1F" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <g opacity="0.15" transform="translate(15, 12)">
        <circle cx="60" cy="55" r="22" fill="#000" />
        <path d="M30 105c0-22 13-34 30-34s30 12 30 34l6 90c1 14-8 20-16 20l-4 60h-32l-4-60c-8 0-17-6-16-20z" fill="#000" />
      </g>
      <g>
        <circle cx="60" cy="55" r="22" fill="url(#silGrad)" />
        <path d="M30 105c0-22 13-34 30-34s30 12 30 34l6 90c1 14-8 20-16 20l-4 60h-32l-4-60c-8 0-17-6-16-20z" fill="url(#silGrad)" />
      </g>
    </svg>
  );
}

function IcebergDiagram() {
  return (
    <svg viewBox="0 0 320 220" width="100%" height="220">
      <line x1="10" y1="110" x2="310" y2="110" stroke={INK} strokeWidth="1.4" strokeDasharray="4 4" />
      <path d="M120 30 L150 100 L90 100 Z M150 100 L190 55 L215 100 Z" fill="none" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M60 110 L100 100 L150 100 L190 55 L215 100 L260 110 L235 190 L180 210 L110 205 L75 175 Z" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="3 3" strokeLinejoin="round" />
      <text x="14" y="70" fontFamily="Inter" fontSize="12" fontWeight="600" fill={INK}>The Obvious</text>
      <text x="14" y="205" fontFamily="Inter" fontSize="12" fontWeight="600" fill={INK}>The Ambiguous</text>
    </svg>
  );
}

function MazeDiagram() {
  return (
    <svg viewBox="0 0 320 220" width="100%" height="220">
      <g fill="none" stroke={INK} strokeWidth="1.6">
        <rect x="40" y="40" width="220" height="150" rx="6" />
        <path d="M40 90 H160 V70 H220 M100 90 V150 H180 V120 H260 M60 150 H120 M180 190 V160" />
      </g>
      <path d="M40 190 L20 210" stroke={INK} strokeWidth="2" />
      <path d="M230 70 L255 45" stroke={TEAL} strokeWidth="2" />
      <polygon points="255,45 246,47 253,54" fill={TEAL} />
      <text x="18" y="205" fontFamily="Anton" fontSize="11" fill={INK}>IDEA</text>
      <text x="150" y="105" fontFamily="Anton" fontSize="11" fill={INK}>MVP</text>
      <text x="118" y="150" fontFamily="Anton" fontSize="10" fill={INK} transform="rotate(-18 118 150)">TRACTION</text>
      <text x="220" y="50" fontFamily="Anton" fontSize="11" fill={TEAL}>GROWTH</text>
    </svg>
  );
}

function HelixDiagram() {
  return (
    <svg viewBox="0 0 220 260" width="100%" height="260">
      <g transform="translate(60,60)">
        {[0, 40, 80, 120, 160].map((dy, i) => (
          <ellipse key={i} cx={i % 2 === 0 ? 20 : 70} cy={dy} rx="34" ry="12" fill="none" stroke={i % 2 === 0 ? TEAL : INK} strokeWidth="2" />
        ))}
      </g>
      <text x="10" y="235" fontFamily="Anton" fontSize="12" fill={INK}>IDEATE</text>
      <text x="150" y="150" fontFamily="Anton" fontSize="12" fill={TEAL}>INNOVATE</text>
      <text x="60" y="30" fontFamily="Anton" fontSize="12" fill={INK}>ELEVATE</text>
    </svg>
  );
}

function DotNav({ count, active, onSelect }) {
  return (
    <div className="pf-dot-nav">
      {Array.from({ length: count }).map((_, i) => (
        <button key={i} className={`pf-dot${i === active ? " active" : ""}`} onClick={() => onSelect(i)} aria-label={`Go to section ${i + 1}`} />
      ))}
    </div>
  );
}

function ArrowDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4v16M5 13l7 7 7-7" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h14M13 6l6 6-6 6" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


function App() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  const [pinPhase, setPinPhase] = useState("before"); // "before" | "pinned" | "after"

const recalc = useCallback(() => {
  const wrap = wrapRef.current;
  if (!wrap) return;
  const vh = window.innerHeight;
  const rectTop = wrap.getBoundingClientRect().top;
  const scrollable = wrap.offsetHeight - vh;

  let p = 0;
  if (rectTop <= 0 && scrollable > 0) {
    p = Math.min(1, Math.max(0, -rectTop / scrollable));
  }
  setProgress(p);

  if (rectTop > 0) {
    setPinPhase("before");
  } else if (-rectTop >= scrollable) {
    setPinPhase("after");
  } else {
    setPinPhase("pinned");
  }

  const slideIndex = Math.round(p * (H_SLIDES - 1));
  setActive(slideIndex);
}, []);

  useEffect(() => {
    recalc();
    window.addEventListener("scroll", recalc, { passive: true });
    window.addEventListener("resize", recalc);
    return () => {
      window.removeEventListener("scroll", recalc);
      window.removeEventListener("resize", recalc);
    };
  }, [recalc]);

const goTo = useCallback((targetSlide) => {
  const wrap = wrapRef.current;
  if (!wrap) return;
  const vh = window.innerHeight;
  const scrollable = wrap.offsetHeight - vh;
  const p = targetSlide / (H_SLIDES - 1);
  const targetY = wrap.offsetTop + p * scrollable;
  window.scrollTo({ top: targetY, behavior: "smooth" });
}, []);

  // Position/behavior for the track holder depending on pin phase.
  const stickyStyle =
    pinPhase === "pinned"
      ? { position: "fixed", top: 0 }
      : pinPhase === "after"
      ? { position: "absolute", bottom: 0 }
      : { position: "absolute", top: 0 };

  return (
    <div className="pf-outer">
      {/* Background Gradients */}
      <div className="pf-bg-container">
        <div className="pf-bg-blu"></div>
        <div className="pf-vector-29"></div>
        <div className="pf-vector-31"></div>
      </div>

      {/* fixed chrome */}
      <div className="pf-chrome">
    <svg
      className="pf-chrome-line"
      viewBox="0 0 1000 170"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
    <path
      d="M40 20 H810 Q845 20 845 50 V82"
      fill="none"
      stroke="#C6F94A"
      strokeWidth="2.5"
    />
    </svg>
        <div style={{ pointerEvents: "auto", position: "relative", zIndex: 2 }}>
          <ScrollingLogo />
        </div>
        <div style={{ pointerEvents: "auto", position: "relative", zIndex: 2 }}>
          <NavCluster />
        </div>
      </div>

      {/* HOME 1 - Normal scroll */}
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
                  <svg className="pf-fig-icon" key={i} viewBox="0 0 24 48" fill="none">
                    <circle cx="12" cy="10" r="5" fill="#12A98E" />
                    <path d="M6 44v-16c0-4 3-6 6-6s6 2 6 6v16" stroke="#12A98E" strokeWidth="2.5" strokeLinecap="round" />
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
            Pathfinder is the Strategy Studio built to power your early-stage ascent.
          </p>
          <div className="pf-footer-arrow-container">
            <ArrowDown />
          </div>
        </div>
        <DotNav count={TOTAL} active={active} onSelect={goTo} />
      </section>

      {/* HOME 2-5 - Pinned horizontal track (JS-driven, not position:sticky) */}
      <div ref={wrapRef} className="pf-hwrap" style={{ height: `${H_SLIDES * 100}vh` }}>
        <div className="pf-hsticky" style={stickyStyle}>
          <div
            className="pf-htrack"
            style={{
              width: `${H_SLIDES * 100}vw`,
              transform: `translateX(-${Math.min(1, Math.max(0, progress)) * (H_SLIDES - 1) * 100}vw)`,
            }}
          >
            {/* HOME 2 - The Blind(Spot) */}

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
          background: LIME,
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
            color: INK,
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
          color: INK,
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
          color: INK,
          marginBottom: 20,
        }}
      >
        But these are lagging indicators of:
      </p>

      <ul
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 17,
          color: INK,
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

  <DotNav count={TOTAL} active={active} onSelect={goTo} />
</section>

            {/* HOME 3 - The Stereo(Typical) 0-1 */}
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
            background: LIME,
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
              color: INK,
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
            color: INK,
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
            color: INK,
            marginBottom: 18,
          }}
        >
          In the rush to <strong>"show progress"</strong>, founders:
        </p>

        <ul
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            color: INK,
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
            color: INK,
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

    <DotNav count={TOTAL} active={active} onSelect={goTo} />
  </section>

            {/* HOME 4 - The Pathfinder Road(Map) */}

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
    {/* LEFT - Large Roadmap */}
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
          background: LIME,
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
            color: INK,
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
          color: INK,
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
          color: INK,
          paddingLeft: 22,
          lineHeight: 2,
          marginTop: 0,
          marginBottom: 28,
        }}
      >
        <li><strong>Ideate</strong> – What to champion?</li>
        <li><strong>Innovate</strong> – What to build first?</li>
        <li><strong>Elevate</strong> – How to compound results?</li>
      </ul>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 17,
          fontWeight: 700,
          color: INK,
          marginBottom: 30,
        }}
      >
        Integrate choices. Define purpose. Own outcomes.
      </p>

      <div
        style={{
          width: "100%",
          maxWidth: 430,
          background: TEAL,
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
          We work with you to strategize through sharper choices and chart the
          winning path.
        </p>
      </div>

      <div style={{ marginTop: 32 }}>
        <ArrowRight />
      </div>
    </div>
  </div>

  <DotNav count={TOTAL} active={active} onSelect={goTo} />
</section>

            {/* HOME 5 - Choose Your Next Step */}

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
        {/* LEFT CARD - Avatar */}
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

        {/* RIGHT CARD - Content */}
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
              color: INK,
              margin: 0,
              textAlign: "left",
              letterSpacing: 1,
            }}
          >
            CHOOSE YOUR
            <br />
            NEXT STEP
          </h1>

          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 40,
            }}
          >
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
                color: INK,
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
                color: INK,
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

  <DotNav count={TOTAL} active={active} onSelect={goTo} />
</section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;