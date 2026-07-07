import { COLORS } from "../../constants/theme";

function HelixDiagram() {
  return (
    <svg viewBox="0 0 220 260" width="100%" height="260">
      <g transform="translate(60,60)">
        {[0, 40, 80, 120, 160].map((dy, i) => (
          <ellipse
            key={i}
            cx={i % 2 === 0 ? 20 : 70}
            cy={dy}
            rx="34"
            ry="12"
            fill="none"
            stroke={i % 2 === 0 ? COLORS.TEAL : COLORS.INK}
            strokeWidth="2"
          />
        ))}
      </g>
      <text x="10" y="235" fontFamily="Anton" fontSize="12" fill={COLORS.INK}>
        IDEATE
      </text>
      <text x="150" y="150" fontFamily="Anton" fontSize="12" fill={COLORS.TEAL}>
        INNOVATE
      </text>
      <text x="60" y="30" fontFamily="Anton" fontSize="12" fill={COLORS.INK}>
        ELEVATE
      </text>
    </svg>
  );
}

export default HelixDiagram;