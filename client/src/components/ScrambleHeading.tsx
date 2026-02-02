import React from "react"

type ScrambleHeadingProps = {
  as: "h1" | "h2"
  id?: string
  className?: string
  text: string
}

export default function ScrambleHeading({ as: Tag, id, className, text }: ScrambleHeadingProps) {
  return (
    <Tag id={id} className={`scramble-heading ${className ?? ""}`}>
      <span className="scramble-ghost" aria-hidden="true">
        {text}
      </span>
      <span className="scramble-layer js-scramble" aria-hidden="true">
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </Tag>
  )
}
