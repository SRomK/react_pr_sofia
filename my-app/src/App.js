import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=336b3473'; //static variable to call the api

const App = () => {
    const [movies, setMovies] = useState([]); //default value of the useState is an empty array
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json(); //inside of this data object we should have the data about the movies

        //console.log(data.Search); //now instead of consolelogging we can pass the data.Search into our setMovies
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;


/*{
                movies?.length > 0
                    ? (
                        <div className="container">
                        <MovieCard movie1={movie1}/>
                    </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            } -----> instead of showing this one single card we can a dinamyc block of code and map over movies
by saying movies.map and map over them. We usually map over arrays that are plural and inside of there we are gonna get a singular movie for it iteration of the map
so for each iteration of the map we want to render a moviecard component with its movie prop
and with that we are dinamically looping over our movies array which is fetch from an API and we are
taking each individual movie and dinamically passing it as a prop to our MovieCard.*/



/*
<img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />


    this way we can recall our searchMovies function and pass it a new title by
    calling searchMovies and we pass the searchTerm inside instead of an static title
*/