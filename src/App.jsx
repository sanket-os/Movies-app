import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import MovieCard from './components/MovieCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Watchlist from './components/Watchlist'
import MovieRecommendations from './components/MovieRecommendations'
import Movies from './components/Movies'
import { useState, useEffect } from 'react'

function App() {

  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchlist = (newMovieObj) => {
    let updatedWatchlist = [...watchlist, newMovieObj];
    setWatchlist(updatedWatchlist);
    console.log(updatedWatchlist);

    localStorage.setItem('movies', JSON.stringify(updatedWatchlist))

  }

  useEffect(() => {
    let moviesFromLS = localStorage.getItem('movies');
    if (!moviesFromLS) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLS));
  }, [])

  // avoid movie duplication in watchlist with some() built-in method
  // const handleAddToWatchlist = (newMovieObj) => {
  //   const alreadyExists = watchlist.some(movie => movie.id === newMovieObj.id);
  //   if (!alreadyExists) {
  //     const updatedWatchlist = [...watchlist, newMovieObj];
  //     setWatchlist(updatedWatchlist);
  //     console.log(updatedWatchlist);
  //   } else {
  //     console.log("Movie already in watchlist");
  //   }
  // };
  



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='flex flex-wrap space-y-10'>
          <Routes>
            <Route path='/' element={
              <>
                <Banner /> <Movies handleAddToWatchlist={handleAddToWatchlist} watchList={watchlist} />
              </>
            } />
            <Route path='/watchlist' element={<Watchlist watchlist={watchlist}/>} />
            <Route path='/recommend' element={<MovieRecommendations />} />

          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
