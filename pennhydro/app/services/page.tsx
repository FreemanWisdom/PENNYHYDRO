import { Section, SectionHeading } from "@/components/UI";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
    servicesPageCivilImage,
    servicesPageDredgingImage,
    servicesPageHeaderImage,
    servicesPageLogisticsImage,
} from "@/lib/images";

const allServices = [
    {
        id: "civil",
        title: "Civil and Construction Works",
        subtitle: "Heavy Civil Works and Highway Construction",
        description: " PENNHYDRO-PELL offers pre-construction services such as survey, design and procurement and majors in Engineering, Civil, construction of roads and production/sales of Asphalt course (binding and wearing) for Federal, States, Local Governments and Multinational/Private companies in Nigeria. Whether the client is a Government Ministry, a Town or City, a Developer, a private owner, or another General Contractor, PENNHYDRO-PELL has both the expertise and the depth of resources to complete their project at the highest quality.PENNHYDRO-PELL also possesses a wealth of experience and capability in its staff. With highly skilled work crews and innovative and dependable project management, supported by an extensive fleet of equipment of the latest technology; We can serve their clients on projects of any scale. Whether building long stretches of multi-land freeway or building or rehabilitating bridges over land or water,PENNHYDRO-PELL is second to none. From highway sound barriers, dam construction and airport works, to installations or repairs to culverts on country roads; We are equipped and prepared.",
        features: [
            "Highway sound barriers",
            "Dam construction",
            "Airport works",
            "Bridges rehabilitation",
            "Culverts installations",
        ],
        image: servicesPageCivilImage,
    },
    {
        id: "dredging",
        title: "Dredging and Reclamation",
        subtitle: "Mining & Environmental Services",
        description: "At PENNHYDRO-PELL we dredge Lakes, Ponds, Waterways, and Rivers & Streams. Our dredgers are equipped with excavator cutter heads to remove aquatic weeds from wastewater treatment plants and sludge lagoon. PENNHYDRO-PELL Excavating DREDGER mines sand from a sand pit and seashores. Our DREDGER utilizes an 8 x 10 GIW dredge pump that has been proven effective in sand mining operations.",
        features: [
            "Lakes & Ponds dredging",
            "Sand mining from pits and seashores",
            "Wastewater treatment plants maintenance",
            "Sludge lagoon cleaning",
        ],
        image: servicesPageDredgingImage,
    },
    {
        id: "logistics",
        title: "Vessel & Marine Logistics",
        subtitle: "Supply of Petroleum Products",
        description: "PENNHYDRO-PELL OIL & GAS LIMITED provides Vessel & Marine Logistics in Supply of Petroleum Products (AGO, PMS & LPG). We also offer solutions to scarcity in Petroleum Products. Whether the client is a Government Ministry, Construction Companies, Oil Producing companies, private owners, or another General Contractor, PENNHYDRO-PELL OIL & GAS LIMITED has both the expertise and the depth of resources to complete their Petroleum Product Supply Services at the highest quality. PENNHYDRO-PELL OIL & GAS LIMITED also possesses a wealth of experience and capability in its staff. With highly skilled work crews and innovative and dependable project management, supported by an extensive fleet of Vessels of the latest technology. In other words there is an existing Retainership/contract agreement with some Vessel Company owners for easy and faster delivery of Petroleum Products. PENNHYDRO-PELL OIL & GAS LIMITED can serve their clients on any quantity of Petroleum Products of good quality.",
        features: [
            "AGO, PMS & LPG Supply",
            "Vessel management",
            "Scarcity solution services",
            "Retainership/Contract agreements with vessel owners",
        ],
        image: servicesPageLogisticsImage,
    },
] satisfies Array<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    image: StaticImageData;
}>;

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <Section className="relative overflow-hidden py-24 md:py-32">
                <Image
                    src={servicesPageHeaderImage}
                    alt="Services header background"
                    fill
                    priority
                    sizes="100vw"
                    placeholder="blur"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <SectionHeading
                        title="Comprehensive Industrial & Maritime Solutions"
                        subtitle="Our Services"
                        centered
                        inverse
                    />
                </div>
            </Section>

            {allServices.map((service, index) => (
                <Section key={service.id} light={index % 2 === 0}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                        <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                            <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                                {service.subtitle}
                            </span>
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">{service.title}</h2>
                            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                {service.description}
                            </p>
                            <h4 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-wider">Key Capabilities:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700 text-sm">
                                        <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`relative h-[450px] rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={service.image.width}
                                height={service.image.height}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                placeholder="blur"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </Section>
            ))}
        </div>
    );
}
