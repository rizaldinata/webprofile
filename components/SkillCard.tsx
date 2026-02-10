"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Layers } from "lucide-react";

const skills = [
  { 
    name: "Web Developer", 
    desc: "Membangun website modern yang cepat dengan Next.js & Laravel.", 
    icon: <Globe size={32}/>,
    color: "text-blue-400"
  },
  { 
    name: "Mobile Developer", 
    desc: "Aplikasi Android & iOS performa tinggi menggunakan Flutter.", 
    icon: <Smartphone size={32}/>,
    color: "text-cyan-400"
  },
  { 
    name: "Backend Developer", 
    desc: "Arsitektur server yang aman, database, dan REST API.", 
    icon: <Database size={32}/>,
    color: "text-emerald-400"
  },
  { 
    name: "Fullstack Dev", 
    desc: "Solusi lengkap dari tampilan depan hingga sistem belakang.", 
    icon: <Layers size={32}/>,
    color: "text-purple-400"
  },
];

export default function SkillSection() {
  return (
    <section className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Layanan & Keahlian</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Fokus pada teknologi yang saya kuasai untuk memberikan hasil terbaik.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group"
          >
            <div className={`mb-6 ${skill.color} p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform`}>
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}