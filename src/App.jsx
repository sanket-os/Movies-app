import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import MovieCard from './components/MovieCard'

function App() {
  

  return (
    <>
     {/* <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <Navbar />
      <div className='flex flex-wrap space-y-10'>
      <Banner />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />

      
      </div>
      
    </>
  )
}

export default App
