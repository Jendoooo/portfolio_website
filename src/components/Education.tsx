const education = [
  {
    degree: "MSc, Sustainable Engineering: Chemical Processing — Distinction",
    school: "University of Strathclyde",
    location: "Glasgow, United Kingdom",
    period: "2024 – 2025",
    awards: [
      "UK Commonwealth Shared Scholar",
      "PTDF Overseas Postgraduate Scholar",
      "Outstanding Renewable Industry Project",
    ],
    focus: "District heating optimisation · Hydrogen feasibility analysis · Computational energy modelling",
  },
  {
    degree: "B.Eng. Chemical Engineering — First Class Honours",
    school: "Afe Babalola University",
    location: "Nigeria",
    period: "2015 – 2020",
    awards: [
      "HOD's Award for Best Research Project",
      "Best Male ChemEng Graduate",
      "Shell Nigeria Scholar",
      "Lagos State Government Scholar",
      "5× Founder's Award for Academic Excellence",
    ],
    focus: null,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 md:py-24 md:px-6 bg-[#1F3864]">
      <div className="max-w-6xl mx-auto">
        <p className="text-teal-400 font-semibold text-[10px] tracking-[0.25em] uppercase mb-4">
          Academic background
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Education & Awards</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((e, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  {e.degree}
                </h3>
                <span className="text-xs font-medium text-blue-200/70 whitespace-nowrap mt-1">
                  {e.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-blue-100 mb-1">{e.school}</p>
              <p className="text-xs text-blue-200/60 mb-6">{e.location}</p>

              {e.focus && (
                <p className="text-xs font-light tracking-wide text-blue-100/80 italic leading-relaxed mb-6">
                  {e.focus}
                </p>
              )}

              <div className="flex flex-col gap-2 relative z-10">
                {e.awards.map((a) => (
                  <div key={a} className="flex items-center gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400 opacity-60"></span>
                    <span className="text-xs font-medium text-blue-200/90 tracking-wide">
                      {a}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
