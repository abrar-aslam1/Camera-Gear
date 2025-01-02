import { Card } from "@/components/ui/card"

export default function CommercialVideoPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Commercial Video Production Equipment</h1>
      <div className="grid gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Professional Cameras</h2>
          <ul className="space-y-2">
            <li>• RED Komodo 6K - Compact cinema camera</li>
            <li>• Sony Venice 2 - High-end production</li>
            <li>• ARRI Amira - Commercial workhorse</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Professional Lenses</h2>
          <ul className="space-y-2">
            <li>• Angenieux EZ Zooms - Versatile cinema zooms</li>
            <li>• Canon Sumire Primes - Beautiful character</li>
            <li>• Zeiss Supreme Primes - Sharp and reliable</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Lighting Equipment</h2>
          <ul className="space-y-2">
            <li>• ARRI Orbiter - Versatile LED fixture</li>
            <li>• Astera Titan Tubes - RGB tube lights</li>
            <li>• Aputure LS 600d Pro - Powerful daylight LED</li>
          </ul>
        </Card>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Commercial Video Production Guides</h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Pre-Production Planning</h3>
              <ul className="space-y-3">
                <li>1. Develop detailed creative brief</li>
                <li>2. Create comprehensive storyboards</li>
                <li>3. Scout and secure locations</li>
                <li>4. Cast talent and hire crew</li>
                <li>5. Obtain necessary permits</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Brand Integration</h3>
              <ul className="space-y-3">
                <li>1. Understand brand guidelines</li>
                <li>2. Incorporate brand colors effectively</li>
                <li>3. Position products strategically</li>
                <li>4. Include key messaging points</li>
                <li>5. Maintain consistent brand voice</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Production Techniques</h3>
              <ul className="space-y-3">
                <li>1. Light products for maximum appeal</li>
                <li>2. Use motion control for product shots</li>
                <li>3. Capture multiple variations</li>
                <li>4. Film sufficient b-roll</li>
                <li>5. Record clean audio takes</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Client Management</h3>
              <ul className="space-y-3">
                <li>1. Set clear expectations</li>
                <li>2. Establish approval processes</li>
                <li>3. Manage revision rounds</li>
                <li>4. Document all decisions</li>
                <li>5. Maintain professional communication</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Post-Production</h3>
              <ul className="space-y-3">
                <li>1. Follow brand style guide</li>
                <li>2. Create multiple deliverable formats</li>
                <li>3. Add professional motion graphics</li>
                <li>4. Color grade for consistency</li>
                <li>5. Mix audio for various platforms</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Platform Optimization</h3>
              <ul className="space-y-3">
                <li>1. Adapt content for different platforms</li>
                <li>2. Consider aspect ratios</li>
                <li>3. Optimize for mobile viewing</li>
                <li>4. Follow platform specifications</li>
                <li>5. Create platform-specific versions</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
