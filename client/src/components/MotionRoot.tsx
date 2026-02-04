"use client"

import { useRef } from "react"
import usePrefersReducedMotion from "../utils/usePrefersReducedMotion"
import { useMotionRefs } from "../contexts/MotionRefsContext"
import useGsapModules from "../hooks/useGsapModules"
import useLenisScroll from "../hooks/useLenisScroll"
import useHeroIntro from "../hooks/useHeroIntro"
import useScrambleText from "../hooks/useScrambleText"
import useRevealText from "../hooks/useRevealText"
import useMeshSpin from "../hooks/useMeshSpin"
import useCtaHover from "../hooks/useCtaHover"
import useCrosshair from "../hooks/useCrosshair"
import useArchivePin from "../hooks/useArchivePin"
import useStatusSidebar from "../hooks/useStatusSidebar"
import useSectionScale from "../hooks/useSectionScale"

export default function MotionRoot() {
  const reducedMotion = usePrefersReducedMotion()
  const isArchivePinnedRef = useRef(false)
  const motionRefs = useMotionRefs()

  const { gsap, ScrollTrigger } = useGsapModules(!reducedMotion)
  const lenisRef = useLenisScroll({ gsap, ScrollTrigger, enabled: !reducedMotion })

  useHeroIntro({
    gsap,
    enabled: !reducedMotion,
    lenisRef,
    heroSubRef: motionRefs.heroSubRef,
    preloaderRef: motionRefs.preloaderRef,
    preloaderLogoRef: motionRefs.preloaderLogoRef,
    ctaRefs: motionRefs.ctaRefs,
  })
  const statusApi = useStatusSidebar({
    gsap,
    ScrollTrigger,
    enabled: !reducedMotion,
    isArchivePinnedRef,
    statusChapterRef: motionRefs.statusChapterRef,
    statusTitleRef: motionRefs.statusTitleRef,
    statusProgressRef: motionRefs.statusProgressRef,
    archiveSectionRef: motionRefs.archiveSectionRef,
  })

  useArchivePin({
    gsap,
    ScrollTrigger,
    enabled: !reducedMotion,
    isArchivePinnedRef,
    archiveSectionRef: motionRefs.archiveSectionRef,
    archiveTrackRef: motionRefs.archiveTrackRef,
    archiveContainerRef: motionRefs.archiveContainerRef,
    onProgress: statusApi.setProgress,
    onUnlock: statusApi.resyncStatusToViewport,
  })

  useScrambleText({
    gsap,
    ScrollTrigger,
    enabled: !reducedMotion,
    isArchivePinnedRef,
    archiveSectionRef: motionRefs.archiveSectionRef,
    scrambleRefs: motionRefs.scrambleRefs,
  })
  useRevealText({
    gsap,
    ScrollTrigger,
    enabled: !reducedMotion,
    isArchivePinnedRef,
    archiveSectionRef: motionRefs.archiveSectionRef,
    revealRefs: motionRefs.revealRefs,
  })
  useMeshSpin({ gsap, ScrollTrigger, enabled: !reducedMotion, meshRef: motionRefs.meshRef })
  useCtaHover({ gsap, ScrollTrigger, enabled: !reducedMotion, ctaRefs: motionRefs.ctaRefs })
  useCrosshair({
    gsap,
    enabled: !reducedMotion,
    crosshairRef: motionRefs.crosshairRef,
    coordDataRef: motionRefs.coordDataRef,
  })
  useSectionScale({ gsap, ScrollTrigger, enabled: !reducedMotion })

  return null
}
