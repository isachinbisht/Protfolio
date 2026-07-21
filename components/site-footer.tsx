import Link from "next/link"

const links = [
  { label: "home", href: "/" },
  { label: "aboutme", href: "/about-me" },
  { label: "manifest", href: "/manifest" },
  { label: "projects", href: "/projects" },
]

const socials = [
  { label: "linkedin", href: "https://linkedin.com/in/isachinbisht" },
  { label: "github", href: "https://github.com" },
]

export function SiteFooter({ wordmark = false }: { wordmark?: boolean }) {
  return (
    <footer className="border-t border-foreground/10 px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-mono text-sm tracking-widest text-foreground/50">
            [contact]
          </span>
          <Link
            href="/contact-me"
            className="mt-3 block text-2xl text-foreground transition-opacity hover:opacity-70"
          >
            get in touch
          </Link>
        </div>

        <nav aria-label="footer" className="contents">
          <div>
            <span className="font-mono text-sm tracking-widest text-foreground/50">
              [links]
            </span>
            <ul className="mt-3 flex flex-col gap-1.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-sm tracking-widest text-foreground/50">
              [connect]
            </span>
            <ul className="mt-3 flex flex-col gap-1.5">
              {socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="flex items-end">
          <p className="text-sm text-foreground/50">
            designed &amp; built by sachin bisht &copy; 2026
          </p>
        </div>
      </div>

      {wordmark && (
        <div className="mx-auto mt-12 max-w-6xl">
          <p className="select-none text-center font-mono text-[22vw] font-medium leading-none tracking-tighter text-foreground lg:text-[16rem]">
            [Sayonara]
          </p>
        </div>
      )}
    </footer>
  )
}
