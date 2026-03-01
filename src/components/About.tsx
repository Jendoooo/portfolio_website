const skills = [
  {
    cat: "Languages",
    items: "Python - SQL - TypeScript - JavaScript - PowerShell",
  },
  {
    cat: "Data Engineering",
    items: "ETL pipelines - REST API integration - Web scraping - Power BI - Pandas",
  },
  {
    cat: "Databases",
    items: "PostgreSQL (Supabase) - SSMS - Power Automate",
  },
  {
    cat: "Web and Deployment",
    items: "Next.js - React - FastAPI - Git - GitHub - Vercel",
  },
  {
    cat: "Domain",
    items: "Energy Transition - Sustainability - Operations Analytics - Port Logistics",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-4 md:py-24 md:px-6 bg-white relative z-10 -mt-10 rounded-t-3xl shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#0D9488] font-semibold text-[10px] tracking-[0.25em] uppercase mb-4">
              About Me
            </p>
            <h2 className="font-[family-name:var(--font-syne)] font-black tracking-tight text-4xl md:text-5xl text-[#1F3864] mb-8">
              I build data architecture that scales businesses.
            </h2>
            <div className="space-y-6 font-light text-[17px] leading-[1.8] text-gray-600">
              <p>
                I hold a First Class B.Eng. in Chemical Engineering and an MSc in
                Sustainable Engineering (Distinction) from the University of
                Strathclyde, Glasgow. My academic and professional foundation is
                deeply rooted in the green energy transition—modelling district
                heating systems, analysing hydrogen feasibility, and developing
                computational tools for sustainable infrastructure.
              </p>
              <p>
                At Lekki Freeport Terminal - Nigeria&apos;s largest seaport - I founded
                the Operations Data Analytics unit from scratch. I built the
                pipelines, the Power BI dashboards, and the governance framework
                that automated reporting to CMA CGM HQ in Paris and to Nigerian
                regulators, cutting manual processing time by over 90%.
              </p>

              <blockquote className="border-l-4 border-[#0D9488] pl-6 py-2 my-8">
                <p className="text-xl font-medium text-[#1F3864] leading-relaxed italic">
                  &ldquo;Clean pipelines and good dashboards are infrastructure - not
                  extras.&rdquo;
                </p>
              </blockquote>

              <p>
                Now based in the United Kingdom, I run Mobo Digital — an independent
                data consultancy delivering 20+ projects globally, from government
                procurement intelligence platforms to real-time district heating dashboards.
              </p>

              <p>
                When not building pipelines, I&apos;m probably overthinking my FPL team
                - yes, I built a whole platform for it.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 group">
                <img
                  src="/photos/about.jpg"
                  alt="Working"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div>
              <p className="text-[#0D9488] font-semibold text-[10px] tracking-[0.25em] uppercase mb-4">
                Technical skills
              </p>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill.cat}
                    className="p-4 bg-[#F8FAFC] rounded-xl border border-gray-100 shadow-sm"
                  >
                    <p className="text-[10px] font-bold text-[#1F3864] uppercase tracking-wider mb-1">
                      {skill.cat}
                    </p>
                    <p className="text-sm font-light text-gray-600 leading-relaxed">
                      {skill.items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
