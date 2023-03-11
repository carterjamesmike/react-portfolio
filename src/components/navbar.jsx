import React, { useState } from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

        const data = [
            {id: 1, name: "Home"},
            {id: 2, name: "About"},
            {id: 3, name: "Skills"},
            {id: 4, name: "Projects"},
            {id: 5, name: "Contact"},
        ];  

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 primary-bg text-gray-300">
            <h1 className="text-2xl accent-text">James M. Carter</h1>
            <ul className="hidden md:flex">
                {data.map(link => (
                    <div key={link.id}>
                        <li>
                            <Link to={link.name} smooth={true} duration={500}>{link.name}</Link>
                        </li>
                    </div>
                ))}
            </ul>

            {/* Mobile Menu Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes /> }
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen primary-bg flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='Home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='About' smooth={true} duration={500}>
                        About
                    </Link>                    
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='Skills' smooth={true} duration={500}>
                        Skills
                    </Link>                    
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='Projects' smooth={true} duration={500}>
                        Projects
                    </Link>                    
                </li> 
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='Contact' smooth={true} duration={500}>
                        Contact
                    </Link>                    
                </li>                               
            </ul>

            {/* Social Media Icons */}
            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b89881]"> 
                        <a className="flex justify-between items-center w-full text-gray-300" href='https://www.linkedin.com/in/james-carter-938804236/'> LinkedIn <FaLinkedin size={30}></FaLinkedin> </a> 
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#786354]"> 
                    <a className="flex justify-between items-center w-full text-gray-300" href='https://github.com/carterjamesmike'> Github <FaGithub size={30}></FaGithub> </a> 
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#382f27]"> 
                        <a className="flex justify-between items-center w-full text-gray-300" href='src\assets\pdf\James_Carter_Resume.pdf' download=""> Resume <BsFillPersonFill size={30}></BsFillPersonFill> </a> 
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar