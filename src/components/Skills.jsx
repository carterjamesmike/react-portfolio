import React from "react";
import { techData } from "../data/techData";

const Skills = () => {
  const tech = techData;

  return (
    <div
      name="Skills"
      className="w-full h-screen bg-primary primary-bg text-gray-300 py-4"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="font-bold inline border-b-4 accent-color text-4xl ">
            Technologies Used
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
          {tech.map((tech) => (
            <div
              key={tech.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={tech.icon} alt="{tech.name}" />
              <p className="my-4">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
