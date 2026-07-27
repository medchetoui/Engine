import { useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Check, ArrowRight, Globe, Smartphone, Bot } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Pricing() {
    const { t } = useLanguage();
    const container = useRef(null);
    const [hoveredPlan, setHoveredPlan] = useState(null);

    useGSAP(() => {
        gsap.fromTo('.pricing-title',
            { y: 40, opacity: 0, filter: 'blur(8px)' },
            {
                y: 0, opacity: 1, filter: 'blur(0px)', duration: 1,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.pricing-title', start: 'top 90%', once: true }
            }
        );
        gsap.fromTo('.pricing-card',
            { y: 60, opacity: 0, filter: 'blur(6px)' },
            {
                y: 0, opacity: 1, filter: 'blur(0px)',
                duration: 0.9, stagger: 0.15, ease: 'power3.out',
                scrollTrigger: { trigger: '.pricing-grid', start: 'top 85%', once: true }
            }
        );
    }, { scope: container });

    const plans = [
        {
            key: 'starter',
            icon: Globe,
            title: t('pricing.starterTitle'),
            desc: t('pricing.starterDesc'),
            price: t('pricing.starterPrice'),
            features: t('pricing.starterFeatures'),
            accent: 'from-blue-500/20 to-cyan-500/20',
            iconColor: 'text-cyan-400',
            borderHover: 'hover:border-cyan-500/50',
            badge: null,
        },
        {
            key: 'business',
            icon: Smartphone,
            title: t('pricing.businessTitle'),
            desc: t('pricing.businessDesc'),
            price: t('pricing.businessPrice'),
            features: t('pricing.businessFeatures'),
            accent: 'from-violet-500/25 to-fuchsia-500/25',
            iconColor: 'text-violet-400',
            borderHover: 'hover:border-violet-500/60',
            badge: t('pricing.recommended'),
        },
        {
            key: 'enterprise',
            icon: Bot,
            title: t('pricing.enterpriseTitle'),
            desc: t('pricing.enterpriseDesc'),
            price: t('pricing.enterprisePrice'),
            features: t('pricing.enterpriseFeatures'),
            accent: 'from-emerald-500/20 to-teal-500/20',
            iconColor: 'text-emerald-400',
            borderHover: 'hover:border-emerald-500/50',
            badge: null,
        },
    ];

    return (
        <section id="pricing" ref={container} className="py-32 relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-primary/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="pricing-title text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface bg-surface/50 backdrop-blur-sm text-xs font-mono text-accent-primary mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                        PACKAGES & PRICING
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-inter text-highlight mb-5 leading-tight">
                        {t('pricing.title')}
                    </h2>
                    <p className="text-lg text-muted font-inter max-w-2xl mx-auto">
                        {t('pricing.subtitle')}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {plans.map((plan) => {
                        const Icon = plan.icon;
                        const isRecommended = !!plan.badge;
                        return (
                            <div
                                key={plan.key}
                                className={`pricing-card relative glass rounded-[2rem] p-8 border transition-all duration-500 cursor-default flex flex-col
                                    ${isRecommended
                                        ? 'border-violet-500/50 scale-[1.02] md:scale-[1.04]'
                                        : 'border-white/5 ' + plan.borderHover}
                                `}
                                onMouseEnter={() => setHoveredPlan(plan.key)}
                                onMouseLeave={() => setHoveredPlan(null)}
                            >
                                {/* Card background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.accent} opacity-0 transition-opacity duration-500 rounded-[2rem] ${hoveredPlan === plan.key ? 'opacity-100' : ''} ${isRecommended ? '!opacity-60' : ''}`} />

                                {/* Recommended badge */}
                                {isRecommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                        <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold font-inter tracking-wider shadow-lg shadow-violet-500/40 uppercase">
                                            ⭐ {plan.badge}
                                        </div>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="relative z-10 flex flex-col flex-1">
                                    {/* Icon + Title */}
                                    <div className="mb-6">
                                        <div className={`inline-flex p-3 rounded-2xl bg-surface/80 ${plan.iconColor} mb-4`}>
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold font-inter text-highlight mb-2">
                                            {plan.title}
                                        </h3>
                                        <p className="text-sm text-muted leading-relaxed">
                                            {plan.desc}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8 pb-8 border-b border-white/5">
                                        <span className={`text-3xl font-bold font-inter ${isRecommended ? 'text-violet-300' : 'text-highlight'}`}>
                                            {plan.price}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 flex-1 mb-8">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-muted font-inter">
                                                <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.iconColor}`} />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <a
                                        href="#contact"
                                        className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-inter font-semibold text-sm transition-all duration-300 
                                            ${isRecommended
                                                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105'
                                                : 'bg-surface border border-white/10 text-highlight hover:bg-white/5 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        {t('pricing.ctaBtn')}
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
