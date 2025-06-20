import React from "react";

const Skills = () => {
  return (
    <div className="px-4 md:px-20 py-10" id="skills">
      <h1 className="hover:text-fuchsia-500 text-center text-3xl md:text-4xl font-bold mb-10">
        Skills
      </h1>

      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg md:text-xl">
        {/* Skill Card Template */}
        {[
          {
            icon: (
              <i className="fa-brands fa-html5 text-amber-600 text-2xl"></i>
            ),
            label: "HTML",
          },
          {
            icon: <i className="fa-brands fa-css3 text-blue-500 text-2xl"></i>,
            label: "CSS",
          },
          {
            icon: <i className="fa-brands fa-js text-yellow-400 text-2xl"></i>,
            label: "JavaScript",
          },
          {
            icon: (
              <i className="fa-brands fa-bootstrap text-blue-900 text-2xl"></i>
            ),
            label: "Bootstrap",
          },
          {
            icon: <i className="fa-brands fa-react text-cyan-700 text-2xl"></i>,
            label: "React JS",
          },
          {
            icon: <i className="fa-brands fa-node text-green-600 text-2xl"></i>,
            label: "Node JS",
          },
          {
            icon: (
              <i className="fa-brands fa-java text-orange-800 text-2xl"></i>
            ),
            label: "Java",
          },
          {
            icon: (
              <i className="fa-brands fa-node text-orange-800 text-2xl"></i>
            ),
            label: "Express JS",
          },
          {
            icon: (
              <i className="fa-solid fa-database text-green-500 text-2xl"></i>
            ),
            label: "MongoDB",
          },
          {
            icon: (
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-css-framework-customizable-coding-lang-pack-logos-icons-7577995.png"
                alt="Tailwind CSS"
                className="w-8 sm:w-10"
              />
            ),
            label: "Tailwind",
          },
        ].map((skill, index) => (
          <li
            key={index}
            className="text-white bg-gradient-to-r from-[rgb(41,200,13)] to-[rgb(1,48,8)] p-[14px] rounded-[10px] w-[140px] sm:w-[160px] md:w-[180px] text-center"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              {skill.icon}
              {skill.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
