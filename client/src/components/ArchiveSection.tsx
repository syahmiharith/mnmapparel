"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import ScrambleHeading from "./ScrambleHeading"
import { MetaLabelObserver } from "./MetaLabel"
import { ProofLabelObserver } from "./ProofLabel"

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
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const overlayImgRef = useRef<HTMLImageElement | null>(null)
  const originRectRef = useRef<DOMRect | null>(null)

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

    return () => {
      document.body.style.overflow = ""
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
      className="section section-archive archive-section"
      aria-labelledby="archive-title"
      data-chapter="02"
      data-title="ARCHIVE_DATABASE"
    >
      <div className="section-inner">
        <div className="chapter-meta">
          <MetaLabelObserver text="[ 02 ] THE ARCHIVE: PRODUCTS" sectionId="proof" />
          <MetaLabelObserver text="[ DATABASE: COMPLETED BATCHES ]" sectionId="proof" />
        </div>
        <div className="chapter-content">
          <ScrambleHeading
            as="h2"
            id="archive-title"
            className="reveal-text"
            text="Real teams. Real orders. Real outcomes."
          />
          <div className="proof-label-slot">
            <ProofLabelObserver text="[ TOTAL_BATCHES_PROCESSED: 4,800+ ]" sectionId="proof" />
          </div>
          <div className="archive-container js-archive-container">
            <div className="scan-popup">[ SCAN_DATA // MICROFIBER_EYELET // 210GSM ]</div>
            <div className="conveyor-track js-archive-track flex-nowrap w-max">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="jersey-item jersey-button"
                  onClick={(event) => {
                    const img = event.currentTarget.querySelector("img")
                    handleOpen(item, img)
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={350}
                    height={450}
                    unoptimized
                    className="jersey-image"
                  />
                  <div className="mono-label">{item.label}</div>
                  {item.status && <div className={`mono-status ${item.status}`}>[ STATUS: SHIPPED ]</div>}
                </button>
              ))}
            </div>
          </div>
          <a className="cta-link" href="#process">Ask How the Design Works</a>
        </div>
      </div>

      <div
        ref={overlayRef}
        className={`archive-overlay ${activeItem ? "is-active" : ""}`}
        onClick={handleClose}
        aria-hidden={!activeItem}
      >
        <button type="button" className="archive-close" onClick={handleClose}>
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
            className="archive-overlay-image"
          />
        )}
      </div>
    </section>
  )
}
