"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { scaleIn, staggerContainer } from "@/lib/animations";

const FINTRY_EMBED =
  "https://app.powerbi.com/view?r=eyJrIjoiOTQyMzQ5NjAtNTYyMC00MGQwLTkwYWEtNGE0YTI5YzFjOWViIiwidCI6IjJlYWUxODYwLTQwYmUtNDdhNC04MTYxLTZhN2NmYzBjZmEwNyJ9&pageName=f318b65a977e39964372";

const projects = [
  {
    name: "FPL Analytics Platform",
    desc: "Full-stack Fantasy Premier League analytics tool. 13-module Python data engine with a 14-step weekly pipeline, expected-points models, formation optimisers, and transfer planners. React + Vite + FastAPI, deployed on Vercel.",
    tags: ["Python", "FastAPI", "React", "Vite", "Tailwind", "Vercel"],
    link: "https://fpl-analytics.vercel.app",
    linkLabel: "Live demo",
    github: "https://github.com/Jendoooo/fpl-analytics",
    highlight: true,
    embedUrl: null,
  },
  {
    name: "Iby Closet - E-Commerce Platform",
    desc: "Production e-commerce platform for a fashion brand. Product catalogues, cart, Paystack checkout, order management, abandoned cart recovery, and a full admin CMS with Supabase.",
    tags: ["Next.js 14", "Supabase", "TypeScript", "Paystack"],
    link: null,
    linkLabel: null,
    github: null,
    highlight: false,
    embedUrl: null,
  },
  {
    name: "Fintry District Heating Analytics Dashboard",
    desc: "Real-time Power BI analytics platform for a UK district heating network — integrating 8M+ API telemetry points. Tracks emissions, heat losses, and boiler performance. Includes RHI revenue modelling and post-upgrade impact analysis. Built with Azure SQL and published May 2025.",
    tags: ["Power BI", "Azure SQL", "API Integration", "DAX", "Sustainable Energy"],
    link: FINTRY_EMBED,
    linkLabel: "Open live dashboard",
    github: null,
    highlight: true,
    embedUrl: FINTRY_EMBED,
  },
  {
    name: "3:15 Fabrics - E-Commerce",
    desc: "E-commerce platform for a fabrics business with product management, collections, and checkout workflows built in Next.js and Supabase.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    link: null,
    linkLabel: null,
    github: null,
    highlight: false,
    embedUrl: null,
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
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 md:py-24 md:px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <p className="text-[#0D9488] font-semibold text-[10px] tracking-[0.25em] uppercase mb-4">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3864] mb-12">
            Projects and Deliverables
          </h2>
        </RevealOnScroll>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={scaleIn}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -12px rgba(31,56,100,0.15)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`relative rounded-2xl overflow-hidden ${
                project.highlight
                  ? "md:col-span-2 p-[1px]"
                  : "border border-gray-100 bg-white"
              }`}
            >
              {project.highlight && (
                <>
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -inset-[140%] bg-[conic-gradient(from_0deg,rgba(13,148,136,0.06),rgba(13,148,136,0.75),rgba(31,56,100,0.6),rgba(13,148,136,0.06))]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative z-10 rounded-[15px] border border-[#0D9488]/20 bg-white h-full">
                    <div
                      className={`w-full bg-gray-100 relative border-b border-gray-100 overflow-hidden ${
                        project.embedUrl ? "h-64 md:h-[480px]" : "h-48 md:h-64"
                      }`}
                    >
                      {project.embedUrl ? (
                        <iframe
                          src={project.embedUrl}
                          className="w-full h-full border-0"
                          title={`${project.name} live preview`}
                          allowFullScreen
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-teal-700 flex flex-col items-center justify-center p-6">
                          <span className="text-white/40 text-sm font-medium">
                            project-fpl-screenshot.jpg
                          </span>
                        </div>
                      )}
                    </div>
                    <ProjectBody project={project} />
                  </div>
                </>
              )}

              {!project.highlight && <ProjectBody project={project} />}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  name: string;
  desc: string;
  tags: string[];
  link: string | null;
  linkLabel: string | null;
  github: string | null;
  highlight: boolean;
  embedUrl: string | null;
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="p-6 flex flex-col h-full">
      {project.highlight && (
        <span className="self-start text-[10px] font-bold text-[#0D9488] uppercase tracking-widest mb-3">
          Featured
        </span>
      )}

      <h3
        className={`font-bold text-[#1F3864] mb-2 ${
          project.highlight ? "text-2xl" : "text-base"
        }`}
      >
        {project.name}
      </h3>
      <p
        className={`font-light text-gray-600 leading-[1.8] flex-1 mb-6 ${
          project.highlight ? "text-[17px]" : "text-sm"
        }`}
      >
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-[#F8FAFC] text-[#1F3864] text-[10px] uppercase tracking-wider rounded-md font-bold"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 items-center mt-auto">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0D9488] hover:underline"
          >
            {project.linkLabel ?? "Live demo"} &rarr;
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-gray-500 hover:text-[#1F3864]"
          >
            GitHub &rarr;
          </a>
        )}
        {!project.link && !project.github && (
          <span className="text-xs text-gray-400 italic">Client project · NDA</span>
        )}
      </div>
    </div>
  );
}
