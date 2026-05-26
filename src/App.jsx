import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Menu, X } from 'lucide-react';
import './App.css';

// Import modular components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const NAV_LINKS = [
  { href: '#about', label: 'Profile' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Performance-optimized active section tracking using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px', // Triggers when section occupies central viewport
      }
    );

    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Performance-optimized throttled scroll handler for progress bar and nav-glass transition
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          
          setScrolled(scrollY > 60);
          setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
          setShowTop(scrollY > 400);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div style={{ background: '#050508', color: '#8888a0', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Progress Bar */}
      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'nav-glass py-4' : 'py-7'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-black tracking-tighter text-2xl cursor-pointer"
            onClick={scrollTop}
          >
            KT<span style={{ color: '#64ffda' }}>.</span>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link ${activeSection === l.href.slice(1) ? 'active' : ''}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/karthikthorlapati"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: '8px 20px', fontSize: '11px' }}
            >
              Hire Me
            </a>
          </motion.div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white z-50 cursor-pointer"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X size={24} style={{ color: '#64ffda' }} />
            ) : (
              <Menu size={24} style={{ color: 'white' }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`mobile-nav-link ${activeSection === l.href.slice(1) ? 'text-[#64ffda]' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/karthikthorlapati"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: 20 }}
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 md:px-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Scroll To Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="scroll-top-btn"
            onClick={scrollTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}