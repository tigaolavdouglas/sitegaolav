export function Logo() {
  return (
    <a href="/" className="logo" aria-label="GAO Lavanderia — página inicial">
      <svg
        className="logo__mark"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <path d="M17 17 L17 2 A15 15 0 0 1 30 9.5 Z" fill="var(--blue)" />
        <path d="M17 17 L30 9.5 A15 15 0 0 1 30 24.5 Z" fill="var(--cyan)" />
        <path d="M17 17 L30 24.5 A15 15 0 0 1 17 32 Z" fill="var(--teal)" />
        <path d="M17 17 L17 32 A15 15 0 0 1 4 24.5 Z" fill="var(--teal-deep)" />
        <path d="M17 17 L4 24.5 A15 15 0 0 1 4 9.5 Z" fill="var(--blue-deep)" />
        <path d="M17 17 L4 9.5 A15 15 0 0 1 17 2 Z" fill="var(--cyan-soft)" />
        <circle cx="17" cy="17" r="4" fill="var(--bg)" />
      </svg>
      <span className="logo__wordmark">
        GAO
        <span className="logo__wordmark-sub">Lavanderia</span>
      </span>
    </a>
  );
}
