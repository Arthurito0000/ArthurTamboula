import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Sparkles, Code2, Globe } from 'lucide-react';

const DevSections = () => {
    const stack = [
        {
            title: 'Frontend',
            icon: <Layout className="text-primary" />,
            skills: 'React, Tailwind CSS, TypeScript, Framer Motion'
        },
        {
            title: 'Backend',
            icon: <Server className="text-secondary" />,
            skills: 'Node.js, Express, Laravel'
        },
        {
            title: 'Base de données',
            icon: <Database className="text-primary" />,
            skills: 'PostgreSQL, MySQL'
        },
        {
            title: 'Outils & Design',
            icon: <Sparkles className="text-secondary" />,
            skills: 'Docker, Postman, GitHub, Adobe XD'
        }
    ];

    const highlights = [
        { label: 'Projets réalisés', value: '10+' },
        { label: 'Satisfaction Client', value: '95%' },
        { label: 'Ans d\'expérience', value: '2+' }
    ];

    return (
        <div className="space-y-24 pb-24">
            {/* About Me */}
            <section className="container-custom mt-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row gap-12 2xl:gap-20 items-center"
                >
                    <div className="flex-1 space-y-6">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black">À propos de <span className="text-primary italic">moi</span></h2>
                        <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
                            Développeur passionné par la création d'interfaces fluides et performantes. Mon approche combine rigueur technique et sensibilité artistique pour offrir des produits qui se démarquent.
                        </p>

                        <div className="flex flex-wrap gap-6 lg:gap-8 xl:gap-10">
                            {highlights.map((h, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="text-2xl lg:text-3xl xl:text-4xl font-black text-white">{h.value}</div>
                                    <div className="text-[9px] lg:text-[10px] xl:text-xs uppercase tracking-widest text-slate-500 font-bold">{h.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4 lg:gap-6">
                        <div className="p-5 md:p-6 lg:p-8 glass rounded-3xl flex flex-col items-center text-center space-y-3 bg-slate-800/30">
                            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Code2 size={16} className="md:size-20 lg:size-24" /></div>
                            <div className="font-bold text-xs md:text-sm lg:text-base">Clean Code</div>
                        </div>
                        <div className="p-5 md:p-6 lg:p-8 glass rounded-3xl translate-y-6 flex flex-col items-center text-center space-y-3 bg-slate-800/30">
                            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary"><Globe size={16} className="md:size-20 lg:size-24" /></div>
                            <div className="font-bold text-xs md:text-sm lg:text-base">Scalability</div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Stack */}
            <section id="stack" className="container-custom text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">Ma <span className="text-primary italic">Stack</span> Technique</h2>
                <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-sm lg:text-base">Des outils modernes pour des solutions à la pointe de la technologie.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stack.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-5 md:p-6 lg:p-8 glass rounded-2xl hover:border-primary/30 transition-all flex flex-col items-start text-left bg-slate-800/30"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                                {React.cloneElement(item.icon, { size: 20 })}
                            </div>
                            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.skills}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );

};

export default DevSections;