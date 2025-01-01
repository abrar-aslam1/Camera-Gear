import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Camera Gear?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Browse our curated selection of photography and videography equipment, backed by expert reviews and real user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/photography"
              className="inline-flex items-center justify-center rounded-md bg-background text-primary px-8 py-3 text-sm font-medium shadow hover:bg-background/90"
            >
              Explore Photography Gear
            </Link>
            <Link
              href="/videography"
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground text-primary px-8 py-3 text-sm font-medium shadow hover:bg-primary-foreground/90"
            >
              Discover Video Equipment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
