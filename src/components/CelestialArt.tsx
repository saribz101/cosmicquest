// Draws each planet (plus the Sun and Pluto) as a colourful SVG illustration.
// No image files needed — the colours are listed below.

interface Look {
  colors: [string, string, string]; // light, mid, dark
  bands?: boolean;
  rings?: string | undefined;
  glow?: string;
  spot?: string;
}

const LOOKS: Record<string, Look> = {
  sun: { colors: ["#fff6b0", "#ffb23f", "#ff5e1a"], glow: "#ffb23f" },
  mercury: { colors: ["#d9d4cf", "#9b928a", "#5b5450"] },
  venus: { colors: ["#fff0c2", "#f2c26b", "#c27a2c"], bands: true },
  earth: { colors: ["#9be7ff", "#2f8fe0", "#14408f"], spot: "#4cc26a" },
  mars: { colors: ["#ffb38a", "#e0582d", "#8f2a16"] },
  jupiter: { colors: ["#ffe8c7", "#e0a46b", "#9c5b33"], bands: true, spot: "#c8502f" },
  saturn: { colors: ["#fff3c4", "#e8c77a", "#a8823f"], bands: true, rings: "#f4dca0" },
  uranus: { colors: ["#d8fbff", "#7fe0e8", "#2f9fb3"], rings: "#bdf2f6" },
  neptune: { colors: ["#a9c8ff", "#3f6fe8", "#1c2d9c"], bands: true },
  pluto: { colors: ["#fbe6d4", "#c9a58a", "#7a5a48"], spot: "#fff2e6" },
};

// Exoplanets get a colour picked from their id
const EXO_COLORS: [string, string, string][] = [
  ["#ffc7e8", "#e45fb0", "#7a1f6b"],
  ["#c7fff0", "#3fd6b4", "#14706a"],
  ["#ffd9b0", "#ff8a3d", "#9c3a12"],
  ["#d6c7ff", "#8a5fff", "#3a1f9c"],
  ["#b8e4ff", "#3f9fff", "#14408f"],
  ["#fff0b0", "#ffd13d", "#9c7a12"],
];

export function CelestialArt({
  id,
  size = 120,
  exoIndex,
  className = "",
}: {
  id: string;
  size?: number;
  exoIndex?: number;
  className?: string;
}) {
  const look: Look =
    exoIndex !== undefined
      ? { colors: EXO_COLORS[exoIndex % EXO_COLORS.length]!, bands: exoIndex % 2 === 0, rings: exoIndex % 3 === 0 ? "#ffffff" : undefined }
      : LOOKS[id] ?? LOOKS["earth"]!;
  const [light, mid, dark] = look.colors;
  const gid = `g-${id}`;
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} role="img" aria-label={id}>
      <defs>
        <radialGradient id={gid} cx="35%" cy="32%" r="75%">
          <stop offset="0%" stopColor={light} />
          <stop offset="55%" stopColor={mid} />
          <stop offset="100%" stopColor={dark} />
        </radialGradient>
        {look.glow && (
          <radialGradient id={`${gid}-glow`}>
            <stop offset="50%" stopColor={look.glow} stopOpacity="0.7" />
            <stop offset="100%" stopColor={look.glow} stopOpacity="0" />
          </radialGradient>
        )}
        <clipPath id={`${gid}-clip`}>
          <circle cx="100" cy="100" r="62" />
        </clipPath>
      </defs>
      {look.glow && <circle cx="100" cy="100" r="98" fill={`url(#${gid}-glow)`} />}
      {look.rings && (
        <ellipse cx="100" cy="100" rx="96" ry="22" fill="none" stroke={look.rings} strokeWidth="9" opacity="0.55" transform="rotate(-18 100 100)" />
      )}
      <circle cx="100" cy="100" r="62" fill={`url(#${gid})`} />
      <g clipPath={`url(#${gid}-clip)`}>
        {look.bands &&
          [70, 92, 112, 132].map((y, i) => (
            <rect key={y} x="30" y={y} width="140" height={i % 2 ? 7 : 11} fill={dark} opacity="0.22" />
          ))}
        {look.spot && id === "earth" && (
          <>
            <path d="M70 70 q20 -15 35 5 q-5 20 -25 18 q-15 -5 -10 -23z" fill={look.spot} />
            <path d="M115 110 q20 -5 25 15 q-10 20 -30 10z" fill={look.spot} />
          </>
        )}
        {look.spot && id === "jupiter" && <ellipse cx="125" cy="120" rx="16" ry="9" fill={look.spot} />}
        {look.spot && id === "pluto" && <path d="M95 110 q20 -20 35 0 q-5 25 -18 28 q-15 -10 -17 -28z" fill={look.spot} opacity="0.8" />}
      </g>
      {look.rings && (
        <path d="M 4 100 A 96 22 0 0 0 196 100" fill="none" stroke={look.rings} strokeWidth="9" opacity="0.9" transform="rotate(-18 100 100)" />
      )}
      <circle cx="78" cy="74" r="14" fill="white" opacity="0.18" />
    </svg>
  );
}
