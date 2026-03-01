import RevealOnScroll from "@/components/RevealOnScroll";

const research = [
  {
    title: "MSc Thesis: Computational Carbon Capture & Isotherm Modelling",
    context: "University of Strathclyde (Distinction, 2025)",
    desc: "Developed a full computational data workflow for CO2/CH4 separation on ZIF-8. Built a Python pipeline to collect and harmonise 256 dataset records from NIST, screened for reproducible outlier-controlled consensus isotherms. Fitted data using Toth and IAST modelling, translating abstract adsorption data into robust industrial screening insights.",
    tags: ["Data Engineering", "Python", "NIST Pipeline", "IAST Modelling", "Carbon Capture"],
  },
  {
    title: "Reservoir Simulation and Decline Curve Analysis",
    context: "Chevron Nigeria - Asset Engineering Internship",
    desc: "Applied PROSPER and decline analysis to support gas-lift design and intervention planning, translating production data into operational decisions in Escravos field workflows.",
    tags: ["PROSPER", "Reservoir Simulation", "Decline Curves", "Well Planning"],
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <p className="text-[#0D9488] font-semibold text-sm tracking-widest uppercase mb-3">
            Academic and Technical Research
          </p>
          <h2 className="font-[family-name:var(--font-syne)] font-black tracking-tight text-4xl md:text-5xl text-[#1F3864] mb-4">Research</h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            My research combines computational engineering, reproducible data
            workflows, and industrial modelling, with a focus on energy systems
            and carbon capture applications.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {research.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 0.1}>
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-xs text-[#0D9488] font-semibold uppercase tracking-wider mb-2">
                  {item.context}
                </p>
                <h3 className="text-base font-bold text-[#1F3864] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#EEF4FF] text-[#1F3864] text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
