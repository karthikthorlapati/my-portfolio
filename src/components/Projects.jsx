import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { Folder, Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    num: '01',
    title: 'Real-Time Streaming RAG System',
    desc: 'High-speed Retrieval-Augmented Generation using Groq LPU and WebSockets for real-time document querying with sub-second latency. Supports concurrent sessions with Redis-backed vector caching.',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker', 'WebSockets', 'Groq'],
    github: 'https://github.com/karthikthorlapati/real-time-streaming',
  },
  {
    num: '02',
    title: 'Async Task Execution Engine',
    desc: 'Fault-tolerant asynchronous execution engine using Redis as a message broker for high-concurrency background job management. Implements JSON-RPC protocol with retry queues and dead-letter handling.',
    tags: ['Python', 'AsyncIO', 'Redis', 'JSON-RPC', 'Docker'],
    github: 'https://github.com/karthikthorlapati/async-task-processor',
  },
  {
    num: '03',
    title: 'Fine-Tuned BERT Sentiment Classifier',
    desc: 'Deep learning pipeline utilizing a custom fine-tuned BERT architecture for sub-second sentiment prediction on streaming text. Implements sequence classification with multi-class inference, deployed via high-performance FastAPI gateways.',
    tags: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'BERT', 'Docker'],
    github: 'https://github.com/karthikthorlapati/sentiment-bert-project',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <Reveal>
        <span className="section-label">03 — Engineering</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#e8e8f0', marginBottom: 64 }}>Projects</h2>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}
      >
        {PROJECTS.map((p) => (
          <motion.div key={p.num} variants={fadeUp} className="project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div className="project-number">{p.num} /</div>
              <Folder size={24} style={{ color: '#64ffda', opacity: 0.8 }} />
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                color: '#e8e8f0',
                fontWeight: 700,
                marginBottom: 16,
                lineHeight: 1.3,
              }}
            >
              {p.title}
            </h3>

            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 28, opacity: 0.65 }}>
              {p.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {p.tags.map((t) => (
                <span key={t} className="project-tag">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#64ffda',
                opacity: 0.7,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0.7;
              }}
            >
              <Github size={14} />
              <span>View on GitHub</span>
              <ExternalLink size={12} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
