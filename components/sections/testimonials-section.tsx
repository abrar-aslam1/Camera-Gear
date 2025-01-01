import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Professional Wedding Photographer',
    content: 'The gear recommendations here helped me upgrade my kit perfectly. The detailed comparisons made the decision so much easier.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Michael Chen',
    role: 'Travel Photographer',
    content: 'I love how comprehensive the reviews are. They helped me find the perfect travel camera setup within my budget.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'David Wilson',
    role: 'YouTube Content Creator',
    content: 'The videography equipment guides are fantastic. Really helped me level up my YouTube production quality.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of photographers who trust our recommendations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
