import React, { useState } from "react";
import Seagull from "../assets/images/seagull.png";
import useDarkSide from "../hooks/partyMode";


const Home = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
  
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    //const handleClick = () => console.log("Squak")

    return (
        <div name='Home' className='flex w-full h-screen primary-bg'>
            <div className=" mx-auto pr-8 pl-[100px] flex flex-col justify-center h-full ">
                <p className="accent-text">Hey there, my name is</p>
                <h1 className="text-4xl sm:7xl font-bold text-[#ccd6f6]">James M. Carter</h1>
                <h2 className="text-4xl sm:tx-7xl font-bold text-[#8892b0]">I am a full-stack developer</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
            </div>
            <div className=" mx-auto pr-8 pl-[100px] flex flex-col justify-center h-full ">
                <button onClick={toggleDarkMode} checked={darkSide}>
                    <img className="h-[100px] w-[100px]" src={Seagull} alt="seagull icon" />
                </button>
 
            </div>     
        </div> 
    )
}
export default Home