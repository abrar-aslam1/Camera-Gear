import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SearchProvider } from '../lib/contexts/search-context'
import { ThemeProvider } from '../components/theme-provider'
import { SiteHeader } from '../components/site-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Camera Gear Guide',
  description: 'Find the perfect camera gear for your vision',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SearchProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              {children}
            </div>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
