import React, {useState} from 'react'

function Watchlist({watchlist}) {

  const [search, setSearch] = useState('');

  function handleSearch(e) {
    setSearch(e.target.value)
    console.log(search);
  }

  return (
    <>
      <div className='flex justify-center my-10 w-full'>

        {/* genre filter */}

        {/* search bar */}
        <input className='bg-amber-100 h-[3rem] w-[18rem] outline-none pl-2 border border-slate-600' 
        type="text" placeholder='Search Movies' value={search} onChange={handleSearch} />

      </div>

      <div className="m-8 w-full overflow-x-auto">
        <table className="w-full table-auto border-collapse text-center">
          <thead className="border border-gray-200 bg-gray-200">
            <tr>
              <th className='px-6 py-4'>Name</th>
              <th className='px-6 py-4'>Ratings</th>
              <th className='px-6 py-4'>Popularity</th>
              <th className='px-6 py-4'>Genre</th>
              <th className='px-6 py-4'>Delete Movies</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj) => {
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
              <td className="px-6 py-4 text-center">Thriller</td>
              <td className="px-6 py-4 text-center text-red-500 cursor-pointer">Delete Button</td>
            </tr>
                
            })}
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist