"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <div className="bg-white p-8 md:p-12 shadow-2xl rounded-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-8 text-slate-800 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder="John Doe"
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="+234 ..."
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="How can we help you?"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all resize-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    className={`w-full py-5 rounded border font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 ${status === "success"
                            ? "bg-brand-dark border-brand-dark text-black"
                            : "bg-brand-dark border-brand-dark text-black hover:bg-brand-primary hover:border-brand-primary hover:-translate-y-0.5 hover:shadow-lg"
                        } ${status === "sending" ? "cursor-wait opacity-90" : ""}`}
                >
                    {status === "idle" && "Send Message"}
                    {status === "sending" && "Sending..."}
                    {status === "success" && "Message Sent!"}
                </button>
            </form>
        </div>
    );
}
