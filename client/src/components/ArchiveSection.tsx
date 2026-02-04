"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import ScrambleHeading from "./ScrambleHeading"
import { MetaLabelObserver } from "./MetaLabel"
import { ProofLabelObserver } from "./ProofLabel"
import { useMotionRefs } from "../contexts/MotionRefsContext"
import styles from "./ArchiveSection.module.css"
import ctaStyles from "../app/Cta.module.css"
import layoutStyles from "../app/SectionLayout.module.css"

type ArchiveSectionProps = {
  jerseyPlaceholder: string
}

type ActiveItem = {
  id: string
  label: string
  status?: string
  src: string
}

export default function ArchiveSection({ jerseyPlaceholder }: ArchiveSectionProps) {
  const { archiveSectionRef, archiveTrackRef, archiveContainerRef, registerCta } = useMotionRefs()
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const overlayImgRef = useRef<HTMLImageElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)
  const originRectRef = useRef<DOMRect | null>(null)
  const imageRefs = useRef<Record<string, HTMLImageElement | null>>({})

  const items = useMemo<ActiveItem[]>(
    () => [
      { id: "REF_001", label: "[ REF_001 // UNIVERSITY_SERIES ]", status: "shipped", src: jerseyPlaceholder },
      { id: "REF_042", label: "[ REF_042 // SCHOOL_DIVISION ]", src: jerseyPlaceholder },
      { id: "REF_107", label: "[ REF_107 // MOTORSPORT ]", src: jerseyPlaceholder },
      { id: "REF_233", label: "[ REF_233 // CORPORATE_EVENT ]", src: jerseyPlaceholder },
      { id: "REF_311", label: "[ REF_311 // ESPORTS ]", src: jerseyPlaceholder },
    ],
    [jerseyPlaceholder]
  )

  useEffect(() => {
    if (!activeItem || !overlayRef.current || !overlayImgRef.current || !originRectRef.current) return

    const rect = originRectRef.current
    const overlay = overlayRef.current
    const img = overlayImgRef.current

    const maxWidth = Math.min(window.innerWidth * 0.9, 980)
    const aspect = rect.height / rect.width
    const targetWidth = maxWidth
    const targetHeight = Math.min(window.innerHeight * 0.8, maxWidth * aspect)
    const targetX = (window.innerWidth - targetWidth) / 2
    const targetY = (window.innerHeight - targetHeight) / 2

    gsap.set(overlay, { opacity: 1, pointerEvents: "auto" })
    gsap.set(img, {
      position: "absolute",
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      borderRadius: 8,
      transformOrigin: "center center",
    })

    gsap.to(img, {
      top: targetY,
      left: targetX,
      width: targetWidth,
      height: targetHeight,
      duration: 0.6,
      ease: "power3.inOut",
    })

    document.body.style.overflow = "hidden"
    lastFocusedRef.current = document.activeElement as HTMLElement | null
    requestAnimationFrame(() => closeButtonRef.current?.focus())

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        handleClose()
      }
    }

    window.addEventListener("keydown", handleKey)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
      lastFocusedRef.current?.focus()
    }
  }, [activeItem])

  const handleOpen = (item: ActiveItem, imageElement: HTMLImageElement | null) => {
    if (!imageElement) return
    originRectRef.current = imageElement.getBoundingClientRect()
    setActiveItem(item)
  }

  const handleClose = () => {
    if (!overlayImgRef.current || !originRectRef.current) {
      setActiveItem(null)
      return
    }

    const rect = originRectRef.current
    const img = overlayImgRef.current

    gsap.to(img, {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        setActiveItem(null)
      },
    })
  }

  return (
    <section
      id="proof"
      className={`section section-archive ${styles.sectionArchive}`}
      aria-labelledby="archive-title"
      data-chapter="02"
      data-title="ARCHIVE_DATABASE"
      ref={archiveSectionRef}
    >
      <div className={layoutStyles.sectionInner}>
        <div className={layoutStyles.chapterMeta}>
          <MetaLabelObserver
            text="[ 02 ] THE ARCHIVE: PRODUCTS"
            sectionId="proof"
            sectionRef={archiveSectionRef}
          />
          <MetaLabelObserver
            text="[ DATABASE: COMPLETED BATCHES ]"
            sectionId="proof"
            sectionRef={archiveSectionRef}
          />
        </div>
        <div className={layoutStyles.chapterContent}>
          <ScrambleHeading
            as="h2"
            id="archive-title"
            className="reveal-text"
            text="Real teams. Real orders. Real results."
          />
          <div className={styles.proofLabelSlot}>
            <ProofLabelObserver
              text="[ TOTAL_BATCHES_PROCESSED: 4,800+ ]"
              sectionId="proof"
              sectionRef={archiveSectionRef}
            />
          </div>
          <div className={styles.archiveContainer} ref={archiveContainerRef}>
            <div className={styles.scanPopup}>[ SCAN_DATA // MICROFIBER_EYELET // 210GSM ]</div>
            <div className={`${styles.conveyorTrack} flex-nowrap w-max`} ref={archiveTrackRef}>
              {items.map((item) => {
                const statusClass = item.status ? styles[item.status] : ""
                return (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.jerseyItem} ${styles.jerseyButton}`}
                  onClick={() => {
                    const img = imageRefs.current[item.id] ?? null
                    handleOpen(item, img)
                  }}
                >
                  <Image
                    ref={(node) => {
                      imageRefs.current[item.id] = node
                    }}
                    src={item.src}
                    alt={item.label}
                    width={350}
                    height={450}
                    unoptimized
                    className={styles.jerseyImage}
                  />
                  <div className={styles.monoLabel}>{item.label}</div>
                  {item.status && (
                    <div className={`${styles.monoStatus} ${statusClass}`}>[ STATUS: SHIPPED ]</div>
                  )}
                </button>
                )
              })}
            </div>
          </div>
          <a className={ctaStyles.ctaLink} href="#process" ref={registerCta}>Ask How the Design Works</a>
        </div>
      </div>

      <div
        ref={overlayRef}
        className={`${styles.archiveOverlay} ${activeItem ? styles.isActive : ""}`}
        onClick={handleClose}
        role="dialog"
        aria-modal={activeItem ? "true" : "false"}
        aria-label="Preview jersey"
        aria-hidden={!activeItem}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.archiveClose}
          onClick={handleClose}
        >
          Close
        </button>
        {activeItem && (
          <Image
            ref={overlayImgRef}
            src={activeItem.src}
            alt={activeItem.label}
            width={350}
            height={450}
            unoptimized
            className={styles.archiveOverlayImage}
          />
        )}
      </div>
    </section>
  )
}
