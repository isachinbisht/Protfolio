"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    const root = document.documentElement
    root.classList.add("cursor-none-root")
    dot.style.opacity = "1"
    ring.style.opacity = "1"

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { x: pos.x, y: pos.y }
    let raf = 0

    function onMove(e: MouseEvent) {
      pos.x = e.clientX
      pos.y = e.clientY
      dot!.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }

    function findInteractive(target: EventTarget | null) {
      if (!(target instanceof Element)) return null
      return target.closest<HTMLElement>(
        "a, button, input, textarea, select, [data-cursor]",
      )
    }

    function onOver(e: MouseEvent) {
      const el = findInteractive(e.target)
      const text = el?.getAttribute("data-cursor-label") ?? ""
      ring!.classList.toggle("cursor-ring--active", Boolean(el))
      ring!.classList.toggle("cursor-ring--label", Boolean(text))
      label!.textContent = text
    }

    function onDown() {
      dot!.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scale(0.6)`
    }

    function onUp() {
      dot!.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scale(1)`
    }

    function tick() {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      ring!.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      root.classList.remove("cursor-none-root")
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-label" />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
