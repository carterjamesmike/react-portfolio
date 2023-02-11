import React, { useState } from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonFill} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className=" bg-red-900 h-10 flex justify-between items-center w-full">
            <ul className="hidden md:flex">
                <li>Projects </li>
                <li>Contact</li>
            </ul>
        </div>

    )
}

export default Footer

