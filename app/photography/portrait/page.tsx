import { Card } from "@/components/ui/card"

export default function PortraitPhotographyPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Portrait Photography Equipment</h1>
      <div className="grid gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Camera Bodies</h2>
          <ul className="space-y-2">
            <li>• Sony A7 IV - Excellent eye autofocus</li>
            <li>• Canon EOS R6 - Great skin tones</li>
            <li>• Nikon Z6 II - Beautiful color science</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Portrait Lenses</h2>
          <ul className="space-y-2">
            <li>• 85mm f/1.4 - Classic portrait focal length</li>
            <li>• 35mm f/1.4 - Environmental portraits</li>
            <li>• 70-200mm f/2.8 - Compression for headshots</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Lighting Setup</h2>
          <ul className="space-y-2">
            <li>• Profoto B1X - Studio-quality portable flash</li>
            <li>• 5-in-1 Reflector - Natural light modification</li>
            <li>• Softboxes and beauty dish</li>
          </ul>
        </Card>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Portrait Photography Guides</h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Posing Fundamentals</h3>
              <ul className="space-y-3">
                <li>1. Create angles with arms and legs</li>
                <li>2. Position hands naturally and elegantly</li>
                <li>3. Guide facial expressions and eye direction</li>
                <li>4. Use head tilts and body angles</li>
                <li>5. Consider body type when posing</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Lighting Patterns</h3>
              <ul className="space-y-3">
                <li>1. Master Rembrandt lighting for drama</li>
                <li>2. Use butterfly lighting for beauty shots</li>
                <li>3. Implement split lighting for mood</li>
                <li>4. Control light ratios for dimension</li>
                <li>5. Work with natural window light</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Communication Tips</h3>
              <ul className="space-y-3">
                <li>1. Build rapport before shooting</li>
                <li>2. Give clear, simple directions</li>
                <li>3. Show examples of desired poses</li>
                <li>4. Offer positive reinforcement</li>
                <li>5. Keep the session flowing naturally</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Retouching Guidelines</h3>
              <ul className="space-y-3">
                <li>1. Maintain natural skin texture</li>
                <li>2. Remove temporary blemishes only</li>
                <li>3. Keep eye sparkle and catchlights</li>
                <li>4. Enhance but don't transform</li>
                <li>5. Consider the subject's preferences</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
