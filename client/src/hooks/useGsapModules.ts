"use client"

import { useEffect, useState } from "react"

type GsapModules = {
  gsap: any | null
  ScrollTrigger: any | null
}

export default function useGsapModules(enabled = true): GsapModules {
  const [mods, setMods] = useState<GsapModules>({ gsap: null, ScrollTrigger: null })

  useEffect(() => {
    if (!enabled) return

    let mounted = true

    const setup = async () => {
      const gsapModule = await import("gsap")
      const scrollTriggerModule = await import("gsap/ScrollTrigger")

      const gsap = gsapModule.gsap || gsapModule.default || gsapModule
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default

      if (!gsap || !ScrollTrigger) return

      gsap.registerPlugin(ScrollTrigger)

      if (mounted) {
        setMods({ gsap, ScrollTrigger })
      }
    }

    setup()

    return () => {
      mounted = false
    }
  }, [enabled])

  return mods
}
