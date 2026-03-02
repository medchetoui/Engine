import { useLanguage } from '../../context/LanguageContext';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const { t } = useLanguage();

    const navLinks = [
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.solutions'), href: '#solutions' },
        { label: t('nav.technologies'), href: '#technologies' },
        { label: t('nav.projects'), href: '#projects' },
        { label: t('nav.process'), href: '#process' },
    ];

    return (
        <footer className="bg-surface pt-20 pb-10 rounded-t-[3rem] border-t border-white/5 relative z-20">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-4">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="font-inter font-bold tracking-tight text-2xl text-highlight mb-4">
                            Mohammed Amine Chetoui
                        </div>
                        <p className="text-muted font-inter max-w-md">
                            Full-Stack Solution Architect & Digital Systems Engineer.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold font-inter text-highlight mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="text-muted hover:text-accent-primary transition-colors font-inter text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="font-bold font-inter text-highlight mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://www.linkedin.com/in/mohammedamine-chetoui-449864258/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-accent-primary transition-colors font-inter text-sm">
                                    <Linkedin size={18} />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="mailto:medchetoui44@gmail.com" className="flex items-center gap-3 text-muted hover:text-accent-primary transition-colors font-inter text-sm">
                                    <Mail size={18} />
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/212694763526" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-accent-primary transition-colors font-inter text-sm">
                                    <Phone size={18} />
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar: System Status */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 px-4">
                    <p className="text-muted text-sm font-inter">
                        &copy; {new Date().getFullYear()} Mohammed Amine Chetoui. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-mono text-muted bg-bg-color px-4 py-2 rounded-full border border-white/5 shadow-inner">
                        {t('footer.status')}
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)] ml-1" />
                    </div>
                </div>

            </div>
        </footer>
    );
}
