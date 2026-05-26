import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';
import useTypewriter from '../hooks/useTypewriter';
import { Terminal, ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const role = useTypewriter([
    'SDE & Backend Architect',
    'ML Engineer',
    'Distributed Systems Dev',
    'Open Source Builder'
  ]);

  const { scrollY } = useScroll();
  // Create a parallax scroll translation for the background decorative blobs
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}
    >
      {/* Performance optimized Particle Canvas */}
      <ParticleCanvas />

      {/* Parallax Decorative Background Elements */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[120px]" />
        <div className="absolute top-[40%] left-[5%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
      </motion.div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label" style={{ marginBottom: 24 }}>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            fontWeight: 900,
            color: '#e8e8f0',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            marginBottom: 32,
          }}
        >
          KARTHIK<br />
          <span className="gradient-text">THORLAPATI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 640 }}
        >
          <div
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: '#64ffda',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ opacity: 0.5 }}>// </span>
            <Terminal size={18} style={{ color: '#64ffda' }} />
            <span>{role}</span>
            <span
              style={{
                animation: 'blink 1s infinite',
                borderRight: '2px solid #64ffda',
                height: '1.2em',
              }}
            />
          </div>

          <p style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', color: '#8888a0', lineHeight: 1.7 }}>
            Engineering high-performance distributed systems with a focus on sub-second latency,
            scalable AI integration, and fault-tolerant asynchronous pipelines.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 8 }}>
            <a href="#projects" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              View My Work <ArrowRight size={14} />
            </a>
            <a href="mailto:karthikthorlapati33@gmail.com" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Get In Touch <Mail size={14} />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator — pinned to very bottom of hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ position: 'absolute', bottom: 32, left: 0, display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, #64ffda, transparent)' }} />
          <span
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#64ffda',
              opacity: 0.45,
            }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
