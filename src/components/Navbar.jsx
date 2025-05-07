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
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg px-4 p-2 shadow-md border-b border-white/10">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto h-16 w-full">
        <a href="#home">
          <img
            src={`${import.meta.env.BASE_URL}susan-logo.png`}
            alt="Susan Logo"
            className="max-w-[120px] md:max-w-[160px] mt-4 md:mt-5"
          />
        </a>

        {/* Hamburger Icon */}
        <div
          className="w-6 h-5 flex flex-col justify-between cursor-pointer md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block w-full h-0.5 bg-white"></span>
          <span className="block w-full h-0.5 bg-white"></span>
          <span className="block w-full h-0.5 bg-white"></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
