'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Quote } from 'lucide-react'

export default function CEO() {
    const t = useTranslations('ceo')
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById('ceo-section')
        if (element) {
            observer.observe(element)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="ceo-section" className="py-16 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #004A81 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Premium Content Box */}
                    <div className="relative bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                        {/* Decorative gradient border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 pointer-events-none"></div>

                        <div className="relative p-8 md:p-12 lg:p-14">
                            <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-center">
                                {/* CEO Photo */}
                                <div className="relative group mx-auto lg:mx-0">
                                    <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                                        {/* Glow effect background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                                        {/* Image container with premium border */}
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden ring-4 ring-white shadow-xl">
                                            <Image
                                                src="/images/ceo-portrait.png"
                                                alt={t('name')}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 1024px) 256px, 288px"
                                            />
                                        </div>

                                    </div>

                                    {/* CEO Info Badge */}
                                    <div className="mt-6 text-center">
                                        <h3 className="text-2xl font-heading text-brand-primary mb-1">
                                            {t('name')}
                                        </h3>
                                        <p className="text-base font-body text-gray-600">
                                            {t('title')}
                                        </p>
                                    </div>
                                </div>

                                {/* CEO Note Content */}
                                <div className="space-y-6">
                                    {/* Quote icon */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <Quote className="w-10 h-10 text-brand-primary opacity-30" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl md:text-2xl font-heading text-brand-primary mb-4">
                                                {t('heading')}
                                            </h4>
                                        </div>
                                    </div>

                                    {/* Note Text */}
                                    <div className="space-y-4">
                                        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-body">
                                            {t('note')}
                                        </p>

                                        {/* Signature */}
                                        <div className="pt-4 border-t border-gray-200">
                                            <p className="text-lg font-heading text-brand-primary italic">
                                                — {t('name')}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Premium shimmer effect on hover */}
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
