import React from "react";
import "../style/skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills mx-20 " id="skills">
        <h1 className="skill-heading text-center text-4xl font-bold my-10">
          Skills
        </h1>
        <ul className="flex flex-wrap justify-start text-2xl list-none gap-6">
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <i className="fa-brands fa-html5 text-amber-600"></i>HTML
            </div>
          </li>
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <i className="fa-brands fa-css3 text-blue-500"></i>CSS
            </div>
          </li>
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <i className="fa-brands fa-js text-amber-300"></i>Javascript
            </div>
          </li>
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <i className="fa-brands fa-bootstrap text-blue-900"></i>Bootstrap
            </div>
          </li>
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <i className="fa-brands fa-react text-cyan-700"></i>React JS
            </div>
          </li>
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <i className="fa-brands fa-node text-green-600"></i>Node JS
            </div>
          </li>
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <i className="fa-brands fa-java text-orange-800 bg-blue-400 font-bold"></i>
              Java
            </div>
          </li>
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <i className="fa-brands fa-node text-orange-800 bg-blue-400 font-bold"></i>
              Express Js
            </div>
          </li>
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <i className="fa-solid fa-database text-green-500"></i>MongoDB
            </div>
          </li>
          <li className="skill-card">
            <div className="skill-item flex items-center gap-2">
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-css-framework-customizable-coding-lang-pack-logos-icons-7577995.png"
                alt="Tailwind CSS"
                className="w-10"
              />
              Tailwind
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
