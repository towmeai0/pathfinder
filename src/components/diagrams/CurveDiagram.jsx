
import { COLORS } from "../../constants/theme";

function CurveDiagram({ mini = false }) {
  const size = mini ? 60 : 320;
  const labelsTop = ["Edge", "Growth", "Model", "Propose", "Segment"];
  const labelsBottom = [
    "Validate",
    "Pilot",
    "Prototype",
    "Context",
    "Concept",
    "Feasibility",
  ];

  return (
    <svg viewBox="0 0 260 260" width={size} height={mini ? size : 340}>
      <defs>
        <linearGradient id="curveGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.INK} />
          <stop offset="100%" stopColor={COLORS.TEAL} />
        </linearGradient>
      </defs>
      <path
        d="M30 230 C 60 220, 90 210, 110 180 C 140 135, 150 90, 200 30"
        fill="none"
        stroke="url(#curveGrad)"
        strokeWidth={mini ? 6 : 10}
        strokeLinecap="round"
      />
      {!mini &&
        [
          [110, 180],
          [140, 135],
          [150, 90],
          [175, 55],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill="#fff"
            stroke={COLORS.INK}
            strokeWidth="1.5"
          />
        ))}
      {!mini && (
        <g
          fontFamily="'Inter', sans-serif"
          fontSize="10"
          fontWeight="600"
          fill={COLORS.INK}
        >
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

export default CurveDiagram;