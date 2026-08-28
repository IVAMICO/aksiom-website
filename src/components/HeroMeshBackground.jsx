// A continuous triangular mesh built from the logo's node-and-strut motif, per
// Visual Identity 1.0's dark-mode background treatment — tiles seamlessly across
// the hero, fading out toward the center via a radial mask so text stays clear.
const TILE_W = 70
const TILE_H = 121.24

export default function HeroMeshBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
      <defs>
        <pattern id="aksiom-mesh" x="0" y="0" width={TILE_W} height={TILE_H} patternUnits="userSpaceOnUse">
          <g stroke="#6DE8FD" fill="#6DE8FD" strokeWidth="1.6" strokeLinecap="round" opacity="0.35">
            <line x1="0" y1="0" x2="70" y2="0" />
            <line x1="0" y1="0" x2="35" y2="60.62" />
            <line x1="70" y1="0" x2="35" y2="60.62" />
            <line x1="35" y1="60.62" x2="0" y2="121.24" />
            <line x1="35" y1="60.62" x2="70" y2="121.24" />
            <circle cx="0" cy="0" r="3.2" />
            <circle cx="35" cy="60.62" r="3.2" />
          </g>
        </pattern>
        <radialGradient id="aksiom-mesh-fade" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="55%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </radialGradient>
        <mask id="aksiom-mesh-mask">
          <rect width="100%" height="100%" fill="url(#aksiom-mesh-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#aksiom-mesh)" mask="url(#aksiom-mesh-mask)" />
    </svg>
  )
}
