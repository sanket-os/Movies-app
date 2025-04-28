import React from 'react';
import Logo from '../movie_logo1.png';

function Navbar() {
  return (
    <div className='flex space-x-8 pl-3 py-4 items-center'>
        <img className='w-[70px]' src={Logo} alt="Logo" />

        <a className='text-3xl text-sky-400 font-bold'>Movies</a>
        <a className='text-3xl text-sky-400 font-bold'>Watchlist</a>
        <a className='text-3xl text-sky-400 font-bold'>Movie Recommendations</a>
    </div>
  )
}

export default Navbar