import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Change line 3 to use GitHub (H) and LinkedIn (I)
import { GitHub, LinkedIn, Mail, ExternalLink, Code2, Database, Terminal, Cpu } from 'lucide-react';

// REUSABLE REVEAL ANIMATION
const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen font-sans selection:bg-[#233554] selection:text-[#64ffda]">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 backdrop-blur-md bg-[#0a192f]/80">
        <div className="text-[#64ffda] font-mono font-bold text-xl tracking-tighter">KT.</div>
        <ul className="hidden md:flex gap-8 font-mono text-xs">
          <li><a href="#about" className="hover:text-[#64ffda] transition-colors">01. About</a></li>
          <li><a href="#skills" className="hover:text-[#64ffda] transition-colors">02. Skills</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda] transition-colors">03. Projects</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda] transition-colors">04. Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION - PARALLAX ENABLED */}
        <section className="h-screen flex flex-col justify-center">
          <motion.div style={{ y: yParallax }}>
            <p className="text-[#64ffda] font-mono mb-5">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#e6f1ff] mb-4">Karthik Thorlapati. [cite: 1]</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8 leading-tight">
              SDE & Backend Architect. [cite: 7]
            </h2>
            <p className="max-w-2xl text-lg mb-12">
              Software Development Engineer specializing in high-performance distributed systems 
              and backend architecture. Proficient in Python (Expert) and the MERN stack. [cite: 7, 10, 11]
            </p>
            <a href="#projects" className="px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono">
              View Featured Work
            </a>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10 flex items-center">
              <span className="text-[#64ffda] font-mono text-xl mr-2">01.</span> About Me
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-4">
                <p>I am an engineer focused on scalable AI-integrated applications and asynchronous pipelines with sub-second latency. [cite: 8]</p>
                <p>I am currently pursuing a B.Tech in AI and ML at <strong>Aditya University</strong> with a CGPA of <strong>8.26/10.0</strong>. </p>
                <p>I am also an active open-source contributor, maintaining repositories for Python backend optimizations. [cite: 28]</p>
              </div>
              <div className="border-2 border-[#64ffda] rounded p-2 h-fit">
                <div className="bg-[#112240] aspect-square flex items-center justify-center text-[#64ffda]">
                  <Terminal size={80} />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10">02. Technical Skills [cite: 9]</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
              <div className="space-y-2">
                <p className="text-[#64ffda] font-bold underline">Languages</p>
                <p>Python [cite: 10]</p><p>JavaScript [cite: 10]</p><p>C / C++ [cite: 10]</p><p>SQL [cite: 10]</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#64ffda] font-bold underline">Backend</p>
                <p>FastAPI [cite: 11]</p><p>Node.js [cite: 11]</p><p>Express.js [cite: 11]</p><p>AsyncIO [cite: 11]</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#64ffda] font-bold underline">Database</p>
                <p>PostgreSQL [cite: 12]</p><p>MongoDB [cite: 12]</p><p>Redis [cite: 12]</p><p>MySQL [cite: 12]</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#64ffda] font-bold underline">Tools</p>
                <p>Docker [cite: 12]</p><p>Git [cite: 12]</p><p>Postman [cite: 12]</p><p>Linux [cite: 12]</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10">03. Engineering Projects [cite: 13]</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Project 1 */}
              <div className="bg-[#112240] p-8 rounded border-b-4 border-transparent hover:border-[#64ffda] transition-all group">
                <div className="flex justify-between text-[#64ffda] mb-6">
                  <Cpu size={32} />
                  <a href="#"><Github size={20} /></a>
                </div>
                <h4 className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda]">Real-Time Streaming RAG [cite: 14]</h4>
                <p className="text-sm">Engineered a RAG system using Groq LPU and WebSockets for real-time AI document querying. [cite: 17, 18]</p>
                <p className="mt-4 text-[10px] font-mono opacity-50">FastAPI • Redis • Docker • Groq</p>
              </div>

              {/* Project 2 */}
              <div className="bg-[#112240] p-8 rounded border-b-4 border-transparent hover:border-[#64ffda] transition-all group">
                <div className="flex justify-between text-[#64ffda] mb-6">
                  <Terminal size={32} />
                  <a href="#"><Github size={20} /></a>
                </div>
                <h4 className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda]">Async Task Processor [cite: 21]</h4>
                <p className="text-sm">Built an asynchronous task execution engine using Redis as a message broker to reduce latency. [cite: 24, 25]</p>
                <p className="mt-4 text-[10px] font-mono opacity-50">Python • AsyncIO • Redis • JSON-RPC</p>
              </div>

            </div>
          </Reveal>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
          <Reveal>
            <h3 className="text-4xl font-bold text-[#e6f1ff] mb-6">Get In Touch</h3>
            <p className="mb-10 text-lg italic tracking-wide text-[#64ffda]">Building for sub-second latency and reliability. [cite: 8]</p>
            <div className="flex justify-center gap-10">
              <a href="mailto:karthikthorlapati33@gmail.com" className="hover:text-[#64ffda] transition-all hover:-translate-y-1"><Mail size={32} /></a>
              <a href="#" className="hover:text-[#64ffda] transition-all hover:-translate-y-1"><Github size={32} /></a>
              <a href="#" className="hover:text-[#64ffda] transition-all hover:-translate-y-1"><Linkedin size={32} /></a>
            </div>
          </Reveal>
        </section>

      </main>

      <footer className="py-10 text-center font-mono text-xs opacity-50">
        Karthik Thorlapati © 2026 | Built with Vite & Framer Motion
      </footer>
    </div>
  );
}