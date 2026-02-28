import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Code2, Smartphone, Server, Network } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Technologies() {
    const { t } = useLanguage();
    const container = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.tech-card',
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

    const techStack = [
        {
            icon: <Code2 size={24} />,
            title: 'Frontend',
            description: t('technologies.frontend'),
        },
        {
            icon: <Smartphone size={24} />,
            title: 'Mobile',
            description: t('technologies.mobile'),
        },
        {
            icon: <Server size={24} />,
            title: 'Backend',
            description: t('technologies.backend'),
        },
        {
            icon: <Network size={24} />,
            title: 'Infrastructure',
            description: t('technologies.infrastructure'),
        }
    ];

    return (
        <section id="technologies" ref={container} className="py-24 bg-surface/30">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-inter text-highlight">
                        {t('technologies.title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {techStack.map((tech, i) => (
                        <div
                            key={i}
                            className="tech-card group relative p-[1px] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-white/10 to-transparent hover:from-accent-primary/50 hover:to-accent-secondary/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer shadow-lg"
                        >
                            <div className="absolute inset-0 bg-noise opacity-0 group-hover:opacity-10 transition-opacity" />
                            <div className="h-full w-full bg-surface rounded-[1.5rem] p-8 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-bold text-highlight font-inter mb-3">
                                    {tech.title}
                                </h3>
                                <p className="text-muted font-inter leading-relaxed">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
