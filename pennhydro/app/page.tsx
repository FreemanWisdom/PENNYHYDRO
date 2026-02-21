import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import ProjectsGrid from "@/components/ProjectsGrid";
import { Section, SectionHeading } from "@/components/UI";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Vision & Mission Section */}
      <Section id="vision-mission" light>
        <SectionHeading
          title="Our Vision & Mission"
          subtitle="The Core of Pennhydro-Pell"
          centered
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mr-3 text-sm">
                01
              </span>
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              In our chosen markets, we are the leader in client satisfaction,
              professionalism, superior quality and innovation. We are the
              architect of responsive and creative solutions to our clients&rsquo;
              benefit, compensation and human resources needs. Our teams combine
              technical excellence with a superior understanding of client needs
              and the environment in which our clients operate. We are committed
              to working partnerships with our clients that add value and
              consistently exceed expectations.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mr-3 text-sm">
                02
              </span>
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              PENNHYDRO-PELL OIL & GAS LIMITED is dedicated to exceeding the
              expectations of every client by offering outstanding customer
              service, increased flexibility, and greater value, thus
              optimizing business functionality and improving operation
              efficiency.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center text-brand-primary font-bold border-b-2 border-brand-primary pb-1 transition-all duration-300 hover:text-brand-primary/80 hover:-translate-y-0.5"
          >
            Learn more about our values
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </Section>

      <ServicesPreview />

      <ProjectsGrid />

      {/* CTA Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl !text-white font-black mb-8 drop-shadow-lg">
              Ready to Start Your Project with Us?
            </h2>
            <p className="text-white font-bold italic leading-relaxed mb-8">
              &ldquo;Our teams combine technical excellence with a superior understanding
              of client needs and the environment in which our clients operate.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-5 bg-brand-dark border border-brand-dark text-white font-bold rounded shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-white hover:text-black hover:shadow-2xl text-center"
              >
                Get Started Now
              </Link>
              <Link
                href="tel:+2349047868943"
                className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-2xl text-center"
              >
                Call Support: (+234) 904 786 8943
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

