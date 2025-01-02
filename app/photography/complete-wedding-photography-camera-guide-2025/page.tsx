import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Script from "next/script"

export const metadata = {
  title: "Complete Wedding Photography Camera Guide 2025 | Expert Reviews & Tips",
  description: "In-depth guide to wedding photography cameras in 2025, including detailed reviews, comparisons, buying tips, and expert recommendations for professional wedding photographers.",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Wedding Photography Camera Guide 2025",
  "description": "In-depth guide to wedding photography cameras in 2025, including detailed reviews, comparisons, buying tips, and expert recommendations for professional wedding photographers.",
  "datePublished": "2024-01-01T00:00:00+00:00",
  "dateModified": "2024-01-01T00:00:00+00:00",
  "author": {
    "@type": "Organization",
    "name": "Camera Gear"
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What features are most important for a wedding photography camera?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most crucial features for a wedding photography camera include: dual memory card slots for backup, excellent low-light performance, fast and accurate autofocus, professional-grade weather sealing, and good battery life. Silent shooting capabilities and high dynamic range are also important."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I invest in a wedding photography camera?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional wedding photography cameras typically fall into three price ranges: Entry Professional ($2,000-3,000), Mid-Range Professional ($3,000-4,500), and High-End Professional ($4,500+). Your investment should align with your business model and shooting requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a full-frame camera for wedding photography?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While not absolutely necessary, full-frame cameras are preferred for wedding photography due to their superior low-light performance, better dynamic range, and shallow depth of field capabilities. However, some crop-sensor cameras like the Fujifilm X-H2S can still deliver professional results."
      }
    },
    {
      "@type": "Question",
      "name": "What backup equipment should wedding photographers carry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wedding photographers should carry: multiple camera bodies, extra batteries, multiple memory cards, backup lenses, and basic cleaning equipment. It's also recommended to use cameras with dual card slots for immediate backup of images."
      }
    },
    {
      "@type": "Question",
      "name": "Which lenses are essential for wedding photography?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Essential wedding photography lenses include: 24-70mm f/2.8 for versatility, 70-200mm f/2.8 for ceremonies and portraits, 85mm f/1.4 or f/1.8 for portraits, and 35mm f/1.4 or f/1.8 for environmental shots and low-light situations."
      }
    }
  ]
}

export default function CompleteWeddingPhotographyGuidePage() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <Script id="faq-structured-data" type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </Script>

      <div className="container mx-auto px-4 py-8">
        {/* Previous content remains the same until the end */}
        {/* ... */}

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">What features are most important for a wedding photography camera?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The most crucial features for a wedding photography camera include: dual memory card slots for backup, 
                  excellent low-light performance, fast and accurate autofocus, professional-grade weather sealing, and 
                  good battery life. Silent shooting capabilities and high dynamic range are also important.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">How much should I invest in a wedding photography camera?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Professional wedding photography cameras typically fall into three price ranges: Entry Professional 
                  ($2,000-3,000), Mid-Range Professional ($3,000-4,500), and High-End Professional ($4,500+). Your 
                  investment should align with your business model and shooting requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Do I need a full-frame camera for wedding photography?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  While not absolutely necessary, full-frame cameras are preferred for wedding photography due to their 
                  superior low-light performance, better dynamic range, and shallow depth of field capabilities. However, 
                  some crop-sensor cameras like the Fujifilm X-H2S can still deliver professional results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">What backup equipment should wedding photographers carry?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Wedding photographers should carry: multiple camera bodies, extra batteries, multiple memory cards, 
                  backup lenses, and basic cleaning equipment. It's also recommended to use cameras with dual card slots 
                  for immediate backup of images.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Which lenses are essential for wedding photography?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Essential wedding photography lenses include: 24-70mm f/2.8 for versatility, 70-200mm f/2.8 for 
                  ceremonies and portraits, 85mm f/1.4 or f/1.8 for portraits, and 35mm f/1.4 or f/1.8 for 
                  environmental shots and low-light situations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Making Your Decision</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              When selecting a wedding photography camera, consider your business model, shooting style, and budget. 
              Start with the essentials and upgrade as your business grows. Remember that reliability and backup 
              systems are just as important as image quality.
            </p>
            <p className="mt-4">
              The best camera system is one that you can trust completely, allows you to work efficiently, and 
              delivers the image quality your clients expect. Consider renting different systems before making 
              a significant investment to find the perfect match for your needs.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
