"use client"

import { useEffect } from "react"

type ScrambleOptions = {
  gsap: any | null
  ScrollTrigger: any | null
  enabled?: boolean
  isArchivePinnedRef: React.MutableRefObject<boolean>
  archiveSectionRef: React.MutableRefObject<HTMLElement | null>
  scrambleRefs: React.MutableRefObject<HTMLElement[]>
}

export default function useScrambleText({
  gsap,
  ScrollTrigger,
  enabled = true,
  isArchivePinnedRef,
  archiveSectionRef,
  scrambleRefs,
}: ScrambleOptions) {
  useEffect(() => {
    if (!enabled || !gsap || !ScrollTrigger) return

    const scrambleText = (element: HTMLElement) => {
      const original = element.dataset.scrambleOriginal ?? element.textContent ?? ""
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/"
      const duration = 1.4

      const state = { progress: 0 }
      element.dataset.scrambleOriginal = original

      gsap.to(state, {
        progress: 1,
        duration,
        ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
        onUpdate: () => {
          const revealCount = Math.floor(state.progress * original.length)
          let output = ""
          for (let i = 0; i < original.length; i += 1) {
            if (i < revealCount) {
              output += original[i]
            } else if (original[i] === " ") {
              output += " "
            } else {
              output += chars[Math.floor(Math.random() * chars.length)]
            }
          }
          element.textContent = output
        },
        onComplete: () => {
          element.textContent = original
        },
      })
    }

    const ctx = gsap.context(() => {
      const archiveSection = archiveSectionRef.current
      const scrambleTargets = scrambleRefs.current

      scrambleTargets.forEach((target) => {
        ScrollTrigger.create({
          trigger: target,
          start: "top 95%",
          onEnter: () => {
            if (isArchivePinnedRef.current && !archiveSection?.contains(target)) return
            scrambleText(target)
          },
          onEnterBack: () => {
            if (isArchivePinnedRef.current && !archiveSection?.contains(target)) return
            scrambleText(target)
          },
        })
      })
    }, document.body)

    return () => {
      ctx.revert()
    }
  }, [enabled, gsap, ScrollTrigger, isArchivePinnedRef, archiveSectionRef, scrambleRefs])
}
