import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react'; // Using wildcard to prevent export errors

const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen font-sans selection:bg-[#233554] selection:text-[#64ffda]">
      
      {/* HEADER / NAVIGATION */}
      <nav className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 backdrop-blur-md bg-[#0a192f]/80 border-b border-white/5">
        <div className="text-[#64ffda] font-mono font-bold text-xl">KT.</div>
        <ul className="hidden md:flex gap-8 font-mono text-xs">
          <li><a href="#about" className="hover:text-[#64ffda]">01. About</a></li>
          <li><a href="#skills" className="hover:text-[#64ffda]">02. Skills</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda]">03. Projects</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda]">04. Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="h-screen flex flex-col justify-center">
          <p className="text-[#64ffda] font-mono mb-5">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#e6f1ff] mb-4">Karthik Thorlapati.</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8">Engineering high-performance backends.</h2>
          <p className="max-w-xl text-lg mb-12">
            Software Development Engineer specializing in distributed systems and backend architecture. 
            I focus on sub-second latency and system reliability[cite: 8].
          </p>
          <a href="#projects" className="w-fit px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono">
            Check out my work!
          </a>
        </section>

        {/* ABOUT & EDUCATION */}
        <section id="about" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10 flex items-center">
              <span className="text-[#64ffda] font-mono text-xl mr-2">01.</span> About Me
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p>
                  I am a student at <strong>Aditya University</strong> pursuing a B.Tech in 
                  Artificial Intelligence and Machine Learning[cite: 31, 32]. 
                  I currently hold a <strong>CGPA of 8.26/10.0</strong>.
                </p>
                <p>
                  My expertise includes <strong>Python (Expert)</strong>, FastAPI, and the MERN stack. 
                  I have completed over 1000 hours of intensive training in DSA and system design[cite: 29].
                </p>
              </div>
              <div className="bg-[#112240] p-6 rounded border-l-4 border-[#64ffda]">
                <h4 className="text-[#e6f1ff] font-bold mb-2">Education</h4>
                <p className="text-sm">B.Tech in AI & ML</p>
                <p className="text-[#64ffda] font-mono text-xs">Aditya University | 2023-2027 [cite: 31, 32]</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10">03. Engineering Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Project 1 */}
              <div className="bg-[#112240] p-8 rounded hover:-translate-y-2 transition-all">
                <Icons.Cpu className="text-[#64ffda] mb-4" size={32} />
                <h4 className="text-xl font-bold text-[#e6f1ff] mb-2">Real-Time Streaming RAG System</h4>
                <p className="text-sm mb-4">
                  Engineered a system using <strong>Groq LPU</strong> and <strong>WebSockets</strong> for 
                  high-speed document querying and sub-second responses[cite: 14, 15, 17].
                </p>
                <div className="flex gap-3 text-[10px] font-mono opacity-60">
                  <span>FastAPI</span><span>Redis</span><span>Docker</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-[#112240] p-8 rounded hover:-translate-y-2 transition-all">
                <Icons.Terminal className="text-[#64ffda] mb-4" size={32} />
                <h4 className="text-xl font-bold text-[#e6f1ff] mb-2">Asynchronous Task Processor</h4>
                <p className="text-sm mb-4">
                  Developed an execution engine using <strong>AsyncIO</strong> and <strong>Redis</strong> as a 
                  message broker to offload heavy computations[cite: 21, 24, 25].
                </p>
                <div className="flex gap-3 text-[10px] font-mono opacity-60">
                  <span>Python</span><span>Redis</span><span>JSON-RPC</span>
                </div>
              </div>

            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 text-center">
          <Reveal>
            <h3 className="text-4xl font-bold text-[#e6f1ff] mb-6">Let's Connect</h3>
            <p className="mb-10 max-w-lg mx-auto">
              I am currently seeking SDE opportunities. Whether you have a question or just want to say hi, 
              my inbox is always open!
            </p>
            <div className="flex justify-center gap-8 mb-12">
              <a href="mailto:karthikthorlapati33@gmail.com" className="hover:text-[#64ffda] transition-colors">
                <Icons.Mail size={32} />
              </a>
              <a href="https://github.com/karthikthorlapati" className="hover:text-[#64ffda] transition-colors">
                <Icons.Github size={32} />
              </a>
              {/* Using a generic icon if Linkedin continues to fail in the build */}
              <a href="https://linkedin.com/in/karthikthorlapati" className="hover:text-[#64ffda] transition-colors">
                <Icons.ExternalLink size={32} />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="py-10 text-center font-mono text-[10px] opacity-40 uppercase tracking-widest">
        Karthik Thorlapati © 2026 | Aditya University [cite: 1, 31]
      </footer>
    </div>
  );
}