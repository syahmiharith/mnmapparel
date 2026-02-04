"use client"

import { useEffect, useRef } from "react"

type LenisHookOptions = {
  gsap: any | null
  ScrollTrigger: any | null
  enabled?: boolean
}

export default function useLenisScroll({ gsap, ScrollTrigger, enabled = true }: LenisHookOptions) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    if (!enabled || !gsap || !ScrollTrigger) return

    let lenisInstance: any = null
    // eslint-disable-next-line no-unused-vars
    let lenisTicker: ((time: number) => void) | null = null

    const setup = async () => {
      const lenisModule = await import("lenis")
      const Lenis = lenisModule.default || lenisModule
      if (!Lenis) return

      lenisInstance = new Lenis({ lerp: 0.1, smoothWheel: true })
      lenisRef.current = lenisInstance

      lenisInstance?.on?.("scroll", () => {
        ScrollTrigger.update()
      })

      lenisTicker = (time: number) => {
        lenisInstance?.raf(time * 1000)
      }

      gsap.ticker.add(lenisTicker)
      gsap.ticker.lagSmoothing(0)
    }

    setup()

    return () => {
      if (lenisTicker) gsap.ticker.remove(lenisTicker)
      if (lenisInstance) lenisInstance.destroy()
      lenisRef.current = null
    }
  }, [enabled, gsap, ScrollTrigger])

  return lenisRef
}
