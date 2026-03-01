"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "@/components/CountUp";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";

const stats = [
  {
    mode: "flash" as const,
    flashText: "90%+",
    label: "Reporting time saved at Nigeria's largest seaport",
  },
  {
    mode: "count" as const,
    target: 15,
    suffix: "+",
    label: "Freelance data projects delivered on Upwork",
  },
  {
    mode: "count" as const,
    target: 2,
    label: "Production platforms shipped (FPL and e-commerce)",
  },
  {
    mode: "flash" as const,
    flashText: "1st",
    label: "Class Honours in Chemical Engineering",
  },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center px-4 py-16 md:px-6 md:pt-24 md:pb-16 bg-white hero-noise"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF4FF]"
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-8 items-center">
          <div className="max-w-3xl order-2 md:order-1">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0 }}
              className="text-[#0D9488] font-semibold text-[10px] tracking-[0.25em] uppercase mb-4"
            >
              Lead Data Engineer . Analytics Architect . Full-Stack Developer
            </motion.p>

            <h1 className="font-[family-name:var(--font-syne)] font-black text-6xl md:text-9xl text-[#1F3864] leading-tight mb-6">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="block"
              >
                Olajide
              </motion.span>
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="block"
              >
                Ayeola
              </motion.span>
            </h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="font-light text-[17px] leading-[1.8] text-gray-600 mb-10 max-w-2xl"
            >
              I design data systems that get used in production by architecting
              ETL pipelines, Power BI dashboards, and full-stack analytics
              platforms. 90%+ reporting time saved at Nigeria&apos;s largest
              seaport. Based in the United Kingdom.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-[#1F3864] text-white font-semibold rounded-xl hover:bg-[#2D4F8A] transition-colors shadow-lg shadow-navy/20"
                >
                  See my work
                </a>
                <a
                  href="https://www.linkedin.com/in/olajide-ayeola/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[#1F3864] text-[#1F3864] font-semibold rounded-xl hover:bg-[#1F3864] hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Jendoooo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#0D9488] hover:text-[#0D9488] transition-colors"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
                <span className="shrink-0 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>
                  Available for roles . Based in Lagos, Nigeria . UK visa
                  eligible
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="order-1 md:order-2 mx-auto w-full max-w-[200px] md:max-w-none md:w-72 h-[266px] md:h-96 relative"
          >
            <div className="absolute inset-0 border-2 border-[#1F3864] rounded-2xl md:translate-x-3 md:translate-y-3 translate-x-2 translate-y-2" />
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-[#1F3864] to-[#2D4F8A] rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src="/photos/hero.jpg"
                alt="Olajide Ayeola"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 1, staggerChildren: 0.1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <p className="text-4xl font-black text-[#1F3864] mb-1">
                {stat.mode === "count" ? (
                  <CountUp target={stat.target} suffix={stat.suffix} />
                ) : (
                  <CountUp mode="flash" flashText={stat.flashText} />
                )}
              </p>
              <p className="text-sm font-light text-gray-500 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
