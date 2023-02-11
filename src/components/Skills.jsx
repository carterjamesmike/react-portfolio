import React from 'react';
import Bootstrap from '../assets/bootstrap_icon.png';
import Javascript from '../assets/js_icon.png';
import MongoDb from '../assets/mongodb_icon.png';
import NodeJs from '../assets/nodejs_icon.png';
import ReactIcon from '../assets/react_icon.png';
import Tailwind from '../assets/tailwind_icon.png';


const Skills = () => {

    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 py-4'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='font-bold inline border-b-4 border-pink-600 text-4xl '>Technologies Used</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="bootstrap icon" />
                        <p className='my-4'>Boostrap</p> 
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt="bootstrap icon" />
                        <p className='my-4'>Javascript</p> 
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MongoDb} alt="bootstrap icon" />
                        <p className='my-4'>MongoDb</p> 
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={NodeJs} alt="bootstrap icon" />
                        <p className='my-4'>Node.js</p> 
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactIcon} alt="bootstrap icon" />
                        <p className='my-4'>React</p> 
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="bootstrap icon" />
                        <p className='my-4'>Tailwind</p> 
                    </div>
                </div>
            </div>        
        </div>
    )
} 

export default Skills