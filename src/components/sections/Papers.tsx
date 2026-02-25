"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { PAPERS } from "@/data/portfolio";

const CONFERENCE_COLORS: Record<string, string> = {
  "한국정보보호학회 하계학술대회": "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/50",
  "한국정보보호학회 영남지부": "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800/50",
  "WISA (World Conference on Information Security Applications)": "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50",
};

const CONFERENCE_SHORT: Record<string, string> = {
  "한국정보보호학회 하계학술대회": "KIISC 하계",
  "한국정보보호학회 영남지부": "KIISC 영남",
  "WISA (World Conference on Information Security Applications)": "WISA",
};

export default function Papers() {
  const grouped = PAPERS.reduce<Record<string, typeof PAPERS>>((acc, paper) => {
    if (!acc[paper.conference]) acc[paper.conference] = [];
    acc[paper.conference].push(paper);
    return acc;
  }, {});

  return (
    <section id="papers" className="py-28 bg-white dark:bg-slate-900">
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
            Research
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            논문
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-[15px]">
            ECDIS 및 해양 사이버보안 분야 연구 논문들입니다.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-8 mb-16"
        >
          {[
            { label: "총 논문", value: PAPERS.length },
            { label: "학술대회", value: Object.keys(grouped).length },
            { label: "연도", value: "2025" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Papers grouped by conference */}
        <div className="max-w-3xl mx-auto space-y-8">
          {Object.entries(grouped).map(([conference, papers], gi) => {
            const colorClass =
              CONFERENCE_COLORS[conference] ||
              "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700";
            const shortName = CONFERENCE_SHORT[conference] || conference;

            return (
              <motion.div
                key={conference}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                {/* Conference header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold border ${colorClass}`}
                  >
                    {shortName} {papers[0].year}
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:block">
                    {conference}
                  </span>
                </div>

                {/* Papers list */}
                <div className="space-y-3">
                  {papers.map((paper, i) => (
                    <motion.div
                      key={paper.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: gi * 0.1 + i * 0.08 }}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-400/30 dark:hover:border-cyan-500/20 hover:shadow-md hover:shadow-cyan-500/5 transition-all duration-300 group"
                    >
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center group-hover:border-cyan-400/40 transition-colors">
                        <FileText
                          size={16}
                          className="text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 transition-colors"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                          {paper.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1.5">
                          {conference} · {paper.year}
                        </p>
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
