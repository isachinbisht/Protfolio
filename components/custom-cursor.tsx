"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    setEnabled(true)

    const root = document.documentElement
    root.classList.add("cursor-none-root")

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { x: pos.x, y: pos.y }
    let raf = 0

    function onMove(e: MouseEvent) {
      pos.x = e.clientX
      pos.y = e.clientY
      dot!.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }

    function isInteractive(target: EventTarget | null) {
      return (
        target instanceof Element &&
        target.closest("a, button, input, textarea, select, [data-cursor]")
      )
    }

    function onOver(e: MouseEvent) {
      ring!.classList.toggle("cursor-ring--active", Boolean(isInteractive(e.target)))
    }

    function tick() {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      ring!.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      root.classList.remove("cursor-none-root")
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
