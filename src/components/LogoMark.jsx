import { useId } from 'react'

// The Aksiom brand mark — a triangular grid of six connected nodes, per Visual Identity 1.0.
// Colors are fixed (not theme-driven): the mark reads the same on any background.
// Gradient ids are scoped with useId() so multiple instances (e.g. navbar + footer) don't collide.
export default function LogoMark({ size = 32, className = '' }) {
  const uid = useId()
  const id = (name) => `aksiom-${name}-${uid}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id('edge-top-l')} x1="50" y1="12" x2="32" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6DE8FD" />
          <stop offset="1" stopColor="#95D0FE" />
        </linearGradient>
        <linearGradient id={id('edge-top-r')} x1="50" y1="12" x2="68" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6DE8FD" />
          <stop offset="1" stopColor="#95D0FE" />
        </linearGradient>
        <linearGradient id={id('edge-ml-bl')} x1="32" y1="42" x2="14" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#95D0FE" />
          <stop offset="1" stopColor="#235DFE" />
        </linearGradient>
        <linearGradient id={id('edge-ml-bm')} x1="32" y1="42" x2="50" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#95D0FE" />
          <stop offset="1" stopColor="#235DFE" />
        </linearGradient>
        <linearGradient id={id('edge-mr-bm')} x1="68" y1="42" x2="50" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#95D0FE" />
          <stop offset="1" stopColor="#235DFE" />
        </linearGradient>
        <linearGradient id={id('edge-mr-br')} x1="68" y1="42" x2="86" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#95D0FE" />
          <stop offset="1" stopColor="#235DFE" />
        </linearGradient>
        <radialGradient id={id('node-top')} cx="0.35" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#EAFBFF" />
          <stop offset="1" stopColor="#6DE8FD" />
        </radialGradient>
        <radialGradient id={id('node-mid')} cx="0.35" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#EEF7FF" />
          <stop offset="1" stopColor="#95D0FE" />
        </radialGradient>
        <radialGradient id={id('node-bottom')} cx="0.35" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#6FA6FF" />
          <stop offset="1" stopColor="#235DFE" />
        </radialGradient>
      </defs>

      <line x1="50" y1="12" x2="32" y2="42" stroke={`url(#${id('edge-top-l')})`} strokeWidth="7" strokeLinecap="round" />
      <circle cx="41" cy="27" r="2.4" fill="#FFFFFF" fillOpacity="0.55" />
      <line x1="50" y1="12" x2="68" y2="42" stroke={`url(#${id('edge-top-r')})`} strokeWidth="7" strokeLinecap="round" />
      <circle cx="59" cy="27" r="2.4" fill="#FFFFFF" fillOpacity="0.55" />
      <line x1="32" y1="42" x2="68" y2="42" stroke="#95D0FE" strokeWidth="7" strokeLinecap="round" />
      <circle cx="50" cy="42" r="2.4" fill="#FFFFFF" fillOpacity="0.55" />
      <line x1="32" y1="42" x2="14" y2="74" stroke={`url(#${id('edge-ml-bl')})`} strokeWidth="7" strokeLinecap="round" />
      <circle cx="23" cy="58" r="2.4" fill="#FFFFFF" fillOpacity="0.55" />
      <line x1="32" y1="42" x2="50" y2="74" stroke={`url(#${id('edge-ml-bm')})`} strokeWidth="7" strokeLinecap="round" />
      <circle cx="41" cy="58" r="2.4" fill="#FFFFFF" fillOpacity="0.55" />
      <line x1="68" y1="42" x2="50" y2="74" stroke={`url(#${id('edge-mr-bm')})`} strokeWidth="7" strokeLinecap="round" />
      <circle cx="59" cy="58" r="2.4" fill="#FFFFFF" fillOpacity="0.55" />
      <line x1="68" y1="42" x2="86" y2="74" stroke={`url(#${id('edge-mr-br')})`} strokeWidth="7" strokeLinecap="round" />
      <circle cx="77" cy="58" r="2.4" fill="#FFFFFF" fillOpacity="0.55" />
      <line x1="14" y1="74" x2="50" y2="74" stroke="#235DFE" strokeWidth="7" strokeLinecap="round" />
      <circle cx="32" cy="74" r="2.4" fill="#FFFFFF" fillOpacity="0.55" />
      <line x1="50" y1="74" x2="86" y2="74" stroke="#235DFE" strokeWidth="7" strokeLinecap="round" />
      <circle cx="68" cy="74" r="2.4" fill="#FFFFFF" fillOpacity="0.55" />

      <circle cx="50" cy="12" r="11" fill={`url(#${id('node-top')})`} />
      <circle cx="32" cy="42" r="11" fill={`url(#${id('node-mid')})`} />
      <circle cx="68" cy="42" r="11" fill={`url(#${id('node-mid')})`} />
      <circle cx="14" cy="74" r="11" fill={`url(#${id('node-bottom')})`} />
      <circle cx="50" cy="74" r="11" fill={`url(#${id('node-bottom')})`} />
      <circle cx="86" cy="74" r="11" fill={`url(#${id('node-bottom')})`} />
    </svg>
  )
}
