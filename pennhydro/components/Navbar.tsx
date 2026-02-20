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
    const isHomeTop = pathname === "/" && !scrolled;

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
                            className={`inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none ${isHomeTop ? "text-white hover:text-brand-secondary" : "text-slate-700 hover:text-brand-primary"
                                }`}
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
                className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="px-4 py-6 space-y-4">
                    <div className="flex justify-between items-center mb-8">
                        <Image src="/logo.png" alt="Logo" width={120} height={40} className="h-8 w-auto" />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-slate-700 transition-colors hover:text-brand-primary"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                    <div className="pt-8">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-brand-primary text-white py-4 rounded-lg font-bold transition-all duration-300 hover:bg-brand-primary/90 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
