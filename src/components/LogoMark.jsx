import { useId } from 'react'

// The Aksiom brand mark, traced from the official Visual Identity 1.0 source
// (AKSIOM_001.svg) — a triangle of 6 nodes joined by 3 chevron-shaped struts,
// each shape sharing the same top-to-bottom gradient recipe.
// Colors are fixed (not theme-driven): the mark reads the same on any background.
// Gradient ids are scoped with useId() so multiple instances (e.g. navbar + footer) don't collide.

const NODES = [
  { key: 'top', cx: 50, cy: 12.35 },
  { key: 'mr', cx: 68.83, cy: 44.89 },
  { key: 'ml', cx: 31.17, cy: 44.89 },
  { key: 'bl', cx: 12.35, cy: 77.5 },
  { key: 'bm', cx: 50, cy: 77.5 },
  { key: 'br', cx: 87.65, cy: 77.5 },
]
const NODE_R = 8.35

const STRUTS = [
  {
    key: 'up-top',
    d: 'M72.04 46.81 L27.96 46.81 L50.0 8.64 Z M34.39 43.1 L65.62 43.1 L50.01 16.05 Z',
    gy1: 8.64,
    gy2: 46.81,
    gx: 50,
  },
  {
    key: 'up-left',
    d: 'M53.22 79.36 L9.13 79.36 L31.17 41.19 Z M15.56 75.65 L46.8 75.65 L31.19 48.6 Z',
    gy1: 41.19,
    gy2: 79.36,
    gx: 31.17,
  },
  {
    key: 'up-right',
    d: 'M90.87 79.36 L46.78 79.36 L68.83 41.19 Z M53.22 75.65 L84.45 75.65 L68.84 48.6 Z',
    gy1: 41.19,
    gy2: 79.36,
    gx: 68.83,
  },
]

// Shared gradient recipe used by every node and strut in the mark.
function GradientStops() {
  return (
    <>
      <stop offset="0" stopColor="#95D0FE" />
      <stop offset="0.2" stopColor="#2894FD" />
      <stop offset="0.7" stopColor="#6DE8FD" />
      <stop offset="1" stopColor="#235DFE" />
    </>
  )
}

export default function LogoMark({ size = 32, className = '' }) {
  const uid = useId()
  const id = (name) => `aksiom-${name}-${uid}`

  return (
    <svg
      width={size}
      height={(size * 90) / 100}
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {STRUTS.map((s) => (
          <linearGradient key={s.key} id={id(`strut-${s.key}`)} x1={s.gx} y1={s.gy1} x2={s.gx} y2={s.gy2} gradientUnits="userSpaceOnUse">
            <GradientStops />
          </linearGradient>
        ))}
        {NODES.map((n) => (
          <linearGradient key={n.key} id={id(`node-${n.key}`)} x1={n.cx} y1={n.cy - NODE_R} x2={n.cx} y2={n.cy + NODE_R} gradientUnits="userSpaceOnUse">
            <GradientStops />
          </linearGradient>
        ))}
      </defs>

      {STRUTS.map((s) => (
        <path key={s.key} d={s.d} fill={`url(#${id(`strut-${s.key}`)})`} />
      ))}
      {NODES.map((n) => (
        <circle key={n.key} cx={n.cx} cy={n.cy} r={NODE_R} fill={`url(#${id(`node-${n.key}`)})`} />
      ))}
    </svg>
  )
}
