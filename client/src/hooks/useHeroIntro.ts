"use client"

import { useEffect } from "react"

type HeroIntroOptions = {
  gsap: any | null
  enabled?: boolean
  lenisRef?: React.MutableRefObject<any>
  heroSubRef: React.MutableRefObject<HTMLParagraphElement | null>
  preloaderRef: React.MutableRefObject<HTMLDivElement | null>
  preloaderLogoRef: React.MutableRefObject<HTMLDivElement | null>
  ctaRefs: React.MutableRefObject<HTMLElement[]>
}

export default function useHeroIntro({
  gsap,
  enabled = true,
  lenisRef,
  heroSubRef,
  preloaderRef,
  preloaderLogoRef,
  ctaRefs,
}: HeroIntroOptions) {
  useEffect(() => {
    if (!enabled || !gsap) return

    const ctx = gsap.context(() => {
      const heroSub = heroSubRef.current
      const ctas = ctaRefs.current
      const preloader = preloaderRef.current
      const preloaderLogo = preloaderLogoRef.current

      const heroTimeline = gsap.timeline({
        defaults: { ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)" },
        paused: true,
      })

      if (heroSub) {
        gsap.set(heroSub, { opacity: 0, y: 12 })
      }
      gsap.set(ctas, { scale: 0.98 })

      heroTimeline
        .to(heroSub, { opacity: 1, y: 0, duration: 0.7 }, "+=0.1")
        .to(ctas, { scale: 1, duration: 0.5 }, "-=0.3")

      if (preloader && preloaderLogo) {
        const preloaderTimeline = gsap.timeline({
          defaults: { ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)" },
        })
        gsap.set(preloader, { yPercent: 0 })
        preloaderTimeline
          .to(preloaderLogo, { opacity: 1, scale: 1, duration: 0.8 })
          .to(preloader, {
            yPercent: -100,
            duration: 1.1,
            ease: "expo.inOut",
            onStart: () => {
              window.scrollTo(0, 0)
              if (lenisRef?.current) lenisRef.current.scrollTo(0, { immediate: true })
            },
          })
          .add(() => {
            if (heroTimeline) heroTimeline.play()
          }, "-=0.5")
          .set(preloader, { display: "none" })
      } else if (heroTimeline) {
        heroTimeline.play()
      }
    }, document.body)

    return () => {
      if (ctx) ctx.revert()
    }
  }, [enabled, gsap, lenisRef, heroSubRef, preloaderRef, preloaderLogoRef, ctaRefs])
}
