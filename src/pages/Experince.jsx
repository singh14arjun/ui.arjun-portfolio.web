import React from "react";

const Experince = () => {
  return (
    <div id="experience">
      <section className="mx-2.5 md:mx-20 my-10">
        <h2 class="text-3xl font-bold mb-6 text-center  ">Experience</h2>
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-green-700 to-black p-6 rounded-lg shadow-md">
            <h3 class=" font-semibold text-4xl">
              Web Intern – <span className="text-blue-400 text-4xl">Be</span>
              <span className="text-fuchsia-600 text-4xl">poj</span> Technology
            </h3>
            <p class="text-sm text-gray-500">Dec 2024 – Present</p>
            <ul class="list-disc pl-5 mt-2 text-white">
              <li>
                Built responsive UI components using React and Tailwind CSS
              </li>
              <li>Collaborated with backend team to integrate REST APIs</li>
              <li>Improved performance and accessibility of legacy pages</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experince;
