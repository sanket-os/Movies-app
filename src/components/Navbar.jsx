import React from 'react';
import Logo from '../movie_logo1.png';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex space-x-8 pl-3 py-4 items-center'>
        <img className='w-[70px]' src={Logo} alt="Logo" />

        <Link to='/' className='text-3xl text-sky-400 font-bold'>Movies</Link>
        <Link to='/watchlist' className='text-3xl text-sky-400 font-bold'>Watchlist</Link>
        <Link to='/recommend' className='text-3xl text-sky-400 font-bold'>Movie Recommendations</Link>
    </div>
  )
}

export default Navbar