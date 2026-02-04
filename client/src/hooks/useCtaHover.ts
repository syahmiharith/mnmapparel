"use client"

import { useEffect } from "react"

type CtaHoverOptions = {
  gsap: any | null
  ScrollTrigger: any | null
  enabled?: boolean
  ctaRefs: React.MutableRefObject<HTMLElement[]>
}

export default function useCtaHover({
  gsap,
  ScrollTrigger,
  enabled = true,
  ctaRefs,
}: CtaHoverOptions) {
  useEffect(() => {
    if (!enabled || !gsap || !ScrollTrigger) return

    const ctx = gsap.context(() => {
      const ctas = ctaRefs.current
      const finePointer = window.matchMedia("(pointer: fine)").matches
      if (!finePointer || !ctas.length) return

      ctas.forEach((cta) => {
        const xTo = gsap.quickTo(cta, "x", {
          duration: 0.35,
          ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
        })
        const yTo = gsap.quickTo(cta, "y", {
          duration: 0.35,
          ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
        })
        const sTo = gsap.quickTo(cta, "scale", {
          duration: 0.35,
          ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
        })

        const handleMove = (event: MouseEvent) => {
          const rect = cta.getBoundingClientRect()
          const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
          const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
          xTo(dx * 10)
          yTo(dy * 8)
          sTo(1.02)
        }

        const handleLeave = () => {
          xTo(0)
          yTo(0)
          sTo(1)
        }

        cta.addEventListener("mousemove", handleMove)
        cta.addEventListener("mouseleave", handleLeave)

        ScrollTrigger.addEventListener("refreshInit", handleLeave)

        ScrollTrigger.addEventListener("refresh", handleLeave)
      })
    }, document.body)

    return () => {
      ctx.revert()
    }
  }, [enabled, gsap, ScrollTrigger, ctaRefs])
}
