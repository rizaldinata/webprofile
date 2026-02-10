"use client"
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe } from "lucide-react"; // Import icon

const skills = [
  { name: "Web Development", desc: "Laravel & Next.js Expert", icon: <Globe size={24}/> },
  { name: "Mobile Development", desc: "Flutter Specialist", icon: <Smartphone size={24}/> },
  { name: "Backend System", desc: "API & Database Management", icon: <Code2 size={24}/> },
];

export default function SkillSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white">Services</h2>
        <div className="h-px bg-blue-500/30 grow"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group"
          >
            <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-slate-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}