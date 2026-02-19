import React from 'react';
import { Mail, MessageCircle, Linkedin, ChevronUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="relative pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container-custom">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6">
                        Prêt à <span className="text-primary italic">collaborer ?</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mb-12">
                        Que ce soit pour un nouveau projet web ou pour renforcer votre posture de sécurité, je suis à votre écoute pour en discuter.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 md:mb-20">
                        <a
                            href="mailto:arthurotamboula10@gmail.com"
                            className="flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-bold group"
                        >
                            <Mail className="group-hover:text-primary transition-colors" />
                            Email
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-bold group"
                        >
                            <Linkedin className="group-hover:text-primary transition-colors" />
                            LinkedIn
                        </a>
                        <a
                            href="https://wa.me/237654141681"
                            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-bold group"
                        >
                            <MessageCircle className="group-hover:text-primary transition-colors" />
                            WhatsApp
                        </a>
                    </div>

                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
                        <div className="text-slate-500 text-sm font-medium">
                            © 2025 Arthur Tamboula • Dev & Sécurité
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-dark transition-all group"
                        >
                            <ChevronUp className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
