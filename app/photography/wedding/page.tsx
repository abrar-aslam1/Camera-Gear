import { Card } from "@/components/ui/card"

export default function WeddingPhotographyPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Wedding Photography Equipment</h1>
      <div className="grid gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Essential Camera Bodies</h2>
          <ul className="space-y-2">
            <li>• Sony A7 IV - Perfect for low-light reception shots</li>
            <li>• Canon EOS R6 - Excellent autofocus for candid moments</li>
            <li>• Nikon Z6 II - Great all-around wedding camera</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Must-Have Lenses</h2>
          <ul className="space-y-2">
            <li>• 24-70mm f/2.8 - Versatile zoom for ceremony coverage</li>
            <li>• 70-200mm f/2.8 - Perfect for candid shots and ceremonies</li>
            <li>• 85mm f/1.4 - Beautiful portraits with creamy bokeh</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Lighting Equipment</h2>
          <ul className="space-y-2">
            <li>• Profoto B10 Plus - Powerful, portable lighting</li>
            <li>• Godox V1 - Reliable speedlight for receptions</li>
            <li>• Light stands and modifiers</li>
          </ul>
        </Card>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Wedding Photography Guides</h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Pre-Wedding Preparation Guide</h3>
              <ul className="space-y-3">
                <li>1. Meet with the couple at least twice before the wedding</li>
                <li>2. Create a detailed shot list including family groupings</li>
                <li>3. Scout the venue beforehand, noting lighting conditions</li>
                <li>4. Prepare backup equipment and check weather forecasts</li>
                <li>5. Coordinate with wedding planners and venue staff</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Ceremony Photography Tips</h3>
              <ul className="space-y-3">
                <li>1. Position yourself strategically for key moments</li>
                <li>2. Use silent shutter mode during quiet moments</li>
                <li>3. Capture reactions from family members</li>
                <li>4. Be prepared for quick lighting changes</li>
                <li>5. Have multiple memory cards ready</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Reception Photography Techniques</h3>
              <ul className="space-y-3">
                <li>1. Set up off-camera flash early</li>
                <li>2. Use bounce flash for natural-looking light</li>
                <li>3. Capture candid moments on the dance floor</li>
                <li>4. Document all important traditions</li>
                <li>5. Get creative with long exposures for atmosphere</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Post-Processing Workflow</h3>
              <ul className="space-y-3">
                <li>1. Back up images immediately after the event</li>
                <li>2. Create consistent color grading presets</li>
                <li>3. Focus on skin tones and white balance</li>
                <li>4. Deliver preview images within 48 hours</li>
                <li>5. Use batch processing for efficiency</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
