import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Process() {
    const { t } = useLanguage();
    const container = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.process-card',
            { y: 60, opacity: 0, filter: 'blur(8px)' },
            {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    }, { scope: container });

    const steps = [
        { num: '01', title: t('process.step1'), desc: t('process.step1Desc') },
        { num: '02', title: t('process.step2'), desc: t('process.step2Desc') },
        { num: '03', title: t('process.step3'), desc: t('process.step3Desc') },
    ];

    return (
        <section id="process" ref={container} className="py-32 relative overflow-hidden bg-bg-color">
            {/* Subtle Geometric Background - single instance for the whole section */}
            <div className="absolute inset-0 overflow-hidden z-0 flex items-center justify-center opacity-70 pointer-events-none">
                <div className="w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] border border-black/5 dark:border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[100vw] h-[100vw] md:w-[45vw] md:h-[45vw] border border-accent-primary/20 dark:border-accent-primary/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-inter text-highlight">
                        {t('nav.process')}
                    </h2>
                    <div className="h-1 w-20 bg-accent-primary mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="process-card group relative">
                            {/* Card Content */}
                            <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10 h-full flex flex-col group-hover:-translate-y-2 transition-transform duration-500 shadow-xl hover:shadow-2xl cursor-pointer">
                                {/* Number Badge */}
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-xl font-bold mb-6 group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                                    {step.num}
                                </div>

                                <h3 className="text-2xl font-bold font-inter text-highlight mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-base text-muted font-inter leading-relaxed flex-grow">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
