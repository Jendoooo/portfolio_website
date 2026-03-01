import RevealOnScroll from "@/components/RevealOnScroll";

const research = [
  {
    title: "District Heating Network Optimisation",
    context: "MSc Thesis - University of Strathclyde",
    desc: "Computational modelling and optimisation of district heating networks to maximise thermal efficiency and reduce carbon output. Applied mixed-integer linear programming techniques to network topology problems.",
    tags: ["Thermal Systems", "Optimisation", "Python", "Energy Modelling"],
  },
  {
    title: "Hydrogen Feasibility Analysis",
    context: "MSc Project - University of Strathclyde",
    desc: "Techno-economic feasibility study of hydrogen as an energy carrier in industrial decarbonisation pathways. Evaluated cost trajectories, infrastructure requirements, and lifecycle emissions.",
    tags: ["Hydrogen", "Techno-economic Analysis", "Decarbonisation"],
  },
  {
    title: "MOF-Based Carbon Capture",
    context: "MSc Research Component",
    desc: "Investigation into Metal-Organic Framework materials for post-combustion carbon capture applications. Analysed adsorption characteristics and regeneration cycles.",
    tags: ["MOFs", "Carbon Capture", "Materials Science"],
  },
  {
    title: "Reservoir Simulation and Decline Curve Analysis",
    context: "Chevron Nigeria - Asset Engineering Internship",
    desc: "Production data interpretation using PROSPER for gas-lift design; decline curve analysis to forecast well performance and guide intervention planning decisions at Escravos terminal.",
    tags: [
      "PROSPER",
      "Reservoir Simulation",
      "Decline Curves",
      "Well Intervention",
    ],
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
          <h2 className="text-4xl font-bold text-[#1F3864] mb-4">Research</h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            My academic background spans energy systems, sustainability
            engineering, and petroleum engineering, bridging scientific rigour
            with real-world industrial application.
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
