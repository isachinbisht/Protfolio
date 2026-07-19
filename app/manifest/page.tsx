import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const index = [
  { no: "01", label: "white" },
  { no: "02", label: "entropy" },
  { no: "03", label: "pareto" },
  { no: "04", label: "observer" },
  { no: "05", label: "dichotomy" },
  { no: "06", label: "choice" },
  { no: "07", label: "loss" },
  { no: "08", label: "dilemma" },
  { no: "09", label: "remains" },
]

export default function ManifestPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24 pt-32 sm:pt-40">
        {/* Intro */}
        <section className="mb-20">
          <span className="font-mono text-sm tracking-widest text-foreground/50">
            [manifest]
          </span>
          <p className="mt-6 max-w-2xl text-pretty text-3xl font-light leading-snug text-foreground sm:text-4xl">
            i don&apos;t see design as decoration. i strip the unnecessary from
            an interface, a sentence, a day. what remains isn&apos;t less,
            it&apos;s clearer.
          </p>
          <p className="mt-10 text-sm text-foreground/50">
            the ideas begin below, scroll
          </p>
        </section>

        {/* Index */}
        <section className="mb-24 border-y border-foreground/10">
          <ul className="divide-y divide-foreground/10">
            {index.map((item) => (
              <li
                key={item.no}
                className="group flex items-center gap-6 py-5 transition-colors hover:bg-secondary/40"
              >
                <span className="font-mono text-sm text-foreground/40">{item.no}</span>
                <span className="text-2xl font-light text-foreground transition-transform group-hover:translate-x-2">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* White on white */}
        <section className="mb-20 grid gap-6 lg:grid-cols-[220px_1fr]">
          <span className="font-mono text-sm tracking-widest text-foreground/50">
            [white on white]
          </span>
          <div className="max-w-2xl">
            <h2 className="mb-5 text-2xl font-light text-foreground">
              what does &lsquo;white on white&rsquo; mean?
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              in design, light is the father of form. hiding shadows is easy;
              mastering light requires craft. pure white is a screen&apos;s
              highest energy state. i do not hide the energy; i harness it
              through architecture.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary/70"
            >
              <span className="text-primary">&#9679;</span> apply energy
            </a>
          </div>
        </section>

        {/* Entropy */}
        <section className="grid gap-6 border-t border-foreground/10 pt-8 lg:grid-cols-[220px_1fr]">
          <span className="font-mono text-sm tracking-widest text-foreground/50">
            [the entropy of mind]
          </span>
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-foreground/80">
              order is not a state; it is an expense. it exists while you hold,
              and scatters when you let go. behind every standing system, someone
              is paying the cost. i pay it gladly.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground"
            >
              <span className="text-primary">&#9679;</span> read more
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
