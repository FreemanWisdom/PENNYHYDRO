import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/1 (10).jpg"
                    alt="Pennhydro-Pell Corporate Hero"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/65"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight animate-fade-in-up [animation-delay:200ms]">
                        Delivering Your Vision from concept to completion
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-primary mb-8 leading-tight animate-fade-in-up [animation-delay:350ms]">
                        Delivering innovation every step of the way.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-100 mb-10 leading-relaxed max-w-3xl animate-fade-in-up [animation-delay:500ms]">
                        PENNHYDRO-PELL OIL & GAS LIMITED is dedicated to exceeding the expectations of every client by offering outstanding customer service, increased flexibility, and greater value, thus optimizing business functionality and improving operation efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:650ms]">
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white text-brand-dark border border-white font-bold rounded text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-slate-100"
                        >
                            Our Services
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 bg-transparent text-white border border-white/50 backdrop-blur-sm font-bold rounded text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-dark hover:shadow-xl"
                        >
                            About Us
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
