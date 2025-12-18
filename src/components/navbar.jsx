import { useState } from 'react'
import { skills } from './../assets/assets';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm px-3 py-3 shadow-lg'>
        <div className='container mx-auto justify-start flex'>
          <img src="logo.jpg" alt="" className='h-10 w-10 ' />
          <div>
            <a href="#" className='text-3xl font-bold text-white ml-2  hover:text-gray-300'>
              Vedant
              <span className='text-fuchsia-500 '>
                Patel
              </span>
              <div className='w-4 h-4 bg-fuchsia-500 rounded-full ml-2 hover:bg-orange-500'></div>
            </a>
          </div>
          <div className='hidden md:flex absolute top-5 right-0 mr-20 space-x-8'>
            <a href="#home" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>Home</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#about" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>About</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#skills" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>Skills</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#projects" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>Projects</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#experience" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>Experience</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#contact" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>Contact</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-full'></span>
            </a>

          </div>
          <div className='md:hidden relative top-1 ml-auto'>
            {showMenu ?
              <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
              :
              <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
            }

          </div>
        </div>
        {showMenu && (
          <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4'>
            <a onClick={() => setShowMenu(!showMenu)} href="#home" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium '>
              <span>Home</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-12'></span>
            </a>
            <a onClick={() => setShowMenu(!showMenu)} href="#about" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>About</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-13'></span>
            </a>
            <a onClick={() => setShowMenu(!showMenu)} href="#skills" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>Skills</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-11'></span>
            </a>
            <a onClick={() => setShowMenu(!showMenu)} href="#projects" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>Projects</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-17'></span>
            </a>
            <a onClick={() => setShowMenu(!showMenu)} href="#experience" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>Experience</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-23'></span>
            </a>
            <a onClick={() => setShowMenu(!showMenu)} href="#contact" className='relative transition-duration-300 hover:text-purple-500 group text-lg font-medium'>
              <span>Contact</span>
              <span className='absolute left-0 w-0 h-0.5 bottom-0 bg-purple-300 transition-all duration-300 group-hover:w-16'></span>
            </a>
          </div>
        )}
      </nav>
    </div>

  )
}

export default Navbar
