import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LIME = "#C6F94A";
const INK = "#151A1F";
const TEAL = "#12A98E";

const P_SLIDES = 6;
const TOTAL = P_SLIDES;

/* ---------------------------------------------------------------- */
/* Shared chrome (mirrors App.jsx so the two routes feel identical)  */
/* ---------------------------------------------------------------- */

function CardIcon({ type, isLibrary }) {
  const strokeColor = isLibrary ? "#12A98E" : INK;
  const common = { width: 16, height: 16, stroke: strokeColor, strokeWidth: 2, fill: "none" };
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

function Eyebrow({ icon, text, isLibrary }) {
  return (
    <div className="eyebrow" style={{ color: isLibrary ? "#12A98E" : "rgba(21, 26, 31, 0.6)" }}>
      <CardIcon type={icon} isLibrary={isLibrary} />
      <span>{text}</span>
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

function DotNav({ count, active, onSelect }) {
  return (
    <div className="pf-dot-nav">
      {Array.from({ length: count }).map((_, i) => (
        <button key={i} className={`pf-dot${i === active ? " active" : ""}`} onClick={() => onSelect(i)} aria-label={`Go to section ${i + 1}`} />
      ))}
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h14M13 6l6 6-6 6" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Diagrams — same restrained line-art language as the home page     */
/* ---------------------------------------------------------------- */

function PenroseDiagram({ mini = false }) {
  const size = mini ? 60 : 320;
  return (
    <svg viewBox="0 0 220 220" width={size} height={size}>
      <defs>
        <linearGradient id="penGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12A98E" />
          <stop offset="55%" stopColor="#2E6FB0" />
          <stop offset="100%" stopColor="#151A1F" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#penGrad)" strokeWidth={mini ? 6 : 16} strokeLinejoin="round">
        <path d="M110 20 L190 165 L140 165 L95 85 Z" />
        <path d="M190 165 L30 165 L55 120 L165 120 Z" />
        <path d="M30 165 L110 20 L135 65 L70 165 Z" />
      </g>
      {!mini && (
        <g fontFamily="'Anton', sans-serif" fontSize="11" fill={INK}>
          <text x="118" y="55" transform="rotate(62 118 55)">ACCESS</text>
          <text x="45" y="185">KNOWLEDGE</text>
          <text x="150" y="185">EMBED</text>
        </g>
      )}
    </svg>
  );
}

function CurveDiagram({ mini = false }) {
  const size = mini ? 60 : 320;
  const labelsTop = ["Edge", "Growth", "Model", "Propose", "Segment"];
  const labelsBottom = ["Validate", "Pilot", "Prototype", "Context", "Concept", "Feasibility"];
  return (
    <svg viewBox="0 0 260 260" width={size} height={mini ? size : 340}>
      <defs>
        <linearGradient id="curveGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#151A1F" />
          <stop offset="100%" stopColor="#12A98E" />
        </linearGradient>
      </defs>
      <path d="M30 230 C 60 220, 90 210, 110 180 C 140 135, 150 90, 200 30" fill="none" stroke="url(#curveGrad)" strokeWidth={mini ? 6 : 10} strokeLinecap="round" />
      {!mini &&
        [
          [110, 180],
          [140, 135],
          [150, 90],
          [175, 55],
        ].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#fff" stroke={INK} strokeWidth="1.5" />)}
      {!mini && (
        <g fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="600" fill={INK}>
          {labelsTop.map((t, i) => (
            <text key={t} x={165 + i * 2} y={20 + i * 15}>
              {t}
            </text>
          ))}
          {labelsBottom.map((t, i) => (
            <text key={t} x={20} y={250 - i * 16}>
              {t}
            </text>
          ))}
        </g>
      )}
    </svg>
  );
}

function DominoDiagram({ mini = false }) {
  const size = mini ? 60 : 260;
  const dominos = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 220 260" width={mini ? size : 200} height={mini ? size : 300}>
      <defs>
        <linearGradient id="domGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12A98E" />
          <stop offset="100%" stopColor="#151A1F" />
        </linearGradient>
      </defs>
      {dominos.map((i) => {
        const x = 30 + i * 30;
        const fallen = i >= 4;
        const angle = fallen ? 62 : i === 3 ? 30 : 0;
        const y = 200 - (fallen ? 30 : 0);
        return (
          <rect
            key={i}
            x={x}
            y={y - 90}
            width={mini ? 10 : 18}
            height={mini ? 46 : 90}
            rx="3"
            fill="url(#domGrad)"
            transform={`rotate(${angle} ${x + (mini ? 5 : 9)} ${y})`}
          />
        );
      })}
      <line x1="10" y1="200" x2="210" y2="200" stroke={INK} strokeWidth="1.4" strokeDasharray="4 4" />
    </svg>
  );
}

function ObeliskDiagram({ mini = false }) {
  const size = mini ? 60 : 260;
  return (
    <svg viewBox="0 0 160 300" width={mini ? size : 170} height={mini ? size : 300}>
      <defs>
        <linearGradient id="obGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12A98E" />
          <stop offset="100%" stopColor="#151A1F" />
        </linearGradient>
      </defs>
      <path d="M80 10 L100 55 L60 55 Z" fill="url(#obGrad)" />
      <rect x="62" y="55" width="36" height="160" fill="url(#obGrad)" />
      <path d="M45 215 H115 L125 245 H35 Z" fill="url(#obGrad)" />
      <rect x="25" y="245" width="110" height="24" fill="url(#obGrad)" />
      {!mini && (
        <g fontFamily="'Anton', sans-serif" fontSize="12" fill={INK}>
          <text x="102" y="30">Apex</text>
          <text x="106" y="130">Spine</text>
          <text x="4" y="260">Base</text>
        </g>
      )}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Shared slide layout: lime diagram card on one side, copy on other */
/* ---------------------------------------------------------------- */

function SlideShell({ diagram, diagramSide = "left", title, kicker, bullets, footer, children }) {
  const diagramBlock = (
    <div
      className="slide-diagram-block"
      style={{
        flex: "0 0 48%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        className="slide-diagram-card"
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
          className="slide-title"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 28,
            color: INK,
            margin: 0,
            marginBottom: 20,
          }}
        >
          {title}
        </h2>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>{diagram}</div>
      </div>
    </div>
  );

  const copyBlock = (
    <div
      className="slide-copy-block"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "70px",
      }}
    >
      {kicker && (
        <p
          className="slide-kicker"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "italic",
            fontSize: 18,
            color: TEAL,
            marginTop: 0,
            marginBottom: 22,
          }}
        >
          {kicker}
        </p>
      )}
      {bullets && (
        <ul
          className="slide-bullets"
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
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {children}
      {footer}
      <ArrowRight />
    </div>
  );

return (
    <div
      className="slide-shell"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "stretch",
        background: "rgba(255,255,255,0.35)",
        borderRadius: 28,
        overflow: "hidden",
      }}
    >
      {diagramSide === "left" ? (
        <>
          {diagramBlock}
          {copyBlock}
        </>
      ) : (
        <>
          {copyBlock}
          {diagramBlock}
        </>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Success Popup Modal                                               */
/* ---------------------------------------------------------------- */

function SuccessPopup({ onClose }) {
  useEffect(() => {
    // Auto-close after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="success-popup-overlay"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(21,26,31,0.55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        padding: 20,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="success-popup"
        style={{
          background: "#ffffff",
          borderRadius: 20,
          width: "100%",
          maxWidth: 420,
          padding: "40px 32px 36px",
          textAlign: "center",
          position: "relative",
          animation: "fadeInUp 0.4s ease",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: LIME,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17L4 12"
              stroke={INK}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 28,
            color: INK,
            marginTop: 0,
            marginBottom: 12,
          }}
        >
          Form Submitted!
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "rgba(21,26,31,0.7)",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          We'll get back to you shortly.
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: 24,
            padding: "10px 32px",
            borderRadius: 10,
            border: "none",
            background: LIME,
            color: INK,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Got it
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Contact Us modal                                                  */
/* ---------------------------------------------------------------- */

function ContactModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    company: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Close contact modal and show success popup
    onClose();
    setShowSuccess(true);
  };

  // Field style with white background, black border, black text
  const fieldStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #000000",
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: "#000000",
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    outline: "none",
  };

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: INK,
    marginBottom: 6,
    display: "block",
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        onClick={onClose}
        className="contact-modal-overlay"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(21,26,31,0.55)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 50,
          padding: 20,
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="contact-modal"
          style={{
            background: "#ffffff",
            borderRadius: 20,
            width: "100%",
            maxWidth: 420,
            padding: "28px 32px 32px",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="contact-modal-close"
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "none",
              background: "rgba(21,26,31,0.06)",
              cursor: "pointer",
              fontSize: 16,
              lineHeight: "28px",
              color: INK,
            }}
          >
            ×
          </button>

          <h2
            className="contact-modal-title"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 26,
              color: INK,
              marginTop: 0,
              marginBottom: 24,
            }}
          >
            Contact <span style={{ color: TEAL }}>Us</span>
          </h2>

          <form onSubmit={handleSubmit}>
            <label style={labelStyle} htmlFor="name">Full Name*</label>
            <input id="name" style={fieldStyle} required value={form.name} onChange={update("name")} />

            <label style={labelStyle} htmlFor="email">Email*</label>
            <input id="email" type="email" style={fieldStyle} required value={form.email} onChange={update("email")} />

            <label style={labelStyle} htmlFor="phone">Contact No*</label>
            <input id="phone" style={fieldStyle} required value={form.phone} onChange={update("phone")} />

            <label style={labelStyle} htmlFor="linkedin">LinkedIn Url*</label>
            <input id="linkedin" style={fieldStyle} required value={form.linkedin} onChange={update("linkedin")} />

            <label style={labelStyle} htmlFor="company">Company Name*</label>
            <input id="company" style={fieldStyle} required value={form.company} onChange={update("company")} />

            <label style={labelStyle} htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              rows={3}
              style={{ ...fieldStyle, resize: "vertical", fontFamily: "'Inter', sans-serif" }}
              value={form.message}
              onChange={update("message")}
            />

            <button
              type="submit"
              className="contact-submit"
              style={{
                width: "100%",
                marginTop: 8,
                padding: "14px 0",
                borderRadius: 12,
                border: "none",
                background: LIME,
                color: INK,
                fontFamily: "'Anton', sans-serif",
                fontSize: 16,
                letterSpacing: 0.5,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              SUBMIT
              <ArrowRight />
            </button>
          </form>
        </div>
      </div>

      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}
    </>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                               */
/* ---------------------------------------------------------------- */

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
  }}
>
    <SlideShell
      diagramSide="right"
      title="The Paradox (Penrose)"
      kicker="Escape the Motion Trap."
      diagram={<PenroseDiagram />}
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
  }}
>
    <SlideShell
      diagramSide="left"
      title="The Curve (Integral)"
      kicker="Sequence the Edge."
      diagram={<CurveDiagram />}
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
  }}
>
    <SlideShell
      diagramSide="right"
      title="The Model (Domino)"
      kicker="Trigger the Fitment Effect."
      diagram={<DominoDiagram />}
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
  }}
>
    <SlideShell
      diagramSide="left"
      title="The System (Obelisk)"
      kicker="Structure the Advantage."
      diagram={<ObeliskDiagram />}
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
          gap: 20,
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
              minHeight: 140,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 60 }}>
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

      <style jsx>{`
        /* Desktop & Large Screens */
        @media (min-width: 1025px) {
          .nav-cluster-wrapper {
            transform: scale(0.72) !important;
            right: -110px !important;
          }
        }

        /* Tablet & Small Laptops */
        @media (max-width: 1024px) {
          .slide-shell {
            flex-direction: column !important;
            margin: 15px 15px 8px !important;
            min-height: auto !important;
            height: auto !important;
          }
          
          .slide-diagram-block {
            flex: 1 !important;
            padding: 12px !important;
            width: 100% !important;
          }
          
          .slide-diagram-card {
            height: auto !important;
            min-height: 200px !important;
            padding: 16px !important;
          }
          
          .slide-title {
            font-size: 20px !important;
            margin-bottom: 12px !important;
          }
          
          .slide-copy-block {
            padding: 24px 20px !important;
            width: 100% !important;
          }
          
          .slide-kicker {
            font-size: 15px !important;
          }
          
          .slide-bullets {
            font-size: 14px !important;
            padding-left: 16px !important;
          }
          
          .operational-slide {
            flex-direction: column !important;
            margin: 15px 15px 8px !important;
            padding: 16px !important;
            min-height: auto !important;
            height: auto !important;
            gap: 30px !important;
          }
          
          .operational-grid {
            flex: 1 !important;
            width: 100% !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
          
          .operational-copy {
            width: 100% !important;
            align-items: center !important;
            text-align: center !important;
          }
          
          .operational-heading {
            font-size: 26px !important;
            text-align: center !important;
          }
          
          .operational-text {
            font-size: 15px !important;
            max-width: 100% !important;
            text-align: center !important;
          }
          
          .landing-slide {
            min-height: 380px !important;
            padding: 14px !important;
          }
          
          .landing-content {
            width: 92% !important;
            padding: 35px 20px !important;
          }
          
          .landing-title {
            font-size: 30px !important;
          }
          
          .landing-description {
            font-size: 14px !important;
            max-width: 90% !important;
          }
          
          .pf-chrome-line {
            display: none !important;
          }
          
          .nav-cluster-wrapper {
            position: fixed !important;
            top: 8px !important;
            right: 8px !important;
            transform: scale(0.5) !important;
            transform-origin: top right !important;
            z-index: 100 !important;
          }
          
          .pf-dot-nav {
            margin-top: 8px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .slide-shell {
            margin: 8px 8px 4px !important;
            border-radius: 16px !important;
          }
          
          .slide-diagram-block {
            padding: 8px !important;
          }
          
          .slide-diagram-card {
            min-height: 160px !important;
            padding: 12px !important;
            border-radius: 12px !important;
          }
          
          .slide-title {
            font-size: 17px !important;
            margin-bottom: 8px !important;
          }
          
          .slide-copy-block {
            padding: 16px 14px !important;
          }
          
          .slide-kicker {
            font-size: 13px !important;
            margin-bottom: 12px !important;
          }
          
          .slide-bullets {
            font-size: 13px !important;
            line-height: 1.7 !important;
            padding-left: 14px !important;
            margin-bottom: 16px !important;
          }
          
          .operational-slide {
            margin: 8px 8px 4px !important;
            padding: 12px !important;
            border-radius: 16px !important;
            gap: 20px !important;
          }
          
          .operational-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          
          .operational-item {
            min-height: 80px !important;
            padding: 10px !important;
            border-radius: 12px !important;
          }
          
          .operational-item-title {
            font-size: 9px !important;
          }
          
          .operational-heading {
            font-size: 22px !important;
          }
          
          .operational-text {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          
          .operational-cta {
            padding: 10px 24px !important;
            font-size: 13px !important;
          }
          
          .landing-slide {
            min-height: 300px !important;
            padding: 10px !important;
            border-radius: 16px !important;
          }
          
          .landing-content {
            width: 96% !important;
            padding: 25px 16px !important;
            border-radius: 14px !important;
            gap: 16px !important;
          }
          
          .landing-title {
            font-size: 26px !important;
          }
          
          .landing-description {
            font-size: 13px !important;
            margin-top: 14px !important;
          }
          
          .nav-cluster-wrapper {
            transform: scale(0.42) !important;
            right: 4px !important;
            top: 4px !important;
          }
          
          .pf-dot-nav button {
            width: 7px !important;
            height: 7px !important;
            margin: 0 3px !important;
          }
          
          .contact-modal {
            padding: 20px 16px !important;
            max-width: 95% !important;
          }
          
          .contact-modal-title {
            font-size: 22px !important;
            margin-bottom: 18px !important;
          }
          
          .contact-modal-overlay {
            padding: 12px !important;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .slide-shell {
            margin: 6px 6px 3px !important;
            border-radius: 14px !important;
          }
          
          .slide-diagram-card {
            min-height: 140px !important;
            padding: 10px !important;
            border-radius: 10px !important;
          }
          
          .slide-title {
            font-size: 15px !important;
            margin-bottom: 6px !important;
          }
          
          .slide-copy-block {
            padding: 14px 12px !important;
          }
          
          .slide-kicker {
            font-size: 12px !important;
            margin-bottom: 10px !important;
          }
          
          .slide-bullets {
            font-size: 12px !important;
            line-height: 1.5 !important;
            padding-left: 12px !important;
            margin-bottom: 14px !important;
          }
          
          .operational-slide {
            margin: 6px 6px 3px !important;
            padding: 10px !important;
            border-radius: 14px !important;
            gap: 16px !important;
          }
          
          .operational-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          
          .operational-item {
            min-height: 70px !important;
            padding: 8px !important;
            border-radius: 10px !important;
          }
          
          .operational-item-title {
            font-size: 8px !important;
          }
          
          .operational-heading {
            font-size: 18px !important;
            margin-bottom: 10px !important;
          }
          
          .operational-text {
            font-size: 13px !important;
            margin-bottom: 16px !important;
            line-height: 1.5 !important;
          }
          
          .operational-cta {
            padding: 8px 20px !important;
            font-size: 12px !important;
          }
          
          .landing-slide {
            min-height: 250px !important;
            padding: 8px !important;
            border-radius: 14px !important;
          }
          
          .landing-content {
            width: 98% !important;
            padding: 20px 12px !important;
            border-radius: 12px !important;
            gap: 12px !important;
          }
          
          .landing-title {
            font-size: 22px !important;
          }
          
          .landing-description {
            font-size: 12px !important;
            margin-top: 10px !important;
            line-height: 1.5 !important;
          }
          
          .nav-cluster-wrapper {
            transform: scale(0.35) !important;
            right: 0px !important;
            top: 0px !important;
          }
          
          .contact-modal {
            padding: 16px 12px !important;
            max-width: 100% !important;
            margin: 8px !important;
          }
          
          .contact-modal-title {
            font-size: 20px !important;
            margin-bottom: 14px !important;
          }
          
          .contact-modal-overlay {
            padding: 8px !important;
          }
          
          .pf-dot-nav button {
            width: 5px !important;
            height: 5px !important;
            margin: 0 2px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Program;