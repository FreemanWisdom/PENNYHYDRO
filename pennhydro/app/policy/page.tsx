import { Section, SectionHeading } from "@/components/UI";
import Image from "next/image";

export default function PolicyPage() {
    return (
        <div className="pt-20">
            <Section className="relative overflow-hidden py-24 md:py-32">
                <Image
                    src="/1 (11).jpg"
                    alt="Policy header background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <SectionHeading
                        title="Commitment to Responsibility"
                        subtitle="HSE & Quality Policy"
                        centered
                        inverse
                    />
                </div>
            </Section>

            <Section light>
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-brand-primary pb-4 inline-block">
                            Health, Safety & Environment (HSE) Policy
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            At PENNHYDRO-PELL OIL & GAS LIMITED, Health, Safety and Environmental (HSE) responsibilities are integral to the way we do business. Successfully managing HSE issues is an essential component of our business strategy. Through observance and encouragement of this policy, we assist in protecting the environment and the overall well-being of all of our stakeholders, specifically, our employees, clients, shareholders, subcontractors, and communities.
                        </p>
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-12">
                            <h3 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-sm">Our HSE Principles:</h3>
                            <ul className="space-y-4">
                                {[
                                    "In order to achieve these objectives, we will identify HSE risks arising from our activities and reduce them to the lowest practical levels. Our goal is to minimize impact to the environment and to prevent harm to our employees, our clients, our communities, and all others who could be affected by those activities.",
                                    "PENNHYDRO-PELL management will continue to take a proactive approach toward creating safe work environments for all employees and will be accountable for promoting continued safety education and training for all employees, assigning responsibility for all aspects of the program, continuously reviewing the program to identify potential areas of improvement, and ensuring a thorough evaluation of all incidents.",
                                    "We will continue to address the environmental and health impact of our operations by reducing waste, emissions, and discharges and by using energy efficiently. We strive to be good citizens in every community in which we operate. We will maintain awareness of HSE matters, so as to be proactive in providing a value-added service to our clients. This awareness is achieved through education, communication, and definition of the goals and standards appropriate to our operations and those undertaken on behalf of our clients.",
                                    " To emphasize our continuing commitment to HSE issues, we will adhere to PENNHYDRO-PELL’s HSE Principles. These Principles are the cornerstone of PENNHYDRO-PELL’s HSE culture and address issues such as accountability, training, communication, resources, engineering design, performance measurement,  and sustainable development. We seek continual improvement in the performance of all of our activities.",
                                    "PENNHYRO-PELL OIL & GAS LIMITED is committed to the highest standard of responsibility in every activity it undertakes to protect the environment, public health and employee safety and to comply fully with all applicable laws and regulations.",
                                    "Our commitment to protecting the environment and the health and safety of our employees and the communities & Clients we serve represents a critical part of the core values that guide our Organization. As part of that commitment, all PENNHYRO-PELL OIL & GAS LIMITED employees actively support these values and strive to achieve continual and measurable improvement of all our processes and services."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-slate-600 text-sm md:text-base">
                                        <span className="text-brand-primary mr-3 font-bold">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-brand-primary pb-4 inline-block">
                            Quality Policy
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            PENNHYDRO-PELL OIL & GAS LIMITED is committed to customers’ satisfaction and continuous reliability. We shall help our entire client to sustain their operations by rendering to them a unique kind of customer satisfaction that cannot be equated with any other elsewhere.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-lg">
                                <h4 className="font-bold text-brand-primary mb-4">PENNHYDRO-PELL OIL & GAS LIMITED shall sustain this philosophy by:</h4>
                                <ul className="text-sm text-slate-600 space-y-3">
                                    <li>• Continuously using trained and experienced personnel</li>
                                    <li>• Continuously reviewing their quality Management System from-time-to-time and carrying out integrity tests on equipment.</li>
                                    <li>• Work based on international and national regulations.</li>
                                    <li>• Constant improvement of infrastructural and human resources.</li>
                                    <li>• Implementation of highest international standards for project management</li>
                                    <li>• Co-operates with contractors and suppliers to ensure the highest level of services and materials supplied.</li>
                                </ul>
                            </div>
                            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/quality.png"
                                    alt="Quality Policy"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>

                        <div className="mt-16 p-8 bg-brand-dark text-white rounded-2xl text-center">
                            <h3 className="text-2xl font-bold mb-4">Community Relations</h3>
                            <p className="text-slate-400 mb-0">
                                PENNHYDRO-PELL OIL & GAS LIMITED is committed to her host communities in the course of its operation. The company identifies the needs and aspirations of our host communities who are our stakeholders. In fact, our wide relationship with our host communities is second to none.
                                We drive towards a proper relationship with our stakeholders. The social
                                responsibility of the company to her client host communities cannot be
                                overemphasized as it has no bound.
                                Our employment policy confirms with Nigeria government requirements on employment. The bulk of our unskilled/semi-skilled work force shall at all times come from our host communities. Our environmental policy also conforms to international policy on the environment.

                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
