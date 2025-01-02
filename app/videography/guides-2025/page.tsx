import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
                <li>Blackmagic Pocket 6K G3 - Best value cinema camera ($2,499)</li>
                <li>RED Komodo 6K - Professional cinema camera ($5,999)</li>
                <li>Sony FX6 - Full-frame cinema excellence ($5,999)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Hybrid Cameras</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sony A7S IV - Low light champion ($3,499)</li>
                <li>Canon R5 C - 8K hybrid powerhouse ($3,999)</li>
                <li>Panasonic GH7 - Perfect for YouTubers ($2,299)</li>
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
                <li>DJI RS 4 Pro - Best overall stabilizer</li>
                <li>Zhiyun Crane 4 - Great value option</li>
                <li>Moza Air 3 - Compact but powerful</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Audio Equipment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rode Wireless Pro - Best wireless system</li>
                <li>Sennheiser MKE 600 - Top shotgun mic</li>
                <li>Zoom F3 - Field recorder with 32-bit float</li>
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
