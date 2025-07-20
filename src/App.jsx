import React from "react";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProjectCard from "./components/ProjectCard";
import './index.css'; // Ensure this is imported to apply styles

const App = () => {
  return (
    <div className="font-sans text-gray-800 bg-white scroll-smooth">
      <div className="max-w-7xl mx-auto px-4">

        {/* Navbar */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Rushikesh Alase</h1>
            <nav className="space-x-6">
              <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
              <a href="#skills" className="text-gray-600 hover:text-green-600">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-green-600">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
            </nav>
          </div>
        </header>

        {/* About */}
        <motion.section
          id="about"
          className="py-16 px-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-700">About Me</h2>
          <p className="text-xl font-semibold mb-2 text-gray-800">Hi, I'm Rushikesh</p>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I am a passionate data analyst skilled in <span className="font-medium">Python, SQL, Power BI</span>, and <span className="font-medium">Qlik Sense</span>.<br />
            Currently pursuing <span className="font-medium">B Tech in AI & ML</span> from <span className="font-medium">D.Y. Patil, Kolhapur</span> with <span className="font-medium">8.8 CGPA</span>.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          className="py-16 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8 text-green-700">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-gray-700">
            <div>
              <h3 className="font-bold mb-2">Programming</h3>
              <p>Python<br />SQL<br />JavaScript</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Tools & BI</h3>
              <p>Power BI<br />Qlik Sense<br />Excel</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Databases</h3>
              <p>MySQL<br />SQL Server</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Version Control</h3>
              <p>Git<br />GitHub</p>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="py-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProjectCard
              title="Capacity Dashboard – Qlik Sense"
              description="Built a drill-down Qlik dashboard for capacity by Region ➜ ProductGroup ➜ Week ➜ Day ➜ Shift ➜ WorkCenter."
              link="https://github.com/RushikeshAlase7879/CapacityDashboard"
              image="https://raw.githubusercontent.com/RushikeshAlase7879/CapacityDashboard/main/preview.png"
              tech="Qlik Sense, Excel, Capacity Analysis"
            />
            <ProjectCard
              title="Claim Processing System – Power BI"
              description="Fraud detection using Power BI & Python with risk score visualizations."
              link="https://github.com/RushikeshAlase7879/ClaimProcessing"
              image="https://raw.githubusercontent.com/RushikeshAlase7879/ClaimProcessing/main/preview.png"
              tech="Power BI, Python, Data Cleaning"
            />
          </div>
        </motion.section>

        {/* Contact */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>

        {/* Resume QR */}
        <motion.section
          id="resume"
          className="py-16 px-4 text-center bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-green-700 mb-6">My Resume</h2>
          <p className="text-gray-600 mb-4">Scan the QR code below or click the button to view/download my resume.</p>

          <img
            src="/resume-qr.png"
            alt="Resume QR Code"
            className="mx-auto w-40 h-40 sm:w-48 sm:h-48 border border-gray-300 rounded-xl shadow-md mb-4"
          />

          <a
            href="https://drive.google.com/file/d/1WNnrIFf_iaZuLhFWStuwr3nGbYkkyupX/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </motion.section>

        {/* Scroll to Top & Footer */}
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default App;
