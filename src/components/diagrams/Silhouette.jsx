
function Silhouette({ height = 300 }) {
  return (
    <svg
      width={height * 0.45}
      height={height}
      viewBox="0 0 120 300"
      fill="none"
    >
      <defs>
        <linearGradient id="silGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E7A8C" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#151A1F" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <g opacity="0.15" transform="translate(15, 12)">
        <circle cx="60" cy="55" r="22" fill="#000" />
        <path
          d="M30 105c0-22 13-34 30-34s30 12 30 34l6 90c1 14-8 20-16 20l-4 60h-32l-4-60c-8 0-17-6-16-20z"
          fill="#000"
        />
      </g>
      <g>
        <circle cx="60" cy="55" r="22" fill="url(#silGrad)" />
        <path
          d="M30 105c0-22 13-34 30-34s30 12 30 34l6 90c1 14-8 20-16 20l-4 60h-32l-4-60c-8 0-17-6-16-20z"
          fill="url(#silGrad)"
        />
      </g>
    </svg>
  );
}

export default Silhouette;