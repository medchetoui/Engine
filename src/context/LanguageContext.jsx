import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            about: 'About',
            solutions: 'Solutions',
            technologies: 'Technologies',
            projects: 'Projects',
            process: 'Process',
            contact: 'Contact',
            cta: 'Work With Me',
        },
        hero: {
            line1: 'Engineering Digital Systems',
            line2: 'for Business Growth',
            subtext: 'I design and build scalable web, mobile, and backend systems that automate operations and accelerate business performance.',
            startProject: 'Start a Project',
            viewWork: 'View My Work',
        },
        about: {
            title: 'The Architect Behind the Systems',
            description: 'I am a specialized digital infrastructure builder. I craft precision-engineered software solutions for modern businesses looking to scale, automate, and dominate their vertical.',
            stats: {
                saas: 'SaaS Platforms Built',
                automation: 'Automation Systems Designed',
                backend: 'Backend Architectures Delivered',
                tech: 'Technologies Mastered',
            }
        },
        technologies: {
            title: 'Core Technologies & Architecture',
            frontend: 'React • Tailwind • Advanced UI Systems',
            mobile: 'React Native',
            backend: 'Node.js • Laravel • Symfony',
            infrastructure: 'REST APIs • Authentication Systems • Database Architecture • Automation Pipelines',
        },
        solutions: {
            title: 'What I Build',
            items: [
                { title: 'Web Platforms', desc: 'Custom SaaS, dashboards, admin systems built with React + backend APIs.' },
                { title: 'Mobile Applications', desc: 'Operational mobile tools built with React Native.' },
                { title: 'Backend & API Systems', desc: 'Robust backend infrastructures using Node.js, Laravel, Symfony.' },
                { title: 'Automation & Optimization', desc: 'Lead systems, scraping infrastructure, workflow automation.' }
            ]
        },
        projects: {
            title: 'Featured Infrastructure',
            autofretDesc: 'Digital logistics infrastructure system.',
            leadflowDesc: 'Growth acceleration engine.',
            neocoderDesc: 'Learning acceleration platform.',
            dataAcqDesc: 'Market intelligence engine using structured scraping & automation.'
        },
        process: {
            step1: 'Analyze',
            step1Desc: 'Deconstruct vertical requirements. Analyze bottlenecks.',
            step2: 'Architect',
            step2Desc: 'Design scalable infrastructure. Define the system blueprint.',
            step3: 'Execute',
            step3Desc: 'Build the command center. Deliver performance.',
        },
        cta: {
            headline: 'Your business deserves engineered digital infrastructure.',
            button: 'Let’s Build It',
        },
        footer: {
            status: 'System Status: Operational',
        }
    },
    fr: {
        nav: {
            about: 'À Propos',
            solutions: 'Solutions',
            technologies: 'Technologies',
            projects: 'Projets',
            process: 'Processus',
            contact: 'Contact',
            cta: 'Travailler Avec Moi',
        },
        hero: {
            line1: 'Ingénierie de Systèmes Digitaux',
            line2: 'pour la Croissance',
            subtext: 'Je conçois et développe des systèmes web, mobiles et backend évolutifs qui automatisent les opérations et accélèrent la performance des entreprises.',
            startProject: 'Démarrer un Projet',
            viewWork: 'Voir Mon Travail',
        },
        about: {
            title: 'L\'Architecte Derrière les Systèmes',
            description: 'Je suis un constructeur d\'infrastructure digitale spécialisé. Je crée des solutions logicielles de haute précision pour les entreprises modernes cherchant à scaler et automatiser.',
            stats: {
                saas: 'Plateformes SaaS',
                automation: 'Systèmes d\'Automatisation',
                backend: 'Architectures Backend',
                tech: 'Technologies Maîtrisées',
            }
        },
        technologies: {
            title: 'Technologies et Architecture',
            frontend: 'React • Tailwind • Systèmes UI Avancés',
            mobile: 'React Native',
            backend: 'Node.js • Laravel • Symfony',
            infrastructure: 'APIs REST • Systèmes d\'Authentification • Architecture de Base de Données • Pipelines d\'Automatisation',
        },
        solutions: {
            title: 'Ce Que Je Construis',
            items: [
                { title: 'Plateformes Web', desc: 'SaaS sur mesure, tableaux de bord, systèmes admin avec React + APIs.' },
                { title: 'Applications Mobiles', desc: 'Outils opérationnels mobiles développés avec React Native.' },
                { title: 'Systèmes Backend & API', desc: 'Infrastructures backend robustes via Node.js, Laravel, Symfony.' },
                { title: 'Automatisation & Optimisation', desc: 'Systèmes de leads, infrastructure de scraping, automatisation des workflows.' }
            ]
        },
        projects: {
            title: 'Infrastructures Clés',
            autofretDesc: 'Système d\'infrastructure logistique digitale.',
            leadflowDesc: 'Moteur d\'accélération de croissance.',
            neocoderDesc: 'Plateforme d\'accélération de l\'apprentissage.',
            dataAcqDesc: 'Moteur d\'intelligence économique utilisant le scraping et l\'automatisation.'
        },
        process: {
            step1: 'Analyser',
            step1Desc: 'Déconstruire les exigences verticales. Analyser les goulots d\'étranglement.',
            step2: 'Architecturer',
            step2Desc: 'Concevoir une infrastructure évolutive. Définir le plan du système.',
            step3: 'Exécuter',
            step3Desc: 'Construire le centre de commandement. Livrer la performance.',
        },
        cta: {
            headline: 'Votre entreprise mérite une infrastructure digitale conçue avec précision.',
            button: 'Construisons-la',
        },
        footer: {
            status: 'Statut du Système : Opérationnel',
        }
    }
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    // Opacity state for smooth transition
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        localStorage.setItem('language', lang);
    }, [lang]);

    const toggleLanguage = (newLang) => {
        if (newLang === lang) return;

        setIsTransitioning(true);
        // Wait for fade out, then change lang, then fade back in
        setTimeout(() => {
            setLang(newLang);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 300);
    };

    const t = (keyPath) => {
        const keys = keyPath.split('.');
        let value = translations[lang];
        for (const key of keys) {
            if (value === undefined) return keyPath;
            value = value[key];
        }
        return value || keyPath;
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t, isTransitioning }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
