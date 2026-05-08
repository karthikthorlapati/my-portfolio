import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="bg-[#050505] text-[#a0a0a0] min-h-screen font-sans selection:bg-[#64ffda] selection:text-[#050505]">
      
      {/* MINIMALIST NAV */}
      <nav className="fixed top-0 w-full h-24 px-8 md:px-16 flex justify-between items-center z-50 mix-blend-difference">
        <div className="text-white font-bold tracking-tighter text-2xl">KT</div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">
          <a href="#about" className="hover:text-white transition-colors">Profile</a>
          <a href="#projects" className="hover:text-white transition-colors">Engineering</a>
          <a href="#contact" className="hover:text-white transition-colors">Connect</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* HERO - SDE ARCHITECT FOCUS */}
        <section className="h-screen flex flex-col justify-center border-b border-white/5">
          <Reveal>
            <h1 className="text-7xl md:text-[120px] font-bold text-white leading-[0.9] tracking-tighter mb-8">
              Karthik <br/> Thorlapati.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="max-w-xl text-lg md:text-xl leading-relaxed">
                Software Development Engineer specializing in high-performance distributed systems. 
                Engineering scalable AI architectures with a focus on sub-second latency and system reliability[cite: 8].
              </p>
              <div className="font-mono text-[10px] uppercase tracking-widest border-l border-[#64ffda] pl-4">
                Available for SDE Roles <br/> Based in India [cite: 34]
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROFILE SECTION WITH IMAGE */}
        <section id="about" className="py-32 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative group overflow-hidden bg-[#111] rounded-sm aspect-[4/5]">
            {/* Professional Portrait Integration */}
            <img 
              src="/karthik.jpg" 
              alt="Karthik Thorlapati" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
            />
          </div>
          <Reveal>
            <h3 className="text-sm font-mono text-[#64ffda] uppercase tracking-[0.4em] mb-8">01. Profile</h3>
            <p className="text-2xl text-white font-medium leading-snug mb-8">
              Currently pursuing a B.Tech in AI & ML at **Aditya University**[cite: 31, 32]. 
              Maintaining a **CGPA of 8.26/10.0** while contributing to high-performance open-source backends[cite: 28, 33].
            </p>
            <div className="space-y-6 text-sm">
              <p>Expertise in **Python (FastAPI, AsyncIO)** and the **MERN stack**[cite: 7, 10].</p>
              <p>Completed 1,000+ hours of intensive full-stack development focusing on DSA and system design[cite: 29].</p>
            </div>
          </Reveal>
        </section>

        {/* CORE SKILLS - GRID ARCHITECTURE */}
        <section className="py-32 border-t border-white/5">
          <h3 className="text-sm font-mono text-[#64ffda] uppercase tracking-[0.4em] mb-16">02. Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
            <div>
              <h4 className="text-white font-bold mb-4">Backend</h4>
              <ul className="text-xs space-y-2 font-mono uppercase opacity-60">
                <li>FastAPI [cite: 11]</li><li>AsyncIO [cite: 11]</li><li>Node.js [cite: 11]</li><li>Express [cite: 11]</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Systems</h4>
              <ul className="text-xs space-y-2 font-mono uppercase opacity-60">
                <li>Redis [cite: 12]</li><li>Docker [cite: 12]</li><li>WebSockets [cite: 15]</li><li>Microservices [cite: 11]</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Databases</h4>
              <ul className="text-xs space-y-2 font-mono uppercase opacity-60">
                <li>PostgreSQL [cite: 12]</li><li>MongoDB [cite: 12]</li><li>SQL [cite: 10]</li><li>MySQL [cite: 12]</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Languages</h4>
              <ul className="text-xs space-y-2 font-mono uppercase opacity-60">
                <li>Python (Expert) [cite: 10]</li><li>JavaScript [cite: 10]</li><li>C / C++ [cite: 10]</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ENGINEERING PROJECTS */}
        <section id="projects" className="py-32 border-t border-white/5">
          <h3 className="text-sm font-mono text-[#64ffda] uppercase tracking-[0.4em] mb-16">03. Systems</h3>
          <div className="space-y-32">
            
            {/* PROJECT 1: RAG SYSTEM */}
            <Reveal>
              <div className="grid md:grid-cols-2 gap-12 items-center group">
                <div>
                  <h4 className="text-4xl font-bold text-white mb-6 group-hover:text-[#64ffda] transition-colors">Real-Time Streaming RAG System</h4>
                  <p className="leading-relaxed mb-8">
                    Engineered a Retrieval-Augmented Generation (RAG) system utilizing **Groq LPU** for high-speed document querying[cite: 14, 17]. 
                    Architected WebSocket-based streaming to deliver real-time AI responses, successfully optimizing user-perceived latency[cite: 18].
                  </p>
                  <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest opacity-40">
                    <span>Python</span><span>Redis</span><span>Docker</span><span>FastAPI</span>
                  </div>
                </div>
                <div className="bg-[#111] p-12 rounded-sm border border-white/5 flex items-center justify-center">
                  <Icons.Zap size={64} className="text-white/10 group-hover:text-[#64ffda]/40 transition-all duration-500" />
                </div>
              </div>
            </Reveal>

            {/* PROJECT 2: ASYNC TASK PROCESSOR */}
            <Reveal>
              <div className="grid md:grid-cols-2 gap-12 items-center group">
                <div className="md:order-2">
                  <h4 className="text-4xl font-bold text-white mb-6 group-hover:text-[#64ffda] transition-colors">Async Task Execution Engine</h4>
                  <p className="leading-relaxed mb-8">
                    Developed a scalable, asynchronous task execution engine utilizing **Redis** as a message broker[cite: 21, 25]. 
                    Leveraged **AsyncIO** event loops for fault-tolerant task distribution and priority scheduling[cite: 25].
                  </p>
                  <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest opacity-40">
                    <span>Python</span><span>AsyncIO</span><span>Redis</span><span>JSON-RPC</span>
                  </div>
                </div>
                <div className="bg-[#111] p-12 rounded-sm border border-white/5 flex items-center justify-center md:order-1">
                  <Icons.Layers size={64} className="text-white/10 group-hover:text-[#64ffda]/40 transition-all duration-500" />
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* CONNECT */}
        <section id="contact" className="py-40 text-center">
          <Reveal>
            <h3 className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tighter">Get in touch.</h3>
            <p className="mb-16 text-lg">Actively seeking SDE opportunities at innovative technology firms.</p>
            <div className="flex justify-center gap-16 mb-24">
              <a href="mailto:karthikthorlapati33@gmail.com" className="hover:text-white transition-colors"><Icons.Mail size={32}/></a>
              <a href="https://github.com/karthikthorlapati" className="hover:text-white transition-colors"><Icons.Github size={32}/></a>
              <a href="https://linkedin.com/in/karthikthorlapati" className="hover:text-white transition-colors"><Icons.Linkedin size={32}/></a>
            </div>
            <footer className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-20">
              Karthik Thorlapati — Aditya University — 2026
            </footer>
          </Reveal>
        </section>

      </main>
    </div>
  );
}