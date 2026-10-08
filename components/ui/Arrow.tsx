export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow-icon h-[11px] w-[11px] ${className}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 6h10M7.2 2.2 11 6 7.2 9.8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
