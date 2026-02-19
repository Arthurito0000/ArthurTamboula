import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Shield, Menu, X, Rocket } from 'lucide-react';

const Navbar = ({ activeSide, setActiveSide }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Expertise', href: '#expertise' },
        { name: 'Arsenal', href: '#arsenal' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-xl py-4 shadow-2xl shadow-primary/5' : 'py-6 bg-transparent'}`}
        >
            <div className="container-custom flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-dark shadow-lg shadow-primary/20">
                        <Rocket size={20} />
                    </div>
                    <span className="text-xl font-bold tracking-tighter">
                        ARTHUR <span className="text-primary font-black">TAMBOULA</span>
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-sm font-medium text-slate-400">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-primary transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-3 bg-slate-900/50 p-1.5 rounded-full border border-white/5">
                        <button
                            onClick={() => setActiveSide('dev')}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${activeSide === 'dev' ? 'bg-primary text-dark shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-white'}`}
                        >
                            <Code size={14} />
                            Côté Dev
                        </button>
                        <button
                            onClick={() => setActiveSide('cyber')}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${activeSide === 'cyber' ? 'bg-primary text-dark shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-white'}`}
                        >
                            <Shield size={14} />
                            Cybersec
                        </button>
                    </div>

                    <a
                        href="#contact"
                        className="bg-white/5 border border-white/10 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-dark transition-all duration-300"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-100"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            <ul className="flex flex-col gap-4 text-lg font-medium">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-slate-300 hover:text-primary"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-slate-300 hover:text-primary"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => { setActiveSide('dev'); setMobileMenuOpen(false); }}
                                    className={`flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-bold border transition-all ${activeSide === 'dev' ? 'bg-primary border-primary text-dark' : 'border-white/10 text-slate-400'}`}
                                >
                                    <Code size={18} />
                                    Côté Développeur
                                </button>
                                <button
                                    onClick={() => { setActiveSide('cyber'); setMobileMenuOpen(false); }}
                                    className={`flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-bold border transition-all ${activeSide === 'cyber' ? 'bg-primary border-primary text-dark' : 'border-white/10 text-slate-400'}`}
                                >
                                    <Shield size={18} />
                                    Analyste SOC (Cyber)
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
