import { COLORS } from "../../constants/theme";

function IcebergDiagram() {
  return (
    <svg viewBox="0 0 320 220" width="100%" height="220">
      <line
        x1="10"
        y1="110"
        x2="310"
        y2="110"
        stroke={COLORS.INK}
        strokeWidth="1.4"
        strokeDasharray="4 4"
      />
      <path
        d="M120 30 L150 100 L90 100 Z M150 100 L190 55 L215 100 Z"
        fill="none"
        stroke={COLORS.INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M60 110 L100 100 L150 100 L190 55 L215 100 L260 110 L235 190 L180 210 L110 205 L75 175 Z"
        fill="none"
        stroke={COLORS.INK}
        strokeWidth="2"
        strokeDasharray="3 3"
        strokeLinejoin="round"
      />
      <text x="14" y="70" fontFamily="Inter" fontSize="12" fontWeight="600" fill={COLORS.INK}>
        The Obvious
      </text>
      <text x="14" y="205" fontFamily="Inter" fontSize="12" fontWeight="600" fill={COLORS.INK}>
        The Ambiguous
      </text>
    </svg>
  );
}

export default IcebergDiagram;