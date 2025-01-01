import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: '%s | Camera Gear Blog',
    default: 'Camera Gear Blog',
  },
  description: 'Expert insights and reviews on photography and videography equipment.',
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
