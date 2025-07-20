const experiences = [
  {
    title: "Capacity Dashboard – Qlik Sense",
    subtitle: "Self Project | Qlik Sense",
    duration: "2025",
    description:
      "Built a drill-down Qlik Sense dashboard to visualize booked vs available capacity by Region ➜ ProductGroup ➜ Week ➜ Day ➜ Shift ➜ WorkCenter.",
    tech: ["Qlik Sense", "Data Modeling", "ETL"],
  },
  {
    title: "Claim Processing System – Power BI",
    subtitle: "Internship Project | DY Patil",
    duration: "2025",
    description:
      "Developed fraud detection & analysis system using Power BI & Python. Visualized KPIs, claim flags, and risk scores from structured insurance data.",
    tech: ["Power BI", "Python", "SQL"],
  },
  {
    title: "Excel-Based Sales Report Automation",
    subtitle: "Freelance Task",
    duration: "2024",
    description:
      "Automated daily sales reporting using Excel formulas, pivot tables, slicers, and dashboards for small retail client.",
    tech: ["Excel", "Dashboards", "Formulas"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-green-700 mb-10">Experience</h3>

        <div className="relative border-l-4 border-green-300 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute w-4 h-4 bg-green-600 rounded-full left-[-10px] top-2"></div>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-green-400">
                <h4 className="text-xl font-semibold text-green-800">{exp.title}</h4>
                <p className="text-sm text-gray-600 mb-1">{exp.subtitle} • {exp.duration}</p>
                <p className="text-gray-700 mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
