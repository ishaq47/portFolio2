import React from 'react'
import html from '../images/html.jpeg'
import css from '../images/css.jpeg'
import js from '../images/js.jpeg'
import redux from '../images/reduxtoolkit.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import git from '../images/git.png'
import github from '../images/github.png'


function Skills() {
    const skill=[
        {
            image:html,
            text:'HTML'
        },
        {
            image:css,
            text:'CSS'
        },
        {
            image:js,
            text:'JAVASCRIPT'
        },
        {
            image:redux,
            text:'TOOLKIT'
        },
        {
            image:react,
            text:'REACT'
        },
        {
            image:tailwind,
            text:'TAILWIND CSS'
        },
        {
            image:git,
            text:'GIT'
        },
        {
            image:github,
            text:'GITHUB'
        },
    ]
  return (
    <div className='p-[20px] md:px-[100px] flex flex-col justify-center items-center md:h-screen '>

<h1 className='text-3xl font-bold italic text-yellow-200 mb-[50px] md:mb-[100px]'>
          MY SKILLS
        </h1>
        <div className='flex flex-wrap gap-6 justify-center '>
            <div>
           <ul>
           <li className='text-xl'>1: CAD-Cam / EXOCAD
</li>
           </ul>
                <p className='text-gray-400'>
                Digital Impression Handling
Restoration Design i.e. Crowns,
Bridges, Veneers, Full / Partial
Dentures, Implantation, Smile
Design.
Implant Planning and Design
Orthodontic Treatment Planning
Model Analysis and
Visualization
Exporting Data for 3D Printing
and Milling
                </p>
                
                <ul className='text-xl '> 
                <li>2: Ceramic / Porcelain Buildup</li>
                <li>3: Operation on 3D Printer</li>
                <li>4: Hands-on Laboratory Skills</li>
                <li>5: Clinical skills</li>
                <li>6: Administration and Assistance</li>
                <li>7: Computer skills (MS Office)</li>
                <li>8: Communication and teamwork</li>
            </ul>
            </div>
           

        </div>


    </div>
  )
}

export default Skills