import { videographyCategories } from '@/lib/constants/categories'
import Image from 'next/image'
import Link from 'next/link'

export default function VideographyPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Videography Equipment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videographyCategories.map((category) => (
          <Link
            key={category.link}
            href={category.link}
            className="group block"
          >
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-muted-foreground">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
