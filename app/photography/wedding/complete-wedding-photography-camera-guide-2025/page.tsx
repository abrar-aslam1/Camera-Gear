import Script from "next/script"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
        <h1 className="text-4xl font-bold mb-6">Complete Wedding Photography Camera Guide 2025</h1>
        
        <p className="text-lg mb-8">
          Wedding photography demands not just technical excellence but also reliability and versatility. 
          This comprehensive guide explores everything you need to know about choosing the perfect camera 
          for wedding photography in 2025.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Understanding Wedding Photography Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Technical Requirements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>High-resolution sensors for detailed shots</li>
                  <li>Advanced autofocus systems</li>
                  <li>Superior low-light performance</li>
                  <li>Fast continuous shooting</li>
                  <li>Professional-grade build quality</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Practical Considerations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dual memory card slots</li>
                  <li>Extended battery life</li>
                  <li>Weather sealing</li>
                  <li>Silent shooting modes</li>
                  <li>Ergonomic design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Camera Categories for Wedding Photography</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Entry Professional ($2,000-3,000)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Advantages</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>More affordable entry point</li>
                      <li>Lighter weight systems</li>
                      <li>Simpler learning curve</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Limitations</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Fewer professional features</li>
                      <li>Limited low-light performance</li>
                      <li>Basic weather sealing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Mid-Range Professional ($3,000-4,500)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Advantages</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Excellent image quality</li>
                      <li>Advanced autofocus</li>
                      <li>Professional build quality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best For</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Full-time professionals</li>
                      <li>Regular wedding shoots</li>
                      <li>Growing businesses</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">High-End Professional ($4,500+)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Advantages</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Ultimate image quality</li>
                      <li>Best-in-class autofocus</li>
                      <li>Superior build quality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best For</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>High-end studios</li>
                      <li>Luxury weddings</li>
                      <li>Maximum reliability</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Essential Features Comparison</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Entry Pro</TableHead>
                <TableHead>Mid-Range</TableHead>
                <TableHead>High-End</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Sensor Resolution</TableCell>
                <TableCell>24-26MP</TableCell>
                <TableCell>30-45MP</TableCell>
                <TableCell>45-61MP</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>AF Points</TableCell>
                <TableCell>300-400</TableCell>
                <TableCell>500-700</TableCell>
                <TableCell>700+</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Card Slots</TableCell>
                <TableCell>1-2</TableCell>
                <TableCell>2</TableCell>
                <TableCell>2-3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Battery Life</TableCell>
                <TableCell>~700 shots</TableCell>
                <TableCell>~1000 shots</TableCell>
                <TableCell>1200+ shots</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weather Sealing</TableCell>
                <TableCell>Basic</TableCell>
                <TableCell>Professional</TableCell>
                <TableCell>Advanced</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Lens Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Essential Lenses</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>24-70mm f/2.8</li>
                  <li>70-200mm f/2.8</li>
                  <li>85mm f/1.4 or f/1.8</li>
                  <li>35mm f/1.4 or f/1.8</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Specialty Lenses</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Macro lens for details</li>
                  <li>16-35mm for venues</li>
                  <li>45mm or 50mm f/1.2</li>
                  <li>135mm f/1.8 or f/2</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Investment Tips</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Start with versatile zooms</li>
                  <li>Add primes gradually</li>
                  <li>Consider rental options</li>
                  <li>Watch for sales cycles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Professional Tips</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Backup Strategies</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Always shoot with dual card slots</li>
                  <li>Carry multiple backup batteries</li>
                  <li>Bring backup camera bodies</li>
                  <li>Use reliable memory cards</li>
                  <li>Implement immediate backup workflow</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Camera Settings</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use back-button focus</li>
                  <li>Set up custom function buttons</li>
                  <li>Configure silent shooting modes</li>
                  <li>Optimize auto-ISO settings</li>
                  <li>Create custom shooting profiles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

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
