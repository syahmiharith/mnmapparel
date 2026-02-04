"use client"

import { useMotionRefs } from "../contexts/MotionRefsContext"
import styles from "./MotionChrome.module.css"

export default function MotionChrome() {
  const {
    statusChapterRef,
    statusTitleRef,
    statusProgressRef,
    crosshairRef,
    coordDataRef,
    meshRef,
    preloaderRef,
    preloaderLogoRef,
  } = useMotionRefs()

  return (
    <>
      <div className={styles.bgMesh} aria-hidden="true" ref={meshRef} />
      <div className={styles.preloader} aria-hidden="true" ref={preloaderRef}>
        <div className={styles.preloaderLogo} ref={preloaderLogoRef}>
          M&M APPAREL
        </div>
      </div>
      <div className={styles.statusSidebar} aria-hidden="true">
        <div>STATUS</div>
        <div className={styles.statusChapter} ref={statusChapterRef}>CH. 01</div>
        <div className={styles.statusTitle} ref={statusTitleRef}>SYSTEM_INITIALIZE</div>
        <div className={styles.statusProgress}>
          <span className={styles.statusProgressBar} ref={statusProgressRef} />
        </div>
      </div>
      <div className={styles.crosshair} aria-hidden="true" ref={crosshairRef}>
        <span className={`${styles.crosshairLine} ${styles.crosshairLineX}`} />
        <span className={`${styles.crosshairLine} ${styles.crosshairLineY}`} />
        <span className={styles.coordData} ref={coordDataRef}>[X: 000px] [Y: 000px]</span>
      </div>
    </>
  )
}
