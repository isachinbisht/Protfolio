"use client"

import { useEffect, useState } from "react"

export function LiveClock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    function update() {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="font-mono text-sm tabular-nums text-foreground/50">
      {time || "00:00:00"}
    </span>
  )
}
