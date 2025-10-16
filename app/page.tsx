import { Button } from "@/components/ui/button"
import { ArrowDown, GraduationCap, CalendarHeart, Lightbulb, Microscope, ClipboardList } from "lucide-react"
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
            <div className="group text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-300 group-hover:bg-nativa-purple flex items-center justify-center transition-colors">
                  <GraduationCap className="w-10 h-10 text-nativa-purple group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Education
              </h3>
              <p className="text-gray-600 mb-4 font-semibold">
                Tailored to suit your needs.
              </p>
              <p className="text-gray-600">
                We deliver education to empower Healthcare Practitioners & industry professionals with confidence in Australia&apos;s ever-changing regulatory environment.
              </p>
            </div>
            <div className="group text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-300 group-hover:bg-nativa-purple flex items-center justify-center transition-colors">
<Lightbulb className="w-10 h-10 text-nativa-purple group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Consulting
              </h3>
              <p className="text-gray-600">
                Let us set you up for success with expert guidance on every step of your journey. We assess and refine your operational processes to clarify your positioning and potential, while delivering the strategic advice, operational expertise, and regulatory confidence to strengthen your influence.
              </p>
            </div>
            <div className="group text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-300 group-hover:bg-nativa-purple flex items-center justify-center transition-colors">
                <CalendarHeart className="w-10 h-10 text-nativa-purple group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Events
              </h3>
              <p className="text-gray-600">
                Let Nativa lead in the delivery a professional event designed to provide attendees with high-quality learning, networking, and engagement opportunities in a memorable, time-efficient format.
              </p>
            </div>
            <div className="group text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-300 group-hover:bg-nativa-purple flex items-center justify-center transition-colors">
                  <ClipboardList className="w-10 h-10 text-nativa-purple group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Compliance
              </h3>
              <p className="text-gray-600">
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
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-16 text-white text-center">
            Harness our distinctive expertise and forward-thinking approach to education to gain a competitive advantage.
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="group cursor-pointer bg-white/90 backdrop-blur-sm hover:bg-white/95 p-6 rounded-lg transition-all shadow-md">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white group-hover:bg-nativa-purple flex items-center justify-center text-nativa-purple group-hover:text-white font-semibold text-lg transition-colors border-2 border-nativa-purple">
                      01
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-playfair mb-3 text-gray-900">
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
                    <h3 className="text-xl font-semibold font-playfair mb-3 text-gray-900">
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
                    <h3 className="text-xl font-semibold font-playfair mb-3 text-gray-900">
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
              <div className="space-y-4 order-1">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                  CO-FOUNDER & DIRECTOR
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Rebecca Doyle
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A passionate nurse with roots in complex clinical care, Bec is Nativa&apos;s medical sales expert having 5 years of experience educating prescribers of cannabis and improving patient outcomes. Bec is an engaging presenter and excels at event planning. An award-winning MSL, and well known industry figure, Bec provides exceptional education for MSLs and clinicians on scientific research, prescribing guidelines and Australian regulations.

                </p>
              </div>
              <div className="relative order-2">
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
              <div className="space-y-4 order-1 md:order-2">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                                    CO-FOUNDER & DIRECTOR
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Liz Warburton
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A qualified Naturopath with a sharp focus on alternative medicine and innovative product formulation, Liz Warburton stands out as Nativa&apos;s product and compliance expert. As operations manager of one of Australia&apos;s busiest pharmacies, Liz oversaw an impressive 700 scripts daily, demonstrating her skill not only in high-volume workflow management but also in scaling operations to drive consistent patient retention and satisfaction. After her pharmacy leadership, Liz deepened her expertise in supply chain operations and market compliance, mastering the complexities of medicinal cannabis distribution and regulatory requirements across the Australian landscape.
Liz is passionate about advancing cannabinoid research and keeps a keen eye on emerging healthcare solutions. Her fierce advocacy, paired with her practical know-how, ensures that Nativa delivers education, consultation, and industry support with unmatched integrity and operational rigour.
                </p>
              </div>
              <div className="relative order-2 md:order-1">
                <Image
                  src="/images/director-liz.jpg"
                  width={500}
                  height={600}
                  alt="Liz Warburton"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-1">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                  CONSULTANT
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Cameron Rosin
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A registered nurse and integrative clinician with over seven years of clinical practice in the medicinal cannabis space, Cam offers deep expertise in patient care and operations. He has led the compliant development and management of multiple healthcare clinics, ensuring regulatory standards and excellence at every stage. Cam is also a skilled communicator, podcast host, writer, and the founder of The Third Path—an initiative advancing integrative and regenerative approaches in healthcare.
                </p>
              </div>
              <div className="relative order-2">
                <Image
                  src="/images/consultant-cam.jpg"
                  alt="Cameron Rosin"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-nativa-olive text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-16 text-center">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 border-l border-white/30 pl-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Kyle Darcey</h3>
                <p className="text-sm text-gray-300">Wholelife Botanicals</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-100">
                &quot;Thank you to Nativa Education and Consulting for delivering some of the most comprehensive and relevant education I have ever seen to our pharmacists. You truly are experts in this field, and a shining example of what patient advocacy looks like.&quot;
              </p>
            </div>
            <div className="space-y-4 border-l border-white/30 pl-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Dr Ferghal Armstrong</h3>
                <p className="text-sm text-gray-300">Meducate</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-100">
                &quot;It&apos;s all thanks to our brilliant presenters, Rebecca Doyle and Liz Warburton. Their expertise and insights made this session highly valuable for everyone attending.&quot;
              </p>
            </div>
            <div className="space-y-4 border-l border-white/30 pl-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Xanthe</h3>
                <p className="text-sm text-gray-300">RAYS Wellness</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-100">
                &quot;We wanted to say a huge thank you for organising such a fantastic trivia night - what an absolute hit!
                The evening struck the perfect balance of learning, laughs, and competition. Our whole team had such a great time...Thank you again for helping us celebrate RAYS&apos; 2nd birthday&quot;
              </p>
            </div>
            <div className="space-y-4 border-l border-white/30 pl-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Michael Thorpe</h3>
                <p className="text-sm text-gray-300">Carina Day & Night Pharmacy</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-100">
                &quot;The ladies at Nativa delivered a training that could not be faulted or improved upon. Their unique, brand agnostic training is genuine and steeped in an infectious enthusiasm and passion for the industry.&quot;
              </p>
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

      
      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-nativa-olive">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/leaf-bg-bottom.jpg"
            height={1080}
            width={1920}
            alt="Picture of green leaves"
            className="w-full h-full object-cover"
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
            Contact us today to discover how Nativa can elevate your medicinal cannabis business.
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
      <footer className="bg-nativa-olive text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="flex justify-center">
            <Image
              src="/images/nativa-logo-leaf-only.png"
              alt="Nativa Logo"
              width={120}
              height={160}
              className="opacity-90"
            />
          </div>
          <p className="text-base">
            &copy; {currentYear} Nativa Education & Consulting Pty Ltd. All rights reserved.
          </p>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            This website is for informational purposes only. Our services are designed to provide education and guidance in compliance with local laws and regulations.
          </p>
        </div>
      </footer>
    </div>
  )
}
