import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Radio, MapPin, Ship } from "lucide-react"
import Link from "next/link"

export default function ProductDetails() {
  return (
    <div className="min-h-screen bg-[#eeeeee] text-[#000]">
      <header className="bg-[#666666] text-white p-8">
        <nav className="mb-8">
          <ul className="flex space-x-4 text-sm">
            <li><Link href="/products">Products</Link></li>
            <li>&gt;</li>
            <li>Category</li>
            <li>&gt;</li>
            <li>product</li>
          </ul>
        </nav>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Space Based RF Intelligence</h1>
            <p className="mb-6">
              Our space-based Intelligence solution has been developed to capture and record RF/IF
              signals, geolocate the device from their RF signature, detect and locate dark ships without any
              geographical boundaries. Our RF intelligence product suite provides the following capabilities:
            </p>
            <Button className="bg-white text-[#666666] hover:bg-[#979797]">
              Download Brochure <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/placeholder.svg?height=300&width=400" alt="RF Intelligence System" className="w-full h-auto" />
          </div>
        </div>
      </header>
      <main className="p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
          <p className="text-[#666666] mb-6">
            RF Collections: Allows to collect IF signals as per customer's bands, signals and geographics areas of interest.
            Custom Geolocation Reports: Accurately pinpoint the source of a signal location based on customer's bands, signals and geographics areas of
            interest Space Services RF Constellations: This platform is dedicated to a customer who can task it, download raw data, and perform on-demand geolocation.
            Persistent RF Surveillance: Enabling the observation of activity patterns from RF-emitting objects, whether
            at sea or on land, offers crucial insights for pinpointing optimal action moments and locations.
          </p>
        </section>
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <Radio className="h-12 w-12 text-[#666666] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Signal Collection</h3>
            <p className="text-[#979797]">
              Allows to collect IF signals as per customer's bands, signals and geographics areas of interest.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <MapPin className="h-12 w-12 text-[#666666] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Accurate Geolocation</h3>
            <p className="text-[#979797]">
              Accurately pinpoint the source of a signal location based on customer's bands, signals and geographics areas of interest.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Ship className="h-12 w-12 text-[#666666] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dark Ship Detection</h3>
            <p className="text-[#979797]">
              System can detect and locate dark ships—vessels that deliberately disable their Automatic Identification System (AIS) transponders to evade detection.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-[#000] text-white p-8 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Let's discuss your security needs</h2>
          <p className="mb-6">Fill out our contact form, and we'll be in touch shortly!</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#000]">
              Get Company Profile <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="bg-white text-[#000] hover:bg-[#979797]">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}