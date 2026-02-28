import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Solutions() {
    const { t } = useLanguage();
    const container = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.solution-block',
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

    // Get items directly since it's an array
    const items = t('solutions.items');

    return (
        <section id="solutions" ref={container} className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="mb-20 max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold font-inter text-highlight">
                        {t('solutions.title')}
                    </h2>
                    <div className="h-1 w-20 bg-accent-primary mt-6 rounded-full" />
                </div>

                <div className="space-y-6">
                    {items && Array.isArray(items) && items.map((solution, i) => (
                        <div
                            key={i}
                            className="solution-block glass p-8 md:p-12 rounded-[2rem] hover:bg-surface transition-colors duration-300 group flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center cursor-pointer"
                        >
                            <div className="text-4xl font-playfair italic text-accent-primary/50 group-hover:text-accent-primary transition-colors">
                                0{i + 1}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-highlight font-inter mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-lg text-muted font-inter max-w-3xl">
                                    {solution.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
