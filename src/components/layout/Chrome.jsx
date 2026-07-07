

import ScrollingLogo from "./ScrollingLogo";
import NavCluster from "./NavCluster";

function Chrome({ activeKey }) {
  return (
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
        <NavCluster activeKey={activeKey} />
      </div>
    </div>
  );
}

export default Chrome;