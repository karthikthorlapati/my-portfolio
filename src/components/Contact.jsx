import React from 'react';
import Reveal from './Reveal';
import { Mail, Linkedin, Github, MapPin, Heart } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 0' }}>
      <Reveal>
        <span className="section-label">05 — Connect</span>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            color: '#e8e8f0',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            marginBottom: 40,
          }}
        >
          Let's build<br />
          <span className="gradient-text">something great.</span>
        </h2>

        <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 540, marginBottom: 48 }}>
          Actively seeking SDE opportunities to build next-generation high-performance systems. Open to full-time roles and exciting collaborations.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 64 }}>
          <a
            href="mailto:karthikthorlapati33@gmail.com"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            <Mail size={16} />
            <span>Send Email</span>
          </a>
          <a
            href="https://linkedin.com/in/karthikthorlapati"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            <Linkedin size={16} />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/karthikthorlapati"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: 40,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              opacity: 0.35,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Karthik Thorlapati — 2027
          </span>
          <span
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              opacity: 0.35,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <MapPin size={12} style={{ color: '#64ffda' }} />
            Aditya University · AI & ML
          </span>
        </div>
      </Reveal>
    </section>
  );
}
