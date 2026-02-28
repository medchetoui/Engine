import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Projects() {
    const { t } = useLanguage();
    const container = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray('.project-card').forEach((card) => {
            gsap.fromTo(card,
                { y: 60, opacity: 0, filter: 'blur(8px)' },
                {
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 1.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        once: true
                    }
                }
            );
        });
    }, { scope: container });

    const projects = [
        {
            title: 'Autofret',
            role: t('projects.autofretDesc'),
            tech: ['React', 'Node / Laravel', 'Architecture'],
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'LeadFlow',
            role: t('projects.leadflowDesc'),
            tech: ['React', 'Node.js', 'Automation'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'NeoCoder',
            role: t('projects.neocoderDesc'),
            tech: ['AI Engine', 'React', 'Symfony'],
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'Data Acquisition',
            role: t('projects.dataAcqDesc'),
            tech: ['Scraping', 'System Design', 'Pipelines'],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop'
        }
    ];

    return (
        <section id="projects" ref={container} className="py-32 bg-surface/50">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-inter text-highlight">
                            {t('projects.title')}
                        </h2>
                        <div className="h-1 w-20 bg-accent-secondary mt-6 rounded-full" />
                    </div>
                    <a href="#contact" className="group flex items-center gap-2 text-muted hover:text-highlight transition-colors font-mono uppercase text-sm tracking-widest">
                        {t('hero.startProject')}
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`project-card group relative rounded-[2rem] overflow-hidden bg-surface border border-white/5 shadow-2xl cursor-pointer ${i % 2 !== 0 ? 'md:mt-24' : ''
                                }`}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-power2InOut"
                                />
                            </div>

                            {/* Content Panel */}
                            <div className="relative p-8 md:p-10 z-20 bg-gradient-to-t from-surface via-surface to-surface/90 -mt-20 backdrop-blur-md">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-muted bg-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-3xl font-bold text-highlight font-inter mb-3 flex items-center gap-3">
                                    {project.title}
                                    <ArrowUpRight className="text-accent-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </h3>
                                <p className="text-lg text-muted font-playfair italic">
                                    {project.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
