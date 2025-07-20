const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
            <h4 className="text-xl font-semibold text-green-700 mb-2">
              Capacity Dashboard – Qlik Sense
            </h4>
            <p className="text-gray-700 mb-4">
              Built an interactive drill-down dashboard to visualize booked vs available capacity by Region ➜ ProductGroup ➜ Week ➜ Day ➜ Shift ➜ WorkCenter.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Qlik Sense</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Data Modeling</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">ETL</span>
            </div>
            <a
              href="https://github.com/your-github/qlik-capacity-dashboard"
              target="_blank"
              className="text-green-600 hover:underline"
            >
              🔗 View GitHub Repo
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
            <h4 className="text-xl font-semibold text-green-700 mb-2">
              Claim Processing System – Power BI
            </h4>
            <p className="text-gray-700 mb-4">
              Built a fraud detection and analysis system using Power BI & Python. Dashboard visualizes KPIs, claim flags, and risk scores from structured insurance data.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Power BI</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Python</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">SQL</span>
            </div>
            <a
              href="https://github.com/your-github/claim-processing"
              target="_blank"
              className="text-green-600 hover:underline"
            >
              🔗 View GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
