import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, Cpu } from 'lucide-react';

// REUSABLE ANIMATION WRAPPER
const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full h-20 px-12 flex justify-between items-center z-50 backdrop-blur-md bg-[#0a192f]/80">
        <div className="text-[#64ffda] font-mono font-bold text-xl">KT.</div>
        <ul className="flex gap-8 font-mono text-xs">
          <li><a href="#about" className="hover:text-[#64ffda]">01. About</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda]">02. Projects</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda]">03. Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        {/* HERO SECTION */}
        <section className="h-screen flex flex-col justify-center">
          <motion.div style={{ y: yParallax }}>
            <p className="text-[#64ffda] font-mono mb-5">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#e6f1ff] mb-4">Karthik Thorlapati.</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8">I build high-performance systems.</h2>
            <p className="max-w-xl text-lg mb-12">
              Software Development Engineer specializing in distributed systems and backend architecture. 
              Expert in Python (FastAPI, AsyncIO) and the MERN stack[cite: 7, 10, 11].
            </p>
            <a href="#projects" className="px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono">
              View My Work
            </a>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10 flex items-center">
              <span className="text-[#64ffda] font-mono text-xl mr-2">02.</span> Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* RAG System */}
              <div className="bg-[#112240] p-8 rounded-lg border-t-2 border-transparent hover:border-[#64ffda] transition-all">
                <Cpu className="text-[#64ffda] mb-4" size={32} />
                <h4 className="text-xl font-bold text-[#e6f1ff] mb-2">Real-Time Streaming RAG System</h4>
                <p className="text-sm mb-4">Engineered a Retrieval-Augmented Generation system using Groq LPU and WebSockets for real-time AI responses[cite: 14, 17, 18].</p>
                <div className="flex gap-3 text-[10px] font-mono opacity-60">
                  <span>FastAPI</span> <span>Redis</span> <span>Docker</span>
                </div>
              </div>

              {/* Task Processor */}
              <div className="bg-[#112240] p-8 rounded-lg border-t-2 border-transparent hover:border-[#64ffda] transition-all">
                <Terminal className="text-[#64ffda] mb-4" size={32} />
                <h4 className="text-xl font-bold text-[#e6f1ff] mb-2">Asynchronous Task Processor</h4>
                <p className="text-sm mb-4">Developed a fault-tolerant execution engine using AsyncIO and Redis to reduce API latency[cite: 21, 24, 25].</p>
                <div className="flex gap-3 text-[10px] font-mono opacity-60">
                  <span>Python</span> <span>AsyncIO</span> <span>JSON-RPC</span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
          <Reveal>
            <h3 className="text-4xl font-bold text-[#e6f1ff] mb-6">Get In Touch</h3>
            <p className="mb-10">Currently pursuing B.Tech in AI & ML at Aditya University (CGPA: 8.26)[cite: 32, 33]. I'm open to SDE opportunities!</p>
            <div className="flex justify-center gap-8">
              <a href="mailto:karthikthorlapati33@gmail.com" className="hover:text-[#64ffda]"><Mail size={32} /></a>
              <a href="https://github.com/karthikthorlapati" className="hover:text-[#64ffda]"><Github size={32} /></a>
              <a href="https://linkedin.com/in/karthikthorlapati" className="hover:text-[#64ffda]"><Linkedin size={32} /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="py-10 text-center font-mono text-xs opacity-50">
        Built with React & Tailwind | Karthik Thorlapati © 2026
      </footer>
    </div>
  );
}