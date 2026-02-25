"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(SKILLS[0].category);

  const activeSkills =
    SKILLS.find((s) => s.category === activeCategory)?.items ?? [];

  return (
    <section id="skills" className="py-28 bg-slate-50 dark:bg-slate-950">
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
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            기술 스택
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-[15px]">
            보안 연구 및 프로젝트를 통해 습득한 기술들입니다.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {SKILLS.map((s) => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === s.category
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-cyan-400/50 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {s.category}
            </button>
          ))}
        </motion.div>

        {/* Skills list */}
        <div className="max-w-2xl mx-auto space-y-5">
          {activeSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
                <span className="text-xs font-medium text-cyan-500 dark:text-cyan-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* All tags overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
            전체 기술
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SKILLS.flatMap((s) => s.items).map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
