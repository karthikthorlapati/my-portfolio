import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { Code, Cpu, Database, Brain } from 'lucide-react';

const SKILLS = [
  {
    cat: 'Languages',
    icon: Code,
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    cat: 'Frameworks',
    icon: Cpu,
    items: ['FastAPI', 'Node.js', 'Express', 'React', 'AsyncIO'],
  },
  {
    cat: 'Infrastructure',
    icon: Database,
    items: ['Redis', 'Docker', 'MongoDB', 'PostgreSQL', 'WebSockets'],
  },
  {
    cat: 'AI / ML',
    icon: Brain,
    items: ['PyTorch', 'Transformers', 'BERT', 'LangChain', 'Groq LPU'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <Reveal>
        <span className="section-label">02 — Expertise</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#e8e8f0', marginBottom: 64 }}>Technical Skillset</h2>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}
      >
        {SKILLS.map(({ cat, icon: IconComponent, items }) => (
          <motion.div key={cat} variants={fadeUp}>
            <h4
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 11,
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#64ffda',
                opacity: 0.6,
                marginBottom: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <IconComponent size={14} style={{ color: '#64ffda' }} />
              {cat}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
