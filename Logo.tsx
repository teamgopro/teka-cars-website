interface LogoProps {
  className?: string;
  mark?: boolean;
}

export default function Logo({ className = "", mark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark && (
        <svg width="20" height="20" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path d="M8 20 L32 9 L56 20 L32 31 Z" fill="currentColor" />
          <rect x="30" y="31" width="4" height="26" fill="currentColor" />
          <rect x="20" y="45" width="24" height="3" fill="currentColor" opacity="0.6" />
        </svg>
      )}
      <span className="font-display text-xl font-semibold tracking-[0.28em] leading-none">
        TEKA<span className="ml-1.5 font-light text-silver-2 tracking-[0.28em]">CARS</span>
      </span>
    </span>
  );
}
