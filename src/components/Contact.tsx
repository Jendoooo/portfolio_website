"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { fadeUp } from "@/lib/animations";

// ── Sign up free at formspree.io → create a form → paste your endpoint here ──
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const links = [
  {
    label: "Email",
    value: "olajideayeola@gmail.com",
    href: "mailto:olajideayeola@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/olajide-ayeola",
    href: "https://www.linkedin.com/in/olajide-ayeola/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Jendoooo",
    href: "https://github.com/Jendoooo",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    value: "@olajideayeola",
    href: "https://medium.com/@olajideayeola",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h7.358l5.378 11.798 4.726-11.798h7.22v.403l-2.25 2.247c-.201.196-.301.488-.266.784v10.957c-.035.295.065.586.266.784l2.25 2.246v.403H16.03v-.403l2.25-2.246c.2-.196.3-.488.266-.784V9.663l-4.524 11.89h-.615l-6.023-11.89v8.42c-.027.359.083.714.316.992l2.678 3.243v.402H2.384v-.402l2.68-3.243c.23-.278.34-.633.313-.992V6.887z" />
      </svg>
    ),
  },
  {
    label: "Upwork",
    value: "Top Rated Freelancer",
    href: "https://www.upwork.com/freelancers/~01abbc32156f39b6b0",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.818 0c-2.396 0-4.329 1.488-5.32 3.692-2.348-2.618-3.953-5.698-4.708-8.868L6.463 0 2.251.018v16.32H6.48V4.868c1.36 2.385 2.858 4.76 4.606 6.942.316 4.965-3.666 9.074-8.627 8.95-4.53-.11-8.22-3.818-8.324-8.35v-10.4L2.25 0h8.487v10.3l.08.028c1.69 1.155 3.738 2.01 5.952 2.378 1.408 5.76 6.307 9.873 12.33 9.775 6.947-.116 12.593-5.807 12.593-12.756 0-6.953-5.556-12.603-12.483-12.603zm-.045 18.237c-3.13 0-5.688-2.55-5.688-5.674 0-3.125 2.558-5.675 5.688-5.675s5.687 2.55 5.687 5.675c0 3.124-2.557 5.674-5.687 5.674z" />
      </svg>
    ),
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setFormState("success");
        setValues({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass =
    "w-full rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/35 px-4 py-3 text-sm font-light focus:outline-none focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] transition-colors";

  return (
    <section id="contact" className="py-16 px-4 md:py-24 md:px-6 bg-[#1F3864]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-start">

          {/* ── Left: heading + contact links ── */}
          <RevealOnScroll>
            <p className="text-[#0D9488] font-semibold text-[10px] tracking-[0.25em] uppercase mb-4">
              Let&apos;s connect
            </p>
            <h2 className="font-[family-name:var(--font-syne)] font-black tracking-tight text-4xl md:text-5xl text-white mb-6">
              Get in touch
            </h2>
            <p className="font-light text-[17px] leading-[1.8] text-blue-200 mb-10 max-w-md">
              Open to full-time roles in data engineering, data architecture, and
              operations analytics. Based in the United Kingdom — UK visa eligible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <span className="text-teal-400 shrink-0">{l.icon}</span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-blue-300/70 font-semibold mb-0.5">
                      {l.label}
                    </p>
                    <p className="text-white text-sm font-medium group-hover:text-teal-400 transition-colors truncate">
                      {l.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </RevealOnScroll>

          {/* ── Right: contact form ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-6">Send a message</h3>

              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#0D9488]/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Message sent!</p>
                  <p className="text-blue-200/70 text-sm font-light">I&apos;ll get back to you within 48 hours.</p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-2 text-sm text-teal-400 hover:text-teal-300 font-medium transition-colors"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-blue-200/70 uppercase tracking-widest mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-blue-200/70 uppercase tracking-widest mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={values.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-blue-200/70 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role or project..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-red-400 text-sm font-light">
                      Something went wrong — please email me directly at olajideayeola@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full py-3 px-6 bg-[#0D9488] hover:bg-teal-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-teal-900/30"
                  >
                    {formState === "sending" ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
