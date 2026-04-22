import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Narjes Merhi | AI Engineer',
  description: 'Motivated Computer Science graduate specializing in AI, machine learning, and cloud-based intelligent systems. Experienced in building scalable AI applications, including RAG-based systems, chatbots, and workflow automation tools.',
  keywords: ['AI Engineer', 'Machine Learning', 'RAG', 'NestJS', 'React', 'AWS', 'Chatbot', 'Python', 'Full Stack Developer'],
  authors: [{ name: 'Narjes Merhi' }],
  creator: 'Narjes Merhi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Narjes Merhi | AI Engineer',
    description: 'Building scalable AI systems powered by real-world data',
    siteName: 'Narjes Merhi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narjes Merhi | AI Engineer',
    description: 'Building scalable AI systems powered by real-world data',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
