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
      </div>
    </div>
  )
}