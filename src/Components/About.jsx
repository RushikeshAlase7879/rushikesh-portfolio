import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
    <h1 className="text-4xl font-bold text-green-700 mb-2">Hi, I'm Rushikesh</h1>
    <p className="text-lg text-gray-700">Aspiring Data Analyst | Python, SQL, Power BI, Qlik Sense</p>
</motion.div>

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16">
      <h3 className="text-3xl font-bold mb-4">About Me</h3>
      <p className="mb-2">
        I am a passionate data analyst skilled in Python, SQL, Power BI, and Qlik Sense.
      </p>
      <p>
        Currently pursuing B Tech in Artificial Intelligence & Machine Learning from D.Y. Patil, Kolhapur with 8.8 CGPA.
      </p>
    </section>
  );
};

export default About;
