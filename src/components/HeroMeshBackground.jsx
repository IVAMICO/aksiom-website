// Redesigned hero background: an asymmetric composition instead of a uniform
// centered texture. The node network (traced from Visual Identity 1.0's
// AKSIOM_001.svg) is anchored to two opposite corners and fades out toward
// the center, so it reads as a deliberate frame rather than a full-bleed
// grid. A single large, very faint copy of the full-color logo mark bleeds
// off the bottom-right corner as a focal anchor, with a soft matching glow
// behind it tying the composition together.

const cornerMask = [
  'radial-gradient(circle 46vw at 0% 0%, black 0%, transparent 55%)',
  'radial-gradient(circle 52vw at 100% 100%, black 0%, transparent 60%)',
].join(', ')

export default function HeroMeshBackground() {
  return (
    <>
      {/* soft color anchor behind the big corner mark */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(35,93,254,0.16) 0%, transparent 70%)',
        }}
      />

      {/* the small node network, anchored to opposite corners */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.10]"
        style={{
          backgroundImage: 'url(/hero-pattern.svg)',
          backgroundSize: '640px 360px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          WebkitMaskImage: cornerMask,
          maskImage: cornerMask,
        }}
      />

      {/* one large, faint copy of the full mark, bleeding off the corner */}
      <svg
        className="absolute -bottom-[12%] -right-[8%] w-[46vw] h-[41vw] max-w-[620px] max-h-[558px] opacity-[0.14]"
        viewBox="0 0 100 90"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bigmark-s1" x1="50" y1="8.64" x2="50" y2="46.81" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95D0FE" /><stop offset="0.2" stopColor="#2894FD" /><stop offset="0.7" stopColor="#6DE8FD" /><stop offset="1" stopColor="#235DFE" /></linearGradient>
          <linearGradient id="bigmark-s2" x1="31.17" y1="41.19" x2="31.17" y2="79.36" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95D0FE" /><stop offset="0.2" stopColor="#2894FD" /><stop offset="0.7" stopColor="#6DE8FD" /><stop offset="1" stopColor="#235DFE" /></linearGradient>
          <linearGradient id="bigmark-s3" x1="68.83" y1="41.19" x2="68.83" y2="79.36" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95D0FE" /><stop offset="0.2" stopColor="#2894FD" /><stop offset="0.7" stopColor="#6DE8FD" /><stop offset="1" stopColor="#235DFE" /></linearGradient>
          <linearGradient id="bigmark-ntop" x1="50" y1="4" x2="50" y2="20.7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95D0FE" /><stop offset="0.2" stopColor="#2894FD" /><stop offset="0.7" stopColor="#6DE8FD" /><stop offset="1" stopColor="#235DFE" /></linearGradient>
          <linearGradient id="bigmark-nmr" x1="68.83" y1="36.54" x2="68.83" y2="53.24" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95D0FE" /><stop offset="0.2" stopColor="#2894FD" /><stop offset="0.7" stopColor="#6DE8FD" /><stop offset="1" stopColor="#235DFE" /></linearGradient>
          <linearGradient id="bigmark-nml" x1="31.17" y1="36.54" x2="31.17" y2="53.24" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95D0FE" /><stop offset="0.2" stopColor="#2894FD" /><stop offset="0.7" stopColor="#6DE8FD" /><stop offset="1" stopColor="#235DFE" /></linearGradient>
          <linearGradient id="bigmark-nbl" x1="12.35" y1="69.15" x2="12.35" y2="85.85" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95D0FE" /><stop offset="0.2" stopColor="#2894FD" /><stop offset="0.7" stopColor="#6DE8FD" /><stop offset="1" stopColor="#235DFE" /></linearGradient>
          <linearGradient id="bigmark-nbm" x1="50" y1="69.15" x2="50" y2="85.85" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95D0FE" /><stop offset="0.2" stopColor="#2894FD" /><stop offset="0.7" stopColor="#6DE8FD" /><stop offset="1" stopColor="#235DFE" /></linearGradient>
          <linearGradient id="bigmark-nbr" x1="87.65" y1="69.15" x2="87.65" y2="85.85" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#95D0FE" /><stop offset="0.2" stopColor="#2894FD" /><stop offset="0.7" stopColor="#6DE8FD" /><stop offset="1" stopColor="#235DFE" /></linearGradient>
        </defs>
        <path d="M72.04 46.81 L27.96 46.81 L50.0 8.64 Z M34.39 43.1 L65.62 43.1 L50.01 16.05 Z" fill="url(#bigmark-s1)" />
        <path d="M53.22 79.36 L9.13 79.36 L31.17 41.19 Z M15.56 75.65 L46.8 75.65 L31.19 48.6 Z" fill="url(#bigmark-s2)" />
        <path d="M90.87 79.36 L46.78 79.36 L68.83 41.19 Z M53.22 75.65 L84.45 75.65 L68.84 48.6 Z" fill="url(#bigmark-s3)" />
        <circle cx="50" cy="12.35" r="8.35" fill="url(#bigmark-ntop)" />
        <circle cx="68.83" cy="44.89" r="8.35" fill="url(#bigmark-nmr)" />
        <circle cx="31.17" cy="44.89" r="8.35" fill="url(#bigmark-nml)" />
        <circle cx="12.35" cy="77.5" r="8.35" fill="url(#bigmark-nbl)" />
        <circle cx="50" cy="77.5" r="8.35" fill="url(#bigmark-nbm)" />
        <circle cx="87.65" cy="77.5" r="8.35" fill="url(#bigmark-nbr)" />
      </svg>
    </>
  )
}
