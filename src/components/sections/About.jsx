import { useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Presentation, Sparkles, Volume2, VolumeX, ExternalLink } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
    const { t } = useLanguage();
    const container = useRef(null);
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

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
            .fromTo('.about-video',
                { y: 50, scale: 0.95, opacity: 0, filter: 'blur(10px)' },
                { y: 0, scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.3, ease: 'power2.out' },
                "-=0.6"
            );

        // Number counting animation & Entry
        const statContainers = gsap.utils.toArray('.stat-item');

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

        const statNumbers = gsap.utils.toArray('.stat-number');
        statNumbers.forEach((stat, index) => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const suffix = stat.getAttribute('data-suffix') || '';
            const fakeObj = { val: 0 };

            gsap.to(fakeObj, {
                val: target,
                duration: 2.2,
                ease: 'power2.out',
                delay: index * 0.15,
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

                {/* Top Section: Text & Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-xs font-mono text-accent-primary mb-6">
                            <Presentation size={14} />
                            {t('about.seminarBadge')}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6 about-heading text-highlight leading-tight">
                            {t('about.title')}
                        </h2>
                        <p className="text-lg text-muted leading-relaxed font-inter about-text max-w-2xl">
                            {t('about.description')}
                        </p>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-2 gap-6 bg-surface/50 p-8 rounded-3xl border border-white/5">
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-item border-l-2 border-accent-primary/40 pl-4">
                                <div className="text-3xl md:text-4xl font-mono font-bold text-highlight mb-1">
                                    <span className="stat-number" data-target={stat.target} data-suffix={stat.suffix}>0</span>
                                </div>
                                <div className="text-xs md:text-sm text-muted font-inter">
                                    {t(stat.label)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* ── Seminar Video ── */}
            <div className="about-video relative w-full mt-12">
                <div className="container mx-auto px-6 max-w-3xl">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-2xl">

                    {/* Video Player Header Bar */}
                    <div className="px-8 py-4 bg-surface/95 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs font-mono tracking-widest text-muted uppercase">
                                Live Keynote Presentation
                            </span>
                        </div>
                        <button
                            onClick={toggleMute}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-highlight transition-all"
                        >
                            {isMuted ? <VolumeX size={15} className="text-accent-secondary" /> : <Volume2 size={15} className="text-accent-primary" />}
                            {isMuted ? 'Unmute Audio' : 'Muted'}
                        </button>
                    </div>

                    {/* Video — full width, 16/9 ratio */}
                    <div className="relative w-full bg-black" style={{ aspectRatio: '16/9' }}>
                        <video
                            ref={videoRef}
                            src="Seminaire.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Info Footer Banner */}
                    <div className="px-8 py-6 md:py-8 bg-surface border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        <div className="flex items-start gap-5 flex-1">
                            <div className="p-3 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0 mt-1">
                                <Sparkles size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-highlight font-inter mb-1">
                                    {t('about.seminarTitle')}
                                </h3>
                                <p className="text-sm md:text-base text-muted font-inter leading-relaxed">
                                    {t('about.seminarDesc')}
                                </p>
                            </div>
                        </div>

                        {/* LinkedIn CTA */}
                        <a
                            href="https://www.linkedin.com/posts/mohammedamine-chetoui-449864258_jai-eu-lhonneur-de-pr%C3%A9senter-deux-outils-ugcPost-7338904436360052736-Q7Q-/?utm_source=share&utm_medium=member_ios&rcm=ACoAAD98o3kBPOE4CaakZmr14c6LiEpMm4cs5ZE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/70 text-[#4FA3E0] hover:text-white transition-all duration-300 text-sm font-semibold font-inter whitespace-nowrap"
                        >
                            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            View on LinkedIn
                            <ExternalLink size={13} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
                </div>{/* end max-w-3xl container */}
            </div>

        </section>
    );
}
