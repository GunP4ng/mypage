"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, BookOpen, Send, CheckCircle, AlertCircle } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!form.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }
    if (!form.subject.trim()) newErrors.subject = "제목을 입력해주세요.";
    if (!form.message.trim()) newErrors.message = "메시지를 입력해주세요.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // TODO: EmailJS 또는 API Route 연동
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setForm(INITIAL_FORM);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-28 bg-white dark:bg-slate-900">
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
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            연락하기
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-[15px]">
            협업 제안, 채용 문의 등 편하게 연락주세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 max-w-4xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Connect with me
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                보안 연구, CTF 협업, 채용 관련 문의 등 무엇이든 편하게
                메시지를 남겨주세요.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 flex items-center justify-center group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 transition-colors">
                  <Mail size={16} className="text-cyan-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">이메일</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-slate-700/50 transition-colors">
                  <Github size={16} className="text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">GitHub</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    github.com/GunP4ng
                  </p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors">
                  <BookOpen size={16} className="text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">블로그</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    gunp4ng-study.tistory.com
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
                <CheckCircle size={48} className="text-emerald-500 mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  메시지가 전송되었습니다!
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  빠른 시일 내에 답변 드리겠습니다.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500 text-white hover:bg-emerald-400 transition-colors"
                >
                  다시 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                      이름 <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/50 border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 ${
                        errors.name ? "border-red-400" : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={11} />{errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                      이메일 <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hong@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/50 border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 ${
                        errors.email ? "border-red-400" : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={11} />{errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                    제목 <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="협업 제안 / 문의"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/50 border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 ${
                      errors.subject ? "border-red-400" : "border-slate-200 dark:border-slate-700"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={11} />{errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                    메시지 <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="안녕하세요. 연락드립니다..."
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/50 border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 resize-none ${
                      errors.message ? "border-red-400" : "border-slate-200 dark:border-slate-700"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={11} />{errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500 flex items-center gap-2">
                    <AlertCircle size={15} />
                    전송에 실패했습니다. 다시 시도해주세요.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      전송 중...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      메시지 보내기
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
