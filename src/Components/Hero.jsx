import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-green-700 mb-2">Hi, I'm Rushikesh</h1>
        <p className="text-lg text-gray-700">Aspiring Data Analyst | Python, SQL, Power BI, Qlik Sense</p>
      </motion.div>
    </section>
  );
};

export default Hero;
