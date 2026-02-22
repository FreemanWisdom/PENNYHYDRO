import Image from "next/image";
import Link from "next/link";
import { homePageHeroImage } from "@/lib/images";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={homePageHeroImage}
                    alt="Pennhydro-Pell Corporate Hero"
                    fill
                    priority
                    sizes="100vw"
                    placeholder="blur"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/70"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-5xl">
                    {/* Eyebrow label */}
                    <p className="font-heading text-white font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-5 animate-fade-in-up [animation-delay:100ms]">
                        Civil Works · Marine Logistics
                    </p>

                    {/* Main headline — Barlow Condensed Black */}
                    <h1
                        className="font-barlow font-black uppercase leading-none tracking-tight mb-6 animate-fade-in-up [animation-delay:200ms]"
                        style={{ fontSize: "clamp(2.2rem, 7vw, 6rem)" }}
                    >
                        <span className="text-white">Delivering Your Vision</span>
                        <br />
                        <span style={{ color: "#ff9000" }}>From Concept</span>
                        <span className="text-white"> to Completion</span>
                    </h1>

                    {/* Sub-headline */}
                    <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-secondary italic mb-8 leading-snug animate-fade-in-up [animation-delay:350ms]">
                        Innovation at every step of the way.
                    </h2>

                    <p className="font-sans text-base sm:text-lg text-slate-200 mb-10 leading-relaxed max-w-3xl animate-fade-in-up [animation-delay:500ms]">
                        PENNHYDRO-PELL OIL &amp; GAS LIMITED is dedicated to exceeding the expectations
                        of every client by offering outstanding customer service, increased flexibility,
                        and greater value — optimizing business functionality and improving operational efficiency.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:650ms]">
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-brand-dark text-white border border-brand-dark font-bold rounded text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-brand-primary hover:border-brand-primary"
                        >
                            What We Do
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-brand-dark text-white border border-brand-dark font-bold rounded text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary hover:border-brand-primary hover:shadow-xl"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
                <span className="text-white/50 text-xs uppercase tracking-widest mb-2"></span>
                <div className="w-px h-12 bg-gradient-to-b from-brand-primary to-transparent"></div>
            </div>
        </section>
    );
}
