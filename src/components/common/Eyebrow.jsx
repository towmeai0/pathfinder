import CardIcon from "./CardIcon";
import { COLORS } from "../../constants/theme";

function Eyebrow({ icon, text, isLibrary, small }) {
  return (
    <div
      className="eyebrow"
      style={{
        color: (small || isLibrary) ? COLORS.TEAL : "rgba(21,26,31,.6)",
      }}
    >
      <CardIcon type={icon} isLibrary={isLibrary} small={small} />
      <span>{text}</span>
    </div>
  );
}

export default Eyebrow;