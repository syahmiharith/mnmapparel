"use client"

import { createContext, useCallback, useContext, useMemo, useRef } from "react"

type MotionRefs = {
  statusChapterRef: React.MutableRefObject<HTMLDivElement | null>
  statusTitleRef: React.MutableRefObject<HTMLDivElement | null>
  statusProgressRef: React.MutableRefObject<HTMLSpanElement | null>
  crosshairRef: React.MutableRefObject<HTMLDivElement | null>
  coordDataRef: React.MutableRefObject<HTMLSpanElement | null>
  meshRef: React.MutableRefObject<HTMLDivElement | null>
  preloaderRef: React.MutableRefObject<HTMLDivElement | null>
  preloaderLogoRef: React.MutableRefObject<HTMLDivElement | null>
  heroSubRef: React.MutableRefObject<HTMLParagraphElement | null>
  heroSectionRef: React.MutableRefObject<HTMLElement | null>
  factorySectionRef: React.MutableRefObject<HTMLElement | null>
  processSectionRef: React.MutableRefObject<HTMLElement | null>
  quoteSectionRef: React.MutableRefObject<HTMLElement | null>
  ctaRefs: React.MutableRefObject<HTMLElement[]>
  registerCta: (node: HTMLElement | null) => void
  revealRefs: React.MutableRefObject<HTMLElement[]>
  registerReveal: (node: HTMLElement | null) => void
  scrambleRefs: React.MutableRefObject<HTMLElement[]>
  registerScramble: (node: HTMLElement | null) => void
  archiveSectionRef: React.MutableRefObject<HTMLElement | null>
  archiveTrackRef: React.MutableRefObject<HTMLDivElement | null>
  archiveContainerRef: React.MutableRefObject<HTMLDivElement | null>
}

const MotionRefsContext = createContext<MotionRefs | null>(null)

export function MotionRefsProvider({ children }: { children: React.ReactNode }) {
  const statusChapterRef = useRef<HTMLDivElement | null>(null)
  const statusTitleRef = useRef<HTMLDivElement | null>(null)
  const statusProgressRef = useRef<HTMLSpanElement | null>(null)
  const crosshairRef = useRef<HTMLDivElement | null>(null)
  const coordDataRef = useRef<HTMLSpanElement | null>(null)
  const meshRef = useRef<HTMLDivElement | null>(null)
  const preloaderRef = useRef<HTMLDivElement | null>(null)
  const preloaderLogoRef = useRef<HTMLDivElement | null>(null)
  const heroSubRef = useRef<HTMLParagraphElement | null>(null)
  const heroSectionRef = useRef<HTMLElement | null>(null)
  const factorySectionRef = useRef<HTMLElement | null>(null)
  const processSectionRef = useRef<HTMLElement | null>(null)
  const quoteSectionRef = useRef<HTMLElement | null>(null)
  const ctaRefs = useRef<HTMLElement[]>([])
  const revealRefs = useRef<HTMLElement[]>([])
  const scrambleRefs = useRef<HTMLElement[]>([])
  const archiveSectionRef = useRef<HTMLElement | null>(null)
  const archiveTrackRef = useRef<HTMLDivElement | null>(null)
  const archiveContainerRef = useRef<HTMLDivElement | null>(null)

  const registerCta = useCallback((node: HTMLElement | null) => {
    if (!node) {
      ctaRefs.current = ctaRefs.current.filter((el) => el.isConnected)
      return
    }
    if (!ctaRefs.current.includes(node)) {
      ctaRefs.current.push(node)
    }
  }, [])

  const registerReveal = useCallback((node: HTMLElement | null) => {
    if (!node) {
      revealRefs.current = revealRefs.current.filter((el) => el.isConnected)
      return
    }
    if (!revealRefs.current.includes(node)) {
      revealRefs.current.push(node)
    }
  }, [])

  const registerScramble = useCallback((node: HTMLElement | null) => {
    if (!node) {
      scrambleRefs.current = scrambleRefs.current.filter((el) => el.isConnected)
      return
    }
    if (!scrambleRefs.current.includes(node)) {
      scrambleRefs.current.push(node)
    }
  }, [])

  const refs = useMemo<MotionRefs>(() => {
    return {
      statusChapterRef,
      statusTitleRef,
      statusProgressRef,
      crosshairRef,
      coordDataRef,
      meshRef,
      preloaderRef,
      preloaderLogoRef,
      heroSubRef,
      heroSectionRef,
      factorySectionRef,
      processSectionRef,
      quoteSectionRef,
      ctaRefs,
      registerCta,
      revealRefs,
      registerReveal,
      scrambleRefs,
      registerScramble,
      archiveSectionRef,
      archiveTrackRef,
      archiveContainerRef,
    }
  }, [
    statusChapterRef,
    statusTitleRef,
    statusProgressRef,
    crosshairRef,
    coordDataRef,
    meshRef,
    preloaderRef,
    preloaderLogoRef,
    heroSubRef,
    heroSectionRef,
    factorySectionRef,
    processSectionRef,
    quoteSectionRef,
    ctaRefs,
    registerCta,
    revealRefs,
    registerReveal,
    scrambleRefs,
    registerScramble,
    archiveSectionRef,
    archiveTrackRef,
    archiveContainerRef,
  ])

  return <MotionRefsContext.Provider value={refs}>{children}</MotionRefsContext.Provider>
}

export function useMotionRefs() {
  const ctx = useContext(MotionRefsContext)
  if (!ctx) {
    throw new Error("useMotionRefs must be used within MotionRefsProvider")
  }
  return ctx
}
