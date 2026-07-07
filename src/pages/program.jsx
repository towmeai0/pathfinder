// Program.jsx
import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import DotNav from "../components/common/DotNav";

import PenroseDiagram from "../components/diagrams/PenroseDiagram";
import ObeliskDiagram from "../components/diagrams/ObeliskDiagram";
import DominoDiagram from "../components/diagrams/DominoDiagram";
import CurveDiagram from "../components/diagrams/CurveDiagram";
import ArrowRight from "../components/common/ArrowRight";
import Eyebrow from "../components/common/Eyebrow";
import "../Program.css";

import { ContactModal } from "../model/ContactModal";

import SlideShell from "../components/layout/SlideShell";

const LIME = "#C6F94A";
const INK = "#151A1F";
const TEAL = "#12A98E";

const P_SLIDES = 6;
const TOTAL = P_SLIDES;

function ScrollingLogo() {
  const [logoStyle, setLogoStyle] = useState({
    background: LIME,
    stroke: INK,
    transform: 'translate(0, 0)'
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 120) {
        setLogoStyle({
          background: INK,
          stroke: LIME,
          transform: 'translate(0, 0)'
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

function NavCluster({ activeKey, isScrolled }) {
  const navigate = useNavigate();
  const isProgram = activeKey === "program";

  return (
    <div className={`pf-nav-container ${isScrolled ? 'nav-small' : ''}`}>
      <div className="pf-nav-row">
        <div
          className="pf-nav-card card-program pf-card-lime"
          onClick={() => navigate("/program")}
          style={{
            cursor: "pointer",
            outline: isProgram ? `2px solid ${INK}` : "none",
          }}
        >
          <Eyebrow icon="spiral" text="strategic coherence" />
          <div className="label">PROGRAM</div>
        </div>

        <div className="pf-nav-card card-team pf-card-lime">
          <Eyebrow icon="infinity" text="savant partner" />
          <div className="label">TEAM</div>
        </div>

        <div className="pf-nav-card card-orbit pf-card-lime">
          <Eyebrow icon="orbit" text="blogs" />
          <div className="label">ORBIT</div>
        </div>
      </div>

      <div className="pf-nav-row second-row">
        <div className="pf-nav-card pf-card-lime card-library">
          <Eyebrow icon="book" text="resources" isLibrary />
          <div className="label">LIBRARY</div>
        </div>

        <div className="pf-nav-card card-careers pf-card-lime">
          <Eyebrow icon="loop" text="opportunities" />
          <div className="label">CAREERS</div>
        </div>
      </div>
    </div>
  );
}

function Program() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [pinPhase, setPinPhase] = useState("before");
  const [contactOpen, setContactOpen] = useState(false);

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

    const slideIndex = Math.round(p * (P_SLIDES - 1));
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
    const p = targetSlide / (P_SLIDES - 1);
    const targetY = wrap.offsetTop + p * scrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }, []);

  const stickyStyle =
    pinPhase === "pinned"
      ? { position: "fixed", top: 0 }
      : pinPhase === "after"
      ? { position: "absolute", bottom: 0 }
      : { position: "absolute", top: 0 };

  return (
    <div className="pf-outer">
      <div className="pf-bg-container">
        <div className="pf-bg-blu"></div>
        <div className="pf-vector-29"></div>
        <div className="pf-vector-31"></div>
      </div>

      <div className="pf-chrome">
        <svg className="pf-chrome-line" viewBox="0 0 1000 140" preserveAspectRatio="none" aria-hidden="true">
          <path d="M40 20 H680 Q710 20 710 50 V82" fill="none" stroke="#C6F94A" strokeWidth="2" />
        </svg>
        <div style={{ pointerEvents: "auto", position: "relative", zIndex: 2 }}>
          <ScrollingLogo />
        </div>
        <div
          className="nav-cluster-wrapper"
          style={{
            pointerEvents: "auto",
            position: "absolute",
            top: 0,
            right: -110,
            zIndex: 2,
            transform: "scale(0.72)",
            transformOrigin: "top right",
          }}
        >
          <NavCluster activeKey="program" />
        </div>
      </div>

      <div ref={wrapRef} className="pf-hwrap" style={{ height: `${P_SLIDES * 100}vh` }}>
        <div className="pf-hsticky" style={stickyStyle}>
          <div
            className="pf-htrack"
            style={{
              width: `${P_SLIDES * 100}vw`,
              transform: `translateX(-${Math.min(1, Math.max(0, progress)) * (P_SLIDES - 1) * 100}vw)`,
            }}
          >
            {/* PROGRAM 1 — landing */}
            <section className="pf-section pf-hslide" style={{ justifyContent: "center" }}>
              <div
                className="landing-slide"
                style={{
                  width: "95%",
                  maxWidth: "1200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: LIME,
                  borderRadius: 28,
                  minHeight: 560,
                  position: "relative",
                  padding: "24px",
                  margin: "0 auto",
                }}
              >
                <div
                  className="landing-content"
                  style={{
                    width: "85%",
                    background: "rgba(255,255,255,0.35)",
                    borderRadius: 24,
                    padding: "80px 50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 28,
                  }}
                >
                  <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3l3 6-3 3-3-3zM21 12l-6 3-3-3 3-3zM12 21l-3-6 3-3 3 3zM3 12l6-3 3 3-3 3z"
                      fill={TEAL}
                    />
                  </svg>

                  <div
                    className="landing-title"
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      fontSize: 42,
                      color: INK,
                      letterSpacing: 1,
                    }}
                  >
                    PROGRAM
                  </div>
                </div>

                <p
                  className="landing-description"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 17,
                    color: INK,
                    textAlign: "center",
                    maxWidth: 430,
                    marginTop: 24,
                    marginBottom: 0,
                    lineHeight: 1.7,
                  }}
                >
                  A system to translate early-stage (0–1) into a deliberate climb.
                </p>

                <div style={{ position: "absolute", right: 32, bottom: 28 }}>
                  <ArrowRight />
                </div>
              </div>

              <DotNav count={TOTAL} active={active} onSelect={goTo} />
            </section>
            
            {/* PROGRAM 2 — The Paradox (Penrose) */}
            <section className="pf-section pf-hslide" style={{ justifyContent: "center" }}>
              <div
                className="pf-care-card"
                style={{
                  width: "95%",
                  maxWidth: 1200,
                  minHeight: 560,
                  height: "auto",
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <SlideShell
                  diagramSide="right"
                  title="The Paradox (Penrose)"
                  kicker="Escape the Motion Trap."
                  diagram={<PenroseDiagram />}
                  diagramStyle={{ top: 40, width: "42%", maxWidth: 380 }}
                  bullets={[
                    "Early-stage founder journeys often look like progress while masking a loop.",
                    "We expose this illusion with questions that reveal the motion trap.",
                    "Real value is unlocked once the paradox is spotted.",
                  ]}
                />
              </div>
              <DotNav count={TOTAL} active={active} onSelect={goTo} />
            </section>

            {/* PROGRAM 3 — The Curve (Integral) */}
            <section className="pf-section pf-hslide" style={{ justifyContent: "center" }}>
              <div
                className="pf-care-card"
                style={{
                  width: "95%",
                  maxWidth: 1200,
                  minHeight: 560,
                  height: "auto",
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <SlideShell
                  diagramSide="left"
                  title="The Curve (Integral)"
                  kicker="Sequence the Edge."
                  diagram={<CurveDiagram />}
                  diagramStyle={{ top: 60, width: "36%", maxWidth: 420 }}
                  titleStyle={{ top: 60, left: 50, width: "36%", maxWidth: 420 }}
                  bullets={[
                    "0–1 is not one leap. It is a sequence of deliberate actions.",
                    "The Integral Curve is our structural map for building competitive edge.",
                    "We break the climb into an integrated set of choices that power your ascent.",
                  ]}
                />
              </div>
              <DotNav count={TOTAL} active={active} onSelect={goTo} />
            </section>

            {/* PROGRAM 4 — The Model (Domino) */}
            <section className="pf-section pf-hslide" style={{ justifyContent: "center" }}>
              <div
                className="pf-care-card"
                style={{
                  width: "95%",
                  maxWidth: 1200,
                  minHeight: 560,
                  height: "auto",
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <SlideShell
                  diagramSide="right"
                  title="The Model (Domino)"
                  kicker="Trigger the Fitment Effect."
                  diagram={<DominoDiagram />}
                  diagramStyle={{ top: 10, width: "54%", maxWidth: 460 }}
                  bullets={[
                    "We decipher the founder–startup equation as a field of scattered dominoes.",
                    "Our objective is to identify what is misaligned, mixed, or missing.",
                    "When the maker, market, and method synchronise, the fitment effect triggers.",
                  ]}
                />
              </div>
              <DotNav count={TOTAL} active={active} onSelect={goTo} />
            </section>

            {/* PROGRAM 5 — The System (Obelisk) */}
            <section className="pf-section pf-hslide" style={{ justifyContent: "center" }}>
              <div
                className="pf-care-card"
                style={{
                  width: "95%",
                  maxWidth: 1200,
                  minHeight: 560,
                  height: "auto",
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <SlideShell
                  diagramSide="left"
                  title="The System (Obelisk)"
                  kicker="Structure the Advantage."
                  diagram={<ObeliskDiagram />}
                  diagramStyle={{ top: 60, width: "28%", maxWidth: 220 }}
                  bullets={[
                    <><strong>Anchor</strong> – Identify your true heading and the venture's building blocks.</>,
                    <><strong>Spine</strong> – Build choice architecture into a cohesive strategy.</>,
                    <><strong>Apex</strong> – Sharpen the craft to sculpt Winning Playbooks.</>,
                  ]}
                />
              </div>
              <DotNav count={TOTAL} active={active} onSelect={goTo} />
            </section>

            {/* PROGRAM 6 — Operationalise the Ascent */}
            <section className="pf-section pf-hslide" style={{ justifyContent: "center" }}>
              <div
                className="pf-care-card"
                style={{
                  width: "95%",
                  maxWidth: 1200,
                  minHeight: 560,
                  height: "auto",
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <div
                  className="operational-slide"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.35)",
                    borderRadius: 28,
                    padding: "0 70px",
                    gap: 60,
                  }}
                >
                  <div
                    className="operational-grid"
                    style={{
                      flex: "0 0 44%",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 10,
                    }}
                  >
                    {[
                      { title: "The Paradox (Penrose)", diagram: <PenroseDiagram mini /> },
                      { title: "The Curve (Integral)", diagram: <CurveDiagram mini /> },
                      { title: "The Model (Domino)", diagram: <DominoDiagram mini /> },
                      { title: "The System (Obelisk)", diagram: <ObeliskDiagram mini /> },
                    ].map((c) => (
                      <div
                        key={c.title}
                        className="operational-item"
                        style={{
                          background: LIME,
                          borderRadius: 18,
                          padding: 16,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 10,
                          minHeight: 190,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 50 }}>
                          {c.diagram}
                        </div>
                        <div
                          className="operational-item-title"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 12,
                            fontWeight: 700,
                            color: INK,
                            textAlign: "center",
                          }}
                        >
                          {c.title}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="operational-copy" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <h2
                      className="operational-heading"
                      style={{
                        fontFamily: "'Anton', sans-serif",
                        fontSize: 34,
                        color: INK,
                        marginTop: 0,
                        marginBottom: 20,
                      }}
                    >
                      Operationalise the Ascent
                    </h2>
                    <p
                      className="operational-text"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 18,
                        color: INK,
                        lineHeight: 1.8,
                        marginBottom: 32,
                        maxWidth: 460,
                      }}
                    >
                      Together, these <strong>four elements</strong> turn strategy from an esoteric exercise into a
                      system you can implement.
                    </p>
                    <button
                      type="button"
                      onClick={() => setContactOpen(true)}
                      className="operational-cta"
                      style={{
                        padding: "16px 36px",
                        borderRadius: 14,
                        border: "none",
                        background: LIME,
                        color: INK,
                        fontFamily: "'Anton', sans-serif",
                        fontSize: 16,
                        letterSpacing: 0.5,
                        cursor: "pointer",
                      }}
                    >
                      CONTACT US
                    </button>
                  </div>
                </div>
              </div>
              <DotNav count={TOTAL} active={active} onSelect={goTo} />
            </section>            
          </div>
        </div>
      </div>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  );
}

export default Program;