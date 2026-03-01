"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { scaleIn, staggerContainer } from "@/lib/animations";

type Tab = "All" | "Web Scraping" | "Data & BI";

const tabs: Tab[] = ["All", "Web Scraping", "Data & BI"];

interface FreelanceProject {
  name: string;
  category: "Web Scraping" | "Data & BI";
  desc: string;
  tags: string[];
  scale: string | null;
  link?: string;
}

const freelanceProjects: FreelanceProject[] = [
  {
    name: "Government Contracts Intelligence Platform",
    category: "Web Scraping",
    desc: "Built a multi-county procurement intelligence platform for a US client — scraped 4,128+ contracts across Harris, Maricopa, San Diego, and LA County. PDF documents OCR'd, AI-parsed, and stored in Supabase with 10-worker parallel ingestion.",
    tags: [
      "Python",
      "Selenium",
      "Playwright",
      "PDFPlumber",
      "Tesseract OCR",
      "Supabase",
      "DeepSeek API",
    ],
    scale: "4,128+ contracts",
  },
  {
    name: "Microsoft AppSource Partner Listings",
    category: "Web Scraping",
    desc: "Extracted 500+ partner listings from Microsoft AppSource — a heavily bot-protected marketplace. Delivered clean structured data with a Google Maps enrichment pass for address validation.",
    tags: [
      "Python",
      "Selenium",
      "Pandas",
      "Parallel Processing",
      "Google Maps API",
    ],
    scale: "500+ partners",
  },
  {
    name: "UK Electric Installers Directory",
    category: "Web Scraping",
    desc: "Mapped 1,660 electrical installers across 73 UK cities using the Google Places API. Full dataset: GPS coordinates, ratings, hours, and a data quality score per record.",
    tags: ["Python", "Google Places API", "Pandas", "Geo-filtering"],
    scale: "1,660 records · 73 cities",
  },
  {
    name: "Multi-Country Car Dealership Scrapers",
    category: "Web Scraping",
    desc: "Five dealership inventory scrapers across Canada and Australia. Handled JS-heavy sites with Playwright, extracted full specs including VINs, financing terms, and mileage for each listing.",
    tags: ["Python", "Selenium", "Playwright", "BeautifulSoup", "Pandas"],
    scale: "5 dealers · 2 countries",
  },
  {
    name: "SteamDB Historical Data Scraper",
    category: "Web Scraping",
    desc: "Test assignment scraping historical player counts, follower trends, and review data for 100 Steam games from SteamDB — scoped for a potential 200,000-game full run.",
    tags: ["Python", "Jupyter", "Selenium", "API reverse-engineering"],
    scale: "100 games · test for 200k catalog",
  },
  {
    name: "Yahoo Finance Data Pipeline",
    category: "Web Scraping",
    desc: "Financial data pipeline pulling market cap, price history, and income statement data from Yahoo Finance for downstream analysis.",
    tags: ["Python", "Requests", "Pandas", "Financial Data"],
    scale: null,
  },
  {
    name: "DevFest Conference Participant Scraper",
    category: "Web Scraping",
    desc: "Conference participant data scraper delivered in 3 milestones with client revisions between each phase.",
    tags: ["Python", "Git", "Multi-phase delivery"],
    scale: null,
  },
  {
    name: "Fintry District Heating Analytics Dashboard",
    category: "Data & BI",
    desc: "Built a real-time analytics dashboard for a UK district heating network using Power BI and Azure SQL — integrating 8M+ API telemetry points. Tracked emissions, heat losses, and boiler performance, diagnosed sensor faults, and delivered RHI revenue modelling with post-upgrade impact analysis.",
    tags: ["Power BI", "Azure SQL", "API Integration", "DAX", "Sustainable Energy"],
    scale: "8M+ telemetry points",
    link: "https://app.powerbi.com/view?r=eyJrIjoiOTQyMzQ5NjAtNTYyMC00MGQwLTkwYWEtNGE0YTI5YzFjOWViIiwidCI6IjJlYWUxODYwLTQwYmUtNDdhNC04MTYxLTZhN2NmYzBjZmEwNyJ9&pageName=f318b65a977e39964372",
  },
  {
    name: "Power BI Dashboard Recreation",
    category: "Data & BI",
    desc: "Rebuilt a client's Power BI dashboard from scratch — improved layout, interactivity, and automatic refresh.",
    tags: ["Power BI", "Data Modelling", "DAX"],
    scale: null,
  },
  {
    name: "Excel VBA Macro Conversion",
    category: "Data & BI",
    desc: "Converted legacy Excel VBA macros to Python. Multi-stage: macro inspection, tab translation, English conversion pass, shared QA file.",
    tags: ["Python", "VBA", "Excel", "Automation"],
    scale: null,
  },
];

export default function FreelanceWork() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return freelanceProjects;
    return freelanceProjects.filter((project) => project.category === activeTab);
  }, [activeTab]);

  return (
    <section id="freelance" className="py-16 px-4 md:py-24 md:px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <p className="text-[#0D9488] font-semibold text-[10px] tracking-[0.25em] uppercase mb-4">
            Upwork · Top Rated · 100% Job Success
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3864] mb-4">
            Client & Freelance Work
          </h2>
          <p className="font-light text-[17px] leading-[1.8] text-gray-600 mb-8 max-w-3xl">
            20+ projects delivered — web scraping, data pipelines, and BI dashboards for clients
            in the US, UK, Canada, and Australia.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-[#14A800]/10 border border-[#14A800]/20 rounded-xl mb-4">
            <span className="w-2 h-2 rounded-full bg-[#14A800]" />
            <span className="text-sm font-semibold text-[#14A800]">
              Top Rated · 100% Job Success
            </span>
            <span className="text-gray-400 text-sm">·</span>
            <a
              href="https://www.upwork.com/freelancers/~01abbc32156f39b6b0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#14A800] font-medium transition-colors"
            >
              View Upwork profile &rarr;
            </a>
          </div>
          <p className="font-medium text-[15px] leading-relaxed text-[#1F3864] italic border-l-2 border-[#14A800] pl-4 mb-8 max-w-2xl bg-white p-4 shadow-sm rounded-r-lg">
            &ldquo;I specialise in scraping sites that don&apos;t want to be scraped — anti-bot
            protection, CAPTCHAs, dynamic rendering, government databases. If your scraper keeps
            getting blocked, I can probably handle it.&rdquo;
          </p>
        </RevealOnScroll>

        <div className="flex flex-wrap items-center gap-6 border-b border-gray-100 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? "text-[#1F3864]"
                  : "text-gray-400 hover:text-[#1F3864]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D9488]"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid gap-4"
            >
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.name}
                  variants={scaleIn}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 28px -12px rgba(31,56,100,0.2)",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="relative rounded-2xl border border-gray-100 bg-white p-5 md:p-6"
                >
                  {project.scale && (
                    <span className="absolute top-4 right-4 text-[10px] md:text-xs font-semibold text-[#0D9488] bg-[#E8FFFC] rounded-full px-2 py-1">
                      {project.scale}
                    </span>
                  )}

                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="mt-0.5 shrink-0 h-10 w-10 rounded-xl bg-[#EEF4FF] text-[#1F3864] flex items-center justify-center font-bold text-xs">
                      {project.category === "Web Scraping" ? "WS" : "BI"}
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-[#0D9488] mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-bold text-[#1F3864] pr-24 md:pr-36">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-sm md:text-[15px] font-light leading-[1.8] text-gray-600">
                        {project.desc}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wide text-[#1F3864] bg-[#F8FAFC]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-xs font-semibold text-[#0D9488] hover:underline"
                        >
                          View live dashboard &rarr;
                        </a>
                      ) : (
                        <p className="mt-3 text-xs text-gray-400 italic">
                          Client project · NDA
                        </p>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
