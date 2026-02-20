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
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : pathname === "/"
            ? "bg-black/40 backdrop-blur-md py-4"
            : "bg-white shadow-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Pennhydro-Pell Logo"
                width={280}
                height={90}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold transition-all duration-300 border-b-2 pb-1 ${
                    pathname === item.href
                      ? "border-brand-primary text-brand-primary"
                      : scrolled || pathname !== "/"
                      ? "border-transparent text-slate-700 hover:text-brand-primary"
                      : "border-transparent text-white hover:text-brand-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-md border border-slate-300"
              aria-label="Open Menu"
            >
              <svg
                className="h-6 w-6 text-slate-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">

          {/* CLOSE BUTTON AT EDGE */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="absolute top-5 right-5 p-2 rounded-md border border-slate-300 hover:border-brand-primary transition-all"
          >
            <svg
              className="h-6 w-6 text-slate-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* LOGO CENTERED */}
          <div className="flex flex-col items-center pt-16 pb-6 border-b border-slate-200">
            <Image
              src="/logo.png"
              alt="Pennhydro-Pell Logo"
              width={220}
              height={80}
              className="h-14 w-auto"
            />
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-col items-center justify-center px-6 space-y-4 flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center py-3 rounded-lg border text-lg font-semibold transition-all ${
                  pathname === item.href
                    ? "border-brand-primary text-brand-primary"
                    : "border-slate-300 text-slate-700 hover:border-brand-primary hover:text-brand-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CONTACT SECTION */}
          <div className="px-6 pb-8 space-y-3 border-t border-slate-200 pt-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center bg-brand-dark text-white py-3 rounded-lg font-bold border-2 border-brand-dark hover:bg-brand-primary hover:border-brand-primary transition-all"
            >
              Get a Quote
            </Link>

            <a
              href="tel:+2349047868943"
              className="w-full block text-center py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:border-brand-primary hover:text-brand-primary transition-all"
            >
              (+234) 904 786 8943
            </a>

            <a
              href="mailto:info@pennhydropell.com"
              className="w-full block text-center py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:border-brand-primary hover:text-brand-primary transition-all"
            >
              info@pennhydropell.com
            </a>
          </div>

        </div>
      )}
    </>
  );
}