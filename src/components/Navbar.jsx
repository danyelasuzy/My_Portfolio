import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-4 w-full md:w-3/4 mx-auto   z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-screen-lg justify-between ">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            <img
              src={`${import.meta.env.BASE_URL}susan-logo.png`}
              alt="Susan Logo"
              className="max-w-[120px] md:max-w-[160px]"
            />
          </a>

          {/* Hamburger Icon for Mobile */}
          <div
            className="w-6 h-5 flex flex-col justify-between cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </div>

          {/* Main Links for Desktop */}
          <div className="hidden md:flex items-center space-x-10 animate-vertical">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
