"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";

const mainExperiences = [
  {
    title: "Founder & Lead Engineer",
    company: "Mobo Digital",
    location: "Nigeria / United Kingdom",
    period: "Dec 2025 – Present",
    bullets: [
      "Founded a full-service digital consultancy on returning from Glasgow — delivering production web platforms and data solutions for clients across Nigeria and internationally.",
      "Shipped ibycloset.com, orderfromrc.com, oriyomiayeola.com, and 3-15fabrics.vercel.app — e-commerce and business platforms built with Next.js, TypeScript, and Supabase.",
      "Continued 20+ data and analytics engagements: web scraping pipelines, ETL systems, and Power BI dashboards for clients in the US, UK, Canada, and Australia.",
    ],
    link: null,
    linkLabel: null,
  },
  {
    title: "Planning Officer and Operations Data Analyst",
    company: "Lekki Freeport Terminal (CMA CGM Group)",
    location: "Lagos, Nigeria — Nigeria's largest seaport",
    period: "Oct 2022 – Aug 2024",
    bullets: [
      "Designed and deployed end-to-end data pipelines automating daily reports to CMA CGM HQ (Paris) and Nigerian regulators (NPA, NIMASA).",
      "Built ETL workflows in Python and SQL to extract, clean, and transform vessel, container, and gate operations data into structured, queryable datasets.",
      "Reduced manual reporting workload by over 90% by building Power BI dashboards that track vessel throughput, container dwell time, and inspection KPIs.",
      "Implemented SOPs for data governance adopted across quay, yard, and gate teams; coordinated cross-functional reporting during pre-operational ramp-up.",
    ],
    link: null,
    linkLabel: null,
  },
  {
    title: "Asset Engineering Intern",
    company: "Chevron Nigeria Limited (NNPC/CNL JV)",
    location: "Lagos and Escravos, Nigeria",
    period: "Apr 2019 – Sep 2019",
    bullets: [
      "Received on-field and off-field training and certifications in reservoir engineering, production analysis, and optimization.",
      "Monitored, tracked, and reported daily water injection volumes across water injection stations.",
      "Tracked and reported oil production deviations across the onshore asset area production platforms.",
      "Analysed production performance of selected onshore wells using the OFM in-house software package, recommending well intervention programmes for production optimization.",
    ],
    link: null,
    linkLabel: null,
  },
];

const communityExperience = {
  title: "Science Teacher & Debate Coach",
  company: "Community Senior High School, Akodo",
  location: "Lagos, Nigeria",
  period: "May 2021 – May 2022",
  context: "National Youth Service Corps (NYSC) — mandatory one-year national service for Nigerian graduates",
  bullets: [
    "Taught Mathematics to senior secondary students, establishing core analytical principles through real-world problem solving.",
    "Founded the school's first Chess Club, collaborating with Chess In Slums Africa to secure boards and teach analytical thinking.",
    "Coached the quiz and debate teams to victory at the State Championships, securing a ₦300,000 prize and a second-place finish at the Presidential Debate Zonal Championships.",
  ],
  link: "https://medium.com/@olajideayeola/in-service-to-the-nation-c1450c5df110",
  linkLabel: "Read full story on Medium",
};

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-16 px-4 md:py-24 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <p className="text-[#0D9488] font-semibold text-[10px] tracking-[0.25em] uppercase mb-4">
            Career
          </p>
          <h2 className="font-[family-name:var(--font-syne)] font-black tracking-tight text-4xl md:text-5xl text-[#1F3864] mb-12">
            Professional Experience
          </h2>
        </RevealOnScroll>

        {/* ── Main career timeline ── */}
        <div ref={timelineRef} className="relative">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-0 w-px h-full bg-[#1F3864]/20 ml-2 hidden md:block"
          />

          <div className="space-y-10">
            {mainExperiences.map((experience, index) => (
              <RevealOnScroll
                key={experience.title}
                delay={index * 0.15}
                className="md:pl-10 relative"
              >
                <div className="hidden md:block absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#1F3864] border-2 border-white shadow-md" />

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-[#1F3864] leading-snug">
                      {experience.title}
                    </h3>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#0D9488] bg-[#F0FDFB] px-3 py-1 rounded-full whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {experience.company}
                  </p>
                  <p className="text-xs text-gray-400 mb-6">{experience.location}</p>

                  <ul className="space-y-3">
                    {experience.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 font-light text-[15px] text-gray-600 leading-[1.8]"
                      >
                        <span className="text-[#0D9488] shrink-0 mt-0.5">&gt;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {experience.link && (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#1F3864] hover:text-[#0D9488] transition-colors"
                    >
                      <span>{experience.linkLabel}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* ── Community & National Service divider ── */}
        <RevealOnScroll>
          <div className="mt-16 mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              Community &amp; National Service
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="md:pl-10 relative">
          <div className="hidden md:block absolute left-0 top-1.5 w-5 h-5 rounded-full bg-gray-300 border-2 border-white shadow-sm" />
          <div className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
              <h3 className="text-xl font-bold text-[#1F3864] leading-snug">
                {communityExperience.title}
              </h3>
              <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                {communityExperience.period}
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-700 mb-1">
              {communityExperience.company}
            </p>
            <p className="text-xs text-gray-400 mb-1">{communityExperience.location}</p>
            <p className="text-xs text-gray-400 italic mb-6">{communityExperience.context}</p>

            <ul className="space-y-3">
              {communityExperience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 font-light text-[15px] text-gray-600 leading-[1.8]"
                >
                  <span className="text-gray-400 shrink-0 mt-0.5">&gt;</span>
                  {bullet}
                </li>
              ))}
            </ul>

            {communityExperience.link && (
              <a
                href={communityExperience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#1F3864] hover:text-[#0D9488] transition-colors"
              >
                <span>{communityExperience.linkLabel}</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
