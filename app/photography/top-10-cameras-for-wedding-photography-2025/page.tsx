import Script from "next/script"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata = {
  title: "Top 10 Cameras for Wedding Photography in 2025 | Professional Guide",
  description: "Discover the best cameras for wedding photography in 2025. Comprehensive guide covering features, prices, and expert recommendations for professional wedding photographers.",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top 10 Cameras for Wedding Photography in 2025: Professional Guide",
  "description": "Discover the best cameras for wedding photography in 2025. Comprehensive guide covering features, prices, and expert recommendations for professional wedding photographers.",
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
      "name": "Which is the best overall camera for wedding photography in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Sony A7 IV stands out as the best overall camera for wedding photography in 2025, offering an excellent balance of features including a 33MP full-frame sensor, advanced AI-powered autofocus, outstanding low-light performance, and impressive battery life."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best high-resolution camera for wedding photography?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Sony A7R V with its 61MP full-frame sensor is the best high-resolution camera for wedding photography, offering exceptional detail for large prints and creative cropping flexibility, along with enhanced AI processing and advanced stabilization."
      }
    },
    {
      "@type": "Question",
      "name": "Which camera offers the best value for wedding photography?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Nikon Z6 III offers excellent value, providing a refined 27MP full-frame sensor, professional-grade weather sealing, enhanced face and eye detection, dual memory card slots, and superior ergonomics at a competitive price point."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best camera for fast-paced wedding moments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Canon EOS R6 Mark II excels at capturing fast-paced wedding moments with its enhanced subject tracking, up to 40 fps electronic shutter, and advanced image stabilization, making it perfect for capturing spontaneous moments and reactions."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Canon EOS R3 worth its premium price for wedding photography?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the Canon EOS R3 justifies its premium price for professional wedding photographers who need the ultimate in reliability and performance. Its advanced eye-control AF, outstanding low-light performance, and superior weather sealing make it an excellent investment for high-end wedding photography."
      }
    }
  ]
}

export default function WeddingPhotographyPage() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <Script id="faq-structured-data" type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </Script>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Top 10 Cameras for Wedding Photography in 2025: Professional Guide</h1>
        
        <p className="text-lg mb-8">
          Capturing precious wedding moments demands exceptional camera equipment that delivers under diverse lighting conditions. 
          In this comprehensive guide, we'll explore the most powerful cameras that professional wedding photographers trust in 2025.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Selection Criteria</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Low-light performance for dimly lit venues</li>
                <li>Fast autofocus for capturing spontaneous moments</li>
                <li>Dual card slots for immediate backup</li>
                <li>Superior dynamic range for challenging lighting conditions</li>
                <li>Silent shooting capabilities for ceremony discretion</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The Ultimate Wedding Photography Arsenal</h2>
          
          <div className="space-y-6">
            {cameras.map((camera, index) => (
              <Card key={camera.name}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">
                      {index + 1}. {camera.name}
                    </h3>
                    <Badge variant="secondary">{camera.type}</Badge>
                  </div>
                  <ul className="list-disc pl-6 space-y-2">
                    {camera.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Investment Considerations</h2>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Price Range</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Entry Professional</TableCell>
                <TableCell>$2,000-3,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mid-Range Professional</TableCell>
                <TableCell>$3,000-4,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>High-End Professional</TableCell>
                <TableCell>$4,500+</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Essential Accessories</h3>
            <Card>
              <CardContent className="pt-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional-grade lenses</li>
                  <li>Backup batteries</li>
                  <li>Memory cards</li>
                  <li>Camera bags</li>
                  <li>Lighting equipment</li>
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
                <h3 className="text-xl font-semibold mb-4">Which is the best overall camera for wedding photography in 2025?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The Sony A7 IV stands out as the best overall camera for wedding photography in 2025, offering an 
                  excellent balance of features including a 33MP full-frame sensor, advanced AI-powered autofocus, 
                  outstanding low-light performance, and impressive battery life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">What's the best high-resolution camera for wedding photography?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The Sony A7R V with its 61MP full-frame sensor is the best high-resolution camera for wedding photography, 
                  offering exceptional detail for large prints and creative cropping flexibility, along with enhanced AI 
                  processing and advanced stabilization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Which camera offers the best value for wedding photography?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The Nikon Z6 III offers excellent value, providing a refined 27MP full-frame sensor, professional-grade 
                  weather sealing, enhanced face and eye detection, dual memory card slots, and superior ergonomics at a 
                  competitive price point.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">What's the best camera for fast-paced wedding moments?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The Canon EOS R6 Mark II excels at capturing fast-paced wedding moments with its enhanced subject tracking, 
                  up to 40 fps electronic shutter, and advanced image stabilization, making it perfect for capturing 
                  spontaneous moments and reactions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Is the Canon EOS R3 worth its premium price for wedding photography?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, the Canon EOS R3 justifies its premium price for professional wedding photographers who need the 
                  ultimate in reliability and performance. Its advanced eye-control AF, outstanding low-light performance, 
                  and superior weather sealing make it an excellent investment for high-end wedding photography.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Selecting the right camera for wedding photography requires careful consideration of technical specifications, 
              reliability, and practical features. The cameras listed above represent the pinnacle of wedding photography 
              equipment in 2025, offering professional photographers the tools needed to capture unforgettable moments with 
              confidence and creativity.
            </p>
            <p className="mt-4">
              Whether you're an established wedding photographer or building your professional kit, these cameras provide 
              the perfect blend of performance, reliability, and image quality needed for successful wedding photography. 
              Choose based on your specific shooting style, budget, and professional requirements to ensure the best possible 
              investment in your photography business.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

const cameras = [
  {
    name: "Sony A7 IV",
    type: "Hybrid",
    features: [
      "33MP full-frame sensor",
      "Advanced AI-powered autofocus",
      "Outstanding low-light performance",
      "Professional-grade 4K video",
      "Impressive battery life for full-day shoots"
    ]
  },
  {
    name: "Canon EOS R6 Mark II",
    type: "Speed",
    features: [
      "Enhanced subject tracking",
      "Dual card slots for instant backup",
      "Up to 40 fps electronic shutter",
      "Improved battery performance",
      "Advanced image stabilization"
    ]
  },
  {
    name: "Nikon Z6 III",
    type: "All-around",
    features: [
      "Refined 27MP full-frame sensor",
      "Professional-grade weather sealing",
      "Enhanced face and eye detection",
      "Dual memory card slots",
      "Superior ergonomics for extended use"
    ]
  },
  {
    name: "Sony A9 III",
    type: "Speed",
    features: [
      "Revolutionary global shutter sensor",
      "Blackout-free shooting",
      "Advanced subject recognition",
      "Enhanced battery life",
      "Professional connectivity options"
    ]
  },
  {
    name: "Canon EOS R5",
    type: "Resolution",
    features: [
      "45MP full-frame sensor",
      "Advanced subject tracking",
      "8K video capabilities",
      "Dual card slots",
      "Professional-grade weather sealing"
    ]
  },
  {
    name: "Nikon Z8",
    type: "Hybrid",
    features: [
      "45.7MP full-frame sensor",
      "Advanced 3D tracking",
      "Professional-grade build quality",
      "Extended battery life",
      "Comprehensive lens compatibility"
    ]
  },
  {
    name: "Sony A7R V",
    type: "Resolution",
    features: [
      "61MP full-frame sensor",
      "Enhanced AI processing",
      "Advanced stabilization",
      "Professional connectivity",
      "Improved battery performance"
    ]
  },
  {
    name: "Canon EOS R3",
    type: "Professional",
    features: [
      "Advanced eye-control AF",
      "Outstanding low-light performance",
      "Professional-grade build",
      "Enhanced battery life",
      "Superior weather sealing"
    ]
  },
  {
    name: "Fujifilm X-H2S",
    type: "Crop-sensor",
    features: [
      "Outstanding autofocus system",
      "Professional video capabilities",
      "Compact form factor",
      "Extended battery life",
      "Comprehensive lens ecosystem"
    ]
  },
  {
    name: "Panasonic S5 II",
    type: "Hybrid",
    features: [
      "Advanced phase-detection AF",
      "Excellent image stabilization",
      "Professional video features",
      "Dual card slots",
      "Competitive pricing"
    ]
  }
]
