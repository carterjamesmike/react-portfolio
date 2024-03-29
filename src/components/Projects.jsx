import React from "react";
import { projectData } from "../data/projectData";

const Projects = () => {
  const project = projectData;

  return (
    <div
      name="Projects"
      className="bg-primary primary-bg w-full md:h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 accent-color">
            Projects
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project Card */}
          {project.map((project) => (
            <div
              style={{ backgroundImage: `url(${project.img})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="flex justify-center text-2xl font-bold text-gray-900 tracking-wider">
                  {project.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={project.github}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-gray-900 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  {project.deployed ? (
                    <a href={project.deployed}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-gray-900 font-bold text-lg">
                        App
                      </button>
                    </a>
                  ) : (
                    <span></span>
                  )}

                  <p className="text-gray-900 font-bold text-l pt-4">
                    {project.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
