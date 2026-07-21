import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"

const works = [
  { no: "01", title: "gravity protocol | web3 & decentralized infrastructure platform", type: "web application" },
  { no: "02", title: "e-mate | gen-z focused AI educational platform", type: "web & mobile application" },
  { no: "03", title: "paws find | lost & found pet recovery app", type: "mobile application" },
]

const discoveries = [
  {
    no: "discovery 01",
    draw: "draw a puzzle piece",
    title: "i see the system",
    body: "i look at how the entire application connects—from frontend state management and ui layout to backend data flow and api integration.",
  },
  {
    no: "discovery 02",
    draw: "draw a pen",
    title: "i build end-to-end",
    body: "i write code across the stack using modern frameworks like react native and firebase, bridging the gap between design and functionality.",
  },
  {
    no: "discovery 03",
    draw: "draw a checkmark",
    title: "i keep it solid",
    body: "i don't call it done until the code is clean, the performance is smooth, and the user experience feels native and robust.",
  },
]

const nowItems = [
  "living in delhi",
  "founder of Diratech Solutions",
  "building apps and exploring ai integration",
  "reading, coding, and shipping code",
  "deep into mobile and web development",
]

const thoughts = [
  { no: "01", title: "aesthetics", body: "beauty comes not from adding, but from taking away. let only what is needed remain." },
  { no: "02", title: "entropy", body: "order doesn't hold on its own; it takes effort. the moment you let go, it scatters." },
  { no: "03", title: "ration", body: "reason is the quiet filter. it keeps only what earns its place and lets the rest fall away." },
]

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="font-mono text-sm tracking-widest text-foreground/50">
      {children}
    </span>
  )
}

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24 pt-32 sm:pt-40">
        {/* Intro */}
        <section className="mb-28">
          <h1 className="text-pretty text-4xl font-light leading-tight text-foreground sm:text-6xl">
            i trust my eye, not my hands.
            <br />
            i catch what most skip.
            <br />
            and i never rush it.
          </h1>
        </section>

        {/* Who am i */}
        <section className="mb-24 grid gap-6 border-t border-foreground/10 pt-8 lg:grid-cols-[200px_1fr]">
          <SectionLabel>[who am i]</SectionLabel>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              i&apos;m sachin. i&apos;m studying bca at jemtec (ipu), building my path through code while navigating college halls.
            </p>
            <p>
              i got hooked on software development, turning logic and architecture into real applications. since diving into the ecosystem, i code, engineer, and ship.
            </p>
          </div>
        </section>

        {/* What i do */}
        <section className="mb-24 grid gap-6 border-t border-foreground/10 pt-8 lg:grid-cols-[200px_1fr]">
          <SectionLabel>[what i do]</SectionLabel>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              i build mobile apps and web platforms from the ground up. i don&apos;t separate frontend polish from backend logic—i handle the full loop.
            </p>
            <p>
              i make mobile applications, scalable web interfaces, and full-stack systems. i take an idea, map out the architecture, and turn it into something that actually runs.
            </p>
          </div>
        </section>

        {/* Selected works */}
        <section className="mb-24 border-t border-foreground/10 pt-8">
          <div className="mb-8 flex items-baseline justify-between">
            <SectionLabel>[selected works]</SectionLabel>
            <span className="text-sm text-foreground/50">a few of the things i&apos;ve made.</span>
          </div>
          <ul className="divide-y divide-foreground/10">
            {works.map((w) => (
              <li key={w.no} className="flex items-center gap-6 py-5">
                <span className="font-mono text-sm text-foreground/40">{w.no}</span>
                <span className="flex-1 text-lg text-foreground">{w.title}</span>
                <span className="hidden text-sm text-foreground/50 sm:block">{w.type}</span>
              </li>
            ))}
          </ul>
          <a
            href="/projects"
            className="mt-6 inline-block text-sm text-foreground/60 underline-offset-4 hover:underline"
          >
            see all
          </a>
        </section>

        {/* Discover me */}
        <section className="mb-24 border-t border-foreground/10 pt-8">
          <div className="mb-8">
            <SectionLabel>[discover me]</SectionLabel>
            <p className="mt-3 text-lg text-foreground/70">
              draw the shapes below and i&apos;ll show you how i work.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {discoveries.map((d, i) => (
              <Reveal
                as="div"
                key={d.no}
                delay={i * 90}
                className="flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-secondary/40 p-6"
              >
                <span className="text-primary">&#9679;</span>
                <span className="font-mono text-xs tracking-widest text-foreground/50">
                  {d.no}
                </span>
                <span className="text-sm text-foreground/50">{d.draw}</span>
                <h3 className="text-xl text-foreground">{d.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{d.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Now */}
        <section className="mb-24 grid gap-6 border-t border-foreground/10 pt-8 lg:grid-cols-[200px_1fr]">
          <SectionLabel>[now]</SectionLabel>
          <ul className="flex flex-col gap-2 text-lg text-foreground/80">
            {nowItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-primary text-xs">&#9679;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Thought */}
        <section className="border-t border-foreground/10 pt-8">
          <div className="mb-8 max-w-2xl">
            <SectionLabel>[thought]</SectionLabel>
            <p className="mt-3 text-xl font-light leading-relaxed text-foreground/80">
              an interface is born not from pixels, but from decisions. i let go
              of the needless and leave only meaning behind.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {thoughts.map((t) => (
              <div key={t.no} className="border-t border-foreground/20 pt-4">
                <span className="font-mono text-sm text-foreground/40">{t.no}</span>
                <h3 className="mt-2 text-lg text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{t.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
