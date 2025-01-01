import { Check, X } from 'lucide-react'

const features = [
  {
    name: 'Expert Reviews',
    us: true,
    others: false,
    description: 'In-depth analysis from professional photographers',
  },
  {
    name: 'Real User Feedback',
    us: true,
    others: true,
    description: 'Reviews from verified purchasers',
  },
  {
    name: 'Price Tracking',
    us: true,
    others: false,
    description: 'Historical price data and alerts',
  },
  {
    name: 'Side-by-Side Comparison',
    us: true,
    others: true,
    description: 'Compare different gear specifications',
  },
  {
    name: 'Sample Photos/Videos',
    us: true,
    others: false,
    description: 'Real-world examples from actual users',
  },
]

export function ComparisonChart() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="py-4 px-6 font-medium">Feature</th>
            <th className="py-4 px-6 font-medium text-center">CameraGear</th>
            <th className="py-4 px-6 font-medium text-center">Others</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.name} className="border-b">
              <td className="py-4 px-6">
                <div>
                  <p className="font-medium">{feature.name}</p>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </td>
              <td className="py-4 px-6 text-center">
                {feature.us ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.others ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
