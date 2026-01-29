import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-around p-4 bg-gray-800 text-white'>
      <div className="left">
        <li className='text-lg font-bold list-none'>NoteSphere</li>
      </div>
      <div className="right">
        <ul className='flex space-x-4'>
          <Link className="relative sm:text-sm md:text-lg lg:text-lg inline-block px-2 font-medium
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5
             after:h-[2px] after:w-full after:bg-orange-500
             after:scale-x-0 after:origin-center after:opacity-0
             after:transition-all after:duration-150 after:ease-out
             hover:after:scale-x-100 hover:after:opacity-100" to="/">Home</Link>
          <Link className="relative sm:text-sm md:text-lg lg:text-lg inline-block px-2 font-medium
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5
             after:h-[2px] after:w-full after:bg-orange-500
             after:scale-x-0 after:origin-center after:opacity-0
             after:transition-all after:duration-150 after:ease-out
             hover:after:scale-x-100 hover:after:opacity-100" to="/create">Create Note</Link>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar