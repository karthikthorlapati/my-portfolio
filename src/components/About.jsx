import React from 'react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
        {/* Avatar */}
        <Reveal>
          <div className="avatar-container" style={{ maxWidth: 340, position: 'relative' }}>
            <div className="avatar-glow" />
            <div
              style={{
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                border: '1px solid rgba(100,255,218,0.15)',
                position: 'relative',
              }}
              className="group"
            >
              <img
                src="/karthik.webp"
                alt="Karthik Thorlapati Portrait"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.8s ease, transform 0.8s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              {/* teal overlay line at bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #64ffda, transparent)',
                }}
              />
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
              {[
                ['8.26', 'CGPA'],
                ['1000+', 'DSA Hrs'],
                ['4+', 'Projects'],
              ].map(([val, label]) => (
                <div key={label} className="stat-card">
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontWeight: 900,
                      color: '#64ffda',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      opacity: 0.5,
                      marginTop: 4,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
