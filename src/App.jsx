import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react'; 

const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen font-sans selection:bg-[#233554] selection:text-[#64ffda]">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 backdrop-blur-md bg-[#0a192f]/80">
        <div className="text-[#64ffda] font-mono font-bold text-xl tracking-tighter">KT.</div>
        <ul className="hidden md:flex gap-8 font-mono text-[11px] tracking-widest">
          <li><a href="#about" className="hover:text-[#64ffda] transition-colors">01. ABOUT</a></li>
          <li><a href="#skills" className="hover:text-[#64ffda] transition-colors">02. SKILLS</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda] transition-colors">03. PROJECTS</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda] transition-colors">04. CONTACT</a></li>
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="h-screen flex flex-col justify-center relative">
          <motion.div style={{ y: yParallax }}>
            <p className="text-[#64ffda] font-mono mb-5">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#e6f1ff] mb-4">Karthik Thorlapati.</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8 leading-tight">
              I build scalable backend systems.
            </h2>
            <p className="max-w-xl text-lg mb-12 leading-relaxed">
              Software Development Engineer specializing in high-performance distributed architectures. 
              Expert in Python and the MERN stack, with a focus on sub-second latency.
            </p>
            <a href="#projects" className="w-fit px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono text-sm">
              Explore Projects
            </a>
          </motion.div>
        </section>

        {/* ABOUT & EDUCATION */}
        <section id="about" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-12 flex items-center">
              <span className="text-[#64ffda] font-mono text-xl mr-2">01.</span> About Me
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-4">
                <p>
                  I am a Software Development Engineer driven by the challenge of engineering 
                  fault-tolerant task pipelines and AI-integrated applications. 
                </p>
                <p>
                  Currently, I am pursuing my B.Tech in Artificial Intelligence and Machine Learning 
                  at <strong>Aditya University</strong>, maintaining a <strong>CGPA of 8.26/10.0</strong>.
                </p>
                <div className="pt-4 flex gap-4">
                   <div className="flex flex-col">
                      <span className="text-[#64ffda] font-mono text-xs">RESUME UPDATED</span>
                      <span className="text-[#e6f1ff] font-bold">Ready for Amazon SDE</span>
                   </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                <div className="bg-[#112240] aspect-square rounded flex items-center justify-center text-[#64ffda]">
                   <Icons.Terminal size={80} />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-12">02. Technical Proficiency</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h4 className="text-[#e6f1ff] font-bold text-sm">Languages</h4>
                <ul className="font-mono text-xs space-y-2">
                   <li>Python (Expert)</li><li>JavaScript</li><li>C / C++</li><li>SQL</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-[#e6f1ff] font-bold text-sm">Backend</h4>
                <ul className="font-mono text-xs space-y-2">
                   <li>FastAPI</li><li>Node.js</li><li>AsyncIO</li><li>REST APIs</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-[#e6f1ff] font-bold text-sm">Databases</h4>
                <ul className="font-mono text-xs space-y-2">
                   <li>PostgreSQL</li><li>MongoDB</li><li>Redis</li><li>MySQL</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-[#e6f1ff] font-bold text-sm">DevOps</h4>
                <ul className="font-mono text-xs space-y-2">
                   <li>Docker</li><li>Git</li><li>Linux</li><li>Postman</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-12">03. Featured Engineering</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-[#112240] p-8 rounded-lg hover:-translate-y-2 transition-all duration-300 group border-b-2 border-transparent hover:border-[#64ffda]">
                <Icons.Cpu className="text-[#64ffda] mb-6" size={32} />
                <h4 className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda]">Real-Time Streaming RAG</h4>
                <p className="text-sm leading-relaxed mb-6">
                  Engineered a Retrieval-Augmented Generation system using Groq LPU and WebSockets 
                  to deliver real-time AI responses with sub-second latency.
                </p>
                <div className="flex gap-3 font-mono text-[10px] opacity-50">
                  <span>FastAPI</span><span>Redis</span><span>Docker</span><span>Groq</span>
                </div>
              </div>

              <div className="bg-[#112240] p-8 rounded-lg hover:-translate-y-2 transition-all duration-300 group border-b-2 border-transparent hover:border-[#64ffda]">
                <Icons.Layers className="text-[#64ffda] mb-6" size={32} />
                <h4 className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda]">Async Task Processor</h4>
                <p className="text-sm leading-relaxed mb-6">
                  Developed an asynchronous execution engine utilizing Redis as a message broker 
                  for fault-tolerant task distribution and priority scheduling.
                </p>
                <div className="flex gap-3 font-mono text-[10px] opacity-50">
                  <span>Python</span><span>AsyncIO</span><span>Redis</span><span>JSON-RPC</span>
                </div>
              </div>

            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 text-center max-w-xl mx-auto">
          <Reveal>
            <h3 className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mb-6">Get In Touch</h3>
            <p className="mb-12">
              I am currently seeking SDE opportunities where I can contribute to building 
              scalable, high-performance systems.
            </p>
            <div className="flex justify-center gap-12 mb-16">
              <a href="mailto:karthikthorlapati33@gmail.com" className="text-[#8892b0] hover:text-[#64ffda] transition-colors"><Icons.Mail size={32} /></a>
              <a href="https://github.com/karthikthorlapati" className="text-[#8892b0] hover:text-[#64ffda] transition-colors"><Icons.Github size={32} /></a>
              <a href="https://linkedin.com/in/karthikthorlapati" className="text-[#8892b0] hover:text-[#64ffda] transition-colors"><Icons.ExternalLink size={32} /></a>
            </div>
            <a href="mailto:karthikthorlapati33@gmail.com" className="px-10 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono">
              Contact Me
            </a>
          </Reveal>
        </section>

      </main>

      <footer className="py-10 text-center font-mono text-[10px] opacity-30 tracking-[0.2em]">
        Karthik Thorlapati — Aditya University — 2026
      </footer>
    </div>
  );
}