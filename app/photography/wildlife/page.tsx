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

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Wildlife Photography Guides</h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Field Techniques</h3>
              <ul className="space-y-3">
                <li>1. Research animal behavior and habitats</li>
                <li>2. Approach slowly and stay downwind</li>
                <li>3. Use natural blinds and camouflage</li>
                <li>4. Respect safe distances for different species</li>
                <li>5. Learn to read animal body language</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Camera Settings</h3>
              <ul className="space-y-3">
                <li>1. Use continuous autofocus with subject tracking</li>
                <li>2. Set high shutter speeds (1/1000s minimum)</li>
                <li>3. Enable back-button focus for better control</li>
                <li>4. Use burst mode for action sequences</li>
                <li>5. Monitor histogram for proper exposure</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Composition Tips</h3>
              <ul className="space-y-3">
                <li>1. Focus on the animal's eyes</li>
                <li>2. Leave space for movement direction</li>
                <li>3. Include environmental context</li>
                <li>4. Capture behavior and interactions</li>
                <li>5. Consider different perspectives</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Seasonal Advice</h3>
              <ul className="space-y-3">
                <li>1. Spring - Focus on new life and courtship</li>
                <li>2. Summer - Photograph early morning/late evening</li>
                <li>3. Autumn - Capture migration patterns</li>
                <li>4. Winter - Document survival behaviors</li>
                <li>5. Plan trips around breeding seasons</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Ethics Guidelines</h3>
              <ul className="space-y-3">
                <li>1. Never bait or lure wildlife</li>
                <li>2. Avoid disturbing nests or dens</li>
                <li>3. Follow park and reserve rules</li>
                <li>4. Keep location data private for sensitive species</li>
                <li>5. Put animal welfare before getting the shot</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
