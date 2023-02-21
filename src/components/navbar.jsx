import React, { useState } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'
import { theme } from "../hooks/partyMode";

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
        <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 ${theme} text-gray-300`}>
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
        </div>
    )
}

export default Navbar