import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Activity, Search, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const CyberSections = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const missions = [
        {
            icon: <Activity size={24} />,
            title: 'Monitoring SIEM',
            desc: 'Surveillance continue via Splunk et ELK. Analyse de logs pour détecter des patterns d\'attaque et anomalies.'
        },
        {
            icon: <Target size={24} />,
            title: 'Analyse d\'Incidents',
            desc: 'Triage des alertes de sécurité, levée de doute et qualification des incidents (L1/L2).'
        },
        {
            icon: <Search size={24} />,
            title: 'Threat Hunting',
            desc: 'Recherche proactive d\'indicateurs de compromission (IoC) au sein des infrastructures réseaux.'
        },
        {
            icon: <AlertCircle size={24} />,
            title: 'Gestion des Vulnérabilités',
            desc: 'Analyses de scans (Nessus) pour identifier et prioriser la remédiation des failles critiques.'
        },
        {
            icon: <Shield size={24} />,
            title: 'Hardening Systèmes',
            desc: 'Recommandations pour le durcissement des configurations serveurs et postes de travail.'
        },
        {
            icon: <Zap size={24} />,
            title: 'Réponse aux Incidents',
            desc: 'Application des procédures de confinement pour limiter l\'impact des menaces détectées.'
        }
    ];

    const getVisibleCards = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const nextSlide = () => {
        const visibleCards = getVisibleCards();
        if (activeIndex < missions.length - visibleCards) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const prevSlide = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const visibleCards = getVisibleCards();
            if (activeIndex > missions.length - visibleCards) {
                setActiveIndex(Math.max(0, missions.length - visibleCards));
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex, missions.length]);

    const methodology = [
        { nr: '01', title: 'Prévention', desc: 'Configuration de firewalls, gestion des droits et sensibilisation.' },
        { nr: '02', title: 'Détection', desc: 'Analyse de télémétrie et détection d\'anomalies comportementales.' },
        { nr: '03', title: 'Réaction', desc: 'Confinement immédiat et éradication de la menace.' },
        { nr: '04', title: 'Recovery', desc: 'Restauration des services et retour d\'expérience (Post-Mortem).' }
    ];

    const arsenal = [
        'Splunk', 'Wireshark', 'Nmap', 'Metasploit', 'Burp Suite',
        'Kali Linux', 'Sysinternals', 'Suricata', 'Snort', 'CrowdStrike',
        'Azure Sentinel', 'Nessus', 'Velociraptor'
    ];

    return (
        <div className="space-y-24 pb-24">

            {/* SOC Experience — bloc compact */}
            <section className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass bg-[#0d141e]/60 rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden group transition-all hover:border-primary/20 max-w-3xl mx-auto"
                >
                    {/* Left Accents */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40 group-hover:bg-primary transition-all"></div>
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-primary blur-md opacity-30 group-hover:opacity-60"></div>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px]"></div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-10 items-center">
                        {/* Logo Vinxira — taille réduite */}
                        <div className="w-full sm:w-24 md:w-28 lg:w-32 xl:w-36 aspect-square bg-[#0a0f18] rounded-2xl flex items-center justify-center border border-white/5 shadow-inner shrink-0">
                            <span className="text-xl md:text-2xl lg:text-3xl font-black text-primary select-none tracking-widest opacity-80">VIN<span className="text-primary/50">XIRA</span></span>
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                                <h2 className="text-lg md:text-xl lg:text-2xl font-black text-white">Analyste SOC</h2>
                                <span className="bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest border border-primary/20">
                                    EN POSTE
                                </span>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed">
                                Au cœur des opérations de sécurité chez <span className="text-white font-bold">Vinxira</span>, je participe activement à la surveillance des infrastructures, à l'analyse des incidents de sécurité et à l'amélioration continue des postures de défense.
                            </p>

                            <div className="bg-black/40 px-3 py-1.5 rounded-xl border border-white/5 font-mono text-sm inline-block">
                                <span className="text-primary">$</span> <span className="text-primary/70">current_status:</span> <span className="text-slate-300">active_defense_mode</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Carousel Missions */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container-custom relative"
            >
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="text-2xl md:text-3xl font-black mb-2">Missions <span className="text-primary italic">SOC</span></h2>
                    <p className="text-slate-400 text-sm">Responsabilités et actions quotidiennes en centre d'opérations.</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <button
                        onClick={prevSlide}
                        className={`absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-primary hover:text-dark border-primary/30 shadow-xl'}`}
                        disabled={activeIndex === 0}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className={`absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 ${activeIndex >= missions.length - getVisibleCards() ? 'opacity-0 pointer-events-none' : 'hover:bg-primary hover:text-dark border-primary/30 shadow-xl'}`}
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="overflow-hidden">
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, { offset }) => {
                                if (offset.x < -50) nextSlide();
                                if (offset.x > 50) prevSlide();
                            }}
                            className="flex gap-4 md:gap-6 cursor-grab active:cursor-grabbing"
                            animate={{
                                x: `calc(-${activeIndex * 100}% - ${activeIndex * (window.innerWidth < 768 ? 16 : 24)}px)`
                            }}
                            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                        >
                            {missions.map((m, idx) => (
                                <div
                                    key={idx}
                                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 select-none"
                                >
                                    <motion.div className="glass p-6 rounded-3xl h-full border border-white/5 hover:border-primary/20 transition-all bg-slate-800/20 group">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                            {m.icon}
                                        </div>
                                        <h3 className="text-base font-bold mb-3">{m.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Methodology */}
            <motion.section
                id="methodology"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container-custom"
            >
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2">Ma <span className="text-primary italic">Méthodologie</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {methodology.map((m, idx) => (
                        <div key={idx} className="relative p-6 md:p-8 glass rounded-3xl overflow-hidden group">
                            <span className="absolute -top-3 -right-1 text-5xl md:text-6xl font-black text-white/5">{m.nr}</span>
                            <h3 className="text-base md:text-lg font-bold mb-3 group-hover:text-primary transition-colors">{m.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Arsenal */}
            <motion.section
                id="arsenal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container-custom"
            >
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black">Mon <span className="text-primary italic">Arsenal</span></h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
                    {arsenal.map((tool, idx) => (
                        <span key={idx} className="px-4 py-2 md:px-6 md:py-3 rounded-xl bg-slate-900/30 border border-white/5 text-slate-300 font-bold text-xs md:text-sm hover:border-primary/30 hover:text-primary transition-all cursor-default hover:bg-primary/5 shadow-lg">
                            {tool}
                        </span>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default CyberSections;