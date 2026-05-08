import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, Cpu } from 'lucide-react';

// 1. REUSABLE ANIMATION WRAPPER
const Reveal = ({ children, width = "100%" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

// 2. HERO SECTION (With Parallax)
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="h-screen flex flex-col justify-center relative overflow-hidden">
      <motion.div style={{ y, opacity }} className="z-10">
        <p className="text-[#64ffda] font-mono mb-5">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#e6f1ff] mb-4">
          Karthik Thorlapati.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8 leading-tight">
          SDE & Backend Architect.
        </h2>
        <p className="max-w-2xl text-[#8892b0] text-lg mb-12">
          I specialize in building high-performance distributed systems, 
          scalable AI-integrated applications, and asynchronous task pipelines 
          with a focus on sub-second latency[cite: 7, 8].
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono">
            View My Projects
          </a>
          <a href="mailto:karthikthorlapati33@gmail.com" className="px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded hover:bg-[#64ffda]/80 transition-all font-mono font-bold">
            Hire Me
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
        className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-[#64ffda]/5 rounded-full blur-[120px] -z-0"
      />
    </section>
  );
};

// 3. MAIN APP
export default function App() {
  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen font-sans selection:bg-[#233554] selection:text-[#64ffda]">
      
      <nav className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 backdrop-blur-md bg-[#0a192f]/80 border-b border-white/5">
        <div className="text-[#64ffda] font-mono font-bold text-xl tracking-tighter">KT.</div>
        <ul className="hidden md:flex gap-8 font-mono text-xs">
          <li><a href="#about" className="hover:text-[#64ffda] transition-colors">01. About</a></li>
          <li><a href="#skills" className="hover:text-[#64ffda] transition-colors">02. Skills</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda] transition-colors">03. Projects</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda] transition-colors">04. Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12">
        
        <Hero />

        {/* ABOUT & EDUCATION */}
        <section id="about" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10 flex items-center">
              <span className="text-[#64ffda] font-mono text-xl mr-2">01.</span> About Me
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-4">
                <p>
                  I am a Software Development Engineer with a passion for high-performance backend 
                  architectures and AI systems[cite: 7]. I currently hold a 8.26 / 10.0 CGPA 
                  at Aditya University, pursuing my B.Tech in AI & ML[cite: 31, 32, 33].
                </p>
                <p>
                  My expertise lies in engineering asynchronous task pipelines and real-time data 
                  streaming using Python and the MERN stack[cite: 7, 8]. I am an active open-source 
                  contributor focused on Python backend optimizations[cite: 28].
                </p>
                <div className="bg-[#112240] p-6 rounded-lg border-l-4 border-[#64ffda] mt-8">
                  <h4 className="text-[#e6f1ff] font-bold mb-2">Education</h4>
                  <p className="text-sm">B.Tech in Artificial Intelligence & Machine Learning [cite: 32]</p>
                  <p className="text-[#64ffda] font-mono text-xs">Aditya University, 2023 - 2027 [cite: 31, 34]</p>
                </div>
              </div>
              <div className="relative group h-fit">
                <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform -z-10"></div>
                <div className="bg-[#64ffda]/20 aspect-square rounded overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                   <div className="w-full h-full flex items-center justify-center text-[#64ffda]">
                      <Terminal size={100} />
                   </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10">02. Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h4 className="text-[#64ffda] font-mono text-sm flex items-center gap-2"><Cpu size={16}/> Languages</h4>
                <ul className="text-sm space-y-2">
                   <li>Python (Expert) [cite: 10]</li><li>JavaScript (ES6+) [cite: 10]</li><li>C / C++ [cite: 10]</li><li>SQL [cite: 10]</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#64ffda] font-mono text-sm flex items-center gap-2"><Code2 size={16}/> Backend</h4>
                <ul className="text-sm space-y-2">
                   <li>FastAPI & AsyncIO [cite: 11]</li><li>Node.js & Express.js [cite: 11]</li><li>REST APIs & Microservices [cite: 11]</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#64ffda] font-mono text-sm flex items-center gap-2"><Database size={16}/> Databases</h4>
                <ul className="text-sm space-y-2">
                   <li>MongoDB & PostgreSQL [cite: 12]</li><li>Redis (Pub/Sub & Queuing) [cite: 12]</li><li>MySQL [cite: 12]</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#64ffda] font-mono text-sm flex items-center gap-2"><Terminal size={16}/> DevOps</h4>
                <ul className="text-sm space-y-2">
                   <li>Docker & Docker Compose [cite: 12, 20]</li><li>Git / GitHub [cite: 12]</li><li>Linux [cite: 12]</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10">03. Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Project 1: RAG System */}
              <motion.div whileHover={{ y: -10 }} className="bg-[#112240] p-8 rounded-lg flex flex-col justify-between border-t-2 border-transparent hover:border-[#64ffda] transition-all duration-300">
                <div>
                  <div className="flex justify-between items-center mb-6 text-[#64ffda]">
                    <Cpu size={30} />
                    <div className="flex gap-4">
                      <a href="https://github.com" className="hover:text-white"><Github size={20}/></a>
                      <ExternalLink size={20} className="opacity-50" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#e6f1ff] mb-2">Real-Time Streaming RAG System </h4>
                  <p className="text-sm mb-4">Engineered a Retrieval-Augmented Generation system using Groq LPU and WebSockets to deliver real-time AI responses[cite: 17, 18].</p>
                </div>
                <ul className="flex flex-wrap gap-3 font-mono text-[10px] mt-4 opacity-70">
                  <li>Python</li><li>FastAPI</li><li>Redis</li><li>Docker</li><li>Groq</li>
                </ul>
              </motion.div>

              {/* Project 2: Task Processor */}
              <motion.div whileHover={{ y: -10 }} className="bg-[#112240] p-8 rounded-lg flex flex-col justify-between border-t-2 border-transparent hover:border-[#64ffda] transition-all duration-300">
                <div>
                  <div className="flex justify-between items-center mb-6 text-[#64ffda]">
                    <Terminal size={30} />
                    <div className="flex gap-4">
                      <a href="https://github.com" className="hover:text-white"><Github size={20}/></a>
                      <ExternalLink size={20} className="opacity-50" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#e6f1ff] mb-2">Scalable Asynchronous Task Processor </h4>
                  <p className="text-sm mb-4">Developed a fault-tolerant task execution engine using AsyncIO and Redis as a message broker to reduce API latency[cite: 24, 25].</p>
                </div>
                <ul className="flex flex-wrap gap-3 font-mono text-[10px] mt-4 opacity-70">
                  <li>AsyncIO</li><li>Redis</li><li>JSON-RPC</li><li>Python</li>
                </ul>
              </motion.div>

              {/* Project 3: MERN Project Placeholder */}
              <motion.div whileHover={{ y: -10 }} className="bg-[#112240] p-8 rounded-lg flex flex-col justify-between border-t-2 border-transparent hover:border-[#64ffda] transition-all duration-300 md:col-span-2">
                <div className="flex gap-8 items-center">
                  <div className="text-[#64ffda] hidden md:block"><Code2 size={60} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#e6f1ff] mb-2">MERN Full-Stack Development [cite: 7]</h4>
                    <p className="text-sm">Experienced in building end-to-end applications using MongoDB, Express, React, and Node.js for scalable web solutions[cite: 7, 11, 12].</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-[#64ffda] font-mono mb-4 text-sm">04. Get In Touch</p>
            <h3 className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mb-6">Let's Connect</h3>
            <p className="mb-10">
              I am currently looking for SDE opportunities where I can apply my skills in backend 
              architecture and high-performance systems[cite: 7, 8].
            </p>
            
            <div className="flex justify-center gap-10 mb-12">
              <a href="mailto:karthikthorlapati33@gmail.com" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all flex flex-col items-center gap-2">
                <Mail size={32} /><span className="text-[10px] font-mono uppercase tracking-widest">Email</span>
              </a>
              <a href="https://github.com/karthikthorlapati" target="_blank" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all flex flex-col items-center gap-2">
                <Github size={32} /><span className="text-[10px] font-mono uppercase tracking-widest">Github</span>
              </a>
              <a href="https://linkedin.com/in/karthikthorlapati" target="_blank" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all flex flex-col items-center gap-2">
                <Linkedin size={32} /><span className="text-[10px] font-mono uppercase tracking-widest">LinkedIn</span>
              </a>
            </div>

            <a 
              href="mailto:karthikthorlapati33@gmail.com" 
              className="px-12 py-5 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono text-lg"
            >
              Contact Me [cite: 3]
            </a>
          </Reveal>
        </section>

      </main>

      <footer className="py-10 text-center font-mono text-[10px] opacity-40">
        <p>Karthik Thorlapati © 2026 [cite: 1]</p>
        <p className="mt-2 tracking-widest">BUILDING FOR SUB-SECOND LATENCY </p>
      </footer>
    </div>
  );
}