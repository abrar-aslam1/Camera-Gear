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

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Landscape Photography Guides</h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Composition Techniques</h3>
              <ul className="space-y-3">
                <li>1. Use leading lines to draw viewers into the scene</li>
                <li>2. Include foreground elements for depth</li>
                <li>3. Follow the rule of thirds for balanced images</li>
                <li>4. Look for natural frames in the landscape</li>
                <li>5. Use scale elements to show size relationships</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Light and Timing</h3>
              <ul className="space-y-3">
                <li>1. Plan shoots around golden and blue hours</li>
                <li>2. Use apps to track sun/moon positions</li>
                <li>3. Monitor weather forecasts for dramatic conditions</li>
                <li>4. Consider seasonal lighting changes</li>
                <li>5. Use neutral density filters for long exposures</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Technical Settings</h3>
              <ul className="space-y-3">
                <li>1. Use base ISO for maximum quality</li>
                <li>2. Focus at hyperfocal distance for maximum depth of field</li>
                <li>3. Bracket exposures in high contrast scenes</li>
                <li>4. Use mirror lock-up or electronic shutter for sharpness</li>
                <li>5. Shoot in RAW for maximum editing flexibility</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Post-Processing Tips</h3>
              <ul className="space-y-3">
                <li>1. Use luminosity masks for precise adjustments</li>
                <li>2. Balance highlights and shadows carefully</li>
                <li>3. Remove sensor dust spots thoroughly</li>
                <li>4. Consider focus stacking for front-to-back sharpness</li>
                <li>5. Use color theory for impactful edits</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
