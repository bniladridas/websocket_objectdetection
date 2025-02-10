import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Agentic Zero-Shot Object Detection | AI Vision System',
    template: '%s | Agentic Zero-Shot Object Detection'
  },
  description: 'Advanced AI-powered object detection system using YOLO, LlamaIndex, and WebSocket technologies. Real-time, zero-shot learning for intelligent computer vision.',
  keywords: [
    'AI', 
    'Object Detection', 
    'Computer Vision', 
    'YOLO', 
    'LlamaIndex', 
    'WebSocket', 
    'Zero-Shot Learning', 
    'Machine Learning'
  ],
  authors: [{ name: 'Niladri Das', url: 'https://bniladridas.github.io' }],
  creator: 'Niladri Das',
  publisher: 'Niladri Das',
  generator: 'Next.js',
  applicationName: 'Agentic Zero-Shot Object Detection',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Agentic Zero-Shot Object Detection',
    description: 'Advanced AI-powered object detection system',
    url: 'http://localhost:3000',
    siteName: 'Agentic Zero-Shot Object Detection',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Zero-Shot Object Detection',
    description: 'Advanced AI-powered object detection system',
    creator: '@bniladridas',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans dark`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
