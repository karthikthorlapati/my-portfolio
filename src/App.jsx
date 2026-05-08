import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react';

const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen font-sans selection:bg-[#233554] selection:text-[#64ffda]">
      
      {/* PROFESSIONAL NAVIGATION */}
      <nav className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 backdrop-blur-md bg-[#0a192f]/90 border-b border-white/5">
        <div className="text-[#64ffda] font-mono font-bold text-xl tracking-tighter">KT [cite: 1]</div>
        <ul className="hidden md:flex gap-10 font-mono text-[11px] tracking-[0.2em]">
          <li><a href="#about" className="hover:text-[#64ffda] transition-colors">01. PROFILE</a></li>
          <li><a href="#skills" className="hover:text-[#64ffda] transition-colors">02. EXPERTISE</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda] transition-colors">03. ENGINEERING</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda] transition-colors">04. CONNECT</a></li>
        </ul>
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* HERO SECTION */}
        <section className="h-screen flex flex-col justify-center relative overflow-hidden">
          <motion.div style={{ y: yParallax }} className="z-10">
            <h1 className="text-6xl md:text-8xl font-bold text-[#e6f1ff] mb-4 tracking-tight">
              Karthik Thorlapati [cite: 1]
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-[#8892b0] mb-8 leading-tight">
              Software Development Engineer [cite: 7]
            </h2>
            <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-[#8892b0] mb-12">
              Specializing in high-performance distributed systems and backend architecture[cite: 7]. 
              Engineering scalable AI-integrated applications with a focus on sub-second latency[cite: 8].
            </p>
            <div className="flex gap-6">
              <a href="#projects" className="px-10 py-4 border border-[#64ffda] text-[#64ffda] rounded-sm hover:bg-[#64ffda]/10 transition-all font-mono text-sm tracking-widest">
                VIEW SYSTEMS
              </a>
            </div>
          </motion.div>
          
          {/* BACKGROUND ELEMENT */}
          <div className="absolute right-[-5%] top-[20%] w-[600px] h-[600px] bg-[#64ffda]/5 rounded-full blur-[150px] -z-0" />
        </section>

        {/* PROFILE SECTION WITH IMAGE */}
        <section id="about" className="py-32">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-16 flex items-center">
              <span className="text-[#64ffda] font-mono text-xl mr-4 underline decoration-dotted">01.</span> Professional Profile
            </h3>
            <div className="grid md:grid-cols-5 gap-16 items-start">
              <div className="md:col-span-3 space-y-6 text-lg leading-relaxed">
                <p>
                  Dedicated SDE focused on engineering fault-tolerant task pipelines and optimized 
                  backend architectures[cite: 7, 8]. Currently pursuing a B.Tech in Artificial Intelligence 
                  and Machine Learning at **Aditya University** with a **CGPA of 8.26/10.0**[cite: 31, 32, 33].
                </p>
                <p>
                  Proficient in **Python (Expert)**, FastAPI, and the MERN stack[cite: 10, 11]. 
                  Active open-source contributor maintaining repositories for backend optimization 
                  and AI integration[cite: 28].
                </p>
                <div className="pt-6 grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#64ffda] pl-4">
                    <p className="text-[#64ffda] font-mono text-xs uppercase tracking-widest">Training</p>
                    <p className="text-[#e6f1ff] font-bold">1000+ Hours DSA [cite: 29]</p>
                  </div>
                  <div className="border-l-2 border-[#64ffda] pl-4">
                    <p className="text-[#64ffda] font-mono text-xs uppercase tracking-widest">Location</p>
                    <p className="text-[#e6f1ff] font-bold">Surampalem, India [cite: 34]</p>
                  </div>
                </div>
              </div>

              {/* IMAGE ARCHITECTURE */}
              <div className="md:col-span-2 relative group max-w-[350px]">
                <div className="absolute inset-0 border-2 border-[#64ffda] rounded-sm translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                <div className="relative bg-[#112240] rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4]">
                  {/* REPLACE WITH YOUR IMAGE PATH: ./assets/karthik.jpg */}
                  <img 
                    src="/karthik.jpg" 
                    alt="Karthik Thorlapati" 
                    className="w-full h-full object-cover mix-blend-screen hover:mix-blend-normal transition-all"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* TECHNICAL STACK */}
        <section id="skills" className="py-32">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-16">02. Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                <h4 className="text-[#64ffda] font-mono text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Icons.Cpu size={14}/> Languages
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">Python (Expert) [cite: 10]</li>
                  <li className="flex items-center gap-2">JavaScript (ES6+) [cite: 10]</li>
                  <li className="flex items-center gap-2">C / C++ [cite: 10]</li>
                  <li className="flex items-center gap-2">SQL [cite: 10]</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#64ffda] font-mono text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Icons.Terminal size={14}/> Backend
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>FastAPI & Node.js [cite: 11]</li>
                  <li>AsyncIO & Microservices [cite: 11]</li>
                  <li>RESTful API Design [cite: 11]</li>
                  <li>Redis (Queuing/PubSub) [cite: 12]</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#64ffda] font-mono text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Icons.Database size={14}/> Infrastructure
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>PostgreSQL & MongoDB [cite: 12]</li>
                  <li>Docker Containerization [cite: 12]</li>
                  <li>Linux System Admin [cite: 12]</li>
                  <li>Git Version Control [cite: 12]</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ENGINEERING PROJECTS */}
        <section id="projects" className="py-32">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-16">03. Featured Systems</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* RAG SYSTEM */}
              <div className="bg-[#112240] p-10 rounded-sm border border-white/5 hover:border-[#64ffda]/30 transition-all duration-500 group relative">
                <div className="flex justify-between items-start mb-8">
                  <Icons.Zap className="text-[#64ffda]" size={36} />
                  <div className="flex gap-4 text-[#8892b0]">
                    <Icons.Github size={20} className="hover:text-[#64ffda] cursor-pointer" />
                    <Icons.ExternalLink size={20} className="hover:text-[#64ffda] cursor-pointer" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-[#e6f1ff] mb-4 group-hover:text-[#64ffda] transition-colors">
                  Real-Time Streaming RAG System [cite: 14]
                </h4>
                <p className="text-sm leading-relaxed mb-8 opacity-80">
                  Architected a Retrieval-Augmented Generation system using Groq LPU and WebSockets 
                  to deliver sub-second latency responses for concurrent document querying[cite: 17, 18].
                </p>
                <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest opacity-50">
                  <span>Python</span><span>FastAPI</span><span>Redis</span><span>Groq</span><span>Docker</span> [cite: 15]
                </div>
              </div>

              {/* ASYNC TASK PROCESSOR */}
              <div className="bg-[#112240] p-10 rounded-sm border border-white/5 hover:border-[#64ffda]/30 transition-all duration-500 group relative">
                <div className="flex justify-between items-start mb-8">
                  <Icons.Layers className="text-[#64ffda]" size={36} />
                  <div className="flex gap-4 text-[#8892b0]">
                    <Icons.Github size={20} className="hover:text-[#64ffda] cursor-pointer" />
                    <Icons.ExternalLink size={20} className="hover:text-[#64ffda] cursor-pointer" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-[#e6f1ff] mb-4 group-hover:text-[#64ffda] transition-colors">
                  Async Task Execution Engine [cite: 21]
                </h4>
                <p className="text-sm leading-relaxed mb-8 opacity-80">
                  Developed a fault-tolerant asynchronous processor utilizing Redis as a message 
                  broker to offload heavy computations and maintain API reliability[cite: 24, 25].
                </p>
                <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest opacity-50">
                  <span>AsyncIO</span><span>Redis</span><span>JSON-RPC</span><span>Python</span> [cite: 22]
                </div>
              </div>

            </div>
          </Reveal>
        </section>

        {/* CONTACT / CONNECT */}
        <section id="contact" className="py-40 text-center max-w-2xl mx-auto">
          <Reveal>
            <h3 className="text-4xl md:text-6xl font-bold text-[#e6f1ff] mb-8 tracking-tight">Connect</h3>
            <p className="text-lg mb-16 leading-relaxed">
              Actively seeking SDE opportunities to contribute to high-performance system 
              engineering and backend optimization.
            </p>
            <div className="flex justify-center gap-12 mb-20">
              <a href="mailto:karthikthorlapati33@gmail.com" className="text-[#8892b0] hover:text-[#64ffda] transition-all hover:-translate-y-2">
                <Icons.Mail size={32} />
              </a>
              <a href="https://github.com/karthikthorlapati" className="text-[#8892b0] hover:text-[#64ffda] transition-all hover:-translate-y-2">
                <Icons.Github size={32} />
              </a>
              <a href="https://linkedin.com/in/karthikthorlapati" className="text-[#8892b0] hover:text-[#64ffda] transition-all hover:-translate-y-2">
                <Icons.Linkedin size={32} />
              </a>
            </div>
            <a href="mailto:karthikthorlapati33@gmail.com" className="px-12 py-5 border border-[#64ffda] text-[#64ffda] rounded-sm hover:bg-[#64ffda]/10 transition-all font-mono tracking-widest text-sm">
              INITIATE CONTACT
            </a>
          </Reveal>
        </section>

      </main>

      <footer className="py-12 border-t border-white/5 text-center font-mono text-[10px] opacity-30 tracking-[0.4em] uppercase">
        Karthik Thorlapati — Aditya University — 2026 [cite: 1, 31]
      </footer>
    </div>
  );
}