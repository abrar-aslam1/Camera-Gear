import { Card } from "@/components/ui/card"

export default function YouTubeContentPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">YouTube Content Creation Equipment</h1>
      <div className="grid gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Camera Options</h2>
          <ul className="space-y-2">
            <li>• Sony ZV-1 II - Perfect vlogging camera</li>
            <li>• Canon R7 - Great autofocus for solo creators</li>
            <li>• Panasonic GH6 - No recording limits</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Audio Equipment</h2>
          <ul className="space-y-2">
            <li>• Rode Wireless GO II - Reliable wireless mic</li>
            <li>• Shure SM7B - Professional studio mic</li>
            <li>• Rode VideoMic Pro+ - On-camera mic</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Lighting Setup</h2>
          <ul className="space-y-2">
            <li>• Aputure MC 4-Light Kit - Versatile RGB lighting</li>
            <li>• Elgato Key Light Air - Perfect for desk setups</li>
            <li>• Godox SL-60W - Affordable softbox light</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Streaming Gear</h2>
          <ul className="space-y-2">
            <li>• Elgato Stream Deck - Workflow optimization</li>
            <li>• Elgato Cam Link 4K - HDMI capture</li>
            <li>• GoXLR Mini - Audio mixing solution</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
