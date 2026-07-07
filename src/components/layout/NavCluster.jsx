import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Eyebrow from "../common/Eyebrow";
import { COLORS } from "../../constants/theme";

function NavCluster({ activeKey }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [small, setSmall] = useState(false);
  const isProgram = activeKey === "program" || location.pathname === "/program";

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProgramClick = () => {
    navigate("/program");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className={`pf-nav-container ${small ? "nav-small" : ""}`}>
      <div className="pf-nav-row">
        <div
          className="pf-nav-card pf-card-lime card-program"
          onClick={handleProgramClick}
          style={{
            cursor: "pointer",
            outline: isProgram ? `2px solid ${COLORS.INK}` : "none",
          }}
        >
          <Eyebrow icon="spiral" text="strategic coherence" />
          <div className="label">PROGRAM</div>
        </div>

        <div
          className="pf-nav-card pf-card-lime card-team"
          onClick={handleHomeClick}
          style={{ cursor: "pointer" }}
        >
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

export default NavCluster;