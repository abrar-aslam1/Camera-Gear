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

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">YouTube Content Creation Guides</h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Channel Strategy</h3>
              <ul className="space-y-3">
                <li>1. Define your niche and target audience</li>
                <li>2. Create a consistent upload schedule</li>
                <li>3. Develop a strong brand identity</li>
                <li>4. Plan content series and themes</li>
                <li>5. Engage with your community</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Video Production</h3>
              <ul className="space-y-3">
                <li>1. Script your content effectively</li>
                <li>2. Create engaging hooks (first 30 seconds)</li>
                <li>3. Use multiple camera angles</li>
                <li>4. Include B-roll footage</li>
                <li>5. Maintain good pacing</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Audio Quality</h3>
              <ul className="space-y-3">
                <li>1. Record in a treated room</li>
                <li>2. Use proper mic placement</li>
                <li>3. Monitor audio levels while recording</li>
                <li>4. Remove background noise in post</li>
                <li>5. Add music and sound effects</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Editing Tips</h3>
              <ul className="space-y-3">
                <li>1. Create engaging thumbnails</li>
                <li>2. Use jump cuts effectively</li>
                <li>3. Add text and graphics</li>
                <li>4. Implement pattern interrupts</li>
                <li>5. Export with optimal settings</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Growth Strategies</h3>
              <ul className="space-y-3">
                <li>1. Optimize titles and descriptions</li>
                <li>2. Research trending topics</li>
                <li>3. Collaborate with other creators</li>
                <li>4. Analyze channel analytics</li>
                <li>5. Promote across social media</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
