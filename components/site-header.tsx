"use client"

import { useState, useEffect, useRef, useCallback } from "react"
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
  const [mounted, setMounted] = useState(false)
  const islandRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (islandRef.current && !islandRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [open])

  const toggle = useCallback(() => setOpen((v) => !v), [])

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

        {/* ─── Dynamic Island ─── */}
        <div className="fixed left-1/2 top-3 z-50 -translate-x-1/2" ref={islandRef}>
          <div
            className="dynamic-island"
            data-expanded={open}
            onClick={!open ? toggle : undefined}
            role={!open ? "button" : undefined}
            tabIndex={!open ? 0 : undefined}
            onKeyDown={!open ? (e) => { if (e.key === "Enter" || e.key === " ") toggle() } : undefined}
          >
            {/* ── Collapsed state ── */}
            <div className="island-collapsed" data-hidden={open}>
              <span className="island-dot" />
              <span className="island-collapsed-label">menu</span>
            </div>

            {/* ── Expanded state ── */}
            <div className="island-expanded" data-visible={open}>
              {/* Top bar */}
              <div className="island-topbar">
                <span className="island-topbar-tag">
                  <span className="island-dot" />
                  <span>hey ya</span>
                </span>
                <button
                  type="button"
                  onClick={toggle}
                  aria-expanded={open}
                  aria-label="close menu"
                  className="island-close-btn"
                >
                  close
                </button>
              </div>

              {/* Nav links */}
              <nav aria-label="main menu" className="island-nav">
                {menuLinks.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="island-link"
                    style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                    data-visible={open}
                  >
                    <span className="island-link-dot">&#9679;</span>
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Bottom bar */}
              <div className="island-bottom">
                <span className="island-bottom-name">[sachin]</span>
                <div className="island-bottom-socials">
                  <a href="https://linkedin.com/in/isachinbisht" target="_blank" rel="noreferrer" className="island-social-link">linkedin</a>
                  <a href="#" className="island-social-link">github</a>
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
