"use client"
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      {/* Navbar Container dengan efek Glassmorphism */}
      <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-800 shadow-xl">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
          >
            {link.name}
          </a>
        ))}
        {/* Tombol CTA kecil */}
        <a 
          href="#contact" 
          className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full transition-all"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}