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

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Documentary Filmmaking Guides</h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Research & Development</h3>
              <ul className="space-y-3">
                <li>1. Conduct thorough background research</li>
                <li>2. Build relationships with subjects</li>
                <li>3. Develop a clear narrative focus</li>
                <li>4. Secure necessary permissions</li>
                <li>5. Create a flexible shooting schedule</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Interview Techniques</h3>
              <ul className="space-y-3">
                <li>1. Prepare questions but stay flexible</li>
                <li>2. Create a comfortable environment</li>
                <li>3. Use active listening techniques</li>
                <li>4. Frame shots with proper headroom</li>
                <li>5. Capture natural reactions</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Cinéma Vérité</h3>
              <ul className="space-y-3">
                <li>1. Observe without interfering</li>
                <li>2. Anticipate key moments</li>
                <li>3. Stay mobile and ready</li>
                <li>4. Follow the action naturally</li>
                <li>5. Capture authentic moments</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">B-Roll Strategies</h3>
              <ul className="space-y-3">
                <li>1. Shoot establishing shots</li>
                <li>2. Capture environmental details</li>
                <li>3. Film process and activities</li>
                <li>4. Document relevant locations</li>
                <li>5. Include contextual imagery</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Post-Production</h3>
              <ul className="space-y-3">
                <li>1. Transcribe all interviews</li>
                <li>2. Create a paper edit</li>
                <li>3. Structure story arcs</li>
                <li>4. Use archival material effectively</li>
                <li>5. Balance pacing and information</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Ethics & Best Practices</h3>
              <ul className="space-y-3">
                <li>1. Maintain journalistic integrity</li>
                <li>2. Protect vulnerable subjects</li>
                <li>3. Present balanced perspectives</li>
                <li>4. Verify facts and sources</li>
                <li>5. Consider social impact</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
