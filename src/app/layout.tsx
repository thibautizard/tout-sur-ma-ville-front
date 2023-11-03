import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Tout sur ma ville - Accueil',
  description: 'Tout sur ma ville',
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
