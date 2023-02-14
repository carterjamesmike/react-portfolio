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
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">Projects</li>
             <li className="py-6 text-4xl">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar