"use client"

import { useEffect } from "react"

type SectionScaleOptions = {
  gsap: any | null
  ScrollTrigger: any | null
  enabled?: boolean
}

export default function useSectionScale({ gsap, ScrollTrigger, enabled = true }: SectionScaleOptions) {
  useEffect(() => {
    if (!enabled || !gsap || !ScrollTrigger) return

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".section") as HTMLElement[]

      sections.forEach((section, index) => {
        const zIndex = (index + 1) * 10
        section.style.zIndex = `${zIndex}`

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onUpdate: (self: { progress: number }) => {
            if (index > 0) {
              const prev = sections[index - 1]
              const isArchive = prev?.classList.contains("section-archive")

              if (isArchive) {
                const archiveScale = self.progress > 0.1
                  ? 1 - (self.progress - 0.1) * 0.05
                  : 1

                gsap.set(prev, {
                  opacity: 1 - self.progress * 0.2,
                  scale: archiveScale,
                  transformOrigin: "center top",
                })
              } else {
                gsap.set(prev, {
                  opacity: 1 - self.progress * 0.2,
                  scale: 1 - self.progress * 0.05,
                  transformOrigin: "center top",
                })
              }
            }
          },
        })
      })
    }, document.body)

    return () => {
      if (ctx) ctx.revert()
    }
  }, [enabled, gsap, ScrollTrigger])
}
