import React from 'react'
import Logo from '../movie_logo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='sticky top-0 z-10 bg-white flex border-b border-gray-200 space-x-8 items-centre p-3'>
        <img className='w-[50px] h-[40px]' src={Logo} alt="" />

        <Link to="/" className='text-blue-500 text-3xl font-bold transition-colors duration-300 hover:text-blue-600 hover:border-blue-500 border-b-2 border-transparent transition-all'>Movies</Link>

        <Link to="/watchlist" className='text-blue-500 text-3xl font-bold transition-colors duration-300 hover:text-blue-600 hover:border-blue-500 border-b-2 border-transparent transition-all'>Watchlist</Link>
    </div>
  )
}

export default Navbar