type WaveDividerProps = {
  fromColor: string;
  toColor: string;
  flip?: boolean;
};

/** A single flowing wave that hands off from one section's background to the next. */
export function WaveDivider({ fromColor, toColor, flip }: WaveDividerProps) {
  return (
    <div
      className={`wave-divider ${flip ? "wave-divider--flip" : ""}`}
      style={{ background: fromColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <path
          d="M0,64 C240,110 480,10 720,40 C960,70 1200,120 1440,56 L1440,120 L0,120 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
