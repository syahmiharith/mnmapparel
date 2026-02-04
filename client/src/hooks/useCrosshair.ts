"use client"

import { useEffect } from "react"

type CrosshairOptions = {
  gsap: any | null
  enabled?: boolean
  crosshairRef: React.MutableRefObject<HTMLDivElement | null>
  coordDataRef: React.MutableRefObject<HTMLSpanElement | null>
}

export default function useCrosshair({
  gsap,
  enabled = true,
  crosshairRef,
  coordDataRef,
}: CrosshairOptions) {
  useEffect(() => {
    if (!enabled || !gsap) return

    // eslint-disable-next-line no-unused-vars
    let handleMouseMove: ((event: MouseEvent) => void) | null = null

    const ctx = gsap.context(() => {
      const crosshair = crosshairRef.current
      const coordData = coordDataRef.current
      if (!crosshair || !coordData) return

      const xTo = gsap.quickTo(crosshair, "x", {
        duration: 0.1,
        ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
      })
      const yTo = gsap.quickTo(crosshair, "y", {
        duration: 0.1,
        ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
      })

      handleMouseMove = (event: MouseEvent) => {
        xTo(event.clientX)
        yTo(event.clientY)
        coordData.textContent = `[X: ${event.clientX}px] [Y: ${event.clientY}px]`
      }

      window.addEventListener("mousemove", handleMouseMove)
    }, document.body)

    return () => {
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove)
      if (ctx) ctx.revert()
    }
  }, [enabled, gsap, crosshairRef, coordDataRef])
}
