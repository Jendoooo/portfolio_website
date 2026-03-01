"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { scaleIn, staggerContainer } from "@/lib/animations";

const photos = [
  {
    src: "/photos/fintry presentation .jpeg",
    caption: "2024 - Consulting at Fintry. Presenting the District Heating Analytics Platform.",
  },
  {
    src: "/photos/journey-01.jpg",
    caption: "2020 - B.Eng. First Class Honours. The engineering foundation.",
  },
  {
    src: "/photos/journey-02.jpg",
    caption: "2022 - Lekki Freeport Terminal. Presenting operational data models.",
  },
  {
    src: "/photos/journey-04.jpg",
    caption: "2025 - Lagos. Scaling production data architectures.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-16 px-4 md:py-24 md:px-6 bg-[#0F1A2B]">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <p className="text-[#0D9488] font-semibold text-[10px] tracking-[0.25em] uppercase mb-4">
            The journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Behind the commits
          </h2>
        </RevealOnScroll>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {photos.map((photo) => (
            <motion.figure
              key={photo.caption}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-sm group-hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/75 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium">{photo.caption}</p>
                </div>
              </div>
              <figcaption className="text-xs font-medium text-blue-200/70 mt-3 leading-relaxed">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
