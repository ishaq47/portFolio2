import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className='p-[20px] md:px-[100px] md:h-screen'
    >
      <div className='md:w-[80%] md:text-start text-center'>
        <h1 className='text-3xl font-bold italic text-yellow-200'>
          ABOUT ME
        </h1>
        <p className='text-xl p-3 '><strong>Hello! I'm <i className='text-yellow-300'> Ahmad Raza,</i> </strong>
        a skilled and dedicated Dental Technologist with a passion for creating precise and personalized dental solutions. With six months of experience in the field, I've honed my expertise in designing and crafting high-quality dental restorations, prosthetics, and appliances. My goal is to combine artistry and technical skill to enhance patient care and bring smiles to life. 
        Let's work together to create a healthier, happier smile!</p>
        
      </div>
    </motion.div>
  );
}

export default About;
