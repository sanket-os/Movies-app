import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';

function Movies() {
    
    // creating state for movie data 
    // we can use state outside the useEffect fn
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    // always log the data outside useEffect function along with a dependency array
    // console.log("This is my movies state " + movies);

    // pagination next

    const handleNext=() => {
        setPage(page + 1);
    }

    // pagination previous

    const handlePrevious=() => {
        page > 1 && setPage(page - 1);
    }

    // axios provides optimized fetch functionality
    // axios is promisified library
    // with axios we don't have to extract from JSON

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=559fbfb617337cd9c6b7ff74bfa1051e&language=en-US&page=${page}`
        ).then((response) => {
            // console.log(response.data.results);
            setMovies(response.data.results);
        }).catch((err) => {
            console.error("Cannot fetch API data " + err);
        });
    }, [page]);


    return (
        <div>
            <div className="flex justify-evenly flex-wrap gap-8 py-8">
                {

                    movies.map((movieObj) => (
                        <MovieCard key={movieObj.id} movieObj={movieObj} />
                        // <li>{movieObj.title}</li>
                    ))
                }
            </div>
            <Pagination pageNumber={page} previousFn={handlePrevious} nextFn={handleNext} />
        </div>
    )
}

export default Movies