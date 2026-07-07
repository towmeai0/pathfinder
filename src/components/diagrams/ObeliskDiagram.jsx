
import { COLORS } from "../../constants/theme";

function ObeliskDiagram({ mini = false }) {
  const size = mini ? 160 : 360;

  return (
    <svg
      viewBox="0 0 160 300"
      width={mini ? size : 400}
      height={mini ? size : 400}
    >
      <defs>
        <linearGradient id="obGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.TEAL} />
          <stop offset="100%" stopColor={COLORS.INK} />
        </linearGradient>
      </defs>
      <path d="M80 10 L100 55 L60 55 Z" fill="url(#obGrad)" />
      <rect x="62" y="55" width="36" height="160" fill="url(#obGrad)" />
      <path d="M45 215 H115 L125 245 H35 Z" fill="url(#obGrad)" />
      <rect x="25" y="245" width="110" height="24" fill="url(#obGrad)" />
      {!mini && (
        <g fontFamily="'Anton', sans-serif" fontSize="12" fill={COLORS.INK}>
          <text x="102" y="30">
            Apex
          </text>
          <text x="106" y="130">
            Spine
          </text>
          <text x="4" y="260">
            Base
          </text>
        </g>
      )}
    </svg>
  );
}

export default ObeliskDiagram;