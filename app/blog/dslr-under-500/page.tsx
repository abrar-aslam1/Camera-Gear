import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Best DSLR Cameras Under $500 in 2024: Top Budget-Friendly Options",
  description: "Discover the finest DSLR cameras under $500 that deliver professional-grade features without breaking the bank. Compare specs, image quality, and performance to find your perfect match.",
};

export default function DSLRUnder500Page() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Table of Contents */}
      <div className="bg-muted p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Navigation</h2>
        <nav className="space-y-2">
          <a href="#why-choose" className="block text-muted-foreground hover:text-primary">Why Choose a Budget DSLR?</a>
          <a href="#top-cameras" className="block text-muted-foreground hover:text-primary">Top DSLR Cameras Under $500</a>
          <a href="#considerations" className="block text-muted-foreground hover:text-primary">Essential Considerations</a>
          <a href="#investment-tips" className="block text-muted-foreground hover:text-primary">Investment Tips</a>
        </nav>
      </div>

      {/* Main Content */}
      <h1 className="text-4xl font-bold mb-6">Best DSLR Cameras Under $500: Photography Excellence on a Budget</h1>
      
      <p className="text-xl text-muted-foreground mb-8">
        Finding an affordable DSLR camera that delivers exceptional image quality and professional features can transform your photography journey. In this comprehensive guide, we'll explore the most compelling DSLR options under $500 that combine performance, versatility, and value.
      </p>

      <section id="why-choose" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose a Budget DSLR?</h2>
        <p className="text-lg mb-4">
          Today's entry-level DSLRs pack impressive technology that was once exclusive to professional models. These cameras offer interchangeable lenses, superior low-light performance, and manual controls that smartphone cameras simply can't match. For aspiring photographers and enthusiasts, they provide an ideal gateway into serious photography without a significant financial investment.
        </p>
      </section>

      <section id="top-cameras" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Top DSLR Cameras Under $500</h2>
        
        <div className="grid gap-6">
          {/* Canon EOS Rebel T7 */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Canon EOS Rebel T7</h3>
            <Badge className="mb-4">Best Overall</Badge>
            <p className="mb-4">
              The Canon EOS Rebel T7 stands out with its 24.1MP APS-C sensor and DIGIC 4+ processor, delivering sharp images and reliable autofocus performance. Perfect for beginners, it combines user-friendly controls with advanced features that support skill development.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-bold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>24.1MP APS-C CMOS sensor</li>
                <li>9-point autofocus system</li>
                <li>1080p video recording at 30fps</li>
                <li>Built-in Wi-Fi and NFC connectivity</li>
              </ul>
            </div>
          </Card>

          {/* Nikon D3500 */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Nikon D3500</h3>
            <Badge className="mb-4">Best Battery Life</Badge>
            <p className="mb-4">
              Nikon's D3500 excels in image quality and battery life, making it an excellent choice for photography enthusiasts. Its Guide Mode helps newcomers master camera settings while producing professional-looking results.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-bold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>24.2MP DX-format sensor</li>
                <li>11-point autofocus system</li>
                <li>ISO range of 100-25600</li>
                <li>Exceptional 1,550-shot battery life</li>
              </ul>
            </div>
          </Card>

          {/* Pentax K-70 */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Pentax K-70 (Used/Refurbished)</h3>
            <Badge className="mb-4">Best Weather-Sealed Option</Badge>
            <p className="mb-4">
              While typically priced above $500 new, refurbished K-70 models offer weather-sealing and advanced features at budget-friendly prices. This camera stands out with its robust build quality and in-body stabilization.
            </p>
          </Card>
        </div>
      </section>

      <section id="considerations" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Essential Considerations</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Factor</TableHead>
              <TableHead>What to Look For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Image Sensor Quality</TableCell>
              <TableCell>APS-C sensors of at least 20MP, ensuring detailed images suitable for printing and editing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lens Compatibility</TableCell>
              <TableCell>Available lens ecosystem and upgrade paths within your chosen camera system</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Autofocus Performance</TableCell>
              <TableCell>Reliable autofocus with multiple focus points for varied shooting situations</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section id="investment-tips" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Investment Tips</h2>
        <Card className="p-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Consider certified refurbished models from authorized dealers
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Watch for seasonal sales and bundle deals
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Factor in the cost of essential accessories like memory cards and spare batteries
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Start with the kit lens before investing in additional glass
            </li>
          </ul>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg">
          Today's budget DSLR market offers remarkable value for aspiring photographers. These cameras provide the perfect balance of features, image quality, and affordability, allowing you to develop your skills without compromise.
        </p>
        <p className="text-lg mt-4">
          Whether you're capturing family moments or pursuing photography as a serious hobby, these sub-$500 DSLRs deliver the tools needed for creative growth and exceptional images. Choose based on your specific needs, and remember that any of these cameras can produce professional-quality photos in capable hands.
        </p>
      </section>
    </article>
  );
}
