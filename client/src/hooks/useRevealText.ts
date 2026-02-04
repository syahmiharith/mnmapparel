"use client"

import { useEffect } from "react"

type RevealOptions = {
  gsap: any | null
  ScrollTrigger: any | null
  enabled?: boolean
  isArchivePinnedRef: React.MutableRefObject<boolean>
  archiveSectionRef: React.MutableRefObject<HTMLElement | null>
  revealRefs: React.MutableRefObject<HTMLElement[]>
}

export default function useRevealText({
  gsap,
  ScrollTrigger,
  enabled = true,
  isArchivePinnedRef,
  archiveSectionRef,
  revealRefs,
}: RevealOptions) {
  useEffect(() => {
    if (!enabled || !gsap || !ScrollTrigger) return

    const ctx = gsap.context(() => {
      const archiveSection = archiveSectionRef.current
      const revealTargets = revealRefs.current

      revealTargets.forEach((text: HTMLElement) => {
        const tween = gsap.from(text, {
          y: 100,
          clipPath: "inset(0 0 100% 0)",
          duration: 1.2,
          ease: "expo.out",
          paused: true,
        })

        ScrollTrigger.create({
          trigger: text,
          start: "top 90%",
          onEnter: () => {
            if (isArchivePinnedRef.current && !archiveSection?.contains(text)) return
            tween.play()
          },
          onEnterBack: () => {
            if (isArchivePinnedRef.current && !archiveSection?.contains(text)) return
            tween.play()
          },
          onLeaveBack: () => {
            tween.reverse()
          },
        })
      })
    }, document.body)

    return () => {
      if (ctx) ctx.revert()
    }
  }, [enabled, gsap, ScrollTrigger, isArchivePinnedRef, archiveSectionRef, revealRefs])
}
