import React from 'react'

function MovieCard({ movieObj, handleAddToWatchlist, watchList }) {

  function doesContain() {
    for (let i = 0; i < watchList.length; i++) {
      if (!watchList || !Array.isArray(watchList)) return false;
      if (watchList[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className='space-x-8 space-y-8'>
      <div
        className='w-[200px] h-[40vh] bg-cover ml-8 rounded-lg'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`
        }}
      >
        {doesContain() ? (
          <div className='ml-2 py-2'>
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => { handleAddToWatchlist(movieObj) }}
            className='ml-2 py-2'
          >
            &#128525;
          </div>
        )}
      </div>

      {/* remove from wathlist function will be added later */}

      <h5 className="ml-8 w-[200px] text-center text-xl p-2">{movieObj.title}</h5>
    </div>
  )
}

export default MovieCard
