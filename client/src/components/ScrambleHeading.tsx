"use client"

import React, { useCallback } from "react"
import { useMotionRefs } from "../contexts/MotionRefsContext"
import styles from "./ScrambleHeading.module.css"

type ScrambleHeadingProps = {
  as: "h1" | "h2"
  id?: string
  className?: string
  text: string
}

export default function ScrambleHeading({ as: Tag, id, className, text }: ScrambleHeadingProps) {
  const { registerReveal, registerScramble } = useMotionRefs()

  const handleRevealRef = useCallback(
    (node: HTMLElement | null) => {
      registerReveal(node)
    },
    [registerReveal]
  )

  const handleScrambleRef = useCallback(
    (node: HTMLElement | null) => {
      registerScramble(node)
    },
    [registerScramble]
  )

  return (
    <Tag id={id} className={`${styles.scrambleHeading} ${className ?? ""}`} ref={handleRevealRef}>
      <span className={styles.scrambleGhost} aria-hidden="true">
        {text}
      </span>
      <span className={styles.scrambleLayer} aria-hidden="true" ref={handleScrambleRef}>
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </Tag>
  )
}
