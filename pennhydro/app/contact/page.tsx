import { Section, SectionHeading } from "@/components/UI";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="pt-20">
            {/* Background with high visibility image */}
            <div className="relative bg-brand-dark py-24 overflow-hidden">
                <Image
                    src="/1 (18).jpg"
                    alt="Contact Background"
                    fill
                    priority
                    className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-brand-dark/45"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <SectionHeading
                        title="We're Here to Assist You"
                        subtitle="Stay in Touch"
                        centered
                        inverse
                    />
                </div>
            </div>

            <Section light>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                        <p className="text-slate-600 mb-12 text-lg">
                            We would be happy to help and advise if you have any questions or inquiries.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mr-6 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-2">Our Office</h4>
                                    <p className="text-slate-600">No 9/11 Bishop Dimeri Street, Off Evo Road, GRA, Port Harcourt, Rivers State, Nigeria.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mr-6 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-2">Phone Numbers</h4>
                                    <p className="text-slate-600">+234 904 786 8943</p>
                                    <p className="text-slate-600">+234 806 042 5707</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mr-6 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-2">Email Address</h4>
                                    <p className="text-slate-600">info@pennhydro-pell.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h4 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-6">Social Media</h4>
                            <div className="flex gap-4">
                                {["Facebook", "Twitter", "LinkedIn", "WhatsApp"].map((social) => (
                                    <span key={social} className="px-4 py-2 bg-slate-100 text-slate-600 rounded text-sm hover:bg-brand-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-pointer">
                                        {social}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <ContactForm />
                </div>
            </Section>

            {/* Map Placeholder or Visual */}
            <div className="h-[400px] bg-slate-200 relative overflow-hidden">
                <Image
                    src="/1 (17).jpg"
                    alt="Map Location Visual"
                    fill
                    className="object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-white shadow-lg rounded-lg border border-slate-200 text-center">
                        <p className="font-bold text-brand-dark">Our Headquarters</p>
                        <p className="text-xs text-slate-500">No 9/11 Bishop Dimeri Street, Off Evo Road, GRA, Port Harcourt, Rivers, Nigeria</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
