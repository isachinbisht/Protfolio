import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LiveClock } from "@/components/live-clock"
import { ScrollMarquee } from "@/components/scroll-marquee"
import { Reveal } from "@/components/reveal"

const marquee = "minimalism • obsession • perfectionism • aesthetics"

const selectedWorks = [
  { no: "01", title: "skynotech | iot smart site management platform", type: "web application" },
  { no: "02", title: "balıkesir digital employment platform", type: "web application" },
  { no: "03", title: "yakın kart | social financial assistance app", type: "mobile application" },
]

const principles = [
  { no: "01", title: "aesthetics", body: "beauty comes not from adding, but from taking away. let only what is needed remain." },
  { no: "02", title: "entropy", body: "order doesn't hold on its own; it takes effort. the moment you let go, it scatters." },
  { no: "03", title: "ration", body: "reason is the quiet filter. it keeps only what earns its place." },
]

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero: centered portrait with marquee scrolling across it */}
        <section className="relative flex min-h-svh w-full flex-col">
          <div className="flex items-center justify-between px-6 pt-24 sm:pt-28">
            <LiveClock />
            <span className="flex items-center gap-2 text-sm text-foreground/50">
              <span className="text-primary">&#9711;</span>
              lend an ear
            </span>
          </div>

          <div className="relative flex flex-1 flex-col items-center justify-center py-12">
            {/* Portrait image */}
            <Reveal className="w-[min(70vw,420px)]">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/hero-portrait.png"
                  alt="Yunus Emre Korkmaz portrait"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 70vw, 420px"
                />
              </div>
            </Reveal>

            <p className="mt-6 text-sm tracking-wide text-foreground/40">
              [yunus emre korkmaz]
            </p>

            {/* Marquee overlaid across the vertical center, inverting over the image.
                Speed reacts to scroll velocity. */}
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-white mix-blend-difference">
              <ScrollMarquee text={marquee} />
            </div>
          </div>

          <div className="flex justify-center pb-10">
            <span className="animate-bounce font-mono text-xs tracking-widest text-foreground/40">
              scroll
            </span>
          </div>
        </section>

        {/* Intro statement */}
        <section className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
          <Reveal className="grid gap-6 border-t border-foreground/10 pt-8 lg:grid-cols-[200px_1fr]">
            <span className="font-mono text-sm tracking-widest text-foreground/50">
              [intro]
            </span>
            <h2 className="max-w-3xl text-pretty text-3xl font-light leading-snug text-foreground sm:text-5xl">
              i design the interface and write its code myself. i strip away the
              unnecessary until only what matters is left.
            </h2>
          </Reveal>
        </section>

        {/* Selected works */}
        <section className="mx-auto w-full max-w-5xl px-6 py-16">
          <Reveal className="mb-8 flex items-baseline justify-between border-t border-foreground/10 pt-8">
            <span className="font-mono text-sm tracking-widest text-foreground/50">
              [selected works]
            </span>
            <Link
              href="/projects"
              className="text-sm text-foreground/60 underline-offset-4 hover:underline"
            >
              see all
            </Link>
          </Reveal>
          <ul className="divide-y divide-foreground/10">
            {selectedWorks.map((w, i) => (
              <Reveal as="li" key={w.no} delay={i * 80}>
                <Link
                  href="/projects"
                  className="group flex items-center gap-6 py-6 transition-colors hover:bg-secondary/40"
                >
                  <span className="font-mono text-sm text-foreground/40">{w.no}</span>
                  <span className="flex-1 text-lg text-foreground transition-transform group-hover:translate-x-2 sm:text-2xl">
                    {w.title}
                  </span>
                  <span className="hidden text-sm text-foreground/50 sm:block">{w.type}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Principles teaser */}
        <section className="mx-auto w-full max-w-5xl px-6 py-16">
          <Reveal className="mb-8 flex items-baseline justify-between border-t border-foreground/10 pt-8">
            <span className="font-mono text-sm tracking-widest text-foreground/50">
              [principles]
            </span>
            <Link
              href="/manifest"
              className="text-sm text-foreground/60 underline-offset-4 hover:underline"
            >
              read the manifest
            </Link>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="div" key={p.no} delay={i * 90} className="border-t border-foreground/20 pt-4">
                <span className="font-mono text-sm text-foreground/40">{p.no}</span>
                <h3 className="mt-2 text-lg text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
          <Reveal className="flex flex-col items-center border-t border-foreground/10 pt-16 text-center">
            <h2 className="max-w-xl text-pretty text-3xl font-light text-foreground/70 sm:text-4xl">
              let&apos;s build something meaningful.
            </h2>
            <p className="mt-4 max-w-md text-sm text-foreground/50">
              my door is open. if you have a good idea or a problem to solve,
              let&apos;s talk.
            </p>
            <Link
              href="/contact-me"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary/70"
            >
              <span className="text-primary">&#9679;</span> get in touch
            </Link>
          </Reveal>
        </section>
      </main>

      <SiteFooter wordmark />
    </div>
  )
}
