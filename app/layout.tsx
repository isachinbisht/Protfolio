import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://isachinbisht.com"),
  title: {
    default: "Sachin Bisht | Founder & Full-Stack Engineer",
    template: "%s | Sachin Bisht",
  },
  description:
    "Portfolio of Sachin Bisht, Founder of Diratech Solutions. Specializing in Web3, AI platforms, and high-performance mobile/web applications.",
  keywords: [
    "Sachin Bisht",
    "Diratech Solutions",
    "Full-Stack Developer",
    "Web3 Developer",
    "React Native Engineer",
    "Delhi Developer",
  ],
  authors: [{ name: "Sachin Bisht", url: "https://isachinbisht.com" }],
  creator: "Sachin Bisht",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isachinbisht.com",
    title: "Sachin Bisht | Founder & Software Engineer",
    description: "Building scalable web & mobile products from the ground up.",
    siteName: "Sachin Bisht Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Bisht",
    description: "Founder at Diratech Solutions & Full-Stack Developer",
  },
  alternates: {
    canonical: "./",
  },
  generator: 'v0.app',
  icons: {
    icon: '/hero-portrait.png',
    apple: '/hero-portrait.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} bg-background`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
