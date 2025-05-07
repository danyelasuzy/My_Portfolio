import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <RevealOnScroll>
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-20"
      >
        {/* LEFT SIDE: IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/myphoto.jpg"
            alt="Daniela"
            className="w-40 h-40 md:w-70 md:h-70 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <div className="w-full md:w-1/2 text-center items-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to bg-blue-300 bg-clip-text text-transparent leading-right">
            Hello, I'm Daniela!
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            &lt;I'm a{" "}
            <span className="font-bold text-gray-100">fullstack developer</span>{" "}
            with the eyes of a creator and mind of a programmer. I love building
            scalable and user-friendly web applications in a professional way
            that deliver high performance and a great user experience./&gt;
          </p>
          <div className="flex items-center justify-center space-x-4  mr-10">
            <a
              href="#projects"
              className="bg-[#F5C45E] text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[#F5C45E] text-[#F5C45E] py-3 px-6 rounded font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
