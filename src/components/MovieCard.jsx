import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css'

export default function MovieCard() {

    const [movies, setMovies] = useState(null);
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

    if (!movies) {
        return (
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <Ring size={50} speed={1.5} bgOpacity={0.25} />
            </div>
        );
    }

    return (
        <>


            {movies.map((movie) => (
                <div className='col' key={movie.id}>
                    <div className='card h-100'>
                        <img src={`http://localhost:3000/movies_cover/${movie.image}`} alt={movie.title}
                            className='card-img-top rounded mx-auto shadow m-1' style={{ width: '200px', height: '280px', objectFit: 'cover' }} />
                        <div className='card-body'>
                            <h5 className='card-title'>{movie.title}</h5>
                            <p className='card-text'>{movie.abstract}</p>
                            <Link to={`/details/${movie.id}`} className='btn btn-primary'>Read more</Link>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}