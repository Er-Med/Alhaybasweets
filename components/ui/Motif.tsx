export function Motif({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <rect x="22" y="22" width="56" height="56" stroke="currentColor" strokeWidth="0.6" />
      <rect
        x="22"
        y="22"
        width="56"
        height="56"
        stroke="currentColor"
        strokeWidth="0.6"
        transform="rotate(45 50 50)"
      />
      <circle cx="50" cy="50" r="6" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}
