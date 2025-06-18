import React from "react";
import lpu from "../assets/photo/lpulogo.png";
import nriVismt from "../assets/photo/nri vismt.jpg";
import sgvm from "../assets/photo/sgvm.jpg";

const Education = () => {
  return (
    <div className="p-6 min-h-screen" id="education">
      <h1 className="text-3xl font-bold mb-6 text-center">Education</h1>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {/* MCA */}
        <div className="bg-gradient-to-r from-green-700 to-black rounded-2xl shadow-md p-5 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-white">
              MCA - Master of Computer Applications
            </h2>
            <h4 className="text-md text-gray-200">
              Lovely Professional University
            </h4>
            <p className="text-sm text-gray-300 mt-1">
              <span>Aug 2024</span> -{" "}
              <span className="text-red-300">Present</span>
            </p>
          </div>

          <div className="bg-white w-24 h-24 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={`${lpu}`}
              alt="University Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* BCA */}
        <div className="bg-gradient-to-r from-green-700 to-black rounded-2xl shadow-md p-5 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-white">
              BCA - Bachelor of Computer Applications
            </h2>
            <h4 className="text-md text-gray-200">
              NRI Vidyadayini Institute of Science, Management and Technology
            </h4>
            <p className="text-sm text-gray-300 mt-1">
              <span>Aug 2020</span> -{" "}
              <span className="text-red-300">May 2023</span>
            </p>
          </div>

          <div className="bg-white w-24 h-24 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={`${nriVismt}`}
              alt="NRI VISMT Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Intermediate */}
        <div className="bg-gradient-to-r from-green-700 to-black rounded-2xl shadow-md p-5 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Intermediate School
            </h2>
            <h4 className="text-md text-gray-200">
              Shiv Ganga Vidya Mandir, Prayagraj
            </h4>
            <p className="text-sm text-gray-300 mt-1">
              <span>2018</span> - <span className="text-red-300">2020</span>
            </p>
          </div>

          <div className="bg-white w-24 h-24 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={`${sgvm}`}
              alt="SGVM Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* High School */}
        <div className="bg-gradient-to-r from-green-700 to-black rounded-2xl shadow-md p-5 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-white">High School</h2>
            <h4 className="text-md text-gray-200">
              Shiv Ganga Vidya Mandir, Prayagraj
            </h4>
            <p className="text-sm text-gray-300 mt-1">
              <span>2016</span> - <span className="text-red-300">2018</span>
            </p>
          </div>

          <div className="bg-white w-24 h-24 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={`${sgvm}`}
              alt="SGVM Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
