import React from 'react'
import eCommerce from '../assets/projects/eCommerce_backend.jpg'
import EmployeeTracker from '../assets/projects/employee_tracker.jpg'
import JATE from '../assets/projects/JATE_PWA.jpg'
import Project1 from '../assets/projects/project1.png'
import SocialMediaBackend from '../assets/projects/social_media_backend.jpg'
import YourVillage from '../assets/projects/your_village.jpg'


const Projects = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${eCommerce})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold test-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 -2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 -2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects