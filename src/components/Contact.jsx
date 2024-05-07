import React from 'react';
import { motion } from 'framer-motion';
import { MdMail } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa';

function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className='p-[20px] md:px-[100px] md:h-screen'
        >
            <div className=''>
                <div className='conatctcontainer flex items-center gap-2  '>
                    <div className='w-full border-[2px] border-yellow-400 h-1 self-center'></div>
                    <h1 className='text-3xl flex gap-2 font-bold italic text-yellow-200'>
                        <p> CONTACT</p> <p>ME</p>
                    </h1>
                    <div className='w-full border-[2px] border-yellow-400 h-1 self-center'></div>
                </div>
                <div className=''>
                    <div className=' flex flex-wrap md:gap-4 justify-center items-center h-[300px]'>
                        <button className='flex gap-3 p-2 hover:bg-yellow-600 border-[1px]  hover:text-white w-fit rounded-xl'>
                            <MdMail className='self-center text-2xl' />
                            <a href='mailto:ahmadrazadt00@gmail.com' className='md:text-2xl font-bold'> ahmadrazadt00@gmail.com
</a>
                        </button>
                        <button className='flex gap-3 p-2  w-fit rounded-xl  hover:bg-yellow-600 border-[1px]   hover:text-white'>
                            <BiPhoneCall className='self-center text-2xl' />
                            <a href='tel:+923433881280' className='md:text-2xl font-bold'> +923433881280</a>
                        </button>
                        <button className='flex gap-3 p-2  w-fit rounded-xl  hover:bg-yellow-600 border-[1px]   hover:text-white'>
                            <FaLocationArrow className='self-center text-2xl' />
                            <a href='' className='md:text-2xl font-bold'> Village Bakar, District
Swabi
</a>
                        </button>
                        
                       
                    </div>
                </div>
            </div>
            <div className='flex gap-3'>
            <div className='w-full border-[2px] border-yellow-400 h-1 self-center'></div>
            <div className='flex gap-2'>
        <a href='https://www.facebook.com/profile.php?id=100055468954911&mibextid=ZbWKwL'><FaFacebook className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
        <a href='https://www.linkedin.com/in/ahmad-razaoffical-118a23259'><FaLinkedin className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
        <a href='https://www.instagram.com/ahmd15921?igsh=MWYzYmxpa2NrdXRvdQ=='><FaInstagram className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
      </div>
      <div className='w-full border-[2px] border-yellow-400 h-1 self-center'></div>
      </div>
        </motion.div>
    );
}

export default Contact;
