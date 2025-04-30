import React from 'react'

function MovieCard({ movieObj }) {
  return (
    <div className='space-x-8 space-y-8'>

      <div
        className='w-[200px] h-[40vh] bg-cover ml-8 rounded-lg'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`
        }}
      >
      <h5 className="text-center text-white text-xl rounded-lg p-2 bg-gray-900/25">{movieObj.title}</h5>

      </div>


    </div>
  )
}

export default MovieCard

// https://image.tmdb.org/t/p/original/ + backdrop poster or backgroundImage
