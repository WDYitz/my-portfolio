"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Home } from '@/components/Home';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Navigation } from '@/components/Navigation';

const App = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'projects'>('home');

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          )}
          {currentPage === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          )}
          {currentPage === 'projects' && (
            <motion.div
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}

export default App;