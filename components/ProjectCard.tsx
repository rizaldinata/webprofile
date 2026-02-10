"use client"
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  client: string;
}

export default function ProjectCard({ title, description, tech, client }: ProjectProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }} // Efek melayang saat hover
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:border-blue-500 transition-colors group"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm mt-3 leading-relaxed">
        {description}
      </p>
      <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
        <span className="text-xs text-slate-500 italic">Client: {client}</span>
        <button className="text-xs text-blue-400 font-semibold hover:underline">
          Detail Case Study â†’
        </button>
      </div>
    </motion.div>
  );
}