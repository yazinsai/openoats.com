type Props = {
  size?: number;
  className?: string;
  /** "light" = white target on dark bg (default — for dark sites). "dark" = black target on white bg. */
  variant?: "light" | "dark";
  /** If true, renders just the bullseye without the rounded square background */
  bare?: boolean;
};

export function Logo({
  size = 28,
  className = "",
  variant = "light",
  bare = false,
}: Props) {
  const isLight = variant === "light";
  const bg = isLight ? "#ffffff" : "#000000";
  const fg = isLight ? "#000000" : "#ffffff";

  if (bare) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <Bullseye fg={fg} />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="OpenOats"
    >
      <rect width="64" height="64" rx="14" fill={bg} />
      <Bullseye fg={fg} />
    </svg>
  );
}

function Bullseye({ fg }: { fg: string }) {
  /* Three concentric rings + filled center dot, centered in 64x64.
     Outer ring r=21 stroke 5; middle ring r=12 stroke 4; inner dot r=4 filled. */
  return (
    <g stroke={fg} fill="none">
      <circle cx="32" cy="32" r="20" strokeWidth="5" />
      <circle cx="32" cy="32" r="11" strokeWidth="4" />
      <circle cx="32" cy="32" r="4" fill={fg} stroke="none" />
    </g>
  );
}
