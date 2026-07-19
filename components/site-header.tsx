"use client"

import { useState } from "react"
import Link from "next/link"

const menuLinks = [
  { label: "home", href: "/" },
  { label: "aboutme", href: "/about-me" },
  { label: "manifest", href: "/manifest" },
  { label: "projects", href: "/projects" },
  { label: "get in touch", href: "/contact-me" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<"en" | "tr">("en")

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between">
        {/* Left pill */}
        <Link
          href="/contact-me"
          className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary/70"
        >
          <span className="text-primary">&#9679;</span>
          <span>get in touch</span>
        </Link>

        {/* Center menu button */}
        <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
          <div
            className={`overflow-hidden rounded-3xl bg-card text-card-foreground shadow-lg transition-all duration-300 ${
              open ? "w-[280px] sm:w-[320px]" : "w-[168px]"
            }`}
          >
            {/* top bar */}
            <div className="flex items-center justify-between px-5 py-3">
              {open ? (
                <span className="flex items-center gap-2 text-xs text-card-foreground/60">
                  <span>&#9675;</span>
                  <span>lend an ear</span>
                </span>
              ) : (
                <span className="font-mono text-sm tracking-widest text-card-foreground/70">
                  [ ]
                </span>
              )}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "close menu" : "open menu"}
                className="text-sm font-medium text-card-foreground transition-opacity hover:opacity-70"
              >
                {open ? "close" : "menu"}
              </button>
            </div>

            {/* expanded panel */}
            <div
              className={`grid transition-all duration-300 ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <nav aria-label="main menu" className="flex flex-col gap-1 px-5 pb-4 pt-2">
                  {menuLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-1 text-2xl text-card-foreground/80 transition-colors hover:text-card-foreground"
                    >
                      <span className="text-primary text-base">&#9679;</span>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs">
                  <span className="font-mono tracking-widest text-card-foreground/70">
                    [ yeqq ]
                  </span>
                  <div className="flex items-center gap-3 text-card-foreground/60">
                    <a href="#" className="transition-colors hover:text-card-foreground">
                      instagram
                    </a>
                    <a href="#" className="transition-colors hover:text-card-foreground">
                      github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right language toggle */}
        <button
          type="button"
          onClick={() => setLang((l) => (l === "en" ? "tr" : "en"))}
          aria-label="change language"
          className="flex items-center gap-2 rounded-full bg-accent-yellow px-4 py-2 text-sm font-medium text-foreground transition-transform hover:scale-105"
        >
          <span>&#9679;</span>
          <span>{lang}</span>
        </button>
      </div>
    </header>
  )
}
