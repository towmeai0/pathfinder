import { COLORS } from "../../constants/theme";
import ArrowRight from "../common/ArrowRight";
import { useState, useEffect } from "react";

const { LIME, INK } = COLORS;

export default function SlideShell({
  diagram,
  title,
  kicker,
  bullets,
  footer,
  children,
  diagramSide = "right",
  titleStyle = {},
  cardStyle = {},
  copyStyle = {},
  diagramStyle = {},
}) {
  const isRight = diagramSide !== "left";
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Inject styles to override parent containers
  useEffect(() => {
    if (isMobile) {
      const style = document.createElement('style');
      style.innerHTML = `
        .pf-care-card,
        .pf-hslide,
        .pf-section,
        .slide-shell {
          min-height: auto !important;
          height: 100% !important;
          max-height: 100vh !important;
          overflow: hidden !important;
        }
        
        .pf-hslide {
          padding: 0 !important;
          margin: 0 !important;
        }
        
        .pf-care-card {
          padding: 0 !important;
          margin: 0 !important;
          height: 100% !important;
          max-height: 100vh !important;
          display: flex !important;
          align-items: flex-end !important;
        }
        
        .slide-shell {
          height: 100% !important;
          max-height: 100vh !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: flex-end !important;
          overflow: hidden !important;
          padding: 4px !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isMobile]);

  // Mobile styles - ONLY CARD SIZE REDUCED
  const mobileTitleStyle = isMobile ? {
    marginLeft: "0 !important",
    marginRight: "0 !important",
    marginTop: "2px !important",
    padding: "3px 10px !important",
    alignSelf: "center !important",
    zIndex: "3 !important",
    position: "relative !important",
    marginBottom: "3px !important",
    width: "auto !important",
    maxWidth: "80% !important",
    flexShrink: "0 !important",
    borderRadius: "10px !important",
  } : {};

  const mobileTitleTextStyle = isMobile ? {
    fontSize: isSmallMobile ? "13px !important" : "16px !important",
    whiteSpace: "normal !important",
    textAlign: "center !important",
  } : {};

  // ONLY CARD SIZE REDUCED - everything else stays the same
  const mobileCardStyle = isMobile ? {
    width: "65% !important", // REDUCED CARD WIDTH
    maxWidth: "65% !important", // REDUCED CARD WIDTH
    marginLeft: "auto !important",
    marginRight: "auto !important",
    padding: isSmallMobile ? "4px 8px 8px !important" : "6px 10px 10px !important",
    borderRadius: isSmallMobile ? "12px !important" : "14px !important",
    maxHeight: "70% !important", // REDUCED CARD HEIGHT
  } : {};

  // All other mobile styles removed - using external CSS for everything else
  const mobileDiagramStyle = isMobile ? {} : {};
  const mobileCopyStyle = isMobile ? {} : {};
  const mobileKickerStyle = isMobile ? {} : {};
  const mobileKickerContainerStyle = isMobile ? {} : {};
  const mobileBulletsStyle = isMobile ? {} : {};
  const mobileBulletItemStyle = isMobile ? {} : {};
  const mobileFooterStyle = isMobile ? {} : {};
  const hideSpacerStyle = isMobile ? {} : {};
  const shellStyle = isMobile ? {} : {};

  return (
    <div
      className="slide-shell"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "8px 8px 0",
        overflow: "hidden",
        ...shellStyle,
      }}
    >
      {/* Title */}
      <div
        className="slide-title-card"
        style={{
          alignSelf: isRight ? "flex-start" : "flex-end",
          background: "rgba(255,255,255,0.55)",
          border: `1px solid rgba(21,26,31,0.15)`,
          borderRadius: 14,
          padding: "14px 26px",
          marginBottom: 18,
          marginLeft: isRight ? 100 : 0,
          marginRight: isRight ? 0 : 100,
          marginTop: 35,
          flexShrink: 0,
          ...titleStyle,
          ...mobileTitleStyle,
        }}
      >
        <h2
          className="slide-title"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 28,
            color: INK,
            margin: 0,
            whiteSpace: "nowrap",
            ...mobileTitleTextStyle,
          }}
        >
          {title}
        </h2>
      </div>

      {/* Main Card - ONLY CARD SIZE REDUCED */}
      <div
        className="slide-diagram-card"
        style={{
          position: "relative",
          width: "100%",
          flex: 1,
          minHeight: 0,
          background: LIME,
          borderRadius: 24,
          padding: "24px 32px 20px",
          display: "flex",
          flexDirection: isRight ? "row" : "row-reverse",
          boxSizing: "border-box",
          overflow: "hidden",
          marginTop: 140,
          ...cardStyle,
          ...mobileCardStyle,
        }}
      >
        {/* Text */}
        <div
          className="slide-copy-block"
          style={{
            flex: "0 0 54%",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            alignItems: "flex-start",
            textAlign: "left",
            marginLeft: -20,
            marginTop: -5,
            overflow: "hidden",
            ...copyStyle,
            ...mobileCopyStyle,
          }}
        >
          {kicker && (
            <div
              className="slide-kicker-container"
              style={{
                alignSelf: "flex-start",
                background: "rgba(255,255,255,0.55)",
                borderRadius: 10,
                padding: "8px 16px",
                marginBottom: 18,
                flexShrink: 0,
                maxWidth: "100%",
                ...mobileKickerContainerStyle,
              }}
            >
              <p
                className="slide-kicker"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: 17,
                  color: INK,
                  margin: 0,
                  whiteSpace: "nowrap",
                  ...mobileKickerStyle,
                }}
              >
                {kicker}
              </p>
            </div>
          )}

          {bullets && (
            <ul
              className="slide-bullets"
              style={{
                width: "100%",
                margin: 0,
                paddingLeft: "1.5rem",
                listStyleType: "disc",
                listStylePosition: "outside",
                textAlign: "left",
                color: INK,
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                lineHeight: 1.9,
                flex: 1,
                minHeight: 0,
                overflow: "visible",
                wordBreak: "break-word",
                paddingRight: "8px",
                ...mobileBulletsStyle,
              }}
            >
              {bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: 4,
                    paddingLeft: "0.25rem",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    ...mobileBulletItemStyle,
                  }}
                >
                  {b}
                </li>
              ))}
            </ul>
          )}

          {children}

          <div
            className="slide-footer"
            style={{
              marginTop: "auto",
              paddingTop: 16,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 10,
              width: "100%",
              flexShrink: 0,
              ...mobileFooterStyle,
            }}
          >
            {footer}
            <ArrowRight />
          </div>
        </div>

        <div style={{ 
          flex: "0 0 4%",
          ...hideSpacerStyle 
        }} />
      </div>

      {/* Diagram */}
      <div
        className="slide-diagram-block"
        style={{
          position: "absolute",
          top: -18,
          [isRight ? "right" : "left"]: 24,
          width: "42%",
          maxWidth: 380,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
          ...diagramStyle,
          ...mobileDiagramStyle,
        }}
      >
        {diagram}
      </div>
    </div>
  );
}