"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { scaleIn, staggerContainer } from "@/lib/animations";

const FINTRY_EMBED =
  "https://app.powerbi.com/view?r=eyJrIjoiOTQyMzQ5NjAtNTYyMC00MGQwLTkwYWEtNGE0YTI5YzFjOWViIiwidCI6IjJlYWUxODYwLTQwYmUtNDdhNC04MTYxLTZhN2NmYzBjZmEwNyJ9&pageName=f318b65a977e39964372";

/** microlink.io — renders a headless screenshot and serves from CDN cache */
function mlShot(url: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

const projects = [
  {
    name: "Job Hunt Nigeria — Assessment Platform",
    desc: "A dedicated assessment preparation platform helping graduates secure roles at top-tier employers (like TotalEnergies and NLNG). It mathematically simulates high-pressure, interactive testing environments—from drag-and-drop matrices to situational judgements—providing candidates with instant algorithmic scoring and AI-powered performance coaching.",
    tags: ["React 19", "Supabase", "Tailwind", "DeepSeek API", "Framer Motion"],
    link: "https://job-hunt-nga.vercel.app",
    linkLabel: "Live Site (Auth Req)",
    github: null,
    highlight: true,
    embedUrl: null,
    screenshotUrl: mlShot("https://job-hunt-nga.vercel.app"),
  },
  {
    name: "FPL Analytics Platform",
    desc: "Full-stack Fantasy Premier League analytics tool. 13-module Python data engine with a 14-step weekly pipeline, expected-points models, formation optimisers, and transfer planners. React + Vite + FastAPI, deployed on Vercel.",
    tags: ["Python", "FastAPI", "React", "Vite", "Tailwind", "Vercel"],
    link: "https://fpl-analytics.vercel.app",
    linkLabel: "Live demo",
    github: "https://github.com/Jendoooo/fpl-analytics",
    highlight: true,
    embedUrl: null,
    screenshotUrl: mlShot("https://fpl-analytics.vercel.app/"),
  },
  {
    name: "Iby Closet — E-Commerce Platform",
    desc: "Production e-commerce platform for a fashion brand. Product catalogues, cart, Paystack checkout, order management, abandoned cart recovery, and a full admin CMS with Supabase.",
    tags: ["Next.js 14", "Supabase", "TypeScript", "Paystack"],
    link: "https://www.ibycloset.com/",
    linkLabel: "Live site",
    github: null,
    highlight: false,
    embedUrl: null,
    screenshotUrl: mlShot("https://www.ibycloset.com/"),
  },
  {
    name: "Oriyomi Ayeola — Memorial Tribute",
    desc: "A dedicated memorial website built to honour the life and legacy of my late uncle. Designed with a focus on respectful storytelling, clean typography, and a seamless digital tribute experience.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://oriyomiayeola.com",
    linkLabel: "Live site",
    github: null,
    highlight: false,
    embedUrl: null,
    screenshotUrl: mlShot("https://oriyomiayeola.com"),
  },
  {
    name: "Order From RC",
    desc: "Online ordering platform for a Nigerian food business — built with Next.js and Supabase. Menu management, cart, and checkout flow designed for mobile-first customers.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    link: "https://orderfromrc.com",
    linkLabel: "Live site",
    github: null,
    highlight: false,
    embedUrl: null,
    screenshotUrl: mlShot("https://orderfromrc.com"),
  },
  {
    name: "Fintry District Heating Analytics Dashboard",
    desc: "Real-time Power BI analytics platform for a UK district heating network — integrating 8M+ API telemetry points. Tracks emissions, heat losses, and boiler performance. Includes RHI revenue modelling and post-upgrade impact analysis. Built with Azure SQL, published May 2025.",
    tags: ["Power BI", "Azure SQL", "API Integration", "DAX", "Sustainable Energy"],
    link: FINTRY_EMBED,
    linkLabel: "Open live dashboard",
    github: null,
    highlight: true,
    embedUrl: FINTRY_EMBED,
    screenshotUrl: null,
  },
  {
    name: "3:15 Fabrics — E-Commerce",
    desc: "E-commerce platform for a fabrics business with product management, collections, and checkout workflows built in Next.js and Supabase.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    link: "https://3-15fabrics.vercel.app/",
    linkLabel: "Live site",
    github: null,
    highlight: false,
    embedUrl: null,
    screenshotUrl: mlShot("https://3-15fabrics.vercel.app/"),
  },
  {
    name: "Chess Analysis Platform",
    desc: "Chess game analysis tool with Stockfish engine integration. Python backend with data visualisations for game pattern analysis and move evaluation.",
    tags: ["Python", "Stockfish", "Data Visualisation"],
    link: null,
    linkLabel: null,
    github: "https://github.com/Jendoooo",
    highlight: false,
    embedUrl: null,
    screenshotUrl: null,
  },
];

export default function Projects() {
  const [showAllOther, setShowAllOther] = useState(false);

  const featuredProjects = projects.filter((p) => p.highlight);
  const otherProjects = projects.filter((p) => !p.highlight);

  const visibleOtherProjects = showAllOther ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section id="projects" className="py-16 px-4 md:py-24 md:px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <p className="text-[#0D9488] font-semibold text-[10px] tracking-[0.25em] uppercase mb-4">
            Work
          </p>
          <h2 className="font-[family-name:var(--font-syne)] font-black tracking-tight text-4xl md:text-5xl text-[#1F3864] mb-16">
            Projects and Deliverables
          </h2>
        </RevealOnScroll>

        {/* ── Featured Projects (Horizontal Stack) ── */}
        <div className="space-y-16 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group"
            >
              {/* Preview Area */}
              <div
                className={`w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl shadow-teal-900/5 bg-gray-100 border border-gray-200/60 relative ${index % 2 !== 0 ? "md:order-2" : "md:order-1"
                  } ${project.embedUrl ? "h-[350px] md:h-[450px]" : "h-64 md:h-[380px]"}`}
              >
                {project.embedUrl ? (
                  <iframe
                    src={project.embedUrl}
                    className="w-full h-full border-0"
                    title={`${project.name} live preview`}
                    allowFullScreen
                  />
                ) : project.screenshotUrl ? (
                  <img
                    src={project.screenshotUrl}
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F3864] to-[#0D9488]/60 flex items-center justify-center">
                    <span className="text-white/30 text-sm font-medium">preview</span>
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className={`w-full md:w-1/2 flex flex-col ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
                <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span> Featured
                </span>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-[#1F3864] text-3xl md:text-4xl mb-4 leading-tight">
                  {project.name}
                </h3>
                <p className="font-light text-gray-600 leading-[1.8] text-[17px] mb-8">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-[#1F3864] border border-gray-200 text-xs tracking-wide rounded-md font-semibold shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 items-center">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#0D9488] text-white text-sm font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/20"
                    >
                      {project.linkLabel ?? "Live demo"}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-500 hover:text-[#1F3864] transition-colors"
                    >
                      View Code &rarr;
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Other Projects (3-Column Grid) ── */}
        <RevealOnScroll>
          <h3 className="text-2xl font-bold text-[#1F3864] mb-8">Other Client & Personal Work</h3>
        </RevealOnScroll>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleOtherProjects.map((project) => (
            <motion.article
              key={project.name}
              variants={scaleIn}
              whileHover={{ y: -4, boxShadow: "0 15px 30px -10px rgba(31,56,100,0.1)" }}
              transition={{ duration: 0.2 }}
              className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
            >
              {project.screenshotUrl && (
                <div className="w-full h-40 overflow-hidden border-b border-gray-50 bg-gray-50 flex-shrink-0">
                  <img
                    src={project.screenshotUrl}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-bold text-[#1F3864] text-lg mb-2">{project.name}</h4>
                <p className="font-light text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] uppercase tracking-wider rounded border border-gray-100 font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center mt-auto border-t border-gray-50 pt-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#0D9488] hover:text-teal-700 uppercase tracking-wide">
                      {project.linkLabel ?? "Live Site"}
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-400 hover:text-gray-700 uppercase tracking-wide">
                      GitHub
                    </a>
                  )}
                  {!project.link && !project.github && (
                    <span className="text-xs text-gray-400 italic font-medium">Client project · NDA</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Toggle for Other Projects */}
        {otherProjects.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllOther(!showAllOther)}
              className="px-6 py-2 border-2 border-[#1F3864] text-[#1F3864] font-semibold rounded-xl hover:bg-[#1F3864] hover:text-white transition-colors"
            >
              {showAllOther ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
