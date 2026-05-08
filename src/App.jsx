import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
/**
 * ARCHITECTURE NOTE:
 * We use a "Flat Component" structure here for clarity, but in a larger 
 * project, these would be in separate files under /src/sections/.
 */
const Github = () => <span>GH</span>;
const Linkedin = () => <span>IN</span>;
const Mail = () => <span>@</span>;
const ExternalLink = () => <span>↗</span>;
// 1. REUSABLE ANIMATION WRAPPER (Requirement: On-Scroll Animations)
// This component "reveals" content as the user scrolls down.
const Reveal = ({ children, width = "fit-content" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

// 2. HERO SECTION (Requirement: Parallax Effect)
const Hero = () => {
  const { scrollY } = useScroll();
  // Text moves slower than the scroll (0 to 500px scroll = 0 to 200px movement)
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="h-screen flex flex-col justify-center relative overflow-hidden">
      <motion.div style={{ y, opacity }} className="z-10">
        <p className="text-[#64ffda] font-mono mb-5">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#e6f1ff] mb-4">
          Your Name.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8">
          I build digital solutions.
        </h2>
        <p className="max-w-xl text-[#8892b0] text-lg mb-12">
          I'm a software developer specializing in creating high-performance 
          web applications with modern UI and smooth animations.
        </p>
        <a href="#projects" className="px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono">
          Check out my work!
        </a>
      </motion.div>
      
      {/* Parallax Background Circle */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, 400]) }}
        className="absolute right-[-5%] top-[20%] w-96 h-96 bg-[#64ffda]/5 rounded-full blur-3xl -z-0"
      />
    </section>
  );
};

// 3. MAIN APP COMPONENT
export default function App() {
  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen font-sans selection:bg-[#233554] selection:text-[#64ffda]">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 backdrop-blur-md bg-[#0a192f]/80">
        <div className="text-[#64ffda] font-mono font-bold text-xl">Portfolio.</div>
        <ul className="hidden md:flex gap-8 font-mono text-xs">
          <li><a href="#about" className="hover:text-[#64ffda] transition-colors">01. About</a></li>
          <li><a href="#skills" className="hover:text-[#64ffda] transition-colors">02. Skills</a></li>
          <li><a href="#projects" className="hover:text-[#64ffda] transition-colors">03. Projects</a></li>
          <li><a href="#contact" className="hover:text-[#64ffda] transition-colors">04. Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto px-6 md:px-12">
        
        <Hero />

        {/* ABOUT SECTION (Mandatory Section 2) */}
        <section id="about" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10 flex items-center">
              <span className="text-[#64ffda] font-mono text-xl mr-2">01.</span> About Me
            </h3>
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2 space-y-4">
                <p>Hello! I'm a developer who enjoys turning complex problems into simple, beautiful interface designs.</p>
                <p>My journey in tech started back in 2022, and since then I've been focused on mastering modern frontend frameworks and clean code principles.</p>
                <p>I’m currently learning 3D web technologies and expanding my knowledge in backend architecture.</p>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform -z-10"></div>
                <img 
                  src="https://via.placeholder.com/300" 
                  alt="My Profile" 
                  className="rounded grayscale hover:grayscale-0 transition-all duration-300 bg-[#64ffda]/20"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* SKILLS SECTION (Mandatory Section 3) */}
        <section id="skills" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10">02. Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Python', 'Git', 'Node.js', 'Framer Motion'].map((skill) => (
                <div key={skill} className="flex items-center space-x-2 font-mono text-sm">
                  <span className="text-[#64ffda]">▹</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* PROJECTS SECTION (Mandatory Section 4: At least 3 Projects) */}
        <section id="projects" className="py-24">
          <Reveal>
            <h3 className="text-3xl font-bold text-[#e6f1ff] mb-10">03. Built Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ y: -10 }}
                  className="bg-[#112240] p-8 rounded-lg flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-[#64ffda]"><Github size={24} /></div>
                      <div className="text-[#8892b0] group-hover:text-[#64ffda]"><ExternalLink size={20} /></div>
                    </div>
                    <h4 className="text-xl font-bold text-[#e6f1ff] mb-2">Project Name {item}</h4>
                    <p className="text-sm mb-4">A high-performance web application built to solve [X] problem using [Y] technology.</p>
                  </div>
                  <ul className="flex gap-3 font-mono text-[10px] mt-4 opacity-60">
                    <li>React</li><li>Tailwind</li><li>Vite</li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CONTACT SECTION (Mandatory Section 5) */}
        <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
          <Reveal width="100%">
            <p className="text-[#64ffda] font-mono mb-4">04. What's Next?</p>
            <h3 className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mb-6">Get In Touch</h3>
            <p className="mb-10">I’m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!</p>
            
            <div className="flex justify-center gap-8 mb-12">
              <a href="mailto:your-email@example.com" className="hover:text-[#64ffda] transition-all"><Mail size={28} /></a>
              <a href="https://github.com" target="_blank" className="hover:text-[#64ffda] transition-all"><Github size={28} /></a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-[#64ffda] transition-all"><Linkedin size={28} /></a>
            </div>

            <a 
              href="mailto:your-email@example.com" 
              className="px-10 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all font-mono"
            >
              Say Hello
            </a>
          </Reveal>
        </section>

      </main>

      <footer className="py-10 text-center font-mono text-xs opacity-50">
        <p>Built with React & Tailwind CSS</p>
        <p>© 2026 Your Name</p>
      </footer>
    </div>
  );
}