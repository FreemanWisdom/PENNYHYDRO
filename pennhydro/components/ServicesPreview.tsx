import { Section, SectionHeading } from "./UI";
import Link from "next/link";

const services = [
    {
        title: "Civil and Construction",
        description: "Expertise in roads, bridges, and heavy civil works from concept to completion.",
        icon: "🏗️",
    },
    {
        title: "Dredging & Reclamation",
        description: "Specialized dredging for lakes, ponds, and waterways using state-of-the-art equipment.",
        icon: "🚢",
    },
    {
        title: "Vessel & Marine Logistics",
        description: "Supply of petroleum products (AGO, PMS, LPG) and vessel logistics support.",
        icon: "⚓",
    },
];

export default function ServicesPreview() {
    return (
        <Section light id="services-preview">
            <SectionHeading
                title="Our Core Expertise"
                subtitle="Specialized Solutions"
                centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group p-8 bg-slate-50 border border-slate-100 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="text-4xl mb-6">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {service.description}
                        </p>
                        <Link
                            href="/services"
                            className="text-brand-primary font-bold inline-flex items-center transition-all duration-300 hover:translate-x-1 hover:text-brand-secondary"
                        >
                            Read More
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-16 text-center">
                <Link
                    href="/services"
                    className="inline-block px-10 py-4 border-2 border-brand-primary text-brand-primary font-bold rounded transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary hover:text-white hover:shadow-xl"
                >
                    View All Services
                </Link>
            </div>
        </Section>
    );
}
