"use client";

import { motion } from "framer-motion";
import { Shield, Bug, Brain, Flag, GraduationCap, MapPin, Mail, BookOpen } from "lucide-react";
import { PERSONAL_INFO, EDUCATION, STRENGTHS } from "@/data/portfolio";

const ICON_MAP = { Shield, Bug, Brain, Flag };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            소개
          </h2>
        </motion.div>

        {/* Main content: Avatar + Bio */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 p-0.5">
                <div className="w-full h-full rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex items-end justify-center">
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 opacity-80" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-28 rounded-t-full bg-gradient-to-br from-cyan-500 to-violet-600 opacity-60" />
                    <span className="relative z-10 mb-6 text-4xl font-bold text-white select-none font-mono">
                      GP
                    </span>
                  </div>
                </div>
              </div>

              {/* Paper count badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg flex flex-col items-center justify-center">
                <span className="text-2xl font-bold gradient-text">5</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium text-center leading-tight">
                  Papers
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm font-mono text-cyan-500 dark:text-cyan-400 mb-4">
              @{PERSONAL_INFO.alias}
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 text-[15px]">
              {PERSONAL_INFO.bio}
            </p>

            {/* Info list */}
            <div className="flex flex-col gap-3 mb-6">
              {EDUCATION.map((edu) => (
                <div key={edu.school} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <GraduationCap size={15} className="text-cyan-500 shrink-0" />
                  {edu.school} {edu.major} ({edu.period})
                </div>
              ))}
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={15} className="text-cyan-500 shrink-0" />
                {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Mail size={15} className="text-cyan-500 shrink-0" />
                {PERSONAL_INFO.email}
              </div>
              <a
                href={PERSONAL_INFO.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <BookOpen size={15} className="text-cyan-500 shrink-0" />
                {PERSONAL_INFO.blog}
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              현재 기회에 열려 있습니다
            </div>
          </motion.div>
        </div>

        {/* Strengths grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STRENGTHS.map((item, i) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 flex items-center justify-center mb-4 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 transition-colors">
                  <Icon size={20} className="text-cyan-500 dark:text-cyan-400" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
