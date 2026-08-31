// No real logos yet — swap these placeholder entries for real client names
// (and optionally a `logo` image path) once there's something to show.
const CLIENTS = [
  { name: 'Company One' },
  { name: 'Company Two' },
  { name: 'Company Three' },
  { name: 'Company Four' },
  { name: 'Company Five' },
  { name: 'Company Six' },
]

function LogoRow({ ariaHidden }) {
  return (
    <div className="flex items-center gap-12 pr-12" aria-hidden={ariaHidden}>
      {CLIENTS.map((client, i) => (
        <div key={i} className="flex items-center shrink-0">
          {client.logo ? (
            <img src={client.logo} alt={client.name} className="h-5 w-auto opacity-50 grayscale" />
          ) : (
            <span className="text-sm font-medium tracking-tight text-fg-disabled whitespace-nowrap">
              {client.name}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-center text-[11px] font-medium tracking-[0.15em] text-fg-disabled/70 uppercase mb-4">
          Built for finance and tax teams at
        </p>
      </div>

      <div
        className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-marquee" style={{ animationDuration: '28s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
          <LogoRow />
          <LogoRow ariaHidden="true" />
        </div>
      </div>
    </section>
  )
}
