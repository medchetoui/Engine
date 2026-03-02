import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function CTA() {
    const { t } = useLanguage();
    const container = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.cta-content',
            { y: 60, opacity: 0, filter: 'blur(10px)' },
            {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    }, { scope: container });

    return (
        <section id="contact" ref={container} className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">

                <div className="cta-content glass p-12 md:p-24 rounded-[3rem] relative overflow-hidden group">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/20 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold font-inter text-highlight mb-10 leading-tight max-w-3xl mx-auto">
                            {t('cta.headline')}
                        </h2>

                        <a
                            href="mailto:medchetoui44@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-white rounded-full font-inter font-bold text-lg hover:bg-accent-secondary hover:scale-105 transition-all duration-300 magnetic shadow-xl hover:shadow-accent-primary/30"
                        >
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            {t('cta.button')}
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
