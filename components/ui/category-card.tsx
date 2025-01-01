"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Button } from "./button"

interface CategoryCardProps {
  title: string
  description: string
  image: string
  link: string
}

export function CategoryCard({ title, description, image, link }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <Button asChild>
          <Link href={link}>View Guide</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
