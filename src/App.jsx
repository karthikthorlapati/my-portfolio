import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// ─── Animation Variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } } }}
  >
    {children}
  </motion.div>
);

// ─── Typewriter Hook ─────────────────────────────────────────────────────────
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length - 1 === 0) { setDeleting(false); setWordIdx((i) => (i + 1) % words.length); }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ─── Particle Canvas ─────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100,255,218,0.5)';
        ctx.fill();
      });
      particles.forEach((a, i) => particles.slice(i + 1).forEach((b) => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(100,255,218,${0.12 * (1 - d / 120)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }));
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} id="particle-canvas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.45 }} />;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const SKILLS = {
  Languages:   ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  Frameworks:  ['FastAPI', 'Node.js', 'Express', 'React', 'AsyncIO'],
  Infrastructure: ['Redis', 'Docker', 'MongoDB', 'PostgreSQL', 'WebSockets'],
  'AI / ML':   ['PyTorch', 'Transformers', 'BERT', 'LangChain', 'Groq LPU'],
};

const PROJECTS = [
  {
    num: '01',
    title: 'Real-Time Streaming RAG System',
    desc: 'High-speed Retrieval-Augmented Generation using Groq LPU and WebSockets for real-time document querying with sub-second latency. Supports concurrent sessions with Redis-backed vector caching.',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker', 'WebSockets', 'Groq'],
    github: 'https://github.com/karthikthorlapati',
  },
  {
    num: '02',
    title: 'Async Task Execution Engine',
    desc: 'Fault-tolerant asynchronous execution engine using Redis as a message broker for high-concurrency background job management. Implements JSON-RPC protocol with retry queues and dead-letter handling.',
    tags: ['Python', 'AsyncIO', 'Redis', 'JSON-RPC', 'Docker'],
    github: 'https://github.com/karthikthorlapati',
  },
];

const NAV_LINKS = [
  { href: '#about', label: 'Profile' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const role = useTypewriter(['SDE & Backend Architect', 'ML Engineer', 'Distributed Systems Dev', 'Open Source Builder']);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 60);
      setProgress((scrollY / maxScroll) * 100);
      setShowTop(scrollY > 400);
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current);
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
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="text-white font-black tracking-tighter text-2xl cursor-pointer"
            onClick={scrollTop}
          >
            KT<span style={{ color: '#64ffda' }}>.</span>
          </motion.div>
          {/* Desktop Nav */}
          <motion.div
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          >
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className={`nav-link ${activeSection === l.href.slice(1) ? 'active' : ''}`}>
                {l.label}
              </a>
            ))}
            <a href="https://linkedin.com/in/karthikthorlapati" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '8px 20px', fontSize: '11px' }}>
              Hire Me
            </a>
          </motion.div>
          {/* Hamburger */}
          <button className="md:hidden text-white z-50" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ height: 2, background: menuOpen ? '#64ffda' : 'white', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : '', transition: 'all 0.3s', display: 'block' }} />
              <span style={{ height: 2, background: 'white', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s', display: 'block' }} />
              <span style={{ height: 2, background: menuOpen ? '#64ffda' : 'white', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : '', transition: 'all 0.3s', display: 'block' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 md:px-16">

        {/* ── HERO ── */}
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
          <ParticleCanvas />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <span className="section-label" style={{ marginBottom: 24 }}>Available for opportunities</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, color: '#e8e8f0', lineHeight: 0.9, letterSpacing: '-0.03em', marginBottom: 32 }}
            >
              KARTHIK<br />
              <span className="gradient-text">THORLAPATI</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 640 }}
            >
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 'clamp(14px, 2vw, 18px)', color: '#64ffda', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ opacity: 0.5 }}>// </span>
                <span>{role}</span>
                <span style={{ animation: 'blink 1s infinite', borderRight: '2px solid #64ffda', height: '1.2em' }} />
              </div>
              <p style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', color: '#8888a0', lineHeight: 1.7 }}>
                Engineering high-performance distributed systems with a focus on sub-second latency,
                scalable AI integration, and fault-tolerant asynchronous pipelines.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 8 }}>
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="mailto:karthikthorlapati33@gmail.com" className="btn-secondary">Get In Touch</a>
              </div>
            </motion.div>
            {/* Scroll indicator — pinned to very bottom of hero */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
              style={{ position: 'absolute', bottom: 32, left: 0, display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, #64ffda, transparent)' }} />
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#64ffda', opacity: 0.45 }}>Scroll</span>
            </motion.div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
            {/* Avatar */}
            <Reveal>
              <div className="avatar-container" style={{ maxWidth: 340, position: 'relative' }}>
                <div className="avatar-glow" />
                <div style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  border: '1px solid rgba(100,255,218,0.15)',
                  position: 'relative',
                }}
                  className="group"
                >
                  <img
                    src="/karthik.jpg"
                    alt="Karthik Thorlapati"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.8s ease, transform 0.8s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  {/* teal overlay line at bottom */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, #64ffda, transparent)',
                  }} />
                </div>
              </div>
            </Reveal>
            {/* Info */}
            <div>
              <Reveal>
                <span className="section-label">01 — The Profile</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#e8e8f0', marginBottom: 24, lineHeight: 1.2 }}>
                  Building scalable backends for a modern digital world.
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  Currently pursuing a <strong style={{ color: '#e8e8f0' }}>B.Tech in Artificial Intelligence & Machine Learning</strong> at
                  Aditya University with a <strong style={{ color: '#64ffda' }}>CGPA of 8.26</strong>.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
                  Specializing in Python and the MERN stack. Logged <strong style={{ color: '#e8e8f0' }}>1,000+ hours</strong> in deep
                  DSA training and system design patterns across distributed and real-time systems.
                </p>
              </Reveal>
              {/* Stats */}
              <Reveal delay={0.2}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                  {[['8.26', 'CGPA'], ['1000+', 'DSA Hrs'], ['4+', 'Projects']].map(([val, label]) => (
                    <div key={label} className="stat-card">
                      <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#64ffda', letterSpacing: '-0.02em' }}>{val}</div>
                      <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5, marginTop: 4 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <Reveal>
            <span className="section-label">02 — Expertise</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#e8e8f0', marginBottom: 64 }}>Technical Skillset</h2>
          </Reveal>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}
          >
            {Object.entries(SKILLS).map(([cat, items]) => (
              <motion.div key={cat} variants={fadeUp}>
                <h4 style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#64ffda', opacity: 0.6, marginBottom: 20 }}>{cat}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {items.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <Reveal>
            <span className="section-label">03 — Engineering</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#e8e8f0', marginBottom: 64 }}>Projects</h2>
          </Reveal>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}
          >
            {PROJECTS.map(p => (
              <motion.div key={p.num} variants={fadeUp} className="project-card">
                <div className="project-number">{p.num} /</div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: '#e8e8f0', fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 28, opacity: 0.65 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64ffda', opacity: 0.7, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.7}
                >
                  ↗ View on GitHub
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <Reveal>
            <span className="section-label">04 — Background</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#e8e8f0', marginBottom: 64 }}>Education</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ maxWidth: 640 }}>
              <div className="timeline-item" style={{ paddingBottom: 48 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#e8e8f0', fontWeight: 700 }}>Aditya University</h3>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: '#64ffda', opacity: 0.6 }}>2022 – 2026</span>
                </div>
                <p style={{ color: '#64ffda', fontFamily: "'Fira Code', monospace", fontSize: 13, marginBottom: 16 }}>B.Tech — Artificial Intelligence & Machine Learning</p>
                <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                  Specializing in advanced ML algorithms, distributed computing, and system architecture.
                  Coursework covers deep learning, NLP, computer vision, and scalable software design.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {['CGPA: 8.26', 'AI & ML Specialization', 'DSA Expert'].map(badge => (
                    <span key={badge} className="project-tag">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: '120px 0' }}>
          <Reveal>
            <span className="section-label">05 — Connect</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: '#e8e8f0', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 40 }}>
              Let's build<br /><span className="gradient-text">something great.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 540, marginBottom: 48 }}>
              Actively seeking SDE opportunities to build next-generation high-performance systems. Open to full-time roles and exciting collaborations.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 64 }}>
              <a href="mailto:karthikthorlapati33@gmail.com" className="btn-primary">✉ Send Email</a>
              <a href="https://linkedin.com/in/karthikthorlapati" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn Profile</a>
              <a href="https://github.com/karthikthorlapati" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.25 }}>
                Karthik Thorlapati — 2026
              </span>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.25 }}>
                Aditya University · AI & ML
              </span>
            </div>
          </Reveal>
        </section>

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
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}