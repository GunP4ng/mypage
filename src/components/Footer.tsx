"use client";

import { Github, Mail, BookOpen, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold gradient-text font-mono mb-1">
              {PERSONAL_INFO.alias}
            </p>
            <p className="text-sm text-slate-400">
              {PERSONAL_INFO.name} · Security Researcher
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.blog}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <BookOpen size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="이메일"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Right: Copyright + Scroll Top */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} {PERSONAL_INFO.alias}
            </p>
            <button
              onClick={scrollToTop}
              aria-label="맨 위로"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-cyan-500 hover:text-white transition-all"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
