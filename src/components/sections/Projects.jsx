import { useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Info, X, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Projects() {
    const { t } = useLanguage();
    const container = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

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

    const primaryProjects = [
        {
            title: 'AutoFret',
            status: 'Production Ready',
            role: t('projects.autofretDesc'),
            tech: ['React', 'React Native', 'Symfony', 'MySQL', 'Docker'],
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
            link: 'https://autofret.com/',
            details: t('projects.autofretDetails')
        },
        {
            title: 'Abyss',
            status: 'Production Ready',
            role: t('projects.abyssDesc'),
            tech: ['React', 'Django', 'PostgreSQL', 'E-Commerce'],
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
            link: 'https://abyss2277.com/',
            details: t('projects.abyssDetails')
        }
    ];

    const secondaryProjects = [
        {
            id: 'studybridge',
            title: 'StudyBridge',
            role: t('projects.studybridgeDesc'),
            tech: ['React', 'Symfony', 'MySQL', 'AI Integration'],
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
            details: t('projects.studybridgeDetails')
        },
        {
            id: 'leadflow',
            title: 'LeadFlow AI',
            role: t('projects.leadflowDesc'),
            tech: ['Python', 'Streamlit', 'FastAPI', 'MongoDB', 'Selenium'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
            details: t('projects.leadflowDetails')
        },
        {
            id: 'emailAuto',
            title: 'Email Marketing Automation',
            role: t('projects.emailAutoDesc'),
            tech: ['Python', 'Selenium', 'MongoDB', 'Automation'],
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
            details: t('projects.emailAutoDetails')
        },
        {
            id: 'neocoder',
            title: 'NeoCoder AI Assistant',
            role: t('projects.neocoderDesc'),
            tech: ['AI Engine', 'React', 'AST Parser', 'LLM'],
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
            details: t('projects.neocoderDetails')
        },
        {
            id: 'mapminer',
            title: 'MapMiner Plus',
            role: t('projects.mapminerDesc'),
            tech: ['Python', 'Selenium', 'BeautifulSoup', 'Requests', 'CSV Export'],
            image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop',
            details: t('projects.mapminerDetails')
        }
    ];

    return (
        <section id="projects" ref={container} className="py-32 bg-surface/50 relative">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header: Featured Infrastructure */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
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

                {/* Featured Projects Grid: Autofret & Abyss ONLY */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {primaryProjects.map((project, i) => (
                        <a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`project-card group block relative rounded-[2rem] overflow-hidden bg-surface border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/20 ${
                                i % 2 !== 0 ? 'md:mt-16' : ''
                            }`}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-power2InOut"
                                />
                            </div>

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
                        </a>
                    ))}
                </div>

                {/* Separate Section: More Projects */}
                <div className="mt-36">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-inter text-highlight">
                            {t('projects.moreTitle')}
                        </h2>
                        <div className="h-1 w-16 bg-accent-primary mt-4 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {secondaryProjects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="project-card group relative rounded-2xl overflow-hidden bg-surface border border-white/5 shadow-xl cursor-pointer hover:border-accent-primary/40 transition-all duration-300"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-1.5 border border-white/10">
                                        <Info size={14} className="text-accent-primary" />
                                        {t('projects.clickForDetails')}
                                    </span>
                                </div>

                                <div className="p-6 bg-surface">
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tech.map((tech, j) => (
                                            <span key={j} className="px-2.5 py-0.5 rounded-full border border-white/10 text-[11px] font-mono text-muted bg-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-bold text-highlight font-inter mb-2 flex items-center justify-between">
                                        {project.title}
                                        <Info size={18} className="text-muted group-hover:text-accent-primary transition-colors" />
                                    </h3>
                                    <p className="text-sm text-muted font-playfair italic line-clamp-2">
                                        {project.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Modal for More Information */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
                    <div className="relative w-full max-w-2xl bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

                        {/* Modal Header Image */}
                        <div className="relative h-48 md:h-56 overflow-hidden">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors z-30"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {selectedProject.tech.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 rounded-full border border-accent-primary/30 text-xs font-mono text-accent-primary bg-accent-primary/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold text-highlight font-inter mb-2">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-muted text-base leading-relaxed">
                                    {selectedProject.details?.summary}
                                </p>
                            </div>

                            {/* Features list */}
                            {selectedProject.details?.features && (
                                <div className="space-y-3 pt-2 border-t border-white/10">
                                    <h4 className="text-sm font-mono uppercase tracking-wider text-highlight">
                                        Key Highlights
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {selectedProject.details.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-muted">
                                                <CheckCircle2 size={16} className="text-accent-primary shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Architecture */}
                            {selectedProject.details?.architecture && (
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                    <h4 className="text-xs font-mono uppercase tracking-wider text-accent-secondary">
                                        Architecture Blueprint
                                    </h4>
                                    <p className="text-xs text-muted leading-relaxed font-mono">
                                        {selectedProject.details.architecture}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 bg-surface border-t border-white/5 flex justify-end">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="px-6 py-2.5 rounded-full bg-accent-primary text-white hover:bg-accent-secondary transition-colors font-medium text-sm font-inter"
                            >
                                {t('projects.closeDetails')}
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
