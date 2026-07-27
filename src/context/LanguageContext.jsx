import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            about: 'About',
            solutions: 'Solutions',
            technologies: 'Technologies',
            projects: 'Projects',
            pricing: 'Pricing',
            process: 'Process',
            faq: 'FAQ',
            contact: 'Contact',
            cta: 'Work With Me',
        },
        hero: {
            line1: 'Engineering Digital Systems',
            line2: 'for Business Growth',
            subtext: 'I design and build scalable web, mobile, and backend systems that automate operations, turn traffic into clients, and accelerate business performance.',
            startProject: 'Get a Free Proposal',
            viewWork: 'View My Work',
            guarantee: '24h Response · Free Proposal · No Commitment'
        },
        pricing: {
            title: 'Clear Packages & Solutions',
            subtitle: 'Structured packages tailored to your exact tech requirements. Transparent ROI-driven pricing.',
            recommended: 'Most Requested',
            starterTitle: 'Showcase & High-Converting Web',
            starterDesc: 'Fast, modern web platform designed for maximum brand presence and lead generation.',
            starterPrice: 'From $499',
            starterFeatures: [
                'Custom React Showcase / High-converting Landing Page',
                'Responsive UI (Mobile, Tablet & Desktop)',
                'SEO optimization & ultra-fast loading speed',
                'Contact Form & Instant WhatsApp lead routing',
                'Turnaround in 7–10 days'
            ],
            businessTitle: 'Full-Stack SaaS & Mobile App',
            businessDesc: 'Complete digital product with web dashboard, React Native mobile app, and backend APIs.',
            businessPrice: 'From $999',
            businessFeatures: [
                'Full-stack Web App or Cross-platform Mobile App (React Native)',
                'Backend Architecture & Database (Node.js / Symfony / Django / MySQL)',
                'User Authentication, Role-based Permissions & Admin Panel',
                'Subscription & Payment Gateway Integration (Stripe/PayPal)',
                'REST API development & workflow automation'
            ],
            enterpriseTitle: 'AI Integration & Custom API Systems',
            enterpriseDesc: 'Bespoke AI pipelines, LLM integration, scraping engines, and specialized microservices.',
            enterprisePrice: 'From $1,499',
            enterpriseFeatures: [
                'Custom AI Assistant & LLM API Integration (Gemini, OpenAI)',
                'Automated Data Scraping & Extraction Engines (Selenium/BeautifulSoup)',
                'Bulk Communication Pipelines (Email / WhatsApp Automation)',
                'Custom Backend Microservices & API Architecture',
                'Priority Technical Support, Maintenance & Scaling SLA'
            ],
            ctaBtn: 'Request Free Quote'
        },
        faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Everything you need to know before launching your digital system.',
            items: [
                {
                    q: 'How fast can my project be delivered?',
                    a: 'Standard platforms are typically delivered within 7 to 14 days. You receive initial wireframes and interactive prototypes within 48 hours for review.'
                },
                {
                    q: 'Will my website be fast, mobile-friendly, and SEO-optimized?',
                    a: 'Yes, 100%. Every system is engineered with mobile-first responsive design, optimized image delivery, clean semantic code, and built-in SEO best practices.'
                },
                {
                    q: 'Can custom AI assistants, scraping engines, or APIs be integrated?',
                    a: 'Absolutely. I specialize in building custom backend microservices, AI LLM integrations, and automated lead processing pipelines tailored to your operational workflows.'
                },
                {
                    q: 'How do we start working together?',
                    a: 'Simply request a free proposal or reach out via WhatsApp/Email. We will analyze your goals, outline the solution blueprint, and deliver a transparent proposal within 24 hours.'
                }
            ]
        },
        about: {
            title: 'The Architect Behind the Systems',
            description: 'I am a specialized digital infrastructure builder. I craft precision-engineered software solutions for modern businesses looking to scale, automate, and dominate their vertical.',
            seminarBadge: 'Technical Speaking',
            seminarTitle: 'Live Keynote & Seminar',
            seminarDesc: 'Delivering technical presentations on system architecture, AI automation pipelines, and engineering best practices.',
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
            moreTitle: 'More Projects',
            autofretDesc: 'Production-ready logistics platform connecting shippers with transport fleets across Morocco.',
            autofretDetails: {
                summary: 'Complete digital logistics platform connecting shippers with transport companies across Morocco with real-time tracking, fleet management, and automated workflow operations.',
                features: [
                    'Client & Transporter Dashboards with real-time shipment tracking',
                    'Fleet & Route Management with automated invoice generation',
                    'Multi-role RBAC authentication & subscription management',
                    'Responsive mobile UI built with React Native'
                ],
                architecture: 'Built with React, React Native, Symfony API backend, MySQL, Docker containerization & Nginx proxying.'
            },
            abyssDesc: 'High-performance e-commerce platform & streetwear brand architecture.',
            abyssDetails: {
                summary: 'Modern e-commerce platform featuring custom catalog architecture, seamless checkout, cart state persistence, and responsive UI design.',
                features: [
                    'Custom product catalog & interactive inventory management',
                    'Fast checkout flow with multi-currency & locale support',
                    'Optimized image delivery & micro-animations'
                ],
                architecture: 'Engineered with React frontend, Django REST backend, and PostgreSQL database.'
            },
            studybridgeDesc: 'Educational SaaS platform empowering engineering students.',
            studybridgeDetails: {
                summary: 'A comprehensive platform designed for engineering students to collaborate, access academic resources, calculate grades, and find freelance opportunities.',
                features: [
                    'Student Dashboard with automated Grade Calculator',
                    'Course & Academic Resource sharing hub',
                    'AI-powered learning assistant for instant problem solving',
                    'Freelance marketplace connecting talent with projects'
                ],
                architecture: 'Built with React, Symfony API, MySQL, and integrated AI LLM services.'
            },
            leadflowDesc: 'AI-driven cold email marketing & workflow automation SaaS.',
            leadflowDetails: {
                summary: 'A SaaS platform that automates cold email campaigns using AI-powered lead qualification and multi-account campaign scheduling workflows.',
                features: [
                    'Campaign Creation & AI-driven email sequence generator',
                    'Automated Lead Management & Contact import parsing',
                    'Multi-account SMTP management & Campaign analytics dashboard'
                ],
                architecture: 'Architected with Python, Streamlit UI, FastAPI microservices, MongoDB, and Selenium automation.'
            },
            emailAutoDesc: 'High-volume automated bulk email sending & monitoring system.',
            emailAutoDetails: {
                summary: 'An automation engine for executing bulk email campaigns with multi-account support, SMTP rotation, and live delivery tracking.',
                features: [
                    'Bulk email sending with dynamic SMTP rotation & account warm-up',
                    'Real-time campaign monitoring & bounce tracking',
                    'HTML template editor & contact list segmentation'
                ],
                architecture: 'Powered by Python, Selenium headless automation, and MongoDB data storage.'
            },
            neocoderDesc: 'Developer AI Assistant for code generation and automated debugging.',
            neocoderDetails: {
                summary: 'An intelligent coding assistant designed to help software engineers generate code, analyze bugs, and auto-document codebases.',
                features: [
                    'Context-aware Code Generation & Refactoring',
                    'Automated Bug Detection & Fix recommendations',
                    'Interactive AI Chat sandbox & documentation generator'
                ],
                architecture: 'Engineered with custom LLM prompt pipelines, React interface, and AST parser integration.'
            },
            mapminerDesc: 'Lead generation platform scraping business data from Google Maps.',
            mapminerDetails: {
                summary: 'A specialized scraping engine designed for lead generation by extracting structured business data, contact info, and ratings directly from Google Maps without API constraints.',
                features: [
                    'Targeted Google Maps scraping with Selenium & BeautifulSoup HTML parsing',
                    'Automatic contact info extraction, Requests handling & lead filtering',
                    'One-click CSV/JSON export for sales CRM ingestion'
                ],
                architecture: 'Engineered with Python, Selenium headless automation, BeautifulSoup4 DOM parsing, and HTTP Requests.'
            },
            clickForDetails: 'Click to view details',
            closeDetails: 'Close Details'
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
            pricing: 'Tarifs',
            process: 'Processus',
            faq: 'FAQ',
            contact: 'Contact',
            cta: 'Travailler Avec Moi',
        },
        hero: {
            line1: 'Ingénierie de Systèmes Digitaux',
            line2: 'pour la Croissance',
            subtext: 'Je conçois et développe des systèmes web, mobiles et backend évolutifs qui automatisent les opérations, transforment le trafic en clients et accélèrent la performance.',
            startProject: 'Obtenir un Devis Gratuit',
            viewWork: 'Voir Mon Travail',
            guarantee: 'Réponse en 24h · Devis Gratuit · Sans Engagement'
        },
        pricing: {
            title: 'Offres Claires & Tarification',
            subtitle: 'Des formules claires selon le type de projet : Site Vitrine, SaaS / Mobile ou Intégration IA & APIs.',
            recommended: 'Le Plus Demandé',
            starterTitle: 'Site Vitrine & Landing Page High-Performance',
            starterDesc: 'Une présence digitale moderne, ultra-rapide et conçue pour convertir vos visiteurs.',
            starterPrice: 'À partir de 499€',
            starterFeatures: [
                'Landing Page ou Site Vitrine React sur mesure',
                'Design 100% Responsive (Mobile, Tablette & Desktop)',
                'Optimisation SEO & vitesse de chargement maximale',
                'Formulaire de contact & Intégration WhatsApp rapide',
                'Livraison en 7 à 10 jours'
            ],
            businessTitle: 'Plateforme SaaS Full-Stack & App Mobile',
            businessDesc: 'Produit digital complet avec Dashboard Web, Application Mobile React Native et APIs Backend.',
            businessPrice: 'À partir de 999€',
            businessFeatures: [
                'Application Web Full-stack ou App Mobile Multi-plateforme (React Native)',
                'Architecture Backend & Base de données (Node.js / Symfony / Django / MySQL)',
                'Gestion des Utilisateurs, Rôles & Panneau d\'Administration Admin',
                'Intégration Paiement & Abonnements (Stripe / PayPal)',
                'Développement d\'APIs REST & Workflows automatisés'
            ],
            enterpriseTitle: 'Intégration IA & Systèmes d\'APIs Sur Mesure',
            enterpriseDesc: 'Pipelines d\'IA avancés, intégration LLM, moteurs de scraping et microservices dédiés.',
            enterprisePrice: 'À partir de 1 499€',
            enterpriseFeatures: [
                'Assistant IA Personnalisé & Intégration APIs LLM (Gemini, OpenAI)',
                'Moteurs d\'Extraction & Scraping de Données Automatisés (Selenium/BeautifulSoup)',
                'Pipelines de Communication en Masse (Automatisation Email / WhatsApp)',
                'Microservices Backend & Architecture d\'APIs Sur Mesure',
                'Support Technique Prioritaire, Maintenance & Garantie de Scaling'
            ],
            ctaBtn: 'Demander un Devis Gratuit'
        },
        faq: {
            title: 'Questions Fréquentes',
            subtitle: 'Tout ce qu\'il faut savoir avant de lancer votre système digital.',
            items: [
                {
                    q: 'En combien de temps mon projet peut-il être livré ?',
                    a: 'Les plateformes standards sont généralement livrées en 7 à 14 jours. Vous recevez des maquettes interactives sous 48 heures pour validation.'
                },
                {
                    q: 'Mon site sera-t-il rapide, mobile et optimisé SEO ?',
                    a: 'Oui, 100%. Chaque système est conçu en mobile-first, avec optimisation des images, code sémantique propre et bonnes pratiques SEO intégrées.'
                },
                {
                    q: 'Peut-on intégrer des assistants IA, moteurs de scraping ou APIs personnalisés ?',
                    a: 'Absolument. Je suis spécialisé dans la création de microservices backend, l\'intégration LLM et les pipelines automatisés de traitement de leads.'
                },
                {
                    q: 'Comment démarrons-nous ensemble ?',
                    a: 'Envoyez simplement une demande de devis ou contactez-moi via WhatsApp/Email. J\'analyserai vos objectifs et vous fournirai une proposition transparente sous 24 heures.'
                }
            ]
        },
        about: {
            title: 'L\'Architecte Derrière les Systèmes',
            description: 'Je suis un constructeur d\'infrastructure digitale spécialisé. Je crée des solutions logicielles de haute précision pour les entreprises modernes cherchant à scaler et automatiser.',
            seminarBadge: 'Conférence Technique',
            seminarTitle: 'Séminaire & Présentation',
            seminarDesc: 'Présentation de sujets avancés sur l\'architecture système, l\'automatisation par IA et l\'ingénierie logicielle.',
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
            moreTitle: 'Autres Projets',
            autofretDesc: 'Plateforme logistique prête pour la production reliant expéditeurs et transporteurs au Maroc.',
            autofretDetails: {
                summary: 'Plateforme de gestion logistique complète connectant expéditeurs et entreprises de transport à travers le Maroc avec suivi en temps réel et gestion de flotte.',
                features: [
                    'Tableaux de bord Client & Transporteur avec suivi des expéditions',
                    'Gestion de flotte, itinéraires et génération automatique de factures',
                    'Authentification multi-rôles RBAC et gestion des abonnements',
                    'Interface mobile réactive conçue avec React Native'
                ],
                architecture: 'Développé avec React, React Native, API backend Symfony, MySQL, Docker & proxy Nginx.'
            },
            abyssDesc: 'Plateforme e-commerce haute performance et architecture de marque streetwear.',
            abyssDetails: {
                summary: 'Plateforme e-commerce moderne offrant un catalogue personnalisé, un processus de paiement fluide, la gestion du panier et un design réactif.',
                features: [
                    'Catalogue de produits sur mesure et gestion d\'inventaire interactive',
                    'Processus de commande rapide multi-devises',
                    'Optimisation d\'affichage d\'images et micro-animations'
                ],
                architecture: 'Conçu avec un frontend React, backend Django REST et base de données PostgreSQL.'
            },
            studybridgeDesc: 'Plateforme SaaS éducative dédiée aux étudiants ingénieurs.',
            studybridgeDetails: {
                summary: 'Une plateforme complète permettant aux étudiants ingénieurs de collaborer, d\'accéder à des ressources, de calculer leurs notes et de trouver des opportunités freelance.',
                features: [
                    'Tableau de bord étudiant avec calculateur de notes automatique',
                    'Espace de partage de cours et ressources académiques',
                    'Assistant virtuel propulsé par l\'IA pour la résolution de problèmes',
                    'Plateforme freelance connectant les talents aux opportunités'
                ],
                architecture: 'Développé avec React, API Symfony, MySQL et intégration d\'assistants IA.'
            },
            leadflowDesc: 'SaaS d\'automatisation du marketing par e-mail froid propulsé par l\'IA.',
            leadflowDetails: {
                summary: 'Plateforme SaaS automatisant les campagnes d\'e-mailing froid avec qualification de leads par IA et workflows de programmation multi-comptes.',
                features: [
                    'Création de campagnes et générateur de séquences e-mail par IA',
                    'Gestion automatisée des leads et import de contacts',
                    'Gestion SMTP multi-comptes et tableau de bord analytique'
                ],
                architecture: 'Architecturé avec Python, Streamlit, microservices FastAPI, MongoDB et Selenium.'
            },
            emailAutoDesc: 'Système d\'envoi d\'e-mails en masse et de suivi automatisé.',
            emailAutoDetails: {
                summary: 'Moteur d\'automatisation pour l\'exécution de campagnes e-mailing massives avec rotation de serveurs SMTP et suivi en temps réel.',
                features: [
                    'Envoi d\'e-mails en masse avec rotation dynamique de serveurs SMTP',
                    'Suivi de campagne en temps réel et détection des rebonds',
                    'Éditeur de modèles HTML et segmentation de listes de contacts'
                ],
                architecture: 'Propulsé par Python, automatisation Selenium et stockage MongoDB.'
            },
            neocoderDesc: 'Assistant IA pour développeurs dédié à la génération de code et au débogage.',
            neocoderDetails: {
                summary: 'Assistant de codage intelligent aidant les développeurs à générer du code, détecter les bugs et documenter leurs applications.',
                features: [
                    'Génération et refactorisation de code adaptées au contexte',
                    'Détection automatique de bugs et recommandations de correctifs',
                    'Bac à sable de discussion IA et générateur de documentation'
                ],
                architecture: 'Conçu avec des pipelines de prompts LLM, une interface React et un analyseur AST.'
            },
            mapminerDesc: 'Plateforme de génération de leads et de scraping de données Google Maps.',
            mapminerDetails: {
                summary: 'Moteur de scraping spécialisé dans la génération de leads en extrait les données d\'entreprises structurées et leurs contacts depuis Google Maps sans contraintes d\'API.',
                features: [
                    'Scraping ciblé sur Google Maps avec Selenium & parsing HTML BeautifulSoup',
                    'Extraction automatique des coordonnées, gestion par Requests & filtres',
                    'Exportation en un clic vers CSV/JSON pour intégration CRM'
                ],
                architecture: 'Conçu avec Python, automatisation Selenium headless, parsing DOM BeautifulSoup4 et requêtes HTTP Requests.'
            },
            clickForDetails: 'Cliquer pour voir les détails',
            closeDetails: 'Fermer les détails'
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
