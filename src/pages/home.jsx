import { useRef } from "react";
import useScrollProgress from "../hooks/useScrollProgress";
import Chrome from "../components/layout/Chrome";
import HeroSection from "../components/sections/HeroSection";
import BlindSpotSection from "../components/sections/BlindSpotSection";
import StereotypicalSection from "../components/sections/StereotypicalSection";
import RoadmapSection from "../components/sections/RoadmapSection";
import NextStepSection from "../components/sections/NextStepSection";
import { HOME_SLIDES } from "../constants/theme";

function Home() {
  const wrapRef = useRef(null);
  const { progress, active, stickyStyle, goTo } = useScrollProgress(
    wrapRef,
    HOME_SLIDES
  );

  return (
    <div className="pf-outer">
      {/* Background Gradients */}
      <div className="pf-bg-container">
        <div className="pf-bg-blu"></div>
        <div className="pf-vector-29"></div>
        <div className="pf-vector-31"></div>
      </div>

      {/* Fixed Chrome */}
      <Chrome activeKey="home" />

      {/* HOME 1 - Normal scroll */}
      <HeroSection active={active} goTo={goTo} />

      {/* HOME 2-5 - Pinned horizontal track */}
      <div
        ref={wrapRef}
        className="pf-hwrap"
        style={{ height: `${HOME_SLIDES * 100}vh` }}
      >
        <div className="pf-hsticky" style={stickyStyle}>
          <div
            className="pf-htrack"
            style={{
              width: `${HOME_SLIDES * 100}vw`,
              transform: `translateX(-${Math.min(1, Math.max(0, progress)) * (HOME_SLIDES - 1) * 100}vw)`,
            }}
          >
            <BlindSpotSection active={active} goTo={goTo} />
            <StereotypicalSection active={active} goTo={goTo} />
            <RoadmapSection active={active} goTo={goTo} />
            <NextStepSection active={active} goTo={goTo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;