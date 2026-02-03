"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import usePrefersReducedMotion from "../utils/usePrefersReducedMotion"
import useSectionActive from "../utils/useSectionActive"

type MetaLabelProps = {
  text: string
  active: boolean
  className?: string
}

type MetaLabelObserverProps = {
  text: string
  sectionId: string
  className?: string
  rootMargin?: string
}

export function MetaLabelObserver({
  text,
  sectionId,
  className,
  rootMargin,
}: MetaLabelObserverProps) {
  const active = useSectionActive(sectionId, rootMargin)
  return <MetaLabel text={text} active={active} className={className} />
}

export default function MetaLabel({ text, active, className }: MetaLabelProps) {
  const reduced = usePrefersReducedMotion()
  const rafRef = useRef<number | null>(null)
  const [display, setDisplay] = useState(active ? text : "")
  const [isTyping, setIsTyping] = useState(false)
  const [wipe, setWipe] = useState(active ? 0 : 100)

  const duration = useMemo(() => {
    const base = text.length * 35
    return Math.min(800, Math.max(320, base))
  }, [text])

  useEffect(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    if (reduced) {
      setDisplay(text)
      setIsTyping(false)
      setWipe(active ? 0 : 100)
      return
    }

    if (active) {
      setWipe(0)
      setDisplay("")
      setIsTyping(true)

      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        const count = Math.ceil(t * text.length)
        setDisplay(text.slice(0, count))

        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          setIsTyping(false)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    } else {
      setIsTyping(false)
      setWipe(100)
      setDisplay(text)
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [active, reduced, text, duration])

  return (
    <span className={`meta-label ${className ?? ""}`}>
      <span className="meta-label__ghost" aria-hidden="true">
        {text}
      </span>
      <span className="meta-label__text" style={{ ["--wipe" as any]: `${wipe}%` }}>
        <span className="meta-label__chars">{display}</span>
        {isTyping && !reduced && <span className="meta-label__cursor" aria-hidden="true" />}
      </span>
    </span>
  )
}
