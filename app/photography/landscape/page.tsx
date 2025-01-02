import { Card } from "@/components/ui/card"

export default function LandscapePhotographyPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Landscape Photography Equipment</h1>
      <div className="grid gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Camera Bodies</h2>
          <ul className="space-y-2">
            <li>• Canon EOS R5 - High resolution for detailed landscapes</li>
            <li>• Sony A7R V - Excellent dynamic range</li>
            <li>• Fujifilm GFX 100S - Medium format for ultimate detail</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Essential Lenses</h2>
          <ul className="space-y-2">
            <li>• 16-35mm f/2.8 - Wide angle for dramatic scenes</li>
            <li>• 24-70mm f/2.8 - Versatile zoom range</li>
            <li>• 100-400mm f/4.5-5.6 - Telephoto for compressed landscapes</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Essential Accessories</h2>
          <ul className="space-y-2">
            <li>• Really Right Stuff Tripod - Rock-solid stability</li>
            <li>• Lee Filters Foundation Kit - For long exposures</li>
            <li>• Remote shutter release - For sharp images</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
