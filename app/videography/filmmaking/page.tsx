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

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Filmmaking Guides</h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Pre-Production</h3>
              <ul className="space-y-3">
                <li>1. Develop a detailed shot list and storyboard</li>
                <li>2. Scout locations and plan lighting setups</li>
                <li>3. Cast actors and conduct rehearsals</li>
                <li>4. Create a realistic production schedule</li>
                <li>5. Assemble and brief your crew</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Camera Movement</h3>
              <ul className="space-y-3">
                <li>1. Master the art of static composition</li>
                <li>2. Use dollies for smooth tracking shots</li>
                <li>3. Implement motivated camera movements</li>
                <li>4. Practice handheld techniques</li>
                <li>5. Utilize crane shots for dramatic reveals</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Lighting Techniques</h3>
              <ul className="space-y-3">
                <li>1. Create depth with three-point lighting</li>
                <li>2. Use practical lights in scene</li>
                <li>3. Control contrast ratios</li>
                <li>4. Shape light with flags and diffusion</li>
                <li>5. Match lighting across scenes</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Sound Recording</h3>
              <ul className="space-y-3">
                <li>1. Capture clean dialogue with boom mics</li>
                <li>2. Use lavalier mics as backup</li>
                <li>3. Record room tone for each location</li>
                <li>4. Monitor audio levels constantly</li>
                <li>5. Collect wild sound and ambience</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Post-Production</h3>
              <ul className="space-y-3">
                <li>1. Organize footage methodically</li>
                <li>2. Create assembly cut first</li>
                <li>3. Refine pacing in rough cut</li>
                <li>4. Color grade for consistency</li>
                <li>5. Mix audio professionally</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
