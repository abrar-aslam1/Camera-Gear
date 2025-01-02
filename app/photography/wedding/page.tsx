import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Wedding Photography Guides & Resources | Camera Gear",
  description: "Comprehensive guides, camera recommendations, and expert advice for wedding photography. Find the best gear and techniques for capturing perfect wedding moments.",
}

export default function WeddingPhotographyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Wedding Photography</h1>
      
      <p className="text-lg mb-8">
        Discover comprehensive guides and resources for wedding photography. From camera recommendations 
        to professional techniques, find everything you need to capture those perfect wedding moments.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/photography/wedding/top-10-cameras-for-wedding-photography-2025">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Top 10 Cameras for Wedding Photography (2025)</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Explore our curated selection of the best cameras for wedding photography in 2025. 
                Detailed reviews, comparisons, and recommendations for every budget and style.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/photography/wedding/complete-wedding-photography-camera-guide-2025">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Complete Wedding Photography Camera Guide (2025)</h2>
              <p className="text-gray-700 dark:text-gray-300">
                In-depth guide covering everything from camera selection to professional techniques. 
                Essential reading for both new and experienced wedding photographers.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Why Wedding Photography?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Rewarding Career</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Wedding photography offers a fulfilling career capturing life's most precious moments. 
                High demand and creative satisfaction make it an attractive specialization.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Technical Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Master diverse photography skills from portraits to action shots. Wedding photography 
                demands technical proficiency in various lighting conditions and scenarios.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Business Opportunity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Build a successful photography business with high-value clients. Wedding photography 
                offers excellent income potential and room for growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
