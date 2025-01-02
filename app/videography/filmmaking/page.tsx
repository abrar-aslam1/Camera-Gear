import { Card } from "@/components/ui/card"

export default function FilmmakingPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Filmmaking Equipment</h1>
      <div className="grid gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Cinema Cameras</h2>
          <ul className="space-y-2">
            <li>• ARRI Alexa Mini LF - Hollywood standard</li>
            <li>• RED V-Raptor - 8K workhorse</li>
            <li>• Sony FX9 - Documentary favorite</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Cinema Lenses</h2>
          <ul className="space-y-2">
            <li>• ARRI Signature Primes - Ultimate cinema glass</li>
            <li>• Cooke S7/i - Beautiful skin tones</li>
            <li>• Zeiss Supreme Primes - Sharp and reliable</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Camera Support</h2>
          <ul className="space-y-2">
            <li>• O'Connor 2575 - Industry standard fluid head</li>
            <li>• ARRI Trinity - Advanced stabilization</li>
            <li>• Chapman dolly systems - Smooth camera moves</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
