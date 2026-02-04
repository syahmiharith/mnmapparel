import type { Metadata } from 'next'
import './globals.css'
import FirebaseAnalytics from '../components/Firebase'

export const metadata: Metadata = {
  title: 'MNM Apparel',
  description: 'Landing page for MNM Apparel, a streetwear brand.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-grid" aria-hidden="true" />
        {children}
        <FirebaseAnalytics />
      </body>
    </html>
  )
}
