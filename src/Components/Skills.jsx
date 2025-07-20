import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
    <h1 className="text-4xl font-bold text-green-700 mb-2">Hi, I'm Rushikesh</h1>
    <p className="text-lg text-gray-700">Aspiring Data Analyst | Python, SQL, Power BI, Qlik Sense</p>
</motion.div>

import {
  Brain,
  Code,
  Database,
  BarChart2,
  GitBranch,
  LayoutDashboard,
} from "lucide-react";

const skills = [
  {
    title: "Programming",
    icon: <Code className="w-6 h-6 text-green-600" />,
    items: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Tools & BI",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    items: ["Power BI", "Qlik Sense", "Excel"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-green-600" />,
    items: ["MySQL", "SQL Server"],
  },
  {
    title: "Version Control",
    icon: <GitBranch className="w-6 h-6 text-green-600" />,
    items: ["Git", "GitHub"],
  },
  {
    title: "Softwares",
    icon: <LayoutDashboard className="w-6 h-6 text-green-600" />,
    items: ["VS Code", "SSMS", "Jupyter"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8 text-green-700">Skills</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-green-200 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">
                {skill.title}
              </h4>
              <ul className="text-gray-700 space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
