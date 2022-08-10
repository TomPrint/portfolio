import React from 'react'
import{FiArrowRightCircle} from 'react-icons/fi'
import {Link} from 'react-scroll' 


const Home = () => {
  return (
    <div name='home' className = "w-full h-screen bg-[#202020]">
        
        {/* Container */}
        <div className='max-w-[900px] mx-auto flex flex-col justify-center h-full px-8 text-gray-300'>
        <div className='pb-10'>
            <p className='text-amber-300'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tomasz Klewicki</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a web engineer specializing in builing remarkable websites.
                Currently, I am focused on building responsive full-stack applications using Django and React.
            </p>
            <div>
                <button className='text-amber-300 group border-2 px-6 py-3 my-2 flex items-center grow'>
                <Link  to='work' smooth={true}  duration={400} >
                Work
                </Link>
                <span className='group-hover:rotate-90 duration-300'>
                <FiArrowRightCircle className="ml-1"/>
                </span>
                </button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Home