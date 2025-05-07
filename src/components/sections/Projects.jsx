import {
  SiAngular,
  SiTailwindcss,
  SiTypescript,
  SiReact,
} from "react-icons/si";
import { RevealOnScroll } from "../../components/RevealOnScroll";
export const Projects = () => {
  return (
    <RevealOnScroll>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-width-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-15  bg-gradient-to-r from-fuchsia-400 to bg-blue-300 bg-clip-text text-transparent leading-right">
            Featured Projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <img
                src="/calculator.png"
                alt="calculator"
                className="h-45 w-full object-contain
                "
              />
              <h3 className="text-xl font-bold mb-2">Investment Calculator</h3>
              <p className="text-gray-300 mb-4 text-start">
                {" "}
                Calculate future investment value with compound
                interest.Responsive design for mobile and desktop.
              </p>
              <div className="flex flex-wrap justify-between items-center gap-4 mt-2">
                <div className="flex gap-2 text-2xl">
                  <SiAngular className=" text-[#DD0031]" title="Angular" />
                  <SiTailwindcss
                    className=" text-[#38BDF8]"
                    title="Tailwind CSS"
                  />
                  <SiTypescript
                    className=" text-[#007ACC]"
                    title="TypeScript"
                  />
                </div>
                <a
                  href="https://danyelasuzy.github.io/Investment_Calculator/"
                  target="_blank"
                  className="text-blue 400 hover:text-[#F5C45E] transition-colors hover:shadow-[0_0_15px_rgba(253,224,71,0.5)]"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
              <img
                src="/myportfolio.png"
                alt="portfolio"
                className="h-45 w-full object-contain
                "
              />
              <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
              <p className="text-gray-300 mb-4 text-start">
                Designed and developed an interactive portfolio to showcase my
                skills as a web developer.
              </p>

              <div className="flex justify-between items-center mt-2 mb-2">
                <div className="flex gap-2 text-2xl">
                  <SiReact className="text-[#61DAFB]" title="React" />
                  <SiTailwindcss
                    className="text-[#38BDF8]"
                    title="Tailwind CSS"
                  />
                </div>
                <a
                  href="myportfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue 400 hover:text-[#F5C45E] transition-colors hover:shadow-[0_0_15px_rgba(253,224,71,0.5)]"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
              <img
                src="/myportfolio.png"
                alt="portfolio"
                className="h-45 w-full object-contain
                "
              />
              <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
              <p className="text-gray-300 mb-4 text-start">
                Designed and developed an interactive portfolio to showcase my
                skills as a web developer.
              </p>

              <div className="flex justify-between items-center mt-2 mb-2">
                <div className="flex gap-2 text-2xl">
                  <SiAngular className=" text-[#DD0031]" title="Angular" />
                  <SiTailwindcss
                    className="text-[#38BDF8]"
                    title="Tailwind CSS"
                  />
                </div>
                <a
                  href="myportfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue 400 hover:text-[#F5C45E] transition-colors hover:shadow-[0_0_15px_rgba(253,224,71,0.5)]"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
