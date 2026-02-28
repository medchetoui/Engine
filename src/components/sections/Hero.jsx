import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Folder } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const { t } = useLanguage();
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo('.hero-badge',
            { y: 20, opacity: 0, filter: 'blur(4px)' },
            { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', delay: 0.2 }
        )
            .fromTo('.hero-text',
                { y: 60, opacity: 0, filter: 'blur(10px)' },
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, stagger: 0.1, ease: 'power3.out' },
                "-=0.6"
            )
            .fromTo('.hero-buttons',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                "-=0.7"
            )
            .fromTo('.hero-image',
                { scale: 1.05, opacity: 0, filter: 'blur(15px)' },
                { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' },
                "-=1.2"
            );
    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
        >
            {/* Background Cinematic Visual (Temporary gradient placeholder + subtle image overlay) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-bg-color/80 via-bg-color/90 to-bg-color z-10" />
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Digital Infrastructure"
                    className="w-full h-full object-cover opacity-20 dark:opacity-30"
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="max-w-2xl">
                        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface bg-surface/50 backdrop-blur-sm text-sm font-mono text-accent-primary mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                            System Architect
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold font-inter tracking-tight leading-[1.1] mb-2 text-highlight hero-text">
                            {t('hero.line1')}
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-playfair italic text-muted mb-8 hero-text">
                            {t('hero.line2')}
                        </h2>

                        <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl hero-text font-inter">
                            {t('hero.subtext')}
                        </p>

                        <div className="flex flex-wrap gap-4 hero-buttons">
                            <a
                                href="#contact"
                                className="group flex items-center gap-2 px-6 py-3.5 bg-accent-primary text-white rounded-full font-inter font-medium hover:bg-accent-secondary transition-all duration-300"
                            >
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                {t('hero.startProject')}
                            </a>
                            <a
                                href="#projects"
                                className="group flex items-center gap-2 px-6 py-3.5 bg-surface text-highlight border border-white/10 rounded-full font-inter font-medium hover:bg-white/5 transition-all duration-300"
                            >
                                <Folder size={20} className="text-muted group-hover:text-highlight transition-colors" />
                                {t('hero.viewWork')}
                            </a>
                        </div>
                    </div>

                    <div className="hero-image relative hidden lg:block">
                        {/* Using Img_1.jpeg as the primary hero portrait */}
                        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10">
                            <img
                                src="/images/Img_1.jpeg"
                                alt="Mohammed Amine Chetoui"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Decorative background blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-primary/20 blur-[100px] rounded-full z-0" />
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-secondary/20 blur-[80px] rounded-full z-0" />
                    </div>

                </div>
            </div>
        </section>
    );
}
