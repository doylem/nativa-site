import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowDown, BookOpen, Calendar, FlaskConical, Microscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NativaLandingPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-nativa-green">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-nativa-olive">
        <div className="text-center text-white p-8 mb-16 max-w-4xl mx-auto">
          <div className="flex justify-center mb-16">
            <Image
              src="/images/nativa-site-logo copy.png"
              width={1659}
              height={568}
              alt="Nativa logo"
              className="object-center"
              style={{ width: "500px", minWidth: "350px" }}
            />
          </div>
          <h1 className="text-5xl md:text-5xl font-playfair font-normal mb-16 tracking-wide">
            From Stigma To<br/><em>Standard Practice</em>
          </h1>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Our vision is to educate and elevate cannabis in Australia and across the globe by fostering a culture of transparency, collaboration, and excellence across all facets of industry.
          </p>
          <Link href="#elevate">
            <Button className="px-16 py-3 bg-white text-nativa-olive hover:bg-gray-100">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Elevate Your Business Section */}
      <section id="elevate" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-4 text-center text-gray-900">
            Elevate Your Business with Nativa
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Our specialised insights and industry discernment will further your capacity to influence and grow your business in the competitive Australian market.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="mb-6 flex justify-center">
                <BookOpen className="w-12 h-12 text-nativa-purple" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-center font-semibold mb-4 text-gray-900">
                Education
              </h3>
              <p className="text-center text-gray-600 mb-4 font-semibold">
                Tailored to suit your needs.
              </p>
              <p className="text-center text-gray-600">
                We deliver education to empower Healthcare Practitioners & industry professionals with confidence in Australia&apos;s ever-changing regulatory environment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="mb-6 flex justify-center">
                <Calendar className="w-12 h-12 text-nativa-purple" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-center font-semibold mb-4 text-gray-900">
                Consulting
              </h3>
              <p className="text-center text-gray-600">
                Let us set you up for success with expert guidance on every step of your journey. We assess and refine your operational processes to clarify your positioning and potential, while delivering the strategic advice, operational expertise, and regulatory confidence to strengthen your influence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="mb-6 flex justify-center">
                <FlaskConical className="w-12 h-12 text-nativa-purple" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-center font-semibold mb-4 text-gray-900">
                Events
              </h3>
              <p className="text-center text-gray-600">
                Let Nativa lead in the delivery a professional event designed to provide attendees with high-quality learning, networking, and engagement opportunities in a memorable, time-efficient format.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="mb-6 flex justify-center">
                <Microscope className="w-12 h-12 text-nativa-purple" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-center font-semibold mb-4 text-gray-900">
                Compliance
              </h3>
              <p className="text-center text-gray-600">
                Effective consulting starts with genuine sector knowledge and ends with practical, confidence-boosting solutions. Nativa&apos;s consulting services are completely agnostic—rooted in science, compliance, and operational best practice, not in product deals or backdoor commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Elevate Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Nativa Landing page.png"
            fill
            alt="Background"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-4 text-center text-gray-900 text-white">
            Harness our distinctive expertise and forward-thinking approach to education to gain a competitive advantage.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="hidden md:block"></div>
            <div className="space-y-8">
              <div className="group cursor-pointer bg-white/90 backdrop-blur-sm hover:bg-white/95 p-6 rounded-lg transition-all shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white group-hover:bg-nativa-purple flex items-center justify-center text-nativa-purple group-hover:text-white font-semibold text-lg transition-colors border-2 border-nativa-purple">
                      01
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Prescribers
                    </h3>
                    <p className="text-gray-600 mb-2 font-semibold text-sm">
                      Up-To-Date, relevant, evidence- based & practical CPD accredited courses.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our tailored programs are expertly delivered to simplify complex concepts and provide practical, evidence-based clinical insights; equipping healthcare professionals with the compliant knowledge to deliver safe, and effective patient-focused care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer bg-white/90 backdrop-blur-sm hover:bg-white/95 p-6 rounded-lg transition-all shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white group-hover:bg-nativa-purple flex items-center justify-center text-nativa-purple group-hover:text-white font-semibold text-lg transition-colors border-2 border-nativa-purple">
                      02
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Clinics
                    </h3>
                    <p className="text-gray-600 mb-2 font-semibold text-sm">
                      Improve efficiencies, better your bottom line and maximise patient retention with our compliant operational strategies.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Whether you&apos;re entering the medicinal cannabis space or seeking to future-proof your organisation, we deliver independent, pragmatic guidance that accelerates your impact and ensures patient-first, regulator-ready operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer bg-white/90 backdrop-blur-sm hover:bg-white/95 p-6 rounded-lg transition-all shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white group-hover:bg-nativa-purple flex items-center justify-center text-nativa-purple group-hover:text-white font-semibold text-lg transition-colors border-2 border-nativa-purple">
                      03
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Pharmacists
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      ECS Science; Pharmacy Regulations; New Dose Forms; Patient Management Resources; Pharmacy Compliance; Formulary Guidance & Device Education
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-16 text-center text-gray-900">
            Our Team
          </h2>
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                  Founder & Managing Director
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Bec Doyle
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A nurse with extensive experience in complex clinical care, Bec brings over 5 years of specialized expertise in medicinal cannabis education. As an award-winning Medical Science Liaison and respected industry figure, she delivers exceptional training for healthcare professionals on scientific research, prescribing guidelines, and regulatory compliance. Her engaging presentation style and event planning prowess make her a sought-after speaker and educator.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/director-bec.jpg"
                  alt="Bec Doyle"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative md:order-1">
                <Image
                  src="/images/director-liz.jpg"
                  width={500}
                  height={600}
                  alt="Liz Warburton"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 md:order-2">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                  Co-Founder & Operations Director
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Liz Warburton
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A qualified Naturopath with deep expertise in alternative medicine and product formulation. Liz serves as Nativa&apos;s product specialist, bringing comprehensive knowledge of the Australian medicinal cannabis industry. Her experience spans pharmacy education, operational excellence, supply chain management, and regulatory compliance. As a passionate advocate for medicinal cannabis, she stays at the forefront of research and innovative healthcare solutions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                  Business Development Consultant
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Cami Basso
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A nurse with extensive experience in complex clinical care, Bec brings over 5 years of specialized expertise in medicinal cannabis education. As an award-winning Medical Science Liaison and respected industry figure, she delivers exceptional training for healthcare professionals on scientific research, prescribing guidelines, and regulatory compliance.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/director-bec.jpg"
                  alt="Cami Basso"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-nativa-olive text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">30+</div>
              <div className="text-sm text-gray-300">Years of combined healthcare experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">10+</div>
              <div className="text-sm text-gray-300">Industry Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">100+</div>
              <div className="text-sm text-gray-300">Educational Sessions Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">50+</div>
              <div className="text-sm text-gray-300">Clinical Professionals Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admired By Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-4 text-gray-900">
            Admired by companies
          </h2>
          <p className="text-3xl md:text-4xl font-playfair font-normal text-gray-900">
            and professionals who truly value their{" "}
            <span className="text-purple-600">people</span> &amp;{" "}
            <span className="text-purple-600">clients</span>.
          </p>
          <p className="mt-8 text-gray-600">
            We can&apos;t wait to work with you! Let&apos;s chat, we really want to know who we can help.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-gray-900">Is eight forty a service, software, or both?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Nativa is a specialized consulting service focused on elevating the medicinal cannabis industry through education, strategic guidance, and operational excellence. We provide tailored solutions to help healthcare professionals and organizations navigate the evolving landscape of medicinal cannabis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-gray-900">Is eight forty a service, software, or both?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our services are designed for healthcare professionals, pharmacies, clinics, medicinal cannabis companies, and organizations looking to enhance their understanding and operations within the medicinal cannabis industry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-gray-900">Is eight forty a service, software, or both?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We offer comprehensive education programs, event coordination, product development consultation, and clinical trial support. Each service is customized to meet your specific needs and goals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-gray-900">Is eight forty a service, software, or both?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Getting started is easy. Simply reach out through our contact form, and we&apos;ll schedule a consultation to discuss your needs and how we can help elevate your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-gray-900">Is eight forty a service, software, or both?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our team brings decades of combined healthcare experience, specialized knowledge in medicinal cannabis, and a proven track record of delivering results for our clients across Australia.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-nativa-olive">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/leaf-bg-bottom.jpg"
            height={1080}
            width={1920}
            alt="Picture of green leaves"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <div className="mb-8">
            <ArrowDown className="mx-auto" size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-6">
            A transformational education and consulting practice helping you grow your business.
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            We can&apos;t wait to work with you! Contact us today to discover how Nativa can elevate your medicinal cannabis business.
          </p>
          <Link
            href="https://forms.gle/9vALopPJLs3CSjYPA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className="px-8 py-3 bg-white text-nativa-olive hover:bg-gray-100">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; {currentYear} Nativa Education & Consulting Pty Ltd. All rights reserved.
          </p>
          <p className="text-sm">
            This website is for informational purposes only. Our services are designed to provide education and guidance in compliance with local laws and regulations.
          </p>
        </div>
      </footer>
    </div>
  )
}
