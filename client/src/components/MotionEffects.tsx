"use client"

import { useEffect } from "react"

export default function MotionEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const preloader = document.querySelector<HTMLElement>(".preloader")
    const preloaderLogo = document.querySelector<HTMLElement>(".preloader-logo")

    if (reduceMotion) {
      if (preloader) {
        preloader.style.display = "none"
      }
      return
    }

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

      ctx = gsap.context(() => {
        const heroSub = document.querySelector<HTMLElement>(".js-hero-sub")
        const ctas = gsap.utils.toArray<HTMLElement>(".js-cta")
        const scrambleTargets = gsap.utils.toArray<HTMLElement>(".js-scramble")

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

        scrambleTargets.forEach((target) => {
          ScrollTrigger.create({
            trigger: target,
            start: "top 95%",
            onEnter: () => scrambleText(target),
            onEnterBack: () => scrambleText(target),
          })
        })

        const revealTextTargets = gsap.utils.toArray<HTMLElement>(".reveal-text")
        if (revealTextTargets.length) {
          revealTextTargets.forEach((text) => {
            gsap.from(text, {
              y: 100,
              clipPath: "inset(0 0 100% 0)",
              duration: 1.2,
              ease: "expo.out",
              scrollTrigger: {
                trigger: text,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            })
          })
        }

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
        const sections = gsap.utils.toArray<HTMLElement>(".section")

        if (statusChapter && statusTitle) {
          sections.forEach((section) => {
            const chapter = section.dataset.chapter
            const title = section.dataset.title

            ScrollTrigger.create({
              trigger: section,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                statusChapter.textContent = `CH. ${chapter} / 06`
                statusTitle.textContent = title ?? ""
              },
              onEnterBack: () => {
                statusChapter.textContent = `CH. ${chapter} / 06`
                statusTitle.textContent = title ?? ""
              },
            })
          })
        }

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
          section.style.backgroundColor = "#080808"

          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              if (index > 0) {
                const prev = sections[index - 1]
                gsap.set(prev, {
                  filter: `brightness(${1 - self.progress * 0.7})`,
                  scale: 1 - self.progress * 0.05,
                })
              }
            },
          })
        })

        ScrollTrigger.create({
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.3, max: 0.7 },
            delay: 0.1,
            ease: "power2.inOut",
          },
        })

      }, document.body)

      ScrollTrigger.refresh()
    }

    setup()

    return () => {
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
