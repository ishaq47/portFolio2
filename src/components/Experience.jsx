import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

function Experience() {
    return (
        <div className=' p-[20px] md:px-[100px] md:h-screen mt-[100px] md:text-start text-center'>
            <div className='md:w-[80%]'>
                <h1 className='text-3xl font-bold italic text-yellow-200'>
                    EXPERIENCE
                </h1>
                <div className='w-[20px] h-[20px] bg-yellow-400 rounded-full mt-[40px]'></div>
                
                <div className='relative  md:ml-10 '>
                    <div className='flex flex-wrap gap-2'>
                    <p className='text-xl p-1  font-semibold italic text-yellow-200'>SMILE SPECTRUM 
</p>
                    <div className='flex gap-1   '>
                            <FaLocationArrow className='self-center text-gray-400 ' />
                            <a className='font-light text-gray-400  self-center '>Peshawar, Pakistan</a>
                        </div>
                        </div>
                    <p className='text-xl italic text-start text-gray-300'>Dec 2023 till Now</p>
                    <p className='text-gray-400 text-xl font-light'>
Design and manufacture high-quality dental prosthetics, including crowns, bridges, and dentures.<br/>
Work closely with dentists and other professionals to ensure accurate and timely case management.<br/>
Utilize advanced technologies, such as CAD/CAM and 3D printing, to create precise and customized dental devices.<br/>
Collaborate with the team to develop and implement new products and services.<br/>
Continuously update knowledge and skills to stay current with industry advancements.<br/>
Provide dental technology services to clients on a project basis.
</p>
                </div>
                <div className='w-[20px] h-[20px] flex justify-end items-end bg-yellow-400 rounded-full mt-[20px]'></div>

            </div>
        </div>
    )
}

export default Experience