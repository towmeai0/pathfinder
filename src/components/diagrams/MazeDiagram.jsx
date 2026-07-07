
import { COLORS } from "../../constants/theme";

function MazeDiagram() {
  return (
    <svg viewBox="0 0 320 220" width="100%" height="220">
      <g fill="none" stroke={COLORS.INK} strokeWidth="1.6">
        <rect x="40" y="40" width="220" height="150" rx="6" />
        <path d="M40 90 H160 V70 H220 M100 90 V150 H180 V120 H260 M60 150 H120 M180 190 V160" />
      </g>
      <path d="M40 190 L20 210" stroke={COLORS.INK} strokeWidth="2" />
      <path d="M230 70 L255 45" stroke={COLORS.TEAL} strokeWidth="2" />
      <polygon points="255,45 246,47 253,54" fill={COLORS.TEAL} />
      <text x="18" y="205" fontFamily="Anton" fontSize="11" fill={COLORS.INK}>
        IDEA
      </text>
      <text x="150" y="105" fontFamily="Anton" fontSize="11" fill={COLORS.INK}>
        MVP
      </text>
      <text
        x="118"
        y="150"
        fontFamily="Anton"
        fontSize="10"
        fill={COLORS.INK}
        transform="rotate(-18 118 150)"
      >
        TRACTION
      </text>
      <text x="220" y="50" fontFamily="Anton" fontSize="11" fill={COLORS.TEAL}>
        GROWTH
      </text>
    </svg>
  );
}

export default MazeDiagram;