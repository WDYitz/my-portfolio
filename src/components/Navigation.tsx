"use client";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  currentPage: 'home' | 'about' | 'projects';
  setCurrentPage: (page: 'home' | 'about' | 'projects') => void;
}

export const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home' as const, label: 'Home' },
    { id: 'about' as const, label: 'Sobre' },
    { id: 'projects' as const, label: 'Projetos' },
  ];

  const handleNavigation = (page: 'home' | 'about' | 'projects') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-semibold cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            YBR<span className="text-orange-500">.</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.id)}
                className={`transition-colors ${currentPage === item.id
                    ? 'text-orange-500'
                    : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.label}
              </motion.button>
            ))}


          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${currentPage === item.id
                      ? 'bg-orange-500 text-white'
                      : 'text-white/80 hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
