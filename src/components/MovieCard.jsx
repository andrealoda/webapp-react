import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MovieCard() {

    const [movies, setMovies] = useState([]);
    const url = 'http://localhost:3000/movies';


    function fetchMovies(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchMovies(url);
    }, []);

    return (
        <>
            {/* <div className="card">
                <img className="card-img-top" src="https://placedog.net/400x200" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div> */}

            {movies.map((movie) => (
                <div className='col' key={movie.id}>
                    <div className='card h-100'>
                        <img src={movie.image || `https://placehold.co/600x400?text=${movie.title}`} alt={movie.title} className='card-img-top' />
                        <div className='card-body'>
                            <h5 className='card-title'>{movie.title}</h5>
                            <p className='card-text'>{movie.abstract}</p>
                            <Link to={`/movie/${movie.id}`} className='btn btn-primary'>Read more</Link>

                        </div>
                    </div>

                </div>
            ))}

        </>
    )
}