import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

const logoStyle = `
`

export default function NativaLandingPage() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg?height=1080&width=1920"
            alt="Cannabis education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <div className="flex justify-center mb-8">
            <img
              src="/images/nativa-site-logo.png"
              alt="Nativa logo"
              className="object-center"
              style={{ width: "50%", minWidth: "300px" }}
            />
          </div>
          <h1
            className="text-6xl md:text-8xl font-bold mb-4 hidden"
            aria-hidden="true"
          >
            Nativa
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Elevating the cannabis industry in Australia by fostering
            transparency, collaboration, and excellence.
          </p>
          <Link href="#our-services">
            <Button className="text-lg px-6 py-3">
              Explore Our Services <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-green-800">
            Our Mission
          </h2>
          <p className="text-xl text-center mb-12 text-gray-700">
            At Nativa, we're dedicated to providing comprehensive education and
            expert consulting services in the rapidly evolving cannabis
            industry.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 flex flex-col items-center text-center">
              <BookOpen size={48} className="text-green-600" />
              <h3 className="text-2xl font-semibold text-green-700">
                Education
              </h3>
              <p className="text-gray-600">
                We offer in-depth courses and workshops on cannabis science,
                cultivation, and industry regulations.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center text-center">
              <Users size={48} className="text-green-600" />
              <h3 className="text-2xl font-semibold text-green-700">
                Consulting
              </h3>
              <p className="text-gray-600">
                Our expert team provides tailored consulting services for
                businesses entering or expanding in the cannabis market.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center text-center">
              <Lightbulb size={48} className="text-green-600" />
              <h3 className="text-2xl font-semibold text-green-700">
                Innovation
              </h3>
              <p className="text-gray-600">
                We stay at the forefront of cannabis research and technology to
                provide cutting-edge insights to our clients.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center text-center">
              <Award size={48} className="text-green-600" />
              <h3 className="text-2xl font-semibold text-green-700">
                Compliance
              </h3>
              <p className="text-gray-600">
                We ensure our clients understand and adhere to the complex
                regulatory landscape of the cannabis industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-green-100" id="our-services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-green-800">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-green-700">
                Educational Programs
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Cannabis Science and Pharmacology</li>
                <li>Cultivation Techniques and Best Practices</li>
                <li>Cannabis Business Operations</li>
                <li>Legal and Regulatory Compliance</li>
                <li>Medical Cannabis Applications</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-green-700">
                Consulting Services
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Market Entry Strategy</li>
                <li>Licensing and Permit Assistance</li>
                <li>Operational Optimization</li>
                <li>Compliance Audits and Risk Assessment</li>
                <li>Product Development and Branding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-green-800">
            Meet Our Directors
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Bec Doyle"
                className="w-48 h-48 rounded-full mx-auto mb-6"
              />
              <h3 className="text-3xl font-bold mb-4 text-center text-green-700">
                Bec Doyle
              </h3>
              <p className="text-gray-600 text-center">
                With over 15 years of experience in cannabis education and
                policy, Bec leads our educational programs, ensuring that Nativa
                provides cutting-edge, comprehensive cannabis knowledge to our
                clients.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Liz Warburton"
                className="w-48 h-48 rounded-full mx-auto mb-6"
              />
              <h3 className="text-3xl font-bold mb-4 text-center text-green-700">
                Liz Warburton
              </h3>
              <p className="text-gray-600 text-center">
                Liz brings her expertise in cannabis business operations and
                regulatory compliance to Nativa, heading our consulting services
                to help businesses navigate the complex cannabis industry
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Grow Your Cannabis Knowledge?
          </h2>
          <p className="text-xl mb-12">
            Whether you're looking to expand your understanding of cannabis or
            need expert guidance for your business, Nativa is here to help.
          </p>
          <Button className="text-lg px-8 py-4 bg-white text-green-800 hover:bg-green-100">
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; 2023 Nativa Cannabis Education & Consulting. All rights
            reserved.
          </p>
          <p className="text-sm">
            This website is for informational purposes only. Our services are
            designed to provide education and guidance in compliance with local
            laws and regulations.
          </p>
        </div>
      </footer>
    </div>
  )
}
