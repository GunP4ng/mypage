"use client";

import { motion } from "framer-motion";
import { Trophy, Shield, Award as AwardIcon, ExternalLink } from "lucide-react";
import { AWARDS, type Award } from "@/data/portfolio";

const CATEGORY_CONFIG: Record<
  Award["category"],
  { label: string; icon: typeof Trophy; color: string; bg: string }
> = {
  CTF: {
    label: "CTF",
    icon: Trophy,
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
  },
  CVE: {
    label: "CVE",
    icon: Shield,
    color: "text-red-500 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/40",
  },
  Certification: {
    label: "자격증",
    icon: AwardIcon,
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
  },
};

export default function Awards() {
  const categories = (["CTF", "CVE", "Certification"] as Award["category"][]).filter(
    (cat) => AWARDS.some((a) => a.category === cat)
  );

  return (
    <section id="awards" className="py-28 bg-slate-50 dark:bg-slate-950">
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
            Achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            수상 & 자격증
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10">
          {categories.map((cat, ci) => {
            const config = CATEGORY_CONFIG[cat];
            const Icon = config.icon;
            const items = AWARDS.filter((a) => a.category === cat);

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center`}
                  >
                    <Icon size={16} className={config.color} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {config.label}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {items.map((award, i) => (
                    <motion.div
                      key={`${award.title}-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: ci * 0.1 + i * 0.08,
                      }}
                      className="flex items-start justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-400/30 dark:hover:border-cyan-500/20 hover:shadow-md hover:shadow-cyan-500/5 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`shrink-0 mt-0.5 w-2 h-2 rounded-full ${
                            cat === "CTF"
                              ? "bg-amber-400"
                              : cat === "CVE"
                              ? "bg-red-400"
                              : "bg-emerald-400"
                          } mt-1.5`}
                        />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white text-sm">
                            {award.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            {award.detail}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {award.date && (
                          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                            {award.date}
                          </span>
                        )}
                        {award.link && (
                          <a
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-all"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
