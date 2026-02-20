import Link from "next/link";
import Image from "next/image";

const footerLogos = [
    "/FOOTER1.png", "/FOOTER2.png", "/FOOTER3.png", "/FOOTER4.png",
    "/FOOTER5.png", "/FOOTER6.png", "/FOOTER7.png", "/FOOTER8.png"
];

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white pt-16 pb-8">
            {/* Partner Logo Grid */}
            <div className="border-t border-b border-slate-700 py-12 mb-16 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-center text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">
                        Our Partners
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 items-center justify-items-center">
                        {footerLogos.map((logo, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Image
                                    src={logo}
                                    alt={`Partner Logo ${index + 1}`}
                                    width={100}
                                    height={50}
                                    loading="lazy"
                                    className="h-10 w-auto opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Company */}
                    <div>
                        <Image src="/logo.png" alt="Logo" width={180} height={60} loading="eager" className="mb-6 brightness" />
                        <p className="text-slate-400 text-sm leading-relaxed">
                            PENNHYDRO-PELL OIL & GAS LIMITED is an indigenous company specialized in Civil Works, Dredging, and Marine Logistics.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        {/* Column 2: Services */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Services</h3>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><Link href="/services" className="hover:text-brand-primary">Civil & Construction</Link></li>
                                <li><Link href="/services" className="hover:text-brand-primary">Dredging & Reclamation</Link></li>
                                <li><Link href="/services" className="hover:text-brand-primary">Vessel & Marine Logistics</Link></li>
                                <li><Link href="/services" className="hover:text-brand-primary">Petroleum Product Supply</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Quick Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><Link href="/" className="hover:text-brand-primary">Home</Link></li>
                                <li><Link href="/about" className="hover:text-brand-primary">About Us</Link></li>
                                <li><Link href="/policy" className="hover:text-brand-primary">Policies</Link></li>
                                <li><Link href="/contact" className="hover:text-brand-primary">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Information</h3>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-start">
                                <span className="mr-3">📍</span>
                                No 9/11 Bishop Dimeri Street, Off Evo Road, GRA, Port Harcourt, Rivers, Nigeria.
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3">📞</span>
                                +234 904 786 8943
                            </li>
                            <li className="flex items-center ml-[26px]">
                                +234 806 042 5707
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3">✉️</span>
                                info@pennhydro-pell.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
                    <p>© 2021 PENNHYDRO-PELL OIL & GAS LIMITED. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/policy" className="hover:text-orange">Privacy Policy</Link>
                        <Link href="/policy" className="hover:text-orange">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
