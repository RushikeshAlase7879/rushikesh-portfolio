const Navbar = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Rushikesh Alase</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#skills" className="hover:text-green-600">Skills</a>
          <a href="#projects" className="hover:text-green-600">Projects</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
          <a
            href="/Rushikesh_Alase_CV.pdf"
            download
            className="text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
