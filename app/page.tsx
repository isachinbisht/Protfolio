import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LiveClock } from "@/components/live-clock"
import { ScrollMarquee } from "@/components/scroll-marquee"
import { Reveal } from "@/components/reveal"

const marquee = "minimalism • obsession • perfectionism • aesthetics"

const galleryWorks = [
  {
    title: "E-mate | An smart learning platform",
    client: "Diratech Solutions(Under Dev)",
    image: "/projects/skynotech-platform.png",
    src: "",
  },
  {
    title: "UI/UX  | Restaurant management Web-App",
    client: "Internship Project (DigiSamaksh)",
    image: "/projects/skynotech-web.png",
    src: "",
  },
  {
    title: "Apple UI/UX Redesign | E-Commerce",
    client: "Personal Project",
    image: "/projects/balikesir-employment.png",
    src: "",
  },
  {
    title: "Gravity protocol | Crypto Trading Web-App",
    client: "Stellar (Hackathon)",
    image: "/projects/balikesir-event.png",
    src: "https://gravity-protocol-landing-page-pe8409u3i-isachinbishts-projects.vercel.app/",
  },
  {
    title: "Axiom Landing Page | Web-App",
    client: "Diratech Solutions",
    image: "/projects/yakinkart.png",
    src: "https://aaxiom.netlify.app/",
  },
  {
    title: "MPDA Corporate Website | Web-App",
    client: "MPDA",
    image: "/projects/bapka.png",
    src: "",
  },
]

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sachin Bisht",
    jobTitle: "Founder & Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Diratech Solutions",
    },
    url: "https://isachinbisht.com",
    sameAs: [
      "https://github.com/isachinbisht",
      "https://www.linkedin.com/in/isachinbisht/",
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Diratech Solutions",
    "legalName": "Diratech Solutions",
    "url": "https://isachinbisht.com",
    "logo": "https://isachinbisht.com/hero-portrait.png",
    "founder": {
      "@type": "Person",
      "name": "Sachin Bisht",
      "sameAs": [
        "https://www.linkedin.com/in/isachinbisht/",
        "https://github.com/isachinbisht"
      ]
    },
    "description": "Diratech Solutions is a technology firm specializing in web applications, AI platforms, and decentralized software architecture.",
    "sameAs": [
      "https://www.linkedin.com/company/diratech",
      "https://github.com/isachinbisht"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="flex min-h-svh flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero: centered portrait with marquee scrolling across it */}
        <section className="relative flex min-h-svh w-full flex-col">
          <div className="flex items-center justify-between px-6 pt-24 sm:pt-28">
            <LiveClock />
            <span className="flex items-center gap-2 text-sm text-foreground/50">
              <span className="text-primary">&#9711;</span>
              hey ya
            </span>
          </div>

          <div className="relative flex flex-1 flex-col items-center justify-center py-12">
            {/* Portrait image */}
            <Reveal className="w-[min(70vw,420px)]">
              <div
                data-cursor-label="that's me"
                className="relative aspect-[3/4] w-full overflow-hidden"
              >
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
              [sachin bisht]
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

        {/* About band */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-3">
            <Reveal className="order-2 lg:order-1">
              <p className="font-mono text-sm text-foreground/60">[hey, i&apos;m]</p>
              <p className="mt-1 font-mono text-sm text-foreground/60">
                [sachin bisht]
              </p>
            </Reveal>

            <Reveal delay={120} className="order-1 flex justify-center lg:order-2">
              <div className="relative aspect-[3/4] w-[min(60vw,240px)] overflow-hidden">
                <Image
                  src="/about-portrait.png"
                  alt="Sachin Bisht"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 60vw, 240px"
                />
              </div>
            </Reveal>

            <Reveal delay={200} className="order-3">
              <p className="max-w-xs text-pretty text-base leading-relaxed text-foreground/80">
                i design, and i write code. what i care about is making the
                complex simple — and the simple meaningful.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="mx-auto mt-24 max-w-3xl text-center sm:mt-32">
            <p className="text-pretty text-2xl font-light leading-snug text-foreground/30 sm:text-3xl">
              i don&apos;t rush. i leave every line and every empty space as if
              it will stay for years.
            </p>
            <Link
              href="/about-me"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary/70"
            >
              <span className="text-primary">&#9679;</span> my story
            </Link>
          </Reveal>
        </section>

        {/* Full-bleed projects gallery */}
        <section className="relative w-full">
          <Reveal className="pointer-events-none absolute left-1/2 top-6 z-10 -translate-x-1/2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">
              <span>&#9679;</span> quick peek
            </span>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {galleryWorks.map((w, i) => (
              <Reveal as="div" key={w.title} delay={(i % 3) * 90}>
                <Link
                  href={w.src || "/projects"}
                  target={w.src ? "_blank" : undefined}
                  rel={w.src ? "noreferrer" : undefined}
                  data-cursor-label="quick peek"
                  className="group block"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary/60 sm:aspect-[4/5]">
                    <Image
                      src={w.image || "/placeholder.svg"}
                      alt={w.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-6">
                    <h3 className="text-base text-foreground sm:text-lg">{w.title}</h3>
                    <p className="mt-1 text-sm text-foreground/50">{w.client}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="flex justify-center pb-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span>&#9679;</span> see more
            </Link>
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
    </>
  )
}
