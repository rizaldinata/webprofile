"use client"; // Diperlukan karena kita menggunakan animasi dan interaksi klik

import ProjectCard from "@/components/ProjectCard";
import SkillSection from "@/components/SkillCard";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

// Data Project (Bisa kamu tambah atau ubah di sini)
const myProjects = [
  {
    title: "Sistem Pelaporan Kerusakan Mesin",
    client: "PT. Behaestex",
    tech: ["Flutter", "Laravel", "MySQL"],
    description: "Membangun sistem pelaporan berbasis mobile dan web untuk mendata kerusakan mesin produksi secara real-time."
  },
  {
    title: "Wisma Amal Gorontalo",
    client: "Internal Project",
    tech: ["Flutter", "Laravel", "Tailwind"],
    description: "Digitalisasi manajemen wisma dan donasi dengan integrasi backend Laravel dan frontend mobile Flutter."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-mesh text-white pb-20">
      {/* 1. Komponen Navigasi */}
      <Navbar />

      {/* 2. Hero Section - ID 'home' untuk navigasi */}
      <section 
        id="home" 
        className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Available for Freelance
          </div>
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Rizal Dinata
          </h1>
          <p className="mt-6 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Fullstack Developer spesialis Web & Mobile. Berfokus pada pembangunan solusi digital yang fungsional dan estetis untuk kebutuhan bisnis Anda.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-blue-600/20"
            >
              Lihat Project
            </a>
            <a 
              href="#contact" 
              className="border border-slate-700 hover:bg-slate-800 px-8 py-3 rounded-full font-medium transition-all"
            >
              Kontak Saya
            </a>
          </div>
        </motion.div>
      </section>

      {/* 3. Services Section - ID 'services' untuk navigasi */}
      <div id="services">
        <SkillSection />
      </div>

      {/* 4. Portfolio Section - ID 'projects' untuk navigasi */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="h-px bg-slate-700 grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              client={project.client}
            />
          ))}
        </div>
      </section>

      {/* 5. Contact Section - ID 'contact' untuk navigasi */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-slate-900/40 border border-slate-800 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Mari Mulai Project Anda</h2>
          <p className="text-slate-400 mb-8">
            Saya siap membantu mengubah ide Anda menjadi aplikasi web atau mobile yang berkualitas.
          </p>
          <a 
            href="mailto:rizalldnt@gmail.com" 
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-blue-400 hover:text-white transition-all"
          >
            Hubungi via Email
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="text-center py-10 border-t border-slate-900 mt-20">
        <p className="text-slate-500 text-sm">
          Â© 2026 Rizal Dinata. Dibuat dengan Next.js & Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}