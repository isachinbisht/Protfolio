"use client"

import { useEffect, useRef } from "react"

type ScrollMarqueeProps = {
  text: string
  /** number of repeated copies (kept even so the loop wraps seamlessly) */
  repeat?: number
  itemClassName?: string
  className?: string
}

export function ScrollMarquee({
  text,
  repeat = 8,
  itemClassName = "flex items-center text-7xl font-medium tracking-tight sm:text-8xl md:text-9xl",
  className,
}: ScrollMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const offset = useRef(0)
  const velocity = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let half = track.scrollWidth / 2
    let raf = 0
    const base = 0.6 // baseline px/frame drift

    function onResize() {
      half = track!.scrollWidth / 2
    }

    function onWheel(e: WheelEvent) {
      // scrolling injects horizontal velocity into the marquee
      velocity.current += e.deltaY * 0.03
    }

    function tick() {
      velocity.current *= 0.92
      offset.current -= base + velocity.current
      if (half > 0) {
        if (offset.current <= -half) offset.current += half
        else if (offset.current > 0) offset.current -= half
      }
      track!.style.transform = `translate3d(${offset.current}px, 0, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("resize", onResize)
    window.addEventListener("wheel", onWheel, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("wheel", onWheel)
    }
  }, [])

  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div ref={trackRef} className="flex shrink-0 will-change-transform">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className={itemClassName}>
            <span className="px-6 sm:px-8">&#8226;</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
