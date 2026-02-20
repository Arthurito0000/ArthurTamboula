import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, Play, Shield, Rocket, Activity } from 'lucide-react';

const Hero = ({ activeSide }) => {
    const isDev = activeSide === 'dev';

    return (
        <section className=" pt-20 lg:pt-24 xl:pt-28 relative flex items-center pb-10 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -z-10"></div>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
                    <div className="flex-[1.3] text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className=" mt-6 lg:mt-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black tracking-wider mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                {isDev ? 'DEVELOPPEUR FULLSTACK JUNIOR' : 'ANALYSTE SOC (L1/L2)'}
                                {isDev ? '' : ' - EN POSTE CHEZ VINXIRA'}
                            </div>

                            {/* Titre plafonné à xl:text-4xl — pas plus grand */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-black mb-4 leading-[1.05]">
                                C'est <span className="text-primary italic">Arthur</span> <br />
                                <span className="text-white">Tamboula</span>
                            </h1>

                            <p className="text-sm md:text-lg lg:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-extralight italic">
                                {isDev
                                    ? "L'art de transformer la complexité en expériences exceptionnelles. Je conçois des solutions numériques élégantes avec une attention méticuleuse portée aux détails et à la performance."
                                    : "Gardien des infrastructures numériques. Je surveille, analyse et neutralise les menaces pour garantir la résilience de vos systèmes d'information."}
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 xl:gap-6">
                                <a
                                    href={isDev ? "#expertise" : "#methodology"}
                                    className="bg-primary hover:bg-primary/90 text-dark px-4 py-2 md:px-6 md:py-3 rounded-xl font-black flex items-center gap-2 md:gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30 text-base md:text-md"
                                >
                                    {isDev ? 'Voir mes projets' : 'Ma Méthodologie'}
                                    <ChevronRight size={18} />
                                </a>
                                <a
                                    href="#contact"
                                    className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-xl font-black flex items-center gap-2 transition-all text-base md:text-md backdrop-blur-sm"
                                >
                                    Contactez-moi
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image — plafonnée à max-w-xs sur lg, max-w-sm sur xl+ */}
                    <div className="flex-1 w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl ml-auto px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            className="relative"
                        >
                            <div className="relative z-10 w-full aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass p-4 bg-slate-800/20">
                                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-800/40 flex items-center justify-center">
                                    {isDev ? (
                                        <div className="relative w-full h-full">
                                            <img
                                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
                                                alt="Software Development illustration"
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-60"></div>
                                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                                <div className="w-full h-full border-2 border-primary/20 rounded-xl relative overflow-hidden backdrop-blur-[2px]">
                                                    <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/10 flex items-center gap-1.5 px-3">
                                                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                                    </div>
                                                    <div className="p-4 pt-10 font-mono text-xs text-primary/70">
                                                        <div className="flex gap-2"><span className="text-secondary">const</span> <span className="text-white">Arthur</span> = <span className="text-primary">{'{'}</span></div>
                                                        <div className="pl-4">role: <span className="text-yellow-500">'Fullstack_Dev'</span>,</div>
                                                        <div className="pl-4">skills: [<span className="text-yellow-500">'React'</span>, <span className="text-yellow-500">'Node'</span>],</div>
                                                        <div className="pl-4 text-slate-500">// Creating amazing web apps...</div>
                                                        <div className="text-primary">{'}'}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative w-full h-full overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
                                                alt="SOC Monitoring Dashboard"
                                                className="w-full h-full object-cover opacity-80"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-60"></div>
                                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>

                                            <div className="absolute inset-0 flex flex-col justify-between p-6 overflow-hidden">
                                                <div className="flex justify-between items-start">
                                                    <div className="p-2 glass rounded-lg border border-primary/20 animate-pulse">
                                                        <div className="text-[8px] text-primary font-black uppercase tracking-tighter">Threat Level</div>
                                                        <div className="text-primary text-xs font-black">CRITICAL</div>
                                                    </div>
                                                    <div className="p-2 glass rounded-lg border border-white/10">
                                                        <Activity size={16} className="text-secondary animate-pulse" />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            animate={{ x: ['-100%', '100%'] }}
                                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                            className="h-full w-1/3 bg-primary/40 blur-sm"
                                                        />
                                                    </div>
                                                    <div className="flex justify-between text-[8px] font-mono text-slate-400">
                                                        <span>SCANNING...</span>
                                                        <span>87% SECURE</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                                                <Shield size={60} className="text-primary relative z-10 opacity-60" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Stats Overlay Cards */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -right-6 top-1/4 glass p-3 rounded-2xl border border-white/10 shadow-xl z-20 bg-slate-800/60"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                        <Play size={16} />
                                    </div>
                                    <div>
                                        <div className="text-lg font-black">{isDev ? '10+' : '12+'}</div>
                                        <div className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">{isDev ? 'Projets Finis' : 'Outils'}</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="absolute -left-6 bottom-1/4 glass p-3 rounded-2xl border border-white/10 shadow-xl z-20 bg-slate-800/60"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                                        <Rocket size={16} />
                                    </div>
                                    <div>
                                        <div className="text-lg font-black">{isDev ? '2+' : 'L1/L2'}</div>
                                        <div className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">{isDev ? 'Ans XP' : 'Expertise'}</div>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;