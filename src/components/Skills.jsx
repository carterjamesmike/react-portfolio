import React from 'react';
import Bootstrap from '../assets/bootstrap_icon.png';
import Javascript from '../assets/js_icon.png';
import MongoDb from '../assets/mongodb_icon.png';
import NodeJs from '../assets/nodejs_icon.png';
import ReactJs from '../assets/react_icon.png';
import Tailwind from '../assets/tailwind_icon.png';


const Skills = () => {
    const data = [
        {id: 1,icon:ReactJs , name: "React"},
        {id: 2,icon:Bootstrap , name: "Bootstrap"},
        {id: 3,icon:Javascript , name: "Javascript"},
        {id: 4,icon:MongoDb , name: "MongoDb"},
        {id: 5,icon:NodeJs , name: "Nodejs"},
        {id: 6,icon:Tailwind , name: "TailwindCSS"},
    ]


    return (
        <div name='skills' className='w-full h-screen primary-bg text-gray-300 py-4'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='font-bold inline border-b-4 accent-color text-4xl '>Technologies Used</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8'>
                    {data.map(tech => (
                        <div key={tech.id} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={tech.icon} alt="{tech.name}" />
                            <p className='my-4'>{tech.name}</p> 
                        </div>                        
                    ))}
                </div>
            </div>        
        </div>
    )
} 

export default Skills