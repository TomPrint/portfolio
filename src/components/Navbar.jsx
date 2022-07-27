import React from 'react'
import Logo from '../assets/TomPrint.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex-justify-between items-center px-4 bg-[#0a192f]
    text-gray-300'>
        <div>
    <img src={Logo} alt='logo' style={{width: '80px'}}/>
        </div>



    </div>
  )
}

export default Navbar