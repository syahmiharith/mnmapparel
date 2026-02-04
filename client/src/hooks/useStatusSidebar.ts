"use client"

import { useEffect, useMemo } from "react"

type StatusSidebarOptions = {
  gsap: any | null
  ScrollTrigger: any | null
  enabled?: boolean
  isArchivePinnedRef: React.MutableRefObject<boolean>
  statusChapterRef: React.MutableRefObject<HTMLDivElement | null>
  statusTitleRef: React.MutableRefObject<HTMLDivElement | null>
  statusProgressRef: React.MutableRefObject<HTMLSpanElement | null>
  archiveSectionRef: React.MutableRefObject<HTMLElement | null>
}

export type StatusSidebarApi = {
  // eslint-disable-next-line no-unused-vars
  setProgress: (progress: number) => void
  resyncStatusToViewport: () => void
}

export default function useStatusSidebar({
  gsap,
  ScrollTrigger,
  enabled = true,
  isArchivePinnedRef,
  statusChapterRef,
  statusTitleRef,
  statusProgressRef,
  archiveSectionRef,
}: StatusSidebarOptions): StatusSidebarApi {
  const api = useMemo<StatusSidebarApi>(() => {
    return {
      setProgress: () => {},
      resyncStatusToViewport: () => {},
    }
  }, [])

  useEffect(() => {
    if (!enabled || !gsap || !ScrollTrigger) return

    const ctx = gsap.context(() => {
      const statusChapter = statusChapterRef.current
      const statusTitle = statusTitleRef.current
      const statusBar = statusProgressRef.current
      const sections = gsap.utils.toArray(".section") as HTMLElement[]
      const archiveSection = archiveSectionRef.current

      api.setProgress = (progress: number) => {
        if (!statusBar) return
        const clamped = Math.max(0, Math.min(1, progress))
        statusBar.style.height = `${clamped * 100}%`
      }

      api.resyncStatusToViewport = () => {
        if (!statusChapter || !statusTitle) return

        const probeY = window.innerHeight * 0.5
        let best: HTMLElement | null = null

        for (const section of sections) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= probeY && rect.bottom >= probeY) {
            best = section
            break
          }
        }

        if (!best) {
          let candidate: HTMLElement | null = null
          for (const section of sections) {
            const rect = section.getBoundingClientRect()
            if (rect.top <= probeY) candidate = section
          }
          best = candidate ?? (sections[0] ?? null)
        }

        if (!best) return

        const chapter = best.dataset.chapter ?? "01"
        const title = best.dataset.title ?? ""
        statusChapter.textContent = `CH. ${chapter} / 05`
        statusTitle.textContent = title
      }

      if (statusChapter && statusTitle) {
        sections.forEach((section) => {
          const chapter = section.dataset.chapter
          const title = section.dataset.title

          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              if (isArchivePinnedRef.current && section !== archiveSection) return
              statusChapter.textContent = `CH. ${chapter} / 05`
              statusTitle.textContent = title ?? ""
            },
            onEnterBack: () => {
              if (isArchivePinnedRef.current && section !== archiveSection) return
              statusChapter.textContent = `CH. ${chapter} / 05`
              statusTitle.textContent = title ?? ""
            },
          })
        })
      }

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self: { progress: number }) => {
            if (isArchivePinnedRef.current && section !== archiveSection) return
            const rect = section.getBoundingClientRect()
            const probeY = window.innerHeight * 0.5
            const isActive = rect.top <= probeY && rect.bottom >= probeY
            if (!isActive) return
            api.setProgress(self.progress)
          },
        })
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
    statusChapterRef,
    statusTitleRef,
    statusProgressRef,
    archiveSectionRef,
    api,
  ])

  return api
}
