import React from 'react';
import Reveal from './Reveal';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <Reveal>
        <span className="section-label">04 — Background</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#e8e8f0', marginBottom: 64 }}>Education</h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div style={{ maxWidth: 640 }}>
          <div className="timeline-item" style={{ paddingBottom: 48 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 12,
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  color: '#e8e8f0',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <GraduationCap size={20} style={{ color: '#64ffda' }} />
                Aditya University
              </h3>
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 12,
                  color: '#64ffda',
                  opacity: 0.6,
                }}
              >
                2022 – 2026
              </span>
            </div>

            <p style={{ color: '#64ffda', fontFamily: "'Fira Code', monospace", fontSize: 13, marginBottom: 16 }}>
              B.Tech — Artificial Intelligence & Machine Learning
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
              Specializing in advanced ML algorithms, distributed computing, and system architecture.
              Coursework covers deep learning, NLP, computer vision, and scalable software design.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { text: 'CGPA: 8.26', icon: Award },
                { text: 'AI & ML Specialization', icon: Award },
                { text: 'DSA Expert', icon: Award },
              ].map(({ text, icon: IconComponent }) => (
                <span
                  key={text}
                  className="project-tag"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                  <IconComponent size={10} />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
