import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function VideographyGuides2025Page() {
  const cinemaCamera = [
    {
      name: "Blackmagic Pocket 6K G3",
      price: 2499,
      link: "https://www.amazon.com/Blackmagic-Design-Pocket-Cinema-Camera/dp/B07V6J74GR",
      specs: "6K resolution, 13 stops dynamic range, BRAW recording",
      description: "Best value cinema camera - includes full DaVinci Resolve Studio license"
    },
    {
      name: "RED Komodo 6K",
      price: 5999,
      link: "https://www.amazon.com/RED-Digital-Cinema-KOMODO-Camera/dp/B08KYLV1ZX",
      specs: "Global shutter, REDCODE RAW, compact form factor",
      description: "Professional cinema camera with exceptional image quality and reliability"
    },
    {
      name: "Sony FX6",
      price: 5999,
      link: "https://www.amazon.com/Sony-PXW-FX6-Full-Frame-Cinema-Camera/dp/B08MZCT2BV",
      specs: "10-bit 4:2:2, dual ISO, excellent autofocus",
      description: "Full-frame cinema excellence with outstanding low-light performance"
    }
  ];

  const hybridCameras = [
    {
      name: "Sony A7S III",
      price: 3499,
      link: "https://www.amazon.com/Sony-Alpha-Full-frame-Interchangeable-Mirrorless/dp/B09BBLH4SG",
      specs: "12.1MP full-frame, 4K 120fps, incredible low-light performance",
      description: "Low light champion - perfect for event videography and documentary work"
    },
    {
      name: "Canon R5 C",
      price: 3999,
      link: "https://www.amazon.com/Canon-EOS-R5-C-Full-Frame-Mirrorless/dp/B09Q4YJ1QR",
      specs: "8K RAW, active cooling, dual memory card slots",
      description: "8K hybrid powerhouse with unlimited recording and active cooling"
    }
  ];

  const videoGear = [
    {
      name: "DJI RS 3 Pro",
      price: 999,
      link: "https://www.amazon.com/DJI-RS-3-Pro-Stabilizer/dp/B0B1HTCY6Y",
      specs: "10lb payload, LiDAR focusing, wireless video transmission",
      description: "Best overall stabilizer - includes advanced features like automated mode switching"
    },
    {
      name: "Rode Wireless Pro",
      price: 399,
      link: "https://www.amazon.com/Rode-Wireless-Compact-Digital-System/dp/B09ZXTJ9MF",
      specs: "32-bit float recording, dual channel, 2.4GHz digital transmission",
      description: "Professional wireless audio system with advanced features and reliability"
    }
  ];

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-4">Videography Guides & Recommendations 2025</h1>
      <p className="text-muted-foreground text-lg mb-8">Complete guide to the best video gear for 2025</p>
      
      <div className="grid gap-8">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-semibold">Best Video Cameras 2025</h2>
            <Badge>Updated for 2025</Badge>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Cinema Cameras</h3>
              <div className="grid gap-6">
                {cinemaCamera.map((camera) => (
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
              <h3 className="text-xl font-medium mb-4">Hybrid Cameras</h3>
              <div className="grid gap-6">
                {hybridCameras.map((camera) => (
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
            <h2 className="text-2xl font-semibold">Essential Video Gear 2025</h2>
            <Badge>New Picks</Badge>
          </div>
          <div className="space-y-6">
            <div className="grid gap-4">
              {videoGear.map((gear) => (
                <Card key={gear.name} className="p-4">
                  <Link href={gear.link} className="text-xl font-semibold text-blue-600 hover:underline">
                    {gear.name} - ${gear.price}
                  </Link>
                  <p className="text-sm font-medium text-gray-700">{gear.specs}</p>
                  <p className="text-gray-600">{gear.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-semibold">2025 Video Trends</h2>
            <Badge variant="outline">Industry Insights</Badge>
          </div>
          <ul className="space-y-3">
            <li>• 8K becoming standard in professional productions</li>
            <li>• AI-powered autofocus and subject tracking</li>
            <li>• Internal RAW recording more accessible</li>
            <li>• Better in-body stabilization systems</li>
            <li>• Rise of vertical video optimization</li>
            <li>• Enhanced live streaming capabilities</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
