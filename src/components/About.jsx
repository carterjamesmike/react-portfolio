import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-primary primary-bg text-gray-300 "
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 accent-color">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              A new full-stack developer with a preference for both React and
              back-end development.
            </p>
          </div>
          <div>
            <p>
              I am a recent graduate of the University of Texas at Austin
              Full-Stack Coding Bootcamp. It is there I discoverd a new passion
              for programming and a drive to constantly learn new technolgoies
              and languages. Outisde of programming you can often find me riding
              bikes, smoking briskets, or teaching my three-year old son to play
              D&D.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
