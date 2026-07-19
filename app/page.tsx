import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LiveClock } from "@/components/live-clock"
import { ScrollMarquee } from "@/components/scroll-marquee"
import { Reveal } from "@/components/reveal"

const marquee = "minimalism • obsession • perfectionism • aesthetics"

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
        </section>
      </main>

      <SiteFooter wordmark />
    </div>
  )
}
