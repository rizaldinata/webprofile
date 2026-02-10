"use client";

import ProjectCard from "@/components/ProjectCard";
import SkillSection from "@/components/SkillCard";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram, 
  ArrowRight,
  Sparkles,
  ChevronDown,
  Terminal ,
  GraduationCap,
  Calendar
} from "lucide-react";

const myProjects = [
  {
    title: "Wisma Amal Gorontalo",
    client: "Final Project",
    year: "2025 - Now",
    tech: ["Flutter", "Laravel", "MySQL", "Firebase", "Waha", "Midtrans"],
    description: "A two-sided boarding house management system connecting tenants, seekers, and administrators. Features include automated payment reminders, Midtrans payment gateway, in-app maintenance reporting, and an admin dashboard for vacancy tracking, financial monitoring, and maintenance oversight"
  },
  {
    title: "Salesforce App - Frontend Improvement & UI Redesign",
    client: "Internship Project",
    year: "2025",
    tech: ["Flutter", "Figma"],
    description: "Revamped the frontend of an existing Salesforce mobile application through comprehensive UX research, Figma mockups, and Flutter implementation. Focused on improving user interface, enhancing usability, and applying UI/UX principles to create a more intuitive and user-friendly experience."
  },
  {
    title: "Machine Damage Reporting System",
    client: "Internship Project",
    year: "2025",
    tech: ["Flutter", "Laravel", "MySQL", "Firebase"],
    description: "Real-time mobile and web-based reporting system for production machine failures. Features include automated notifications, damage tracking analytics, and maintenance scheduling dashboard."
  },
  {
    title: "Hydrate - Water Intake Tracker",
    client: "PDBL Project",
    year: "2025",
    tech: ["Flutter", "HTML", "Tailwind", "Firebase"],
    description: "A mobile application for tracking daily water intake with reminders, progress visualization, and goal setting features. Developed using Scrum methodology with a strong focus on user-friendly UI/UX, the project also included a separate promotional landing page built with HTML & Tailwind to introduce the app and its benefits."
  },
  {
    title: "BlueCampus - Academic Information System",
    client: "Team Project",
    year: "2025",
    tech: ["Flutter", "Laravel", "MySQL",],
    description: "A comprehensive academic platform featuring a mobile app for students and lecturers to manage course registration (KRS/FRS), with approval/rejection functionality for lecturers, and a web-based admin dashboard for managing master data, course offerings, and monitoring transaction records."
  },
  {
    title: "BlueCampus - Academic Information System",
    client: "Team Project",
    year: "2024",
    tech: ["Flutter", "Laravel", "MySQL",],
    description: "A comprehensive academic platform featuring a mobile app for students and lecturers to manage course registration (KRS/FRS), with approval/rejection functionality for lecturers, and a web-based admin dashboard for managing master data, course offerings, and monitoring transaction records."
  },
  {
    title: "Restaurant Order Management System",
    client: "Team Project",
    year: "2024",
    tech: ["PHP", "MySQL",],
    description: "A restaurant management system featuring a cashier interface for order input, payment processing with automatic change calculation, and receipt printing, paired with an admin dashboard for menu management, stock updates, and transaction monitoring."
  },
  {
    title: "Hospital Profile Website - UI/UX Design",
    client: "Team Project",
    year: "2024",
    tech: ["Figma"],
    description: "Designed and prototyped a responsive hospital landing page featuring homepage, about section, doctor schedules, location information, and consultation CTA. Focused on creating an intuitive UI/UX with clear navigation and visually appealing design for better user engagement."
  },
];

const socialLinks = [
  { 
    name: "GitHub", 
    username: "@rizaldinata",
    icon: <Github size={24} />, 
    url: "https://github.com/rizaldinata",
    color: "hover:border-white/50 hover:bg-slate-800",
    btnColor: "bg-slate-800"
  },
  { 
    name: "LinkedIn", 
    username: "in/rizaldinata",
    icon: <Linkedin size={24} />, 
    url: "https://linkedin.com/in/rizaldinata",
    color: "hover:border-blue-500/50 hover:bg-blue-900/20",
    btnColor: "bg-blue-600"
  },
  { 
    name: "Instagram", 
    username: "@rijuldnt_",
    icon: <Instagram size={24} />, 
    url: "https://instagram.com/rijuldnt_",
    color: "hover:border-pink-500/50 hover:bg-pink-900/20",
    btnColor: "bg-pink-600"
  },
  { 
    name: "Email", 
    username: "rizalldnt@gmail.com",
    icon: <Mail size={24} />, 
    url: "mailto:rizalldnt@gmail.com",
    color: "hover:border-cyan-500/50 hover:bg-cyan-900/20",
    btnColor: "bg-cyan-600"
  },
];

const roles = [
  "Crafting Code",       
  "Fullstack Dev",       
  "Building Products",   
  "Tech Enthusiast"      
];

const educationData = [
  {
    degree: "D3 Teknik Informatika", 
    school: "Politeknik Elektronika Negeri Surabaya", 
    year: "2023 - Present",
    desc: "Fokus pada Software Engineering dan Mobile Development. Aktif dalam komunitas coding kampus dan asisten laboratorium.",
    gpa: "IPK: 3.73 / 4.00" 
  },
  {
    degree: "SMA Jurusan MIPA",
    school: "SMA Negeri 1 Puri Mjokerto",
    year: "2020 - 2023",
    desc: "Memiliki minat kuat dalam matematika dan logika pemrograman dasar.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-mesh text-white overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />

      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
        
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Open for Collabs & Projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <br className="md:hidden" />
            <span className="gradient-text">Rizal Dinata</span>
          </h1>

          <div className="h-8 md:h-10 mb-8 flex justify-center items-center overflow-hidden">
            <span className="text-xl md:text-2xl text-slate-400 mr-2">I spend my time</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-semibold text-blue-400"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
            Bikin aplikasi web & mobile yang gak cuma <i>works</i>, tapi juga <i>seamless</i>. 
            Fokus nulis <span className="text-white font-medium">clean code</span> buat produk yang kenceng, aman, dan enak dipake user.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-slate-200 px-8 py-3 rounded-full font-semibold transition-all group"
            >
              See My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-white hover:bg-white/5 px-8 py-3 rounded-full font-medium transition-all text-white"
            >
              <Terminal size={18} />
              Let's Connect
            </a>
          </motion.div>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-500 ${social.color} transition-colors transform hover:scale-110`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      <div id="services">
        <SkillSection />
      </div>

      <section id="education" className="max-w-4xl mx-auto px-4 md:px-6 py-20">
        
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Education Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Pondasi akademis yang membentuk pemahaman teknis dan kemampuan problem solving saya.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12 pl-8 md:pl-12">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              
              <div className="glass-effect p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <div className="inline-flex items-center gap-2 text-xs text-blue-400 font-mono bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    <Calendar size={12} />
                    {edu.year}
                  </div>
                </div>
                
                <div className="text-slate-300 font-medium mb-4 flex items-center gap-2">
                  <GraduationCap size={16} className="text-slate-500" />
                  {edu.school}
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {edu.desc}
                </p>
                
                {edu.gpa && (
                  <div className="inline-block px-3 py-1 rounded-md bg-slate-900 text-xs text-slate-400 border border-slate-800">
                    {edu.gpa}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
             Beberapa project seru yang pernah saya kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-4 md:px-6 py-20 pb-32">
        
        <div className="text-center mb-12">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-6 border border-white/5">
            <Sparkles size={24} className="text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Siap untuk kolaborasi atau sekadar *tech talk*? Temukan saya di platform favorit Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center gap-6 p-6 rounded-2xl border border-slate-800 glass-effect transition-all group ${social.color}`}
            >
              <div className={`p-4 rounded-xl text-white ${social.btnColor} shadow-lg`}>
                {social.icon}
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                  {social.name}
                </span>
                <span className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {social.username}
                </span>
              </div>

              <div className="ml-auto text-slate-600 group-hover:text-white transition-colors">
                <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>Prefer email? Langsung saja ke <a href="mailto:rizalldnt@gmail.com" className="text-blue-400 hover:underline">rizalldnt@gmail.com</a></p>
        </div>

      </section>
      
      <footer className="border-t border-slate-900/50 py-8 text-center text-slate-600 text-sm">
        <p>© 2026 Rizal Dinata. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}