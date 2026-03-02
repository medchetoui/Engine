import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
    const { t } = useLanguage();
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 75%',
            }
        });

        tl.fromTo('.about-heading',
            { y: 60, opacity: 0, filter: 'blur(8px)' },
            { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' }
        )
            .fromTo('.about-text',
                { y: 40, opacity: 0, filter: 'blur(6px)' },
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' },
                "-=0.8"
            )
            .fromTo('.about-image',
                { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
                { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.3, stagger: 0.2, ease: 'power2.out' },
                "-=0.6"
            )
        // Number counting animation & Entry
        const statContainers = gsap.utils.toArray('.stat-item');

        // Entry animation for the container
        gsap.fromTo(statContainers,
            { y: 30, opacity: 0, scale: 0.95 },
            {
                y: 0, opacity: 1, scale: 1,
                duration: 1.1,
                ease: 'power3.out',
                stagger: 0.15,
                scrollTrigger: {
                    trigger: statContainers[0],
                    start: 'top 85%',
                    once: true
                }
            }
        );

        // Numeric Tween Animation
        const statNumbers = gsap.utils.toArray('.stat-number');
        statNumbers.forEach((stat, index) => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const suffix = stat.getAttribute('data-suffix') || '';

            // Generate a random plain object to tween
            const fakeObj = { val: 0 };

            gsap.to(fakeObj, {
                val: target,
                duration: 2.2,
                ease: 'power2.out',
                delay: index * 0.15, // Match container stagger
                snap: { val: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%',
                    once: true
                },
                onUpdate: () => {
                    stat.innerHTML = fakeObj.val + suffix;
                }
            });
        });

    }, { scope: container });

    const stats = [
        { target: 12, suffix: '+', label: 'about.stats.saas' },
        { target: 25, suffix: '+', label: 'about.stats.automation' },
        { target: 15, suffix: '+', label: 'about.stats.backend' },
        { target: 20, suffix: '+', label: 'about.stats.tech' },
    ];

    return (
        <section id="about" ref={container} className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text & Stats */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-inter mb-8 about-heading text-highlight">
                            {t('about.title')}
                        </h2>
                        <p className="text-lg text-muted leading-relaxed font-inter mb-12 about-text max-w-lg">
                            {t('about.description')}
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="stat-item border-l-2 border-accent-primary/30 pl-4">
                                    <div className="text-4xl font-mono font-bold text-highlight mb-2">
                                        <span className="stat-number" data-target={stat.target} data-suffix={stat.suffix}>0</span>
                                    </div>
                                    <div className="text-sm text-muted font-inter">
                                        {t(stat.label)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Photo Grid */}
                    <div className="relative h-[600px] w-full hidden md:block">
                        {/* Main Portrait */}
                        <div className="about-image absolute top-0 left-0 w-2/3 h-[400px] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl z-20">
                            <img src="/images/Img_4.jpeg" alt="Mohammed Working" className="w-full h-full object-cover" />
                        </div>

                        {/* Secondary Image - Bottom Right */}
                        <div className="about-image absolute bottom-0 right-0 w-[55%] h-[350px] rounded-[2rem] overflow-hidden border border-white/5 shadow-xl z-30 translate-y-8">
                            <img src="/images/Img_3.jpeg" alt="Setup" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500" />
                        </div>

                        {/* Floating Detail Image - Top Right */}
                        <div className="about-image absolute top-12 right-4 w-1/3 h-[200px] rounded-[1.5rem] overflow-hidden border border-white/10 shadow-lg z-10 hidden lg:block">
                            <img src="/images/Img_2.jpeg" alt="Abstract" className="w-full h-full object-cover opacity-80" />
                        </div>

                        {/* Decorative blurs */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent-primary/10 blur-[80px] rounded-full z-0" />
                    </div>

                </div>
            </div>
        </section>
    );
}
