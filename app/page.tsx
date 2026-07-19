import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LiveClock } from "@/components/live-clock"

const marquee = "minimalism • obsession • perfectionism • aesthetics"

function MarqueeRow() {
  return (
    <div className="flex whitespace-nowrap">
      {[0, 1].map((dup) => (
        <div
          key={dup}
          aria-hidden={dup > 0}
          className="flex shrink-0 animate-marquee items-center"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 pr-8 text-7xl font-medium tracking-tight sm:text-8xl md:text-9xl"
            >
              <span>&#8226;</span>
              {marquee}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

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
            <div className="relative aspect-[3/4] w-[min(70vw,420px)] overflow-hidden">
              <Image
                src="/hero-portrait.png"
                alt="Yunus Emre Korkmaz portrait"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 70vw, 420px"
              />
            </div>

            <p className="mt-6 text-sm tracking-wide text-foreground/40">
              [yunus emre korkmaz]
            </p>

            {/* Marquee overlaid across the vertical center, inverting over the image */}
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden text-white mix-blend-difference">
              <MarqueeRow />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter wordmark />
    </div>
  )
}
