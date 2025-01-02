import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PhotographyGuides2025Page() {
  const cameras = [
    {
      name: "Canon EOS Rebel T7",
      price: 479,
      link: "https://www.amazon.com/Canon-EOS-Rebel-T7-18-55mm/dp/B07C2Z21X5",
      specs: "24.1MP APS-C sensor, built-in Wi-Fi, perfect starter DSLR",
      description: "Best for beginners - includes 18-55mm kit lens, great image quality, and easy-to-use interface"
    },
    {
      name: "Nikon D3500",
      price: 649,
      link: "https://www.amazon.com/Nikon-DX-Format-3-5-5-6G-VR-Black/dp/B07GW23M7T",
      specs: "24.2MP DX sensor, excellent battery life, user-friendly interface",
      description: "Great value option - includes guide mode for beginners, exceptional battery life up to 1,550 shots"
    },
    {
      name: "Pentax K-70",
      price: 799,
      link: "https://www.amazon.com/Pentax-K-70-Weather-Sealed-18-135mm-Black/dp/B01HQSXRO0",
      specs: "24.2MP APS-C, weather-sealed body, in-body stabilization",
      description: "Weather-sealed option - perfect for outdoor photography, includes in-body stabilization"
    }
  ];

  const midRangeCameras = [
    {
      name: "Canon R6 Mark II",
      price: 2499,
      link: "https://www.amazon.com/Canon-Mirrorless-Camera-24-105mm-4L/dp/B0BG6MRBTZ",
      specs: "24.2MP full-frame, 40fps, advanced subject detection",
      description: "Professional-grade mirrorless camera with exceptional autofocus and high-speed shooting"
    },
    {
      name: "Nikon Z6 II",
      price: 1999,
      link: "https://www.amazon.com/Nikon-FX-Format-Mirrorless-Camera-24-70mm/dp/B097B76ZWH",
      specs: "24.5MP full-frame, dual processors, robust build",
      description: "Versatile full-frame mirrorless with excellent low-light performance and dual card slots"
    },
    {
      name: "Pentax K-3 III",
      price: 1899,
      link: "https://www.amazon.com/Pentax-K-3-Mark-III-Black/dp/B091G1R5YD",
      specs: "25.7MP APS-C, 5-axis IBIS, robust weather-sealing",
      description: "Premium DSLR with advanced features and exceptional build quality"
    }
  ];

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
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Entry Level</h3>
              <div className="grid gap-6">
                {cameras.map((camera) => (
                  <Card key={camera.name} className="p-4">
                    <div className="flex flex-col gap-2">
                      <Link href={camera.link} className="text-xl font-semibold text-blue-600 hover:underline">
                        {camera.name} - ${camera.price}
                      </Link>
                      <p className="text-sm font-medium text-gray-700">{camera.specs}</p>
                      <p className="text-gray-600">{camera.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Mid Range</h3>
              <div className="grid gap-6">
                {midRangeCameras.map((camera) => (
                  <Card key={camera.name} className="p-4">
                    <div className="flex flex-col gap-2">
                      <Link href={camera.link} className="text-xl font-semibold text-blue-600 hover:underline">
                        {camera.name} - ${camera.price}
                      </Link>
                      <p className="text-sm font-medium text-gray-700">{camera.specs}</p>
                      <p className="text-gray-600">{camera.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-semibold">Must-Have Lenses 2025</h2>
            <Badge>New Picks</Badge>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-4">Standard Zoom</h3>
              <div className="grid gap-4">
                <Card className="p-4">
                  <Link href="https://www.amazon.com/Sony-24-70mm-2-8-Standard-Zoom-Lens/dp/B09MVZJY2K" className="text-xl font-semibold text-blue-600 hover:underline">
                    Sony 24-70mm f/2.8 GM II - Best overall ($2,298)
                  </Link>
                  <p className="text-sm font-medium text-gray-700">Exceptional sharpness, fast AF, compact design</p>
                  <p className="text-gray-600">Professional-grade zoom lens with outstanding image quality and versatility</p>
                </Card>

                <Card className="p-4">
                  <Link href="https://www.amazon.com/Canon-24-70mm-2-8L-Standard-Zoom/dp/B09774JJ3R" className="text-xl font-semibold text-blue-600 hover:underline">
                    Canon RF 24-70mm f/2.8L IS - Great stabilization ($2,399)
                  </Link>
                  <p className="text-sm font-medium text-gray-700">5-stop IS, weather-sealed, superb optics</p>
                  <p className="text-gray-600">Premium zoom lens with built-in image stabilization for sharp handheld shots</p>
                </Card>
              </div>
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
