import React from "react";

export function Section({
    children,
    className = "",
    id = "",
    light = false,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
    light?: boolean;
}) {
    return (
        <section
            id={id}
            className={`py-20 md:py-32 ${light ? "bg-white" : "bg-slate-50"} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}

export function SectionHeading({
    title,
    subtitle,
    centered = false,
    inverse = false,
}: {
    title: string;
    subtitle?: string;
    centered?: boolean;
    inverse?: boolean;
}) {
    return (
        <div className={`mb-16 ${centered ? "text-center mx-auto" : ""} max-w-3xl`}>
            {subtitle && (
                <span className={`block text-xs font-bold tracking-[0.2em] uppercase mb-3 ${inverse ? "text-white" : "text-brand-secondary"}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold ${inverse ? "text-white" : "text-slate-900"}`}>
                {title}
            </h2>
            <div className={`h-1 w-20 mt-6 bg-brand-primary ${centered ? "mx-auto" : ""}`}></div>
        </div>
    );
}
