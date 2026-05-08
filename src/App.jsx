import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="bg-[#000000] text-[#a0a0a0] min-h-screen font-sans selection:bg-[#64ffda] selection:text-[#000]">
      
      {/* MINIMALIST NAVIGATION */}
      <nav className="fixed top-0 w-full h-24 px-8 md:px-20 flex justify-between items-center z-50">
        <div className="text-white font-black tracking-tighter text-3xl">KT</div>
        <div className="hidden md:flex gap-16 text-[10px] uppercase tracking-[0.4em] font-bold text-white/50">
          <a href="#about" className="hover:text-white transition-colors">Profile</a>
          <a href="#projects" className="hover:text-white transition-colors">Engineering</a>
          <a href="#contact" className="hover:text-white transition-colors">Connect</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 md:px-20">
        
        {/* HERO SECTION - ARCHITECTURAL FOCUS */}
        <section className="h-screen flex flex-col justify-center border-b border-white/10">
          <Reveal>
            <h1 className="text-[12vw] md:text-[10vw] font-black text-white leading-[0.85] tracking-tighter mb-12">
              KARTHIK <br/> THORLAPATI
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-[#64ffda] font-mono text-xs uppercase tracking-[0.5em] mb-4">SDE & Backend Architect</h2>
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  Engineering high-performance distributed systems with a focus on sub-second latency, 
                  scalable AI integration, and fault-tolerant asynchronous pipelines.
                </p>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] border-l border-[#64ffda] pl-6 h-fit py-2">
                Aditya University <br/> AI & ML Specialization
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROFILE SECTION - PROFESSIONAL PORTRAIT */}
        <section id="about" className="py-32 grid md:grid-cols-2 gap-32 items-start border-b border-white/10">
          <div className="relative group overflow-hidden bg-[#111] aspect-[3/4]">
            {/* Portrait Integration */}
            <img 
              src="/karthik.jpg" 
              alt="Karthik Thorlapati" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
          <Reveal>
            <h3 className="text-[#64ffda] font-mono text-xs uppercase tracking-[0.5em] mb-12">01 — The Profile</h3>
            <p className="text-3xl text-white font-medium leading-tight mb-12">
              Developing scalable backends for a modern digital infrastructure.
            </p>
            <div className="space-y-8 text-lg">
              <p>
                Currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at **Aditya University** with a **CGPA of 8.26**.
              </p>
              <p>
                Specializing in **Python (Expert)** and the MERN stack. I have logged over 1,000+ hours in deep DSA training and system design.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Core Tech</h4>
                  <p className="text-sm opacity-60 font-mono">FastAPI, AsyncIO, Node.js, Express, React</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Infrastructure</h4>
                  <p className="text-sm opacity-60 font-mono">Redis, Docker, MongoDB, PostgreSQL</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ENGINEERING PROJECTS - VERTICAL LIST ARCHITECTURE */}
        <section id="projects" className="py-32">
          <h3 className="text-[#64ffda] font-mono text-xs uppercase tracking-[0.5em] mb-24">02 — Engineering</h3>
          
          <div className="divide-y divide-white/10">
            {/* PROJECT 1: RAG SYSTEM */}
            <Reveal>
              <div className="py-20 group grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 text-white/20 font-black text-4xl group-hover:text-[#64ffda] transition-colors">01</div>
                <div className="md:col-span-7">
                  <h4 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Real-Time Streaming RAG System</h4>
                  <p className="text-xl leading-relaxed opacity-60">
                    High-speed Retrieval-Augmented Generation utilizing Groq LPU and WebSockets for real-time document querying with sub-second latency.
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-end gap-4 font-mono text-[10px] uppercase tracking-widest opacity-40">
                  <span>Python</span><span>FastAPI</span><span>Redis</span><span>Docker</span>
                </div>
              </div>
            </Reveal>

            {/* PROJECT 2: ASYNC PROCESSOR */}
            <Reveal>
              <div className="py-20 group grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 text-white/20 font-black text-4xl group-hover:text-[#64ffda] transition-colors">02</div>
                <div className="md:col-span-7">
                  <h4 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Async Task Execution Engine</h4>
                  <p className="text-xl leading-relaxed opacity-60">
                    A fault-tolerant asynchronous execution engine utilizing Redis as a message broker for high-concurrency background job management.
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-end gap-4 font-mono text-[10px] uppercase tracking-widest opacity-40">
                  <span>Python</span><span>AsyncIO</span><span>Redis</span><span>JSON-RPC</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONNECT SECTION */}
        <section id="contact" className="py-40 border-t border-white/10 text-center">
          <Reveal>
            <h3 className="text-7xl md:text-[9vw] font-black text-white mb-16 tracking-tighter uppercase">Get in touch.</h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <p className="text-xl text-left max-w-sm">
                Actively seeking SDE opportunities to build the next generation of high-performance systems.
              </p>
              <div className="flex gap-12">
                <a href="mailto:karthikthorlapati33@gmail.com" className="text-white hover:text-[#64ffda] transition-colors"><Icons.Mail size={40}/></a>
                <a href="https://github.com/karthikthorlapati" className="text-white hover:text-[#64ffda] transition-colors"><Icons.Github size={40}/></a>
                <a href="https://linkedin.com/in/karthikthorlapati" className="text-white hover:text-[#64ffda] transition-colors"><Icons.Linkedin size={40}/></a>
              </div>
            </div>
            <footer className="mt-40 font-mono text-[10px] uppercase tracking-[0.6em] opacity-20">
              Karthik Thorlapati — Aditya University — 2026
            </footer>
          </Reveal>
        </section>

      </main>
    </div>
  );
}