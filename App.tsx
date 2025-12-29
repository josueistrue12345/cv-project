
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Cpu, 
  Code2, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  ChevronRight,
  ExternalLink,
  Sparkles,
  Bot
} from 'lucide-react';
import { CV_DATA } from './constants';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mono"
      >
        JOSUÉ.DEV
      </motion.span>
      <div className="flex gap-6 text-sm font-medium">
        {['Experiencia', 'Proyectos', 'Habilidades', 'IA'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-4">
    <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 uppercase tracking-wider"
      >
        <Sparkles size={14} /> Available for New Challenges
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
      >
        {CV_DATA.name}
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {CV_DATA.titles.map((title, i) => (
          <span key={i} className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium shadow-xl">
            {title}
          </span>
        ))}
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-3xl text-slate-400 text-lg leading-relaxed mb-10"
      >
        {CV_DATA.summary}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a href={CV_DATA.contact.linkedin} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all hover:scale-105">
          <Linkedin size={20} /> LinkedIn
        </a>
        <a href={CV_DATA.contact.github} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all hover:scale-105 border border-slate-700">
          <Github size={20} /> GitHub
        </a>
        <a href={`mailto:${CV_DATA.contact.email}`} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent hover:bg-slate-900 text-slate-300 font-semibold transition-all border border-slate-800">
          <Mail size={20} /> Contactar
        </a>
      </motion.div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experiencia" className="py-20 px-4 bg-slate-900/50">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
          <Briefcase size={24} />
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Experiencia Profesional</h2>
      </div>
      <div className="space-y-8">
        {CV_DATA.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-indigo-500 before:to-transparent"
          >
            <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-indigo-500 border-4 border-slate-950 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors group">
              <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                  <p className="text-indigo-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-500 text-sm mono bg-slate-800/50 px-3 py-1 rounded-full h-fit">{exp.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {exp.achievements.map((ach, j) => (
                  <li key={j} className="text-slate-400 text-sm flex gap-3 leading-relaxed">
                    <ChevronRight size={16} className="text-indigo-500 shrink-0 mt-1" />
                    {ach}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, j) => (
                  <span key={j} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="proyectos" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
          <Terminal size={24} />
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Proyectos Destacados</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CV_DATA.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
              {project.company && (
                <span className="text-[10px] text-slate-500 uppercase tracking-widest bg-slate-800 px-2 py-0.5 rounded">{project.company}</span>
              )}
            </div>
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Problema</p>
              <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="mb-6 flex-grow">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Impacto</p>
              <p className="text-emerald-400/90 text-sm italic leading-relaxed">"{project.impact}"</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, j) => (
                <span key={j} className="text-[10px] px-2 py-1 rounded bg-slate-950 text-slate-500 border border-slate-800">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AISummary = () => {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("Full Stack Developer");

  const generateSummary = async () => {
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analiza mi perfil y genera una justificación de 3 frases sobre por qué soy el candidato ideal para el puesto de ${role}. Usa estos datos: ${JSON.stringify(CV_DATA.summary)} ${JSON.stringify(CV_DATA.experience)}`,
        config: {
          systemInstruction: "Eres un reclutador experto que destaca las fortalezas de Josué Hernández Gutiérrez basándose únicamente en su currículum. Sé profesional y convincente."
        }
      });
      setSummary(response.text || "No se pudo generar el resumen.");
    } catch (error) {
      setSummary("Error conectando con la IA. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ia" className="py-20 px-4 bg-indigo-950/20 border-y border-indigo-500/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-6">
          <Bot size={32} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Gemini AI Resume Summarizer</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          ¿Quieres ver cómo encajo en tu equipo? Selecciona un rol y deja que la IA resuma mi experiencia específicamente para tus necesidades.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <select 
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option>Full Stack Developer</option>
            <option>AI Engineer</option>
            <option>Frontend Specialist</option>
            <option>Tech Lead</option>
          </select>
          <button
            onClick={generateSummary}
            disabled={loading}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all disabled:opacity-50"
          >
            {loading ? "Analizando perfil..." : "Generar Resumen IA"}
          </button>
        </div>

        <AnimatePresence>
          {summary && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-slate-900/80 border border-indigo-500/30 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 text-indigo-500/20">
                <Sparkles size={40} />
              </div>
              <p className="text-indigo-100 leading-relaxed italic">
                "{summary}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const SkillsSection = () => (
  <section id="habilidades" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-2xl bg-slate-500/10 text-slate-400">
          <Cpu size={24} />
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Habilidades Técnicas</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {CV_DATA.skills.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, j) => (
                <span key={j} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm hover:border-slate-700 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-10 px-4 border-t border-slate-900">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Josué Hernández Gutiérrez. Construido con React & Gemini API.
      </div>
      <div className="flex gap-6">
        <a href={CV_DATA.contact.github} target="_blank" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
        <a href={CV_DATA.contact.linkedin} target="_blank" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
        <a href={`mailto:${CV_DATA.contact.email}`} className="text-slate-500 hover:text-white transition-colors"><Mail size={20} /></a>
      </div>
    </div>
  </footer>
);

const FloatingContact = () => (
  <div className="fixed bottom-6 left-6 z-40 hidden lg:flex flex-col gap-4">
    <div className="flex flex-col items-center gap-4 py-4 px-2 rounded-full bg-slate-900/50 backdrop-blur border border-slate-800">
      <a href={`tel:${CV_DATA.contact.phone}`} className="p-3 rounded-full hover:bg-slate-800 text-slate-400 hover:text-indigo-400 transition-all" title="Llamar">
        <Phone size={20} />
      </a>
      <div className="w-8 h-px bg-slate-800" />
      <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] text-slate-500 font-bold uppercase tracking-widest whitespace-nowrap">
        {CV_DATA.location.split('—')[0]}
      </span>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <AISummary />
      <SkillsSection />
      
      {/* Education & Languages */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8 text-indigo-400">
              <GraduationCap size={24} />
              <h2 className="text-2xl font-bold text-white tracking-tight">Formación</h2>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Ingeniería en Sistemas Computacionales</h3>
              <p className="text-indigo-400 font-medium">UTEL University</p>
              <p className="text-slate-500 text-sm mt-2">2019 – 2025</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8 text-emerald-400">
              <Languages size={24} />
              <h2 className="text-2xl font-bold text-white tracking-tight">Idiomas</h2>
            </div>
            <div className="space-y-4">
              {CV_DATA.languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="font-bold text-slate-200">{lang.language}</span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
      
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
