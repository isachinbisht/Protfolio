import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const filters = [
  "all",
  "municipal",
  "startup",
  "dashboard / admin",
  "ui/ux",
  "web apps",
  "mobile apps",
]

const projects = [
  {
    title: "skynotech | iot smart site management platform",
    client: "skynotech",
    image: "/projects/skynotech-platform.png",
  },
  {
    title: "skynotech | corporate brand & web presence",
    client: "skynotech",
    image: "/projects/skynotech-web.png",
  },
  {
    title: "balıkesir digital employment platform",
    client: "balıkesir metropolitan municipality",
    image: "/projects/balikesir-employment.png",
  },
  { title: "balıkesir | event app", client: "balıkesir metropolitan municipality" },
  { title: "yakın kart | social financial assistance app", client: "balıkesir metropolitan municipality" },
  { title: "bapka corporate website & information hub", client: "balıkesir planning and development agency" },
  { title: "askıda fatura | social solidarity platform", client: "balıkesir metropolitan municipality" },
  { title: "can dostlar | safe animal adoption platform", client: "balıkesir metropolitan municipality" },
  { title: "balıkesir | pharmacy finder", client: "balıkesir metropolitan municipality" },
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24 pt-32 sm:pt-40">
        {/* Intro */}
        <section className="mb-10 grid gap-6 lg:grid-cols-[120px_1fr]">
          <span className="font-mono text-sm tracking-widest text-foreground/50">
            [works]
          </span>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80">
            a selection of work i&apos;ve designed and built over the past years.
            from municipal platforms to startup products, in all of them i was
            after the same thing: a simple interface and a flow that eases the
            user&apos;s job.
          </p>
        </section>

        {/* Filter bar */}
        <div className="mb-12 flex flex-wrap gap-x-6 gap-y-2 border-y border-foreground/10 py-4">
          {filters.map((f, i) => (
            <button
              key={f}
              type="button"
              className={`flex items-center gap-2 text-sm transition-colors ${
                i === 0 ? "text-foreground" : "text-foreground/50 hover:text-foreground"
              }`}
            >
              <span className="text-primary text-[10px]">&#9679;</span>
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary/60">
                {p.image ? (
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="font-mono text-4xl text-foreground/10">[ ]</span>
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-base text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-foreground/50">{p.client}</p>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <section className="mt-28 flex flex-col items-center text-center">
          <h2 className="max-w-xl text-pretty text-2xl font-light text-foreground/60 sm:text-3xl">
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
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
