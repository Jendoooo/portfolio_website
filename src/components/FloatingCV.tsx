"use client";

import { motion } from "framer-motion";

export default function FloatingCV() {
  return (
    <motion.a
      href="/cv-data-engineering.pdf"
      download="Olajide_Ayeola_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05, backgroundColor: "#0D9488" }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#1F3864] text-white text-sm font-semibold rounded-xl shadow-lg shadow-[#1F3864]/30 transition-colors"
      aria-label="Download CV"
    >
      {/* Download icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download CV
    </motion.a>
  );
}
