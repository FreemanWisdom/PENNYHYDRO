"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Policy", href: "/policy" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 shadow-md py-2 backdrop-blur-sm"
                : pathname === "/"
                    ? "bg-brand-dark/55 backdrop-blur-md py-3"
                    : "bg-white/95 shadow-sm py-4 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Pennhydro-Pell Logo"
                                width={250}
                                height={80}
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === item.href
                                        ? "text-brand-primary border-b-2 border-brand-primary"
                                        : (scrolled || pathname !== "/") ? "text-slate-700 hover:text-brand-primary" : "text-white hover:text-brand-secondary"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md border border-brand-dark bg-brand-dark text-black transition-all duration-300 focus:outline-none hover:bg-brand-primary hover:border-brand-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col transition-all duration-300 ease-in-out ${isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                {/* Drawer top: logo + close */}
                <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/logo.png"
                            alt="Pennhydro-Pell Logo"
                            width={180}
                            height={60}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                        className="p-2.5 rounded-md bg-white/10 text-black hover:bg-brand-primary transition-all duration-300 focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-4 text-xl font-semibold border-b border-slate-100 ${pathname === item.href ? "text-brand-primary" : "text-slate-700"
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
                {/* CTA + Contact Buttons */}
                <div className="px-6 pt-6 pb-4 flex flex-col gap-3 mt-auto">
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 w-full text-center bg-brand-dark border-2 border-brand-dark text-white py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-brand-primary hover:border-brand-primary active:scale-95"
                    >
                        Get a Quote
                    </Link>
                    <a
                        href="tel:+2349047868943"
                        className="flex items-center justify-center gap-2.5 w-full border-2 border-slate-200 text-slate-700 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:border-brand-primary hover:text-brand-primary active:scale-95"
                    >
                        <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        (+234) 904 786 8943
                    </a>
                    <a
                        href="mailto:info@pennhydropell.com"
                        className="flex items-center justify-center gap-2.5 w-full border-2 border-slate-200 text-slate-700 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:border-brand-primary hover:text-brand-primary active:scale-95"
                    >
                        <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        info@pennhydropell.com
                    </a>
                </div>
            </div>
        </nav>
    );
}
