import { useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Check, X, ArrowRight, Globe, Layers, Bot, Building2, Zap, Phone } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const PLAN_ICONS = {
    launch: Globe,
    growth: Layers,
    scale: Bot,
    enterprise: Building2,
};

const PLAN_STYLES = {
    launch: {
        accent: 'from-sky-500/15 to-cyan-500/15',
        iconBg: 'bg-sky-500/10 text-sky-400',
        border: 'border-white/8 hover:border-sky-500/30',
        priceFg: 'text-highlight',
        btn: 'bg-surface border border-white/10 text-highlight hover:bg-white/5',
    },
    growth: {
        accent: 'from-violet-500/25 to-fuchsia-500/20',
        iconBg: 'bg-violet-500/15 text-violet-400',
        border: 'border-violet-500/40',
        priceFg: 'text-violet-300',
        btn: 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105',
    },
    scale: {
        accent: 'from-emerald-500/15 to-teal-500/15',
        iconBg: 'bg-emerald-500/10 text-emerald-400',
        border: 'border-white/8 hover:border-emerald-500/30',
        priceFg: 'text-highlight',
        btn: 'bg-surface border border-white/10 text-highlight hover:bg-white/5',
    },
    enterprise: {
        accent: 'from-amber-500/10 to-orange-500/10',
        iconBg: 'bg-amber-500/10 text-amber-400',
        border: 'border-white/8 hover:border-amber-500/30',
        priceFg: 'text-amber-300',
        btn: 'bg-surface border border-white/10 text-highlight hover:bg-white/5',
    },
};

export default function Pricing() {
    const { t } = useLanguage();
    const container = useRef(null);
    const [hoveredAddon, setHoveredAddon] = useState(null);

    const plans = t('pricing.plans');
    const addons = t('pricing.addons');

    useGSAP(() => {
        gsap.fromTo('.pricing-header',
            { y: 40, opacity: 0, filter: 'blur(8px)' },
            {
                y: 0, opacity: 1, filter: 'blur(0px)', duration: 1,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.pricing-header', start: 'top 90%', once: true }
            }
        );
        gsap.fromTo('.plan-card',
            { y: 60, opacity: 0, filter: 'blur(6px)' },
            {
                y: 0, opacity: 1, filter: 'blur(0px)',
                duration: 0.8, stagger: 0.12, ease: 'power3.out',
                scrollTrigger: { trigger: '.plans-grid', start: 'top 85%', once: true }
            }
        );
        gsap.fromTo('.addon-item',
            { y: 20, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 0.5, stagger: 0.04, ease: 'power2.out',
                scrollTrigger: { trigger: '.addons-section', start: 'top 88%', once: true }
            }
        );
    }, { scope: container });

    return (
        <section id="pricing" ref={container} className="py-32 relative overflow-hidden">

            {/* Ambient background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-violet-500/8 blur-[140px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-accent-primary/8 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* ── Header ── */}
                <div className="pricing-header text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface bg-surface/50 backdrop-blur-sm text-xs font-mono text-accent-primary mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                        {t('pricing.sectionBadge')}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-inter text-highlight mb-5 leading-tight">
                        {t('pricing.title')}
                    </h2>
                    <p className="text-lg text-muted font-inter max-w-2xl mx-auto">
                        {t('pricing.subtitle')}
                    </p>
                </div>

                {/* ── 4 Plan Cards ── */}
                <div className="plans-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-20">
                    {plans.map((plan) => {
                        const Icon = PLAN_ICONS[plan.key] || Globe;
                        const styles = PLAN_STYLES[plan.key];
                        const isGrowth = plan.key === 'growth';

                        return (
                            <div
                                key={plan.key}
                                className={`plan-card relative glass rounded-[2rem] border flex flex-col transition-all duration-500 overflow-hidden
                                    ${styles.border}
                                    ${isGrowth ? 'md:-translate-y-3 shadow-2xl shadow-violet-500/10' : ''}
                                `}
                            >
                                {/* Card gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${styles.accent} opacity-80 pointer-events-none`} />

                                {/* Badge */}
                                {plan.badge && (
                                    <div className="absolute -top-px left-0 right-0 flex justify-center">
                                        <div className="px-4 py-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold font-inter tracking-wider rounded-b-xl shadow-lg">
                                            {plan.badge}
                                        </div>
                                    </div>
                                )}

                                <div className={`relative z-10 flex flex-col flex-1 p-7 ${plan.badge ? 'pt-9' : ''}`}>

                                    {/* Icon + Name */}
                                    <div className={`inline-flex p-2.5 rounded-xl ${styles.iconBg} mb-4 w-fit`}>
                                        <Icon size={20} />
                                    </div>
                                    <div className="mb-1">
                                        <span className="text-xs font-mono text-muted uppercase tracking-widest">{plan.name}</span>
                                    </div>
                                    <h3 className="text-base font-bold font-inter text-highlight mb-4 leading-snug">
                                        {plan.tagline}
                                    </h3>

                                    {/* Price */}
                                    <div className="mb-5 pb-5 border-b border-white/8">
                                        <p className="text-xs text-muted font-mono mb-0.5">{plan.priceNote}</p>
                                        <p className={`text-3xl font-bold font-inter ${styles.priceFg}`}>
                                            {plan.price}
                                        </p>
                                        <p className="text-xs text-muted font-inter mt-1 flex items-center gap-1.5">
                                            <Zap size={11} className="text-accent-primary" />
                                            {plan.delivery}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-2.5 flex-1 mb-6">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-xs text-muted font-inter">
                                                <Check size={13} className={`mt-0.5 flex-shrink-0 ${isGrowth ? 'text-violet-400' : 'text-accent-primary'}`} />
                                                <span className={i === 0 && f.includes('Everything') ? 'text-highlight font-semibold' : ''}>{f}</span>
                                            </li>
                                        ))}
                                        {plan.notIncluded.map((f, i) => (
                                            <li key={`ni-${i}`} className="flex items-start gap-2.5 text-xs font-inter opacity-40">
                                                <X size={12} className="mt-0.5 flex-shrink-0 text-muted" />
                                                <span className="line-through text-muted">{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Ideal For */}
                                    <p className="text-[10px] font-mono text-muted opacity-60 mb-5 leading-relaxed">
                                        {plan.idealFor}
                                    </p>

                                    {/* CTA */}
                                    <a
                                        href="#contact"
                                        className={`group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-inter font-semibold text-sm transition-all duration-300 ${styles.btn}`}
                                    >
                                        {plan.key === 'enterprise' ? (
                                            <><Phone size={14} /> {t('pricing.ctaSecondary')}</>
                                        ) : (
                                            <>{t('pricing.ctaBtn')} <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></>
                                        )}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Add-ons Section ── */}
                <div className="addons-section">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold font-inter text-highlight mb-2">
                            {t('pricing.addonsTitle')}
                        </h3>
                        <p className="text-sm text-muted font-inter">
                            {t('pricing.addonsSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {addons.map((addon, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setHoveredAddon(i)}
                                onMouseLeave={() => setHoveredAddon(null)}
                                className={`addon-item glass rounded-2xl border p-4 text-center transition-all duration-300 cursor-default
                                    ${hoveredAddon === i
                                        ? 'border-accent-primary/40 -translate-y-1 shadow-lg shadow-accent-primary/10'
                                        : 'border-white/5'}
                                `}
                            >
                                <p className="text-xs font-inter text-muted mb-2 leading-snug">{addon.name}</p>
                                <p className="text-sm font-bold font-mono text-accent-primary">{addon.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
