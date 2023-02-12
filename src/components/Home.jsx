import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen primary-bg'>

            {/* Container */}
            <div className="max-2-[1000px] mx-auto pr-8 pl-[100px] flex flex-col justify-center h-full ">
                <p className="accent-text">Hi, my name is</p>
                <h1 className="text-4xl sm:7xl font-bold text-[#ccd6f6]">James M. Carter</h1>
                <h2 className="text-4xl sm:tx-7xl font-bold text-[#8892b0]">I am a full-stack developer</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <div>
                    <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"> View Work    
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div> 
    )
}
export default Home