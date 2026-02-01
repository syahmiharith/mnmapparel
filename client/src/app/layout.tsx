import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MNM Apparel',
  description: 'Landing page for MNM Apparel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
