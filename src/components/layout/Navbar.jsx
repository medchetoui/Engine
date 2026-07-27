import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();
    const { lang, toggleLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        let scrollTimeout;
        const handleScroll = () => {
            if (scrollTimeout) return;
            scrollTimeout = setTimeout(() => {
                setScrolled(window.scrollY > 20);
                scrollTimeout = null;
            }, 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e, target) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (target === 'body' || target === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetEl = document.querySelector(target);
        if (targetEl) {
            const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { key: 'about', label: t('nav.about'), href: '#about' },
        { key: 'solutions', label: t('nav.solutions'), href: '#solutions' },
        { key: 'projects', label: t('nav.projects'), href: '#projects' },
        { key: 'pricing', label: t('nav.pricing'), href: '#pricing' },
        { key: 'faq', label: t('nav.faq'), href: '#faq' },
        { key: 'process', label: t('nav.process'), href: '#process' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-power2InOut ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div
                    className={`flex items-center justify-between mx-auto rounded-full transition-all duration-300 ease-power2InOut
            ${scrolled ? 'glass px-6 py-3' : 'px-4 py-2 border border-transparent'}
          `}
                >
                    {/* Logo / Name */}
                    <a href="#" onClick={(e) => handleSmoothScroll(e, 'body')} className="flex items-center gap-2.5 group">
                        <img
                            src="images/logo.png"
                            alt="MA Logo"
                            className="w-9 h-9 rounded-xl object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="font-inter font-bold tracking-tight text-base text-highlight hidden sm:block">
                            Mohammed Amine
                        </span>
                    </a>

                    {/* Desktop Links (Center) */}
                    <div className="hidden lg:flex items-center gap-8 font-inter text-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                className="text-muted hover:text-highlight transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <button
                            onClick={() => toggleLanguage(lang === 'en' ? 'fr' : 'en')}
                            className="flex items-center gap-1.5 text-sm font-mono text-muted hover:text-highlight transition-colors p-1.5 rounded-lg hover:bg-surface"
                        >
                            <Globe size={16} />
                            <span>{lang.toUpperCase()}</span>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-muted hover:text-highlight hover:bg-surface transition-colors"
                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <a
                            href="#contact"
                            onClick={(e) => handleSmoothScroll(e, '#contact')}
                            className="hidden sm:inline-block px-5 py-2.5 rounded-full bg-accent-primary text-white text-sm font-inter hover:bg-accent-secondary hover:scale-105 transition-all duration-300 magnetic"
                        >
                            {t('nav.cta')}
                        </a>

                        {/* Mobile Hamburger Toggle Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-xl text-muted hover:text-highlight bg-surface/80 border border-white/10 transition-colors"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu Drawer */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-3 p-6 glass rounded-3xl border border-white/10 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col gap-3 font-inter text-base">
                            {navLinks.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="px-4 py-2.5 rounded-2xl text-muted hover:text-highlight hover:bg-white/5 transition-all"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="pt-3 border-t border-white/10 flex flex-col gap-3 sm:hidden">
                            <a
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, '#contact')}
                                className="w-full text-center px-5 py-3 rounded-2xl bg-accent-primary text-white text-sm font-inter font-semibold hover:bg-accent-secondary transition-all"
                            >
                                {t('nav.cta')}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
