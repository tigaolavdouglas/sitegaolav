type CycleBadgeProps = {
  size?: number;
  spin?: boolean;
};

/**
 * The recurring iconographic motif of the site: a six-segment ring that
 * mirrors the facets of the GAO mark and doubles as a literal reference
 * to a washer's drum cycle. Used in the hero (animated) and as a quiet
 * bullet/icon frame throughout the page (static).
 */
export function CycleBadge({ size = 120, spin = false }: CycleBadgeProps) {
  return (
    <svg
      className={`cycle-badge ${spin ? "cycle-badge--spin" : ""}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="58" className="cycle-badge__ring" />
      <g className="cycle-badge__segments">
        <path d="M60 60 L60 14 A46 46 0 0 1 99.8 37 Z" fill="var(--blue)" />
        <path d="M60 60 L99.8 37 A46 46 0 0 1 99.8 83 Z" fill="var(--cyan)" />
        <path d="M60 60 L99.8 83 A46 46 0 0 1 60 106 Z" fill="var(--teal)" />
        <path
          d="M60 60 L60 106 A46 46 0 0 1 20.2 83 Z"
          fill="var(--teal-deep)"
        />
        <path
          d="M60 60 L20.2 83 A46 46 0 0 1 20.2 37 Z"
          fill="var(--blue-deep)"
        />
        <path
          d="M60 60 L20.2 37 A46 46 0 0 1 60 14 Z"
          fill="var(--cyan-soft)"
        />
      </g>
      <circle cx="60" cy="60" r="16" fill="var(--bg)" />
    </svg>
  );
}
