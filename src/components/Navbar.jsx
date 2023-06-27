import React, {useState} from 'react'
import Logo from '../assets/TomPrint.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll'



const Navbar = () => {
  const [nav, setNav] =  useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center pt-2 px-4 bg-[#202020] text-amber-300'>
    <div className='hidden md:flex md:visible'>
    <Link  to='home' smooth={true}  duration={400} >
    <img className='rounded-full border-2 border-amber-300 grow glow mt-[10px] ' src={Logo} alt='logo' style={{width: '80px'}}/>
    </Link>
    </div>
        {/* MENU */}
        <div>
            <ul className="hidden md:flex">
                <li>
                <Link  to='home' smooth={true}  duration={400} >
                Home
                </Link>
                </li>
                <li>
                <Link  to='about' smooth={true}  duration={400} >
                About
                </Link>
                </li>
                <li>
                <Link  to='skills' smooth={true} duration={400} >
                Skills
                </Link>
                </li>
                <li>
                <Link  to='work' smooth={true}  duration={400} >
                Work
                </Link>
                </li>
                <li>
                <Link  to='contact' smooth={true}  duration={400} >
                Contact
                </Link>
                </li>
            </ul>
        </div>

        {/* HAMBURGER ELEMENT*/}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#202020] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true}  duration={400} >
                Home
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true}  duration={400} >
                About
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true}  duration={400} >
                Skills
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='work' smooth={true}  duration={400} >
                Work
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true}  duration={400} >
                Contact
                </Link></li> 
        </ul>

        {/* SOCIAL ICONS */}

        
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-lg'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/tomasz-klewicki-489811/'>
                LinkedIn 
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#060D0D] rounded-r-lg'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/TomPrint'>
                GitHub
                <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d85c27] rounded-r-lg'>
              <a className='flex justify-between items-center w-full text-gray-300' onClick={() => window.location = 'mailto:tomekklewicki@gmail.com'}>
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#14365d] rounded-r-lg'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>
                Resume
                <BsFillPersonLinesFill size={30} />
              </a>
            </li> */}
          </ul>

        </div>

    </div>
  )
}

export default Navbar