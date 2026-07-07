import { COLORS } from "../../constants/theme";

function DominoDiagram({ mini = false }) {
  const size = mini ? 160 : 360;
  const dominos = [0, 1, 2, 3, 4, 5];

  return (
    <svg
      viewBox="0 0 220 260"
      width={mini ? size : 400}
      height={mini ? size : 400}
    >
      <defs>
        <linearGradient id="domGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.TEAL} />
          <stop offset="100%" stopColor={COLORS.INK} />
        </linearGradient>
      </defs>
      {dominos.map((i) => {
        const x = 30 + i * 30;
        const fallen = i >= 4;
        const angle = fallen ? 62 : i === 3 ? 30 : 0;
        const y = 200 - (fallen ? 30 : 0);
        return (
          <rect
            key={i}
            x={x}
            y={y - 90}
            width={mini ? 10 : 18}
            height={mini ? 46 : 90}
            rx="3"
            fill="url(#domGrad)"
            transform={`rotate(${angle} ${x + (mini ? 5 : 9)} ${y})`}
          />
        );
      })}
      <line
        x1="10"
        y1="200"
        x2="210"
        y2="200"
        stroke={COLORS.INK}
        strokeWidth="1.4"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export default DominoDiagram;