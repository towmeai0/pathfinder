
import { useState, useEffect } from "react";
import { COLORS } from "../../constants/theme";

function ScrollingLogo() {
  const [logoStyle, setLogoStyle] = useState({
    background: COLORS.LIME,
    stroke: COLORS.INK,
    transform: "translate(0, 0)",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 120) {
        setLogoStyle({
          background: COLORS.INK,
          stroke: COLORS.LIME,
          transform: "translate(0, 0)",
        });
      } else {
        setLogoStyle({
          background: COLORS.LIME,
          stroke: COLORS.INK,
          transform: "translate(0, 0)",
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
        transition: "all 0.45s ease",
      }}
    >
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3a9 9 0 019 9c0 2.5-1 4.5-3 6l-6-6 6-6M3 12a9 9 0 019-9v6l-6 3"
          stroke={logoStyle.stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ScrollingLogo;