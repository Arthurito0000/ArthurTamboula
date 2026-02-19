import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import DevSections from './components/sections/DevSections';
import CyberSections from './components/sections/CyberSections';
import Footer from './components/layout/Footer';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

function App() {
  const [activeSide, setActiveSide] = useState('dev');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-dark selection:bg-primary/30 selection:text-primary relative overflow-hidden bg-grid">
      {/* Animated Cursor Blob */}
      <motion.div
        className="cursor-blob hidden lg:block"
        style={{
          x: springX,
          y: springY,
        }}
      />
      <Navbar activeSide={activeSide} setActiveSide={setActiveSide} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Hero activeSide={activeSide} />

            {activeSide === 'dev' ? (
              <>
                <DevSections />
                <Projects />
              </>
            ) : (
              <CyberSections />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
