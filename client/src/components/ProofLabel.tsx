"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

type ProofLabelProps = {
  text: string
  active: boolean
  className?: string
}

type ProofLabelObserverProps = {
  text: string
  sectionId: string
  className?: string
  rootMargin?: string
}

function usePrefersReducedMotion() {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false
}

function useSectionActive(sectionId: string, rootMargin = "-20% 0px -60% 0px") {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = document.getElementById(sectionId)
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting)
      },
      { rootMargin, threshold: 0.1 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [sectionId, rootMargin])

  return active
}

export function ProofLabelObserver({ text, sectionId, className, rootMargin }: ProofLabelObserverProps) {
  const active = useSectionActive(sectionId, rootMargin)
  return <ProofLabel text={text} active={active} className={className} />
}

export default function ProofLabel({ text, active, className }: ProofLabelProps) {
  const boxRef = useRef<HTMLSpanElement | null>(null)
  const textRef = useRef<HTMLSpanElement | null>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const box = boxRef.current
    const textEl = textRef.current
    if (!box || !textEl) return

    if (tlRef.current) {
      tlRef.current.kill()
      tlRef.current = null
    }

    if (reduced) {
      if (active) {
        textEl.textContent = text
        gsap.set(box, { opacity: 1, scaleX: 1 })
      } else {
        textEl.textContent = ""
        gsap.set(box, { opacity: 0, scaleX: 0 })
      }
      return
    }

    if (active) {
      textEl.textContent = ""
      gsap.set(box, { opacity: 1, scaleX: 0, transformOrigin: "left center" })

      const typingDuration = 0.35
      const boxDuration = 0.25
      const state = { progress: 0 }

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
      tl.to(box, { scaleX: 1, duration: boxDuration })
        .to(state, {
          progress: 1,
          duration: typingDuration,
          ease: "none",
          onUpdate: () => {
            const count = Math.ceil(state.progress * text.length)
            textEl.textContent = text.slice(0, count)
          },
        })

      tlRef.current = tl
      return
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } })
    tl.set(textEl, { textContent: "" })
      .to(box, { scaleX: 0, opacity: 0, duration: 0.25, transformOrigin: "left center" })

    tlRef.current = tl
  }, [active, text, reduced])

  return (
    <span className={`proof-label ${className ?? ""}`}>
      <span className="proof-label__box" ref={boxRef}>
        <span className="proof-label__text" ref={textRef} />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  )
}
