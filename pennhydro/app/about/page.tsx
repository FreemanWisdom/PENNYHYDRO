import { Section, SectionHeading } from "@/components/UI";
import Image from "next/image";
import {
    aboutPageBodyImage,
    aboutPageHeaderImage,
    aboutPageTeamImage,
} from "@/lib/images";

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Header */}
            <Section className="relative overflow-hidden py-24 md:py-32">
                <Image
                    src={aboutPageHeaderImage}
                    alt="About header background"
                    fill
                    priority
                    sizes="100vw"
                    placeholder="blur"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <SectionHeading
                        title="BACKGROUND INFORMATION,AND STRATEGIC OBJECTIVES"
                        subtitle="About Us"
                        centered
                        inverse
                    />
                </div>
            </Section>

            {/* Background Section */}
            <Section light>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            Background Information
                        </h3>
                        <p className="text-slate-600 leading-relaxed md:text-lg">
                            PENNHYDRO-PELL OIL & GAS LIMITED is entirely an indigenous company
                            registered on July 11, 2018 under the Corporate Affairs Commission
                            of the Federal Republic of Nigeria.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            We specialized in the provision of Civil and Construction Works,
                            Dredging and Vessel & Marine Logistics in supply of Petroleum
                            Products such as AGO, PMS and LPG and other industrial support
                            services components.
                        </p>
                        <div className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-lg mt-8">
                            <p className="italic text-slate-700">
                                Our organization is registered with various certifying and
                                regulating bodies in Nigeria such as the Department of Petroleum
                                Resources. It was registered with a vision of becoming a world
                                class “Oil & Gas Support Services Company“-On commendable
                                quality Services delivery. Our core values are “honesty and
                                integrity in all our business dealings”. PENNHYRO-PELL OIL & GAS
                                LIMITED shall adopt Effective Training, Financial Management,
                                Technological and Operational strategies in achieving Customer
                                Satisfaction.
                            </p>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            We have highly experienced and dedicated workers who are always
                            available and ready to mobilize our state-of-the-art equipment and
                            materials to any part of the state within very short notice to
                            undertake any service that may be required of us at any time, and
                            assure you of our best performance at all times.
                        </p>
                    </div>
                    <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={aboutPageBodyImage}
                                alt="Corporate Excellence"
                                width={aboutPageBodyImage.width}
                                height={aboutPageBodyImage.height}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                placeholder="blur"
                                className="h-full w-full object-cover"
                            />
                    </div>
                </div>
            </Section>

            {/* Philosophy & Merits */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
                            <span className="mr-3">🧠</span> Corporate Philosophy
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "In everything we do at PENNHYDRO-PELL OIL & GAS LIMITED, customer satisfaction is the motor that drives us. We don’t believe in giving less than 100% to ensure customer satisfaction, particularly in important areas such as network and data security.",
                                "All of the solutions that we offer provide the highest level of user friendliness, simple installation and maintenance, and optimum reliability-and all at highly attractive prices.",
                                "The user-friendly and self-explanatory products in our portfolio represent our company’s sales strategy: A product range that consists of carefully selected products only are the best form of customer support!",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="w-6 h-6 bg-brand-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 text-xs font-bold">
                                        {idx + 1}
                                    </span>
                                    <p className="text-slate-600 leading-relaxed">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
                            <span className="mr-3">🏆</span> Our Merits
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Unique and creative solutions that meet the clients’ expectations not only by realizing the clients’ business.",
                                "Objectives, but particularly by our strict adherence to the International Standards and Our Operational Procedures.",
                                "Continuous provision of services beyond client's expectations",
                                "Creative approaches to the clients’ special needs in order to find unique and tailored communications solutions.",
                                "Team Work",
                                "Professional quality of services provided by a highly motivated team",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="w-6 h-6 bg-brand-secondary text-white rounded-full flex items-center justify-center mr-4 mt-1 text-xs font-bold">
                                        {idx + 1}
                                    </span>
                                    <p className="text-slate-600 leading-relaxed">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Our Strengths */}
            <Section light>
                <SectionHeading
                    title="What Sets Us Apart"
                    subtitle="Our Strengths"
                    centered
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {[
                        { title: "Creative work with information" },
                        {
                            title:
                                "Professional and strictly ethical relations with the media",
                        },
                        {
                            title:
                                "Courage and readiness to communicate on behalf of our clients in crisis",
                        },
                        { title: "Expertise and professionalism" },
                        { title: "Unique Solutions" },
                        {
                            title:
                                "Internationa know-how, combined with experience in the local market",
                        },
                        { title: "Wide-ranging contacts" },
                        { title: "Flexibility and attainability" },
                    ].map((strength, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-brand-primary transition-colors group"
                        >
                            <h4 className="font-bold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">
                                {strength.title}
                            </h4>
                            
                        </div>
                    ))}
                </div>
            </Section>

            {/* Strategic Objectives */}
            <Section>
                <div className="max-w-4xl mx-auto space-y-12">
                    <div>
                        <SectionHeading
                            title="OUR PESONNELS AND SHARED VALUES"
                            subtitle="Core Objectives"
                        />
                    </div>
                    {/* Personnel Section */}
                    <div className="bg-brand-dark rounded-2xl p-10 text-white shadow-2xl lg:mt-16">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="mr-3">🧑‍🔧</span> Professional Workforce
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            PENNHYDRO-PELL OIL & GAS LIMITED has a good quality workforce. Placing high value and recognizing the contribution made by our employees. Our emphasis is placed on training, retraining and development.
                            In this way, we ensure that our workforce is highly skilled and capable of delivering world class performance. From the Chief Operating Officer
                            to any member of PENNHYDRO-PELL OIL & GAS LIMITED, our business culture, “quality and customers’ satisfaction” are enshrined in all our activities

                        </p>
                        <div className="relative h-[400px] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={aboutPageTeamImage}
                                alt="Team Working"
                                width={aboutPageTeamImage.width}
                                height={aboutPageTeamImage.height}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                placeholder="blur"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-12 text-white">
                                <p className="text-xl font-bold italic">
                                    &ldquo;Quality and customers’ satisfaction are enshrined in all our
                                    activities&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-brand-dark rounded-2xl p-10 text-white shadow-2xl lg:mt-16">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="mr-3">🤝</span> Shared Values
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Building partnership through trust and expertise Projects in the
                            oil and gas industry are intrinsically complex – in terms of
                            engineering, economics, health, safety and environment. In
                            addition to technical and business expertise, trust and dedication
                            become all-important pillars of success
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Co-operating with our employees, end-users and OEMs alike,
                            PENNHYDRO-PELL OIL & GAS LIMITED shall build on pro-active
                            partnerships based on mutual understanding and awareness of the
                            special needs of the oil and gas business, its scales and risks,
                            its speed and direction.
                        </p>
                        <div className="p-6 bg-white/5 rounded-lg border border-white/10 italic text-slate-500">
                            <p>
                                &ldquo;Whatever the primary motivation for seeking large-scale
                                integrated solutions from a single supplier – whether the
                                reduction of complexity, interfaces and costs, or tight start-up
                                schedules the Peacot oil and gas portfolio reflects a set of
                                shared values ensuring maximum return.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}

