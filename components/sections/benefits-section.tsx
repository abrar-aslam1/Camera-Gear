import { Camera, Shield, Star, Users } from 'lucide-react'

const benefits = [
  {
    title: 'Expert Reviews',
    description: 'In-depth analysis from professional photographers and videographers',
    icon: Star,
  },
  {
    title: 'Trusted Community',
    description: 'Join thousands of photographers sharing their experiences',
    icon: Users,
  },
  {
    title: 'Quality Assurance',
    description: 'Every piece of gear is thoroughly tested and verified',
    icon: Shield,
  },
  {
    title: 'Latest Equipment',
    description: 'Stay updated with the newest camera gear and technology',
    icon: Camera,
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help you make informed decisions about your camera gear investments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
