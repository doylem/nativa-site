import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookOpen,
  Users,
  Handshake,
  CalendarHeart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NativaLandingPage() {
  return (
    <div className="min-h-screen bg-nativa-green">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            height={1080}
            width={1920}
            alt="Cannabis education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-nativa-white p-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/nativa-site-logo.png"
              width={1659}
              height={568}
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
            <Button className="text-lg px-8 py-4 bg-nativa-white text-nativa-olive hover:bg-nativa-green hover:text-nativa-white">
              {/* <Button className="text-lg px-6 py-3"> */}
              Explore Our Services <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-nativa-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-nativa-olive">
            Our Mission
          </h2>
          <p className="text-xl text-center mb-12 text-gray-700">
            Our vision is to educate & elevate cannabis in Australia and across
            the globe by fostering a culture of transparency, collaboration and
            excellence across all facets of industry. We choose to work with
            exceptional partners who truly highlight the patient journey and
            contribute to furthering clinical achievements.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 flex flex-col items-center text-center">
              <BookOpen size={48} className="text-nativa-olive" />
              <h3 className="text-2xl font-semibold text-nativa-olive">
                Education
              </h3>
              <p className="text-gray-600">
                We deliver agnostic, tailored comprehensive workshops on
                cannabis science, including practical product guidance, patient
                management, and industry insights to pharmacies, clinics and MSL
                groups. We work with CPD providers to deliver accredited
                education to health care professionals.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center text-center">
              <CalendarHeart size={48} className="text-nativa-olive" />
              <h3 className="text-2xl font-semibold text-nativa-olive">
                Events
              </h3>
              <p className="text-gray-600">
                Engage us to coordinate your next sponsored event, conference,
                or commercial launch for your clinic, pharmacy or new products.
                We manage all the finer points to deliver an expertly crafted
                experience aligned with your strategic sales and marketing
                goals. Innovative and inspirational, our events will power your
                company&apos;s journey toward success.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center text-center">
              <Users size={48} className="text-nativa-olive" />
              <h3 className="text-2xl font-semibold text-nativa-olive">
                Clinical Trials
              </h3>
              <p className="text-gray-600">
                We specialise in the design and execution of clinical trials.
                Work with us to include cannabis research in your business
                strategy to attain robust observational data and quality
                clinical outcomes. Engage Nativa and our extensive medical
                research network to get the validated results you need to
                accelerate your patient focused educational strategies.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center text-center">
              <Handshake size={48} className="text-nativa-olive" />
              <h3 className="text-2xl font-semibold text-nativa-olive">
                Product Compliance
              </h3>
              <p className="text-gray-600">
                Our discerning industry expertise in product innovation and
                compliance is unmatched. We provide insights on unique
                formulations highlighting quality, safety and efficacy. We
                prioritise strategies that are focused on consistency and
                compliance for better patient outcomes in order to drive real
                results for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-nativa-pink" id="our-services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-nativa-olive">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-nativa-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-nativa-olive">
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
            <div className="bg-nativa-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-nativa-olive">
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
      <section className="py-20 px-4 bg-nativa-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-nativa-olive">
            Meet Our Directors
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-nativa-green p-8 rounded-lg shadow-lg">
              <Image
                src="/images/director-bec.jpg"
                alt="Bec Doyle"
                width={500}
                height={500}
                className="w-56 h-56 rounded-full mx-auto mb-6"
              />
              <h3 className="text-3xl font-bold mb-4 text-center text-nativa-white">
                Bec Doyle
              </h3>
              <p className="text-nativa-white text-center">
                A passionate nurse with roots in complex clinical care, Bec is
                Nativa&apos;s medical expert having 5 years of experience
                educating prescribers of cannabis to improve patient outcomes.
                Bec is an engaging presenter and excels at event planning. An
                award-winning MSL, and well known industry figure, Bec provides
                exceptional education for MSLs and clinicians on scientific
                research, prescribing guidelines and Australian regulations.
              </p>
            </div>
            <div className="bg-nativa-green p-8 rounded-lg shadow-lg">
              <Image
                src="/images/director-liz.jpg"
                width={500}
                height={500}
                alt="Liz Warburton"
                className="w-56 h-56 rounded-full mx-auto mb-6"
              />
              <h3 className="text-3xl font-bold mb-4 text-center text-nativa-white">
                Liz Warburton
              </h3>
              <p className="text-nativa-white text-center">
                A qualified Naturopath with a keen interest in alternative
                medicine and product formulation, Liz is Nativa&apos;s product
                expert with extensive experience in the Australian medicinal
                cannabis industry - including pharmacy education & operations,
                supply chain management and product compliance. Liz is a fierce
                medicinal cannabis advocate who enjoys keeping up to date with
                research and innovative healthcare solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/leaf-bg.jpg?height=1080&width=1920"
            height={1080}
            width={1920}
            alt="Cannabis education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-nativa-white p-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Elevate Your Cannabis Knowledge?
          </h2>
          <p className="text-xl mb-12">
            Whether you&apos;re looking to expand your understanding of cannabis
            or need expert guidance for your business, Nativa is here to help.
          </p>
          <Link href="mailto:hello@nativaconsulting.com.au">
            <Button className="text-lg px-8 py-4 bg-nativa-white text-nativa-olive hover:bg-nativa-green hover:text-nativa-white">
              Let&apos;s Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section 
      <section className="py-20 px-4 bg-nativa-olive text-nativa-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg?height=1080&width=1920"
            alt="Cannabis education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Elevate Your Cannabis Knowledge?
          </h2>
          <p className="text-xl mb-12">
            Whether you're looking to expand your understanding of cannabis or
            need expert guidance for your business, Nativa is here to help.
          </p>
          <Button className="text-lg px-8 py-4 bg-nativa-white text-nativa-olive hover:bg-nativa-green hover:text-nativa-white">
            Contact Us Today
          </Button>
        </div>
      </section>
      */}
      {/* Footer */}
      <footer className="bg-slate-900 text-nativa-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; 2024 Nativa Cannabis Education & Consulting. All rights
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
