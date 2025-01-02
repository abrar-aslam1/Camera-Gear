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

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Camera Movement</h2>
          <ul className="space-y-2">
            <li>• DJI Ronin 4D - All-in-one solution</li>
            <li>• Motion Impossible AGITO - Remote dolly</li>
            <li>• Technocrane 15 - For dynamic moves</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
