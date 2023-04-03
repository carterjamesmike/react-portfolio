import React, { useState } from "react";
import { FaStackOverflow, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="md:hidden w-full primary-bg h-15 flex  text-gray-300 justify-around">
      <div>
        <p className="mx-2">
          <a
            className="text-gray-300 flex justify-center"
            href="https://www.linkedin.com/in/james-carter-938804236/"
          >
            {" "}
            <FaLinkedin size={30}></FaLinkedin>{" "}
          </a>
        </p>
        <p>Linkedin</p>
      </div>
      <div>
        <p className="mx-2">
          <a
            className="text-gray-300 flex justify-center"
            href="https://github.com/carterjamesmike"
          >
            {" "}
            <FaGithub size={30}></FaGithub>{" "}
          </a>
        </p>
        <p>Github</p>
      </div>
      <div>
        <p className="mx-2">
          <a
            className="text-gray-300 flex justify-center"
            href="src\assets\pdf\James_Carter_Resume.pdf"
            download=""
          >
            {" "}
            <BsFillPersonFill size={30}></BsFillPersonFill>{" "}
          </a>
        </p>
        <p>Resume</p>
      </div>
    </div>
  );
};

export default Footer;
