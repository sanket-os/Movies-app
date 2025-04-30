import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import MovieCard from './components/MovieCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Watchlist from './components/Watchlist'
import MovieRecommendations from './components/MovieRecommendations'
import Movies from './components/Movies'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='flex flex-wrap space-y-10'>
          <Routes>
            <Route path='/' element={
              <>
                <Banner /> <Movies />
              </>
            } />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/recommend' element={<MovieRecommendations />} />

          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
