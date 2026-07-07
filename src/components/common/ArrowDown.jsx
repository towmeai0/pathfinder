import { COLORS } from "../../constants/theme";

function ArrowDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4v16M5 13l7 7 7-7"
        stroke={COLORS.INK}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowDown;