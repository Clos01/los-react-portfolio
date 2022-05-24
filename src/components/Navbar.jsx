import React, {useState} from 'react'
import { IconName, FaTimes, FaBars, FaBinoculars, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import {  HiOutlineMail} from "react-icons/hi";
import {  BsFillPersonLinesFill} from "react-icons/bs";
import{Link} from 'react-scroll';
import Logo from '../assets/Cj.png'

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
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='Contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center hover'
        }
      >
             <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>

        {/* Social Icons */}
        <div className='flex fixed  clex-col top-[35%] left-0 hidden lg:flex'> 
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:ml[-10px]  duration-30 bg-blue-600 duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300 '
                href='https://www.linkedin.com/in/carlos-rivas-0a5b87228/'>
                    Linkdein <FaLinkedin  size={30}/>
                    
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:ml[-10px]  duration-30 bg-[#3333] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300 '
                href='https://github.com/Clos01'>
                    Github <FaGithub  size={30}/>
                    
                </a>
            </li>
            
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:ml[-10px]  duration-30 bg-[#8FBC8F] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300 '
                href='mailto:Cjrivas00@gmail.com'>
                    Mail <HiOutlineMail size={30}/>
                    
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:ml[-15px]  duration-30 bg-[#008080] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300 '
                href='https://www.linkedin.com/in/carlos-rivas-0a5b87228/'>
                  Resume <BsFillPersonLinesFill  size={30}/>
                    
                </a>
            </li>
        </ul>

        </div>

        </div> 
    )
    }

export default Navbar

//import react from react created a navbar did class name to create the header (Navbar)imported logo from assets `