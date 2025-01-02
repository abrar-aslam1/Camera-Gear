import { Card } from "@/components/ui/card"

export default function WildlifePhotographyPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Wildlife Photography Equipment</h1>
      <div className="grid gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Camera Bodies</h2>
          <ul className="space-y-2">
            <li>• Sony A1 - Fast burst shooting and tracking</li>
            <li>• Canon R3 - Exceptional autofocus</li>
            <li>• Nikon Z9 - Professional wildlife camera</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Wildlife Lenses</h2>
          <ul className="space-y-2">
            <li>• 200-600mm f/5.6-6.3 - Versatile super-telephoto</li>
            <li>• 600mm f/4 - Professional prime lens</li>
            <li>• 100-400mm f/4.5-5.6 - Lighter alternative</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Essential Accessories</h2>
          <ul className="space-y-2">
            <li>• Gitzo Carbon Fiber Tripod - Sturdy support</li>
            <li>• Wimberley Gimbal Head - Smooth tracking</li>
            <li>• Camouflage gear and blinds</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
