"use client"

import { useEffect } from "react"

type MeshSpinOptions = {
  gsap: any | null
  ScrollTrigger: any | null
  enabled?: boolean
  meshRef: React.MutableRefObject<HTMLDivElement | null>
}

export default function useMeshSpin({ gsap, ScrollTrigger, enabled = true, meshRef }: MeshSpinOptions) {
  useEffect(() => {
    if (!enabled || !gsap || !ScrollTrigger) return

    const ctx = gsap.context(() => {
      const mesh = meshRef.current
      if (!mesh) return

      const meshTween = gsap.to(mesh, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      })

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self: { getVelocity: () => number }) => {
          const velocity = Math.abs(self.getVelocity() / 120)
          gsap.to(meshTween, {
            timeScale: velocity + 1,
            duration: 0.5,
            overwrite: true,
          })
        },
      })
    }, document.body)

    return () => {
      if (ctx) ctx.revert()
    }
  }, [enabled, gsap, ScrollTrigger, meshRef])
}
