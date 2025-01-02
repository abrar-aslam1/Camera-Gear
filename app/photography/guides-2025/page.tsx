import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PhotographyGuides2025Page() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-4">Photography Guides & Recommendations 2025</h1>
      <p className="text-muted-foreground text-lg mb-8">Our comprehensive guide to the best photography gear for 2025</p>
      
      <div className="grid gap-8">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-semibold">Top Camera Recommendations</h2>
            <Badge>Updated for 2025</Badge>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Entry Level</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Canon EOS R50 - Best for beginners ($999)</li>
                <li>Nikon Z50 - Great value ($999)</li>
                <li>Sony A6400 - Excellent autofocus ($899)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Mid Range</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Canon R6 Mark II - All-around performer ($2,499)</li>
                <li>Sony A7 IV - Hybrid shooter's dream ($2,499)</li>
                <li>Nikon Z6 III - Great value proposition ($2,299)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Professional</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sony A1 - No compromises ($6,499)</li>
                <li>Canon R3 - Speed demon ($5,999)</li>
                <li>Nikon Z9 - Built like a tank ($5,499)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-semibold">Must-Have Lenses 2025</h2>
            <Badge>New Picks</Badge>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Standard Zoom</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sony 24-70mm f/2.8 GM II - Best overall</li>
                <li>Canon RF 24-70mm f/2.8L IS - Great stabilization</li>
                <li>Sigma 24-70mm f/2.8 Art - Best value</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Prime Lenses</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sony 35mm f/1.4 GM - Street photography king</li>
                <li>Canon RF 85mm f/1.2L - Portrait perfection</li>
                <li>Nikon Z 50mm f/1.2 S - Low light master</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-semibold">2025 Buying Guide Tips</h2>
            <Badge variant="outline">Pro Tips</Badge>
          </div>
          <ul className="space-y-3">
            <li>• Mirrorless is now the standard - DSLR production is ending</li>
            <li>• AI-powered autofocus is a game-changer - prioritize this feature</li>
            <li>• High-resolution sensors (40MP+) are becoming more affordable</li>
            <li>• Consider hybrid shooting capabilities (photo/video)</li>
            <li>• Look for cameras with good computational photography features</li>
            <li>• Weather sealing is becoming standard even in mid-range gear</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
