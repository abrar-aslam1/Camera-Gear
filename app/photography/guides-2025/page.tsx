import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

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
                <li>
                  <Link href="https://www.amazon.com/Canon-EOS-Rebel-T7-18-55mm/dp/B07C2Z21X5" className="text-blue-600 hover:underline">
                    Canon EOS Rebel T7 - Best for beginners ($479)
                  </Link>
                  <p className="text-sm text-gray-600">24.1MP APS-C sensor, built-in Wi-Fi, perfect starter DSLR</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Nikon-DX-Format-3-5-5-6G-VR-Black/dp/B07GW23M7T" className="text-blue-600 hover:underline">
                    Nikon D3500 - Great value ($649)
                  </Link>
                  <p className="text-sm text-gray-600">24.2MP DX sensor, excellent battery life, user-friendly interface</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Sony-Alpha-a6100-Mirrorless-Camera/dp/B07X7FQMS9" className="text-blue-600 hover:underline">
                    Sony A6100 - Excellent autofocus ($799)
                  </Link>
                  <p className="text-sm text-gray-600">24.2MP APS-C, 4K video, advanced AF system</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Mid Range</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link href="https://www.amazon.com/Canon-Mirrorless-Camera-24-105mm-4L/dp/B0BG6MRBTZ" className="text-blue-600 hover:underline">
                    Canon R6 Mark II - All-around performer ($2,499)
                  </Link>
                  <p className="text-sm text-gray-600">24.2MP full-frame, 40fps, advanced subject detection</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Sony-Full-frame-Interchangeable-Mirrorless-Camera/dp/B09JZS55XH" className="text-blue-600 hover:underline">
                    Sony A7 IV - Hybrid shooter's dream ($2,499)
                  </Link>
                  <p className="text-sm text-gray-600">33MP full-frame, 10fps, excellent video features</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Nikon-FX-Format-Mirrorless-Camera-24-70mm/dp/B097B76ZWH" className="text-blue-600 hover:underline">
                    Nikon Z6 II - Great value proposition ($1,999)
                  </Link>
                  <p className="text-sm text-gray-600">24.5MP full-frame, dual processors, robust build</p>
                </li>
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
                <li>
                  <Link href="https://www.amazon.com/Sony-24-70mm-2-8-Standard-Zoom-Lens/dp/B09MVZJY2K" className="text-blue-600 hover:underline">
                    Sony 24-70mm f/2.8 GM II - Best overall ($2,298)
                  </Link>
                  <p className="text-sm text-gray-600">Exceptional sharpness, fast AF, compact design</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Canon-24-70mm-2-8L-Standard-Zoom/dp/B09774JJ3R" className="text-blue-600 hover:underline">
                    Canon RF 24-70mm f/2.8L IS - Great stabilization ($2,399)
                  </Link>
                  <p className="text-sm text-gray-600">5-stop IS, weather-sealed, superb optics</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Prime Lenses</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link href="https://www.amazon.com/Sony-35mm-1-4-Full-frame-Prime/dp/B08V5FRXN8" className="text-blue-600 hover:underline">
                    Sony 35mm f/1.4 GM - Street photography king ($1,398)
                  </Link>
                  <p className="text-sm text-gray-600">Incredible bokeh, compact size, fast AF</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Canon-85mm-1-2L-Portrait-Lens/dp/B07RJP8P17" className="text-blue-600 hover:underline">
                    Canon RF 85mm f/1.2L - Portrait perfection ($2,699)
                  </Link>
                  <p className="text-sm text-gray-600">Stunning bokeh, incredible sharpness</p>
                </li>
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
