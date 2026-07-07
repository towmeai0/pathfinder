import { COLORS } from "../../constants/theme";

function PenroseDiagram({ mini = false }) {
  const size = mini ? 60 : 420;
  return (
    <svg viewBox="0 0 220 220" width={size} height={size}>
      <defs>
        <linearGradient id="penGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.TEAL} />
          <stop offset="55%" stopColor="#2E6FB0" />
          <stop offset="100%" stopColor={COLORS.INK} />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#penGrad)"
        strokeWidth={mini ? 6 : 16}
        strokeLinejoin="round"
      >
        <path d="M110 20 L190 165 L140 165 L95 85 Z" />
        <path d="M190 165 L30 165 L55 120 L165 120 Z" />
        <path d="M30 165 L110 20 L135 65 L70 165 Z" />
      </g>
      {!mini && (
        <g fontFamily="'Anton', sans-serif" fontSize="11" fill={COLORS.INK}>
          <text x="118" y="55" transform="rotate(62 118 55)">
            ACCESS
          </text>
          <text x="45" y="185">
            KNOWLEDGE
          </text>
          <text x="150" y="185">
            EMBED
          </text>
        </g>
      )}
    </svg>
  );
}

export default PenroseDiagram;