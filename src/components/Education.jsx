import React from 'react'

function Education() {
  
  return (
    <div className='p-[20px] md:px-[100px] flex flex-col md:justify-center md:items-center  '>

<h1 className='text-3xl font-bold italic text-yellow-200 mb-[50px] md:mb-[100px]'>
          EDUCATION
        </h1>
        <div className='flex flex-col gap-3 '>
            <h1 className='text-xl font-bold italic'>BS DENTAL</h1>
            <p className='text-gray-400'>Khyber Medical University</p>
            <p className='text-gray-400'>2019-2024</p>
        </div>
        <div className='flex flex-col gap-3 mt-3 '>
            <h1 className='text-xl font-bold italic'>Intermediate - F.Sc (Medical)</h1>
            <p className='text-gray-400'>Bise Mardan</p>
            <p className='text-gray-400'>2017-2019</p>
        </div>

        <div className='flex flex-col gap-3 mt-3 '>
            <h1 className='text-xl font-bold italic'>Matric-Science</h1>
            <p className='text-gray-400'>Bise Mardan</p>
            <p className='text-gray-400'>2015-2017</p>
        </div>



    </div>
  )
}

export default Education