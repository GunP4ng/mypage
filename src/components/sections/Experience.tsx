"use client";

import { motion } from "framer-motion";
import { Briefcase, Star } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-white dark:bg-slate-900">
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
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            활동 경력
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent md:-translate-x-px"
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 border-2 border-white dark:border-slate-900 z-10 top-6" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pl-10" : "md:pr-10"
                    }`}
                  >
                    <div className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-400/30 dark:hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-[15px]">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-1.5 mt-1">
                            <Briefcase size={12} className="text-cyan-500 shrink-0" />
                            <span className="text-sm font-semibold text-cyan-500 dark:text-cyan-400">
                              {exp.company}
                            </span>
                          </div>
                        </div>
                        <span className="shrink-0 text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      {/* Highlight badge */}
                      {exp.highlight && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-amber-600 dark:text-amber-400 text-xs font-semibold">
                          <Star size={11} />
                          {exp.highlight}
                        </div>
                      )}

                      <ul className="space-y-2">
                        {exp.description.map((desc, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
