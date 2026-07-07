import { COLORS } from "../../constants/theme";

function CardIcon({ type, isLibrary, small }) {
  const strokeColor = (small || isLibrary) ? COLORS.TEAL : COLORS.INK;
  const common = {
    width: 40,
    height: 40,
    stroke: strokeColor,
    strokeWidth: 2,
    fill: "none",
  };

  switch (type) {
    case "spiral":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3c4 0 7 3 7 6.5S16.5 15 13.5 15 9 12.8 9 10.8 10.7 8 12.8 8" strokeLinecap="round" />
        </svg>
      );
    case "infinity":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 9a3 3 0 100 6 5 5 0 004-2 5 5 0 004 2 3 3 0 100-6 5 5 0 00-4 2 5 5 0 00-4-2z" />
        </svg>
      );
    case "orbit":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="1" />
          <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 19V5a2 2 0 012-2h4v16H6a2 2 0 00-2 2zM20 19V5a2 2 0 00-2-2h-4v16h4a2 2 0 012 2z" strokeLinejoin="round" />
        </svg>
      );
    case "loop":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M17 12H3M21 12h-2M7 8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default CardIcon;