import { Card } from "@/components/ui/card"

export default function DocumentaryPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Documentary Filmmaking Equipment</h1>
      <div className="grid gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Documentary Cameras</h2>
          <ul className="space-y-2">
            <li>• Sony FX6 - Perfect documentary camera</li>
            <li>• Canon C300 Mark III - Reliable workhorse</li>
            <li>• Panasonic EVA1 - Compact but powerful</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Documentary Lenses</h2>
          <ul className="space-y-2">
            <li>• Canon 17-120mm T2.95 - Perfect zoom range</li>
            <li>• Sony FE 24-70mm f/2.8 GM II - Versatile prime</li>
            <li>• Fujinon MK18-55mm T2.9 - Compact zoom</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Audio Equipment</h2>
          <ul className="space-y-2">
            <li>• Sound Devices 833 - Professional recorder</li>
            <li>• Sennheiser MKH 416 - Industry standard shotgun</li>
            <li>• Lectrosonics wireless systems</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Support & Accessories</h2>
          <ul className="space-y-2">
            <li>• Sachtler Flowtech 75 - Quick setup tripod</li>
            <li>• Easyrig Cinema Flex - For long shooting days</li>
            <li>• Pelican cases for equipment protection</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
