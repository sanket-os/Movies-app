import React, { useState, useEffect } from 'react'
import genreIds from '../utilities/genre.js'

function Watchlist({ watchlist, setWatchlist }) {

  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState('All Genres');
  const [sortDir, setSortDir] = useState(0);

  if (sortDir !== 0) {
    if (sortDir === 1) {
      watchlist = watchlist.sort(incComparator);
    } else {
      watchlist = watchlist.sort(decComparator);
    }
  }

  function incComparator(movie1, movie2) {
    if (movie1.vote_average > movie2.vote_average) {
      return 1;
    } else {
      return -1;
    }
  }

  function decComparator(movie1, movie2) { 
  if (movie1.vote_average < movie2.vote_average) {
    return 1;
  } else {
    return -1;
  }
}

useEffect(() => {

  let temp = watchlist.map((movieObject) => {
    return genreIds[movieObject.genre_ids[0]]
  })

  temp = new Set(temp);

  setGenreList(["All Genres", ...temp]);

}, [watchlist])

function handleFilter(genre) {
  setCurrGenre(genre);
}

function handleSearch(e) {
  setSearch(e.target.value)
  console.log(search);
}


// delete function
function removeFromWatchlist(movieId) {

  const updatedList = watchlist.filter((movie) => movie.id !== movieId);
  setWatchlist(updatedList);

  localStorage.setItem("movies", JSON.stringify(updatedList));
}


return (
  <>

    {/* genre filter */}

    <div className='flex justify-center m-4 w-full'>
      {genreList.map((genre) => {
        return (<div
          onClick={() => handleFilter(genre)}
          className={
            currGenre == genre
              ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold rounded-xl"
              : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"}
        >
          {genre}
        </div>
        );
      })}
    </div>

    <div className='flex justify-center my-10 w-full'>

      {/* search bar */}
      <input className='bg-amber-100 h-[3rem] w-[18rem] outline-none pl-2 border border-slate-600'
        type="text" placeholder='Search Movies' value={search} onChange={handleSearch} />

    </div>

    <div className="m-8 w-full overflow-x-auto">
      <table className="w-full table-auto border-collapse text-center">
        <thead className="border border-gray-200 bg-gray-200">
          <tr>
            <th className='px-6 py-4'>Name</th>
            <th className='px-6 py-4 flex justify-center align-center w-full'>Ratings
              <div className='px-1'>
                <button onClick={() => {
                  setSortDir(1)

                }}>

                  <i class="fa-solid fa-arrow-up"></i>

                </button>
              </div>

              <div className='px-1'>
                <button onClick={() => {
                  setSortDir(-1)

                }}>

                  <i class="fa-solid fa-arrow-down"></i>

                </button>
              </div>
            </th>
            <th className='px-6 py-4'>Popularity</th>
            <th className='px-6 py-4'>Genre</th>
            <th className='px-6 py-4'>Delete Movies</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.filter((movieObj) => {
            if (currGenre == 'All Genres') {
              return true
            } else {
              return genreIds[movieObj.genre_ids[0]] == currGenre
            }
          })
            .filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj) => {
              return <tr className="border-b-2">

                <td className='px-6 py-4 flex items-center space-x-4'>
                  <img className='h-30 w-25 rounded-lg shadow-md'
                    src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                    alt='movie_poster'
                  />
                  <div>{movieObj.title}</div>
                </td>
                <td className="px-6 py-4 text-center">{movieObj.vote_average}</td>
                <td className="px-6 py-4 text-center">{movieObj.popularity}</td>
                <td className="px-6 py-4 text-center">{genreIds[movieObj.genre_ids[0]]}</td>
                <td
                  onClick={() => { removeFromWatchlist(movieObj.id) }}
                  className="px-6 py-4 text-center text-red-500 cursor-pointer">Delete</td>
              </tr>

            })}

        </tbody>
      </table>
    </div>
  </>
)
}

export default Watchlist