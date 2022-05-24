import React, {useState} from 'react'
import { IconName, FaTimes, FaBars, FaBinoculars } from "react-icons/fa";
import Logo from '../assets/Cr.png'

const Navbar = () => {
    const [nav,setNav] = useState (false)
    const handleClick =() => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div> 
    <img src={Logo} alt="Logo Img" style={{width: '50px'} }/>
    </div>



        {/* menu */}
<div> 
    <ul className='hidden md:flex'>
        <li> Home</li>
        <li> About</li>
        <li> Skills</li>
        <li> Work</li>
        <li> Contact </li>
    </ul> 
    </div>
     
        {/* Hamburger */}
        <div  onClick ={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Moblie Menu   */}

            <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center cursor-pointer'
        }
      >
        <li className='py-6 text-4xl'> Home</li>
        <li className='py-6 text-4xl'> About</li>
        <li className='py-6 text-4xl'> Skills</li>
        <li className='py-6 text-4xl'> Work</li>
        <li className='py-6 text-4xl'> Contact </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden'> </div>

        </div> 
    )
    }

export default Navbar

//import react from react created a navbar did class name to create the header (Navbar)imported logo from assets `