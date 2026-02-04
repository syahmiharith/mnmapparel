"use client"

import { useEffect } from "react"

type ArchivePinOptions = {
  gsap: any | null
  ScrollTrigger: any | null
  enabled?: boolean
  isArchivePinnedRef: React.MutableRefObject<boolean>
  archiveSectionRef: React.MutableRefObject<HTMLElement | null>
  archiveTrackRef: React.MutableRefObject<HTMLDivElement | null>
  archiveContainerRef: React.MutableRefObject<HTMLDivElement | null>
  onProgress?: ProgressHandler
  onUnlock?: () => void
}

// eslint-disable-next-line no-unused-vars
type ProgressHandler = (_value: number) => void

type ScrollTriggerLike = {
  progress: number
}

export default function useArchivePin({
  gsap,
  ScrollTrigger,
  enabled = true,
  isArchivePinnedRef,
  archiveSectionRef,
  archiveTrackRef,
  archiveContainerRef,
  onProgress,
  onUnlock,
}: ArchivePinOptions) {
  useEffect(() => {
    if (!enabled || !gsap || !ScrollTrigger) return

    const ctx: { revert: () => void } | undefined = gsap.context(() => {
      const archiveSection = archiveSectionRef.current
      const archiveTrack = archiveTrackRef.current
      const archiveContainer = archiveContainerRef.current

      if (!archiveSection || !archiveTrack) return

      const getContainerWidth = () => archiveContainer?.clientWidth ?? window.innerWidth
      const getStartX = () => getContainerWidth()
      const getEndX = () => {
        const lastItem = archiveTrack.lastElementChild as HTMLElement | null
        const containerWidth = getContainerWidth()
        if (!lastItem) return 0
        const lastCenter = lastItem.offsetLeft + lastItem.offsetWidth / 2
        return containerWidth / 2 - lastCenter
      }
      const getTravel = () => Math.abs(getStartX() - getEndX())

      const updateStart = () => {
        gsap.set(archiveTrack, { x: getStartX(), opacity: 0, visibility: "hidden" })
      }

      updateStart()

      gsap.to(archiveTrack, {
        x: () => getEndX(),
        ease: "none",
        scrollTrigger: {
          trigger: archiveSection,
          start: "top top",
          end: () => `+=${getTravel()}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefreshInit: (self: ScrollTriggerLike) => {
            if (self.progress === 0) {
              updateStart()
            } else {
              gsap.set(archiveTrack, { opacity: 1, visibility: "visible" })
            }
          },
          onRefresh: (self: ScrollTriggerLike) => {
            if (self.progress === 0) {
              gsap.set(archiveTrack, { opacity: 0, visibility: "hidden", x: getStartX() })
            } else {
              gsap.set(archiveTrack, { opacity: 1, visibility: "visible" })
            }
          },
          onEnter: () => {
            isArchivePinnedRef.current = true
            gsap.set(archiveTrack, { opacity: 1, visibility: "visible" })
          },
          onEnterBack: () => {
            isArchivePinnedRef.current = true
            gsap.set(archiveTrack, { opacity: 1, visibility: "visible" })
          },
          onLeave: () => {
            isArchivePinnedRef.current = false
            onUnlock?.()
          },
          onLeaveBack: () => {
            isArchivePinnedRef.current = false
            gsap.set(archiveTrack, {
              x: getStartX(),
              opacity: 0,
              visibility: "hidden",
            })
            onUnlock?.()
          },
          onUpdate: (self: ScrollTriggerLike) => {
            onProgress?.(self.progress)
          },
        },
      })
    }, document.body)

    return () => {
      if (ctx) ctx.revert()
    }
  }, [
    enabled,
    gsap,
    ScrollTrigger,
    isArchivePinnedRef,
    archiveSectionRef,
    archiveTrackRef,
    archiveContainerRef,
    onProgress,
    onUnlock,
  ])
}
