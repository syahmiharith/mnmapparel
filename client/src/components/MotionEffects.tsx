"use client"

import { useEffect } from "react"

export default function MotionEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    let isMounted = true
    let ctx: { revert: () => void } | undefined

    let handleMouseMove: any = null
    let lenisInstance: any = null
    let lenisTicker: any = null
    let gsapRef: any = null

    const setup = async () => {
      const gsapModule = await import("gsap")
      const scrollTriggerModule = await import("gsap/ScrollTrigger")
      const lenisModule = await import("lenis")

      const gsap = gsapModule.gsap || gsapModule.default || gsapModule
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default

      if (!gsap || !ScrollTrigger) return
      gsapRef = gsap

      gsap.registerPlugin(ScrollTrigger)

      const Lenis = lenisModule.default || lenisModule
      if (Lenis) {
        lenisInstance = new Lenis({
          lerp: 0.1,
          smoothWheel: true,
        })

        lenisInstance?.on?.("scroll", () => {
          ScrollTrigger.update()
        })

        const ticker = (time: number) => {
          lenisInstance?.raf(time * 1000)
        }

        lenisTicker = ticker
        gsap.ticker.add(ticker)
        gsap.ticker.lagSmoothing(0)
      }


      const scrambleText = (element: HTMLElement) => {
        const original = element.dataset.scrambleOriginal ?? element.textContent ?? ""
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/"
        const duration = 1.4

        const state = { progress: 0 }
        element.dataset.scrambleOriginal = original

        gsap.to(state, {
          progress: 1,
          duration,
          ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
          onUpdate: () => {
            const revealCount = Math.floor(state.progress * original.length)
            let output = ""
            for (let i = 0; i < original.length; i += 1) {
              if (i < revealCount) {
                output += original[i]
              } else if (original[i] === " ") {
                output += " "
              } else {
                output += chars[Math.floor(Math.random() * chars.length)]
              }
            }
            element.textContent = output
          },
          onComplete: () => {
            element.textContent = original
          },
        })
      }

      if (!isMounted) return

      ctx = gsap.context(() => {
        const heroSub = document.querySelector<HTMLElement>(".js-hero-sub")
        const ctas = gsap.utils.toArray<HTMLElement>(".js-cta")
        const scrambleTargets = gsap.utils.toArray<HTMLElement>(".js-scramble")
        const preloader = document.querySelector<HTMLElement>(".preloader")
        const preloaderLogo = document.querySelector<HTMLElement>(".preloader-logo")

        let heroTimeline: gsap.core.Timeline | null = null

        if (heroSub) {
          gsap.set(heroSub, { opacity: 0, y: 12 })
        }
        gsap.set(ctas, { scale: 0.98 })

        heroTimeline = gsap.timeline({
          defaults: { ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)" },
          paused: true,
        })
        heroTimeline
          .to(heroSub, { opacity: 1, y: 0, duration: 0.7 }, "+=0.1")
          .to(ctas, { scale: 1, duration: 0.5 }, "-=0.3")

        if (preloader && preloaderLogo) {
          const preloaderTimeline = gsap.timeline({
            defaults: { ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)" },
          })
          gsap.set(preloader, { yPercent: 0 })
          preloaderTimeline
            .to(preloaderLogo, { opacity: 1, scale: 1, duration: 0.8 })
            .to(preloader, {
              yPercent: -100,
              duration: 1.1,
              ease: "expo.inOut",
              onStart: () => {
                window.scrollTo(0, 0)
                if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true })
              },
            })
            .add(() => {
              if (heroTimeline) heroTimeline.play()
            }, "-=0.5")
            .set(preloader, { display: "none" })
            .add(() => {
              ScrollTrigger.refresh()
            })
        } else if (heroTimeline) {
          heroTimeline.play()
        }

        const parallaxBg = document.querySelector<HTMLElement>(".js-parallax-bg")
        if (parallaxBg) {
          gsap.to(parallaxBg, {
            y: 50,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          })
        }

        const revealTextTargets = gsap.utils.toArray<HTMLElement>(".reveal-text")

        const finePointer = window.matchMedia("(pointer: fine)").matches
        if (finePointer && ctas.length) {
          ctas.forEach((cta) => {
            const xTo = gsap.quickTo(cta, "x", {
              duration: 0.35,
              ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
            })
            const yTo = gsap.quickTo(cta, "y", {
              duration: 0.35,
              ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
            })
            const sTo = gsap.quickTo(cta, "scale", {
              duration: 0.35,
              ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
            })

            const handleMove = (event: MouseEvent) => {
              const rect = cta.getBoundingClientRect()
              const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
              const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
              xTo(dx * 10)
              yTo(dy * 8)
              sTo(1.02)
            }

            const handleLeave = () => {
              xTo(0)
              yTo(0)
              sTo(1)
            }

            cta.addEventListener("mousemove", handleMove)
            cta.addEventListener("mouseleave", handleLeave)

            ScrollTrigger.addEventListener("refreshInit", handleLeave)
          })
        }

        const mesh = document.querySelector<HTMLElement>(".bg-mesh")
        if (mesh) {
          const meshTween = gsap.to(mesh, {
            rotation: 360,
            duration: 30,
            repeat: -1,
            ease: "none",
          })

          ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
              const velocity = Math.abs(self.getVelocity() / 120)
              gsap.to(meshTween, {
                timeScale: velocity + 1,
                duration: 0.5,
                overwrite: true,
              })
            },
          })
        }

        const statusChapter = document.querySelector<HTMLElement>(".js-status-chapter")
        const statusTitle = document.querySelector<HTMLElement>(".js-status-title")
        const statusBar = document.querySelector<HTMLElement>(".js-status-progress")
        const sections = gsap.utils.toArray<HTMLElement>(".section")
        const archiveSection = document.querySelector<HTMLElement>(".section-archive")
        const archiveTrack = document.querySelector<HTMLElement>(".js-archive-track")
        const archiveContainer = document.querySelector<HTMLElement>(".js-archive-container")
        let isArchivePinned = false

        const setProgress = (progress: number) => {
          if (!statusBar) return
          const clamped = Math.max(0, Math.min(1, progress))
          statusBar.style.height = `${clamped * 100}%`
        }

        const resyncStatusToViewport = () => {
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
                if (isArchivePinned && section !== archiveSection) return
                statusChapter.textContent = `CH. ${chapter} / 05`
                statusTitle.textContent = title ?? ""
              },
              onEnterBack: () => {
                if (isArchivePinned && section !== archiveSection) return
                statusChapter.textContent = `CH. ${chapter} / 05`
                statusTitle.textContent = title ?? ""
              },
            })
          })
        }

        if (archiveSection && archiveTrack) {
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
              onRefreshInit: updateStart,
              onEnter: () => {
                isArchivePinned = true
                gsap.set(archiveTrack, { opacity: 1, visibility: "visible" })
              },
              onEnterBack: () => {
                isArchivePinned = true
                gsap.set(archiveTrack, { opacity: 1, visibility: "visible" })
              },
              onLeave: () => {
                isArchivePinned = false
                resyncStatusToViewport()
                ScrollTrigger.refresh()
              },
              onLeaveBack: () => {
                isArchivePinned = false
                gsap.set(archiveTrack, {
                  x: getStartX(),
                  opacity: 0,
                  visibility: "hidden",
                })
                resyncStatusToViewport()
                ScrollTrigger.refresh()
              },
              onUpdate: (self) => {
                setProgress(self.progress)
              },
            },
          })

          if (statusChapter && statusTitle) {
            const chapter = archiveSection.dataset.chapter
            const title = archiveSection.dataset.title
            ScrollTrigger.create({
              trigger: archiveSection,
              start: "top top",
              end: () => `+=${getTravel()}`,
              onEnter: () => {
                statusChapter.textContent = `CH. ${chapter} / 05`
                statusTitle.textContent = title ?? ""
              },
              onEnterBack: () => {
                statusChapter.textContent = `CH. ${chapter} / 05`
                statusTitle.textContent = title ?? ""
              },
            })
          }
        }

        scrambleTargets.forEach((target) => {
          ScrollTrigger.create({
            trigger: target,
            start: "top 95%",
            onEnter: () => {
              if (isArchivePinned && !archiveSection?.contains(target)) return
              scrambleText(target)
            },
            onEnterBack: () => {
              if (isArchivePinned && !archiveSection?.contains(target)) return
              scrambleText(target)
            },
          })
        })

        if (revealTextTargets.length) {
          revealTextTargets.forEach((text) => {
            const tween = gsap.from(text, {
              y: 100,
              clipPath: "inset(0 0 100% 0)",
              duration: 1.2,
              ease: "expo.out",
              paused: true,
            })

            ScrollTrigger.create({
              trigger: text,
              start: "top 90%",
              onEnter: () => {
                if (isArchivePinned && !archiveSection?.contains(text)) return
                tween.play()
              },
              onEnterBack: () => {
                if (isArchivePinned && !archiveSection?.contains(text)) return
                tween.play()
              },
              onLeaveBack: () => {
                tween.reverse()
              },
            })
          })
        }

        sections.forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
              if (isArchivePinned && section !== archiveSection) return
              const rect = section.getBoundingClientRect()
              const probeY = window.innerHeight * 0.5
              const isActive = rect.top <= probeY && rect.bottom >= probeY
              if (!isActive) return
              setProgress(self.progress)
            },
          })
        })

        const crosshair = document.querySelector<HTMLElement>(".crosshair")
        const coordData = document.querySelector<HTMLElement>(".coord-data")
        if (crosshair && coordData) {
          const xTo = gsap.quickTo(crosshair, "x", {
            duration: 0.1,
            ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
          })
          const yTo = gsap.quickTo(crosshair, "y", {
            duration: 0.1,
            ease: "cubic-bezier(0.23, 0.32, 0.23, 0.2)",
          })

          const onMouseMove = (event: MouseEvent) => {
            xTo(event.clientX)
            yTo(event.clientY)
            coordData.textContent = `[X: ${event.clientX}px] [Y: ${event.clientY}px]`
          }

          handleMouseMove = onMouseMove
          window.addEventListener("mousemove", onMouseMove)
        }

        sections.forEach((section, index) => {
          const zIndex = (index + 1) * 10
          section.style.zIndex = `${zIndex}`

          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onUpdate: (self) => {
              if (index > 0) {
                const prev = sections[index - 1]
                const isArchive = prev?.classList.contains("section-archive")

                if (isArchive) {
                  const archiveScale = self.progress > 0.1
                    ? 1 - (self.progress - 0.1) * 0.05
                    : 1

                  gsap.set(prev, {
                    opacity: 1 - self.progress * 0.2,
                    scale: archiveScale,
                    transformOrigin: "center top",
                  })
                } else {
                  gsap.set(prev, {
                    opacity: 1 - self.progress * 0.2,
                    scale: 1 - self.progress * 0.05,
                    transformOrigin: "center top",
                  })
                }
              }
            },
          })
        })

      }, document.body)

      ScrollTrigger.refresh()
    }

    setup()

    return () => {
      isMounted = false
      if (ctx) {
        ctx.revert()
      }
      if (handleMouseMove) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      if (lenisTicker && gsapRef?.ticker) {
        gsapRef.ticker.remove(lenisTicker)
      }
      if (lenisInstance) {
        lenisInstance.destroy()
      }
    }
  }, [])

  return null
}
