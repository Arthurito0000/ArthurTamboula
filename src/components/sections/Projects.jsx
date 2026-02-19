import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ChevronRight, LayoutGrid, Calendar, X } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('realises');
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            id: 1,
            name: 'EyesON',
            category: 'realises',
            description: 'Application de monitoring et capture d\'écran avancée.',
            tech: ['Flutter', 'Laravel 11', 'MySQL'],
            images: [
                '/src/assets/images/EyesON Dashboard.png',
                '/src/assets/images/EyesON APP Settings – 1.png',
                '/src/assets/images/EyesON – Screen Recorder.png'
            ],
            link: null
        },
        {
            id: 2,
            name: 'Manageo',
            category: 'realises',
            description: 'Système complet de gestion de projets clients et facturation.',
            tech: ['Laravel 11', 'MySQL'],
            images: [
                '/src/assets/images/manageo - dashboard.png',
                '/src/assets/images/Manageo -Gestion des  Projets clients.png',
                '/src/assets/images/Manageo -  Formulaire Gestion Projets client.png',
                '/src/assets/images/manageo -SUIVI DE projets .png',
                '/src/assets/images/manageo -Login.png',
                '/src/assets/images/manageo -Gestion desFournisseurs.png'
            ],
            link: null
        },
        {
            id: 3,
            name: 'Stock Manager',
            category: 'realises',
            description: 'Gestion de stock et inventaire en temps réel pour entreprises.',
            tech: ['Laravel 11', 'MySQL'],
            images: [
                '/src/assets/images/stock manager1.png',
                '/src/assets/images/stock manager2.png',
                '/src/assets/images/stock manager 3.png',
                '/src/assets/images/stock manger 4.png'
            ],
            link: null
        },
        {
            id: 4,
            name: 'Ekosere RX',
            category: 'realises',
            description: 'Solutions écologiques et durables pour l\'habitat moderne.',
            tech: ['React', 'Express', 'React Native'],
            images: [
                '/src/assets/images/ekose.horizonservicessl.net_.png',
                '/src/assets/images/ekose.horizonservicessl.net_ (1).png',
                '/src/assets/images/ekose.horizonservicessl.net_ (2).png'
            ],
            link: 'https://ekose.horizonservicessl.net/'
        },
        {
            id: 5,
            name: 'Yamo',
            category: 'encours',
            description: 'Plateforme de commande et gestion de produits alimentaires.',
            tech: ['React Native', 'Express'],
            images: [
                '/src/assets/images/yamo-Liste produit.png',
                '/src/assets/images/yamo commande.png',
                '/src/assets/images/yamo-details commande.png',
                '/src/assets/images/yamo-listes demandes.png'
            ],
            link: null
        }
    ];

    const filteredProjects = projects.filter(p => p.category === filter);

    return (
        <section id="expertise" className="section-padding">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2">Derniers <span className="text-gradient">Projets</span></h2>
                        <p className="text-slate-400 text-sm">Exploration de solutions innovantes et performantes.</p>
                    </div>

                    <div className="flex bg-slate-800/40 p-1 rounded-xl border border-white/5 w-fit">
                        <button
                            onClick={() => setFilter('realises')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'realises' ? 'bg-primary text-dark shadow-md' : 'text-slate-400 hover:text-white'}`}
                        >
                            <LayoutGrid size={14} />
                            Réalisés
                        </button>
                        <button
                            onClick={() => setFilter('encours')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'encours' ? 'bg-primary text-dark shadow-md' : 'text-slate-400 hover:text-white'}`}
                        >
                            <Calendar size={14} />
                            En cours
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="group glass rounded-2xl overflow-hidden flex flex-col hover:border-primary/30 transition-all hover:translate-y-[-4px] bg-slate-800/20"
                        >
                            <div className="relative aspect-video overflow-hidden bg-slate-800/50">
                                {project.images.length > 0 ? (
                                    <img
                                        src={project.images[0]}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-600">
                                        <LayoutGrid size={48} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="bg-white text-dark w-full py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform text-sm"
                                    >
                                        <Eye size={16} />
                                        Voir les captures
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 md:p-5 flex-1 flex flex-col">
                                <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                                <p className="text-slate-400 text-xs mb-4 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-[11px] font-bold flex items-center gap-1 hover:underline"
                                        >
                                            Visiter <ExternalLink size={12} />
                                        </a>
                                    )}
                                    <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                                        {project.category === 'realises' ? 'Terminé' : 'En développement'}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal for gallery */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    >
                        <div className="absolute inset-0 bg-dark/95 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl max-h-[90vh] glass rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/10"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
                                <h3 className="text-xl font-bold">{selectedProject.name} <span className="text-primary italic">Gallery</span></h3>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center border border-red-500/20"
                                    title="Retour aux projets"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/30">
                                {selectedProject.images.length > 0 ? (
                                    selectedProject.images.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-xl overflow-hidden border border-white/10 group relative cursor-zoom-in"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <img src={img} alt={`${selectedProject.name} screenshot ${idx + 1}`} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold text-white text-sm">
                                                Cliquer pour agrandir
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full py-20 text-center text-slate-500 text-sm">
                                        Pas de captures disponibles pour le moment.
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fullscreen Image Preview */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center bg-dark/98 backdrop-blur-xl"
                    >
                        <div className="absolute top-6 left-6 z-10">
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-primary hover:text-dark transition-all font-bold text-sm"
                            >
                                <ChevronRight size={18} className="rotate-180" />
                                Retour à la galerie
                            </button>
                        </div>

                        <div className="absolute top-6 right-6 z-10">
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full size preview"
                            className="max-w-full max-h-full object-contain p-4 shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
