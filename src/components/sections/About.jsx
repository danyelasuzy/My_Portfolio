/* eslint-disable no-unused-vars */
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiAngular,
  SiShopify,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { FaJava, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { RevealOnScroll } from "../../components/RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    { icon: SiReact, color: "#61DAFB", title: "React" },
    { icon: SiTailwindcss, color: "#38BDF8", title: "Tailwind" },
    { icon: SiFramer, color: "#0055FF", title: "Framer" },
    { icon: SiAngular, color: "#DD0031", title: "Angular" },
    { icon: SiShopify, color: "#A5A5A5", title: "Shopify" },
  ];

  const backendSkills = [
    { icon: SiNodedotjs, color: "#339933", title: "Node.js" },
    { icon: SiMongodb, color: "#47A248", title: "MongoDB" },
    { icon: SiExpress, color: "#000000", title: "Express" },
    { icon: SiMysql, color: "#4479A1", title: "MySQL" },
    { icon: FaJava, color: "#ED8B00", title: "Java" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl w-full mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8  bg-gradient-to-r from-fuchsia-400 to bg-blue-300 bg-clip-text text-transparent leading-right">
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed text-start">
              &lt;In recent years, I’ve shifted my creative and analytical
              mindset toward web development. I've built responsive web
              applications using
              <span className="font-semibold text-white"> React</span>,{" "}
              <span className="font-semibold text-white"> Mongo DB</span>,{" "}
              <span className="font-semibold text-white">Node.js</span>, and{" "}
              <span className="font-semibold text-white">Express</span>, and
              I’ve collaborated on{" "}
              <span className="font-semibold text-white">UI/UX</span> design
              through tools like{" "}
              <span className="font-semibold text-white">Framer</span> and{" "}
              <span className="font-semibold text-white">Liquid</span> for
              Shopify. My work combines clean code with a clear vision — always
              with the user experience at the core. I thrive in collaborative
              environments, love learning new technologies, and believe that
              design and functionality go hand in hand. Whether I’m integrating{" "}
              <span className="font-semibold text-white"> APIs </span>, crafting
              dynamic dashboards, or fine-tuning layouts, I aim to bring
              clarity, functionality, and a touch of elegance to every
              project./&gt;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-4 text-4xl px-10">
                  {frontendSkills.map(({ icon: Icon, color, title }) => (
                    <Icon
                      key={title}
                      style={{ color }}
                      className="transition-transform duration-200 hover:scale-110"
                      title={title}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-4 text-4xl px-10">
                  {backendSkills.map(({ icon: Icon, color, title }) => (
                    <Icon
                      key={title}
                      style={{ color }}
                      className="transition-transform duration-200 hover:scale-110"
                      title={title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FaGraduationCap className="text-indigo-400" /> Education{" "}
                </h3>
                <ul className="flex flex-col items-start text-start list-disc text-gray-300 space-y-2">
                  <li>
                    <strong>Certificate in Web Dev (2024-2025)</strong>
                    <p className="text-start">
                      Front-end development with HTML5, CSS3, JavaScript, React.
                      <br />
                      Back-end development using Node.js, Express.js, and
                      MongoDB. <br />
                      API integration, RESTful routing, and asynchronous
                      operations.
                      <br />
                      Version control using Git and GitHub with collaborative
                      workflow.
                    </p>
                  </li>

                  <li>
                    <strong>Certificate in Data Analyst (2023-2024)</strong>
                    <p className="text-start">
                      Data cleansing, and transformation using Excel and Power
                      Query.
                      <br />
                      Data modeling and analysis with Power BI and DAX formulas.
                      <br />
                      Designing dynamic dashboards and interactive reports.
                    </p>
                  </li>

                  <li>
                    <strong>Certificate in Tableau (2023-2024)</strong>
                    <p className="text-start">
                      Building interactive dashboards using Tableau Desktop.{" "}
                      <br />
                      Applying filters, calculated fields, parameters, and
                      level-of-detail expressions. <br />
                    </p>
                  </li>

                  <li>
                    <strong>Certificate in English (2017-2018)</strong>
                    <p className="text-start">
                      Grammar, sentence structure, and vocabulary development.{" "}
                      <br /> Writing practice for formal and workplace
                      communication. <br /> Verbal fluency through discussion,
                      presentations, and interviews.
                    </p>
                  </li>

                  <li>
                    <strong>Baccalaureate in Sciences (2004-2008)</strong>
                    <p className="text-start">
                      Advanced courses in mathematics, physics, chemistry, and
                      biology.
                      <br /> Laboratory-based experimentation.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FaBriefcase className="text-indigo-400" />
                  Work Experience
                </h3>
                <ul className="flex flex-col items-start text-start list-disc text-gray-300 space-y-2">
                  <li>
                    <strong>White Rabbit digital marketing (2025)</strong>
                    <p className="text-start">
                      Modify and enhance UI/UX components on a site using Framer
                      and React. Develop and customize sections in Shopify to
                      optimize e-commerce functionality. Integrating APIs in
                      mobile apps.
                    </p>
                  </li>

                  <li>
                    <strong>BeCode (2024-2025)</strong>
                    <p className="text-start">
                      Collaborate on developing user-friendly, responsive web
                      applications using HTML5, CSS3, JavaScript, and React.
                      Build and maintain RESTful APIs with Node.js and
                      Express.js.
                    </p>
                  </li>

                  <li>
                    <strong> Medecins sans frontieres (2024)</strong>
                    <p className="text-start">
                      Designed and developed interactive dashboards in Power BI,
                      visualizing critical KPIs by implemented DAX formulas.
                    </p>
                  </li>

                  <li>
                    <strong> Casino Viage (2015-2023)</strong>
                    <p className="text-start">
                      Compiled performance statistics,to identify key insights
                      and optimize gaming strategies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>
    </section>
  );
};
