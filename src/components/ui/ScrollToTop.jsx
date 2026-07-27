import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        let scrollTimeout;
        const toggleVisibility = () => {
            if (scrollTimeout) return;
            scrollTimeout = setTimeout(() => {
                setIsVisible(window.scrollY > 400);
                scrollTimeout = null;
            }, 50);
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    useEffect(() => {
        const el = buttonRef.current;
        if (!el) return;

        if (isVisible) {
            gsap.fromTo(el,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', display: 'flex' }
            );
        } else {
            gsap.to(el, {
                opacity: 0, scale: 0.8, duration: 0.4, ease: 'power3.out', onComplete: () => {
                    gsap.set(el, { display: 'none' });
                }
            });
        }
    }, [isVisible]);

    const scrollToTop = () => {
        gsap.killTweensOf(window);
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: 0, autoKill: false },
            ease: 'power3.inOut',
            onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            ref={buttonRef}
            onClick={scrollToTop}
            className="fixed bottom-28 md:bottom-8 left-8 z-[100] w-14 h-14 md:w-12 md:h-12 hidden items-center justify-center rounded-full glass border-white/20 text-highlight transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(79,140,255,0.4)] hover:bg-surface/90"
            aria-label="Scroll to top"
            style={{ display: 'none' }}
        >
            <ArrowUp size={24} className="md:w-5 md:h-5" />
        </button>
    );
}
