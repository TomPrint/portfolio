import React from 'react'
import {DiAptana} from "react-icons/di"

import Alpine from '../assets/Alpine.png'
import Bootstrap from '../assets/bootstrap-logo.png'
import CSS from '../assets/css.png'
import Django from '../assets/django-logo.png'
import GitHub from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import HTML from '../assets/html.png'
import Hyperscript from '../assets/Hyperscript.png'
import Python from '../assets/python-logo.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import HTMX from '../assets/HTMX.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#202020] text-gray-300'>
      {/* CONTAINER */}
      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>
      <p className='text-4xl font-bold inline border-b-4 border-amber-300'>Skills</p>
      <p className='py-4 flex group'>These are the technologies I have worked with
      <span>
      <DiAptana className='ml-1 fill-amber-300 rotate'/>
      </span>
      </p>
    </div>

    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={Alpine} alt='Apline.js icon' />
        <p className='my-2'>Alpine.js</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={Bootstrap} alt='Bootstrap icon' />
        <p className='my-2'>Bootstrap</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={CSS} alt='CSS icon' />
        <p className='my-2'>CSS</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={Django} alt='Django icon' />
        <p className='my-2'>Django</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={GitHub} alt='Github icon' />
        <p className='my-2'>GitHub</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={Javascript} alt='Javascript icon' />
        <p className='my-2'>JavaScript</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={HTML} alt='HTML icon' />
        <p className='my-2'>HTML</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto' src={Hyperscript} alt='Hyperscript icon' />
        <p className='my-2'>Hyperscript</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={Python} alt='Python icon' />
        <p className='my-2'>Python</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={ReactImg} alt='React icon' />
        <p className='my-2'>React</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={Tailwind} alt='Tailwind icon' />
        <p className='my-2'>Tailwind</p>
      </div>
      <div className='shadow-md shadow-[#ccd6f6] hover:scale-110 duration-500'>
        <img className='w-10 mx-auto mt-2' src={HTMX} alt='HTMX icon' />
        <p className='my-2'>HTMX</p>
      </div>

    

    </div>
      </div>

    </div>
  )
}

export default Skills