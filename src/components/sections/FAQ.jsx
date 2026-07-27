import { useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function FAQ() {
    const { t } = useLanguage();
    const container = useRef(null);
    const [openIndex, setOpenIndex] = useState(null);

    useGSAP(() => {
        gsap.fromTo('.faq-title',
            { y: 40, opacity: 0, filter: 'blur(8px)' },
            {
                y: 0, opacity: 1, filter: 'blur(0px)', duration: 1,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.faq-title', start: 'top 90%', once: true }
            }
        );
        gsap.fromTo('.faq-item',
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 0.7, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: '.faq-list', start: 'top 85%', once: true }
            }
        );
    }, { scope: container });

    const items = t('faq.items');

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section id="faq" ref={container} className="py-28 relative overflow-hidden">

            {/* Subtle background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-accent-secondary/8 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                {/* Section Header */}
                <div className="faq-title text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface bg-surface/50 backdrop-blur-sm text-xs font-mono text-accent-primary mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                        FAQ
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-inter text-highlight mb-5 leading-tight">
                        {t('faq.title')}
                    </h2>
                    <p className="text-lg text-muted font-inter max-w-xl mx-auto">
                        {t('faq.subtitle')}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="faq-list flex flex-col gap-4">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="faq-item glass rounded-2xl border border-white/5 hover:border-accent-primary/20 transition-all duration-300 overflow-hidden"
                        >
                            {/* Question / Toggle */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left group"
                                aria-expanded={openIndex === i}
                            >
                                <span className="text-base md:text-lg font-semibold font-inter text-highlight group-hover:text-accent-primary transition-colors duration-200">
                                    {item.q}
                                </span>
                                <span
                                    className={`flex-shrink-0 p-2 rounded-full bg-surface/60 text-muted group-hover:text-accent-primary transition-all duration-300 ${openIndex === i ? 'rotate-180 text-accent-primary bg-accent-primary/10' : ''}`}
                                >
                                    <ChevronDown size={18} />
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`grid transition-all duration-400 ease-in-out ${openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                style={{ transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-7 pb-6 text-muted font-inter leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
