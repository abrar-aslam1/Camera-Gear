import { Button } from "@/components/ui/button"
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
      </div>
    </div>
  )
}
