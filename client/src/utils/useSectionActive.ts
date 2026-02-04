import { useEffect, useState } from "react"

export default function useSectionActive(
  sectionId: string,
  rootMargin = "-20% 0px -60% 0px",
  sectionRef?: React.MutableRefObject<HTMLElement | null>
) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = sectionRef?.current ?? null
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin, threshold: 0.1 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [sectionId, rootMargin, sectionRef])

  return active
}
