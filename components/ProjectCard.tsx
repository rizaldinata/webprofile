"use client";
import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  client: string;
  year?: string;
  link?: string;
}

export default function ProjectCard({ title, description, tech, client, year, link }: ProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-effect rounded-2xl overflow-hidden flex flex-col h-full border border-slate-800 hover:border-blue-500/30 transition-all"
    >
      <div className="p-8 flex flex-col flex-grow">
        {/* Header: Title & Year */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <span className="text-xs font-mono bg-slate-800 text-slate-400 px-2 py-1 rounded">
            {year}
          </span>
        </div>

        {/* Client info */}
        <p className="text-sm text-blue-400 mb-4 font-medium">{client}</p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
          {tech.map((t) => (
            <span key={t} className="text-xs font-medium text-slate-300 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
              {t}
            </span>
          ))}
        </div>
        
        {link && (
            <div className="mt-6">
                 <a href={link} className="text-sm text-white flex items-center gap-2 hover:text-blue-400 transition-colors">
                    View Project <ExternalLink size={14} />
                 </a>
            </div>
        )}
      </div>
    </motion.div>
  );
}