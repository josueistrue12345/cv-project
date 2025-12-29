
import { CVData } from './types';

export const CV_DATA: CVData = {
  name: "JOSUÉ HERNÁNDEZ GUTIÉRREZ",
  titles: ["Full-Stack Developer", "Frontend Developer", "AI Engineer"],
  location: "Estado de México (con reubicación) — Remoto / Híbrido",
  contact: {
    email: "josue.her.gutierrez@gmail.com",
    phone: "+52 564 002 8658",
    linkedin: "https://www.linkedin.com/in/josuetrue12345/",
    github: "https://github.com/josueistrue12345"
  },
  summary: "Desarrollador Full-Stack y Especialista en IA con más de 6 años de experiencia construyendo aplicaciones web escalables, arquitecturas modernas y soluciones de inteligencia artificial para automatización, capacitación y optimización interna. Experto en React, Node.js, NestJS, PHP, LLMs, RAG y pipelines CI/CD. Destaco por liderar proyectos técnicos, proponer arquitecturas eficientes y reducir costos mediante automatización, optimización y desarrollo de sistemas robustos.",
  experience: [
    {
      company: "MOBO",
      role: "Desarrollador Web Sr.",
      period: "Feb 2025 – Actualidad",
      technologies: ["React", "tRPC", "Hono.js", "PHP", "Laravel", "Python", "LLMs (OpenAI, Claude, Qwen, Gemini)", "RAG", "MCP", "Fine-Tuning", "Amazon Q", "GitHub Actions"],
      achievements: [
        "Implementé N8N para automatizar procesos internos, reduciendo tareas repetitivas en 70%.",
        "Propuse y diseñé un cluster interno de GPUs para ejecutar modelos LLM propios, habilitando experimentación y reduciendo dependencia externa.",
        "Automatice pipelines CI/CD en GitHub Actions, logrando una reducción del 80% en tiempos de despliegue.",
        "Optimicé plataformas internas aplicando principios de arquitectura de software y mejora continua."
      ]
    },
    {
      company: "Wundertec",
      role: "Líder Técnico",
      period: "Abr 2022 – Feb 2025",
      technologies: ["Node.js", "Docker", "Java", "Spring Boot", "React", "PostgreSQL", "Git", "NestJS", "SonarQube"],
      achievements: [
        "Diseñé e implementé infraestructura con Docker y pipelines CI/CD que redujeron 90% el tiempo de deployment.",
        "Introduje NestJS como estándar para el backend, logrando sistemas más robustos, escalables y mantenibles.",
        "Lideré equipos de desarrollo en proyectos críticos, definiendo estándares de calidad y buenas prácticas."
      ]
    },
    {
      company: "VLIM",
      role: "Desarrollador Jr. / Líder Técnico",
      period: "May 2019 – Abr 2022",
      technologies: ["Vue.js", "Node.js", "PHP", "Slim", "Symphony", "MySQL", "Flutter", "Git"],
      achievements: [
        "Desarrollé un sistema web que conectaba múltiples hoteles dentro de un complejo, reduciendo pérdidas económicas por errores en cross-charges de huéspedes.",
        "Reduje costos operativos migrando un sistema en PHP puro hacia una arquitectura basada en Vue.js.",
        "Optimicé múltiples servicios backend utilizando Slim, mejorando tiempos de respuesta y estabilidad."
      ]
    }
  ],
  projects: [
    {
      title: "Sistema de Cross-Charges para Complejos Hoteleros",
      company: "VLIM",
      problem: "Evitar pérdidas por cargos incorrectos entre hoteles de un mismo complejo.",
      technologies: ["Vue.js", "Node.js", "PHP", "Slim", "MySQL"],
      impact: "Redujo errores de cobro y pérdidas financieras mediante un sistema centralizado interoperable entre hoteles."
    },
    {
      title: "Sistema de Avatar Virtual para Capacitación",
      company: "MOBO",
      problem: "Falta de capacitación generaba malas experiencias y pérdidas por atención deficiente al cliente.",
      technologies: ["Node.js", "Three.js", "Hono.js", "TypeScript", "JavaScript", "Gemini Streaming", "Ready Player Me", "Mixamo", "Canvas"],
      impact: "Desarrollo de un avatar virtual capaz de simular clientes reales, mejorando habilidades de los vendedores y aumentando la satisfacción del cliente."
    },
    {
      title: "Cluster interno de GPUs para Vanilla LLM",
      company: "MOBO",
      problem: "Necesidad de infraestructura propia para ejecutar y experimentar con modelos LLM internos.",
      technologies: ["Python", "LLMs", "RAG", "Docker", "IA pipelines"],
      impact: "Permitió experimentación sin costos externos, acelerando iniciativas de IA en la empresa."
    },
    {
      title: "Automatización interna con N8N",
      problem: "Tareas repetitivas consumían tiempo del personal.",
      technologies: ["N8N", "APIs internas", "Webhooks", "Node.js"],
      impact: "Redujo hasta 70% el tiempo administrativo en procesos operativos."
    },
    {
      title: "Pipelines CI/CD",
      company: "Wundertec / MOBO",
      problem: "Deploys lentos y riesgosos.",
      technologies: ["Docker", "GitHub Actions", "Jenkins"],
      impact: "Reducción de 80–90% en el tiempo de despliegue y mejora en estabilidad de los releases."
    }
  ],
  skills: [
    { name: "Lenguajes", skills: ["JavaScript", "TypeScript", "PHP", "Python", "Go", "SQL"] },
    { name: "Frontend", skills: ["React", "React Native", "Vue.js", "Next.js", "Tailwind", "Three.js", "tRPC", "Canvas API"] },
    { name: "Backend", skills: ["Node.js", "NestJS", "Express", "Laravel", "Spring Boot", "Hono.js", "Slim", "PHP"] },
    { name: "IA / Data", skills: ["LLMs", "Fine-Tuning", "RAG", "Embeddings", "Vector DB (FAISS, pgvector)", "MCP", "N8N", "Flowise"] },
    { name: "Infraestructura", skills: ["Docker", "Kubernetes", "Nginx", "CI/CD", "GitHub Actions", "Jenkins", "SonarQube"] },
    { name: "Bases de Datos", skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL Server"] },
    { name: "Cloud", skills: ["AWS", "GCP", "Azure", "Cloudflare", "Firebase"] }
  ],
  education: "Ingeniería en Sistemas Computacionales — UTEL (2019 – 2025)",
  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "Intermedio Técnico" }
  ]
};
