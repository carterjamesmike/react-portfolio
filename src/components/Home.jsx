import React from "react";
import Portrait from "../assets/images/portrait.jpg";

const Home = () => {
  return (
    <div name="Home" className="flex flex-col w-full h-screen bg-primary primary-bg sm:flex-row">
      <div className="mx-auto pr-8 pl-[100px] flex flex-col justify-center h-full sm:mt-[100px]">
        <p className="accent-text">Hey there, my name is</p>
        <h1 className="text-4xl sm:7xl font-bold text-[#ccd6f6]">
          James M. Carter
        </h1>
        <h2 className="text-4xl sm:tx-7xl font-bold text-[#8892b0]">
          I am a full-stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
      </div>
      <div className=" mx-auto pr-8 pl-[100px] flex flex-col justify-center h-full ">
            <img
              className="max-h-[400px] max-w-[400px] rounded-3xl border-[#d94929] border-2 "
              src={Portrait}
              alt="Portrait"
            />
      </div>
    </div>
  );

};
export default Home;
