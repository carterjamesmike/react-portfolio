import React, { useState } from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav
        )
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
 
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes /> }
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">Projects</li>
             <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600"> 
                        <a className="flex justify-between items-center w-full text-gray-300" href='/'> LinkedIn <FaLinkedin size={30}></FaLinkedin> </a> 
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600"> 
                        <a className="flex justify-between items-center w-full text-gray-300" href='/'> Github <FaGithub size={30}></FaGithub> </a> 
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600"> 
                        <a className="flex justify-between items-center w-full text-gray-300" href='/'> Email <HiOutlineMail size={30}></HiOutlineMail> </a> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar