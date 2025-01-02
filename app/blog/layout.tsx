import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: '%s | Camera Gear Blog',
    default: 'Camera Gear Blog',
  },
  description: 'Expert insights and reviews on photography and videography equipment.',
  metadataBase: new URL('https://cameragear.com'),
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    type: 'website',
    siteName: 'Camera Gear Blog',
    title: 'Camera Gear Blog',
    description: 'Expert insights and reviews on photography and videography equipment.',
    images: [
      {
        url: '/Camera Gear-3.png',
        width: 1200,
        height: 630,
        alt: 'Camera Gear Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camera Gear Blog',
    description: 'Expert insights and reviews on photography and videography equipment.',
    images: ['/Camera Gear-3.png']
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
    google: 'your-google-verification-code', // Add your Google verification code
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
