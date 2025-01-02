import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function VideographyGuides2025Page() {
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
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Cinema Cameras</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link href="https://www.amazon.com/Blackmagic-Design-Pocket-Cinema-Camera/dp/B07V6J74GR" className="text-blue-600 hover:underline">
                    Blackmagic Pocket 6K G3 - Best value cinema camera ($2,499)
                  </Link>
                  <p className="text-sm text-gray-600">6K resolution, 13 stops dynamic range, BRAW recording</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/RED-Digital-Cinema-KOMODO-Camera/dp/B08KYLV1ZX" className="text-blue-600 hover:underline">
                    RED Komodo 6K - Professional cinema camera ($5,999)
                  </Link>
                  <p className="text-sm text-gray-600">Global shutter, REDCODE RAW, compact form factor</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Sony-PXW-FX6-Full-Frame-Cinema-Camera/dp/B08MZCT2BV" className="text-blue-600 hover:underline">
                    Sony FX6 - Full-frame cinema excellence ($5,999)
                  </Link>
                  <p className="text-sm text-gray-600">10-bit 4:2:2, dual ISO, excellent autofocus</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Hybrid Cameras</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link href="https://www.amazon.com/Sony-Alpha-Full-frame-Interchangeable-Mirrorless/dp/B09BBLH4SG" className="text-blue-600 hover:underline">
                    Sony A7S III - Low light champion ($3,499)
                  </Link>
                  <p className="text-sm text-gray-600">12.1MP full-frame, 4K 120fps, incredible low-light performance</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Canon-EOS-R5-C-Full-Frame-Mirrorless/dp/B09Q4YJ1QR" className="text-blue-600 hover:underline">
                    Canon R5 C - 8K hybrid powerhouse ($3,999)
                  </Link>
                  <p className="text-sm text-gray-600">8K RAW, active cooling, dual memory card slots</p>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-semibold">Essential Video Gear 2025</h2>
            <Badge>New Picks</Badge>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Gimbals</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link href="https://www.amazon.com/DJI-RS-3-Pro-Stabilizer/dp/B0B1HTCY6Y" className="text-blue-600 hover:underline">
                    DJI RS 3 Pro - Best overall stabilizer ($999)
                  </Link>
                  <p className="text-sm text-gray-600">10lb payload, LiDAR focusing, wireless video transmission</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Zhiyun-Stabilizer-Mirrorless-Transmission-Smartphone/dp/B0C7GVVK3N" className="text-blue-600 hover:underline">
                    Zhiyun Crane 4 - Great value option ($749)
                  </Link>
                  <p className="text-sm text-gray-600">Quick release system, AI tracking, long battery life</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Audio Equipment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link href="https://www.amazon.com/Rode-Wireless-Compact-Digital-System/dp/B09ZXTJ9MF" className="text-blue-600 hover:underline">
                    Rode Wireless Pro - Best wireless system ($399)
                  </Link>
                  <p className="text-sm text-gray-600">32-bit float recording, dual channel, 2.4GHz digital transmission</p>
                </li>
                <li>
                  <Link href="https://www.amazon.com/Sennheiser-MKE-600-Camcorder-Microphone/dp/B00B0YPAYQ" className="text-blue-600 hover:underline">
                    Sennheiser MKE 600 - Top shotgun mic ($329)
                  </Link>
                  <p className="text-sm text-gray-600">Superb directional pickup, low noise, battery/phantom power</p>
                </li>
              </ul>
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
