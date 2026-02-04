"use client"

import { useEffect, useRef, useState } from "react"
import usePrefersReducedMotion from "../utils/usePrefersReducedMotion"
import { buildWhatsAppUrl } from "../utils/whatsapp"
import styles from "./StickyChat.module.css"

type StickyChatProps = {
  whatsappNumber: string
  defaultMessage?: string
}

export default function StickyChat({
  whatsappNumber,
  defaultMessage = "Hi, I'd like to see my jersey design in 3D. Can you help?",
}: StickyChatProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(defaultMessage)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (!open) return

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open])

  useEffect(() => {
    if (!open) return
    requestAnimationFrame(() => textareaRef.current?.focus())
  }, [open])

  const handleSend = () => {
    const trimmed = message.trim()
    if (!trimmed) return
    window.location.href = buildWhatsAppUrl(whatsappNumber, trimmed)
  }

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div
      className={`${styles.stickyChat} ${open ? styles.isOpen : ""}`}
      data-reduced-motion={reducedMotion ? "true" : "false"}
    >
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="sticky-chat-panel"
        aria-label={open ? "Minimize chat" : "Open chat"}
        onClick={handleToggle}
      >
        <span className="sr-only">Chat</span>
        <svg
          className={styles.icon}
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M16 3C9.383 3 4 8.215 4 14.65c0 2.35.755 4.54 2.037 6.35L5 29l8.254-1.96c1.66.49 3.42.75 5.242.75 6.617 0 12-5.215 12-11.65S22.617 3 16 3zm6.512 16.88c-.27.765-1.566 1.47-2.213 1.562-.602.09-1.37.128-2.213-.136-.512-.162-1.168-.38-2.01-.73-3.54-1.47-5.85-5.02-6.02-5.26-.166-.245-1.44-1.91-1.44-3.648 0-1.74.92-2.6 1.25-2.955.33-.355.73-.445.975-.445.246 0 .492.005.705.016.23.01.536-.09.84.645.312.75 1.064 2.6 1.16 2.79.095.19.16.41.034.66-.125.245-.19.4-.38.62-.19.22-.4.49-.57.66-.19.19-.39.39-.17.76.22.37.98 1.62 2.11 2.62 1.45 1.29 2.67 1.69 3.04 1.88.37.19.59.16.81-.1.22-.26.93-1.07 1.18-1.44.245-.37.49-.31.83-.19.34.12 2.15 1.01 2.52 1.2.37.19.62.28.71.44.09.16.09.9-.18 1.66z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        id="sticky-chat-panel"
        className={styles.panel}
        role="dialog"
        aria-modal={open ? "true" : "false"}
        aria-hidden={!open}
        aria-label="Chat on WhatsApp"
      >
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-label="Message for WhatsApp"
        />
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.send}
            onClick={handleSend}
            disabled={!message.trim()}
          >
            Send to WhatsApp
          </button>
          <button
            type="button"
            className={styles.close}
            onClick={() => {
              setOpen(false)
              toggleRef.current?.focus()
            }}
            aria-label="Close chat"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
