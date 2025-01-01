import Link from 'next/link'
import { HeroSection } from '../components/sections/hero-section'
import { BenefitsSection } from '../components/sections/benefits-section'
import { ComparisonChart } from '../components/comparison-chart'
import { TestimonialsSection } from '../components/sections/testimonials-section'
import { CTASection } from '../components/sections/cta-section'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">How We Compare</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              See why photographers trust us for gear recommendations
            </p>
            <ComparisonChart />
          </div>
        </section>

        <TestimonialsSection />
        <CTASection />
      </main>

      <footer className="border-t py-8 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 CameraGearForYou. All rights reserved.
            </p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
