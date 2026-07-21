"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    const particles: Particle[] = []
    const mouse = { x: -9999, y: -9999 }
    let raf = 0

    const COUNT = 260
    const RADIUS = 300 // gathering radius around center

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      particles.length = 0
      const cx = width / 2
      const cy = height / 2
      for (let i = 0; i < COUNT; i++) {
        const angle = Math.random() * Math.PI * 2
        const dist = Math.pow(Math.random(), 0.5) * RADIUS
        particles.push({
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        })
      }
    }

    function tick() {
      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2
      ctx.fillStyle = "rgba(180,180,190,0.65)"

      for (const p of particles) {
        // gentle drift
        p.x += p.vx
        p.y += p.vy

        // pull back toward center to keep the cloud contained
        const dxc = cx - p.x
        const dyc = cy - p.y
        const distC = Math.hypot(dxc, dyc) || 1
        if (distC > RADIUS) {
          p.vx += (dxc / distC) * 0.02
          p.vy += (dyc / distC) * 0.02
        }

        // mouse repulsion
        const dxm = p.x - mouse.x
        const dym = p.y - mouse.y
        const distM = Math.hypot(dxm, dym)
        if (distM < 120) {
          const force = (120 - distM) / 120
          p.vx += (dxm / (distM || 1)) * force * 0.6
          p.vy += (dym / (distM || 1)) * force * 0.6
        }

        // friction
        p.vx *= 0.96
        p.vy *= 0.96

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }

    function onMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function onLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    seed()
    tick()

    window.addEventListener("resize", () => {
      resize()
      seed()
    })
    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
}
