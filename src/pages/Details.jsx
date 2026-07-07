import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Details() {

    const { id } = useParams();
    const url = `http://localhost:3000/movies/${id}`;

    console.log("URL chiamato:", url);

    const [movie, setMovie] = useState(null);

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Dati ricevuti dal backend:", data);
                setMovie(data[0]);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchData(url);
    }, []);

    return (
        <>
            <div className="row row-cols-2 g-1">


                <div className="card my-4 mx-auto" style={{ minWidth: '18rem' }}>
                    <img src={movie ? movie.image : "https://placehold.co/600x400?text=Hello+World"} className="card-img-top" alt={movie ? movie.title : ""} />
                    <div className="card-body">
                        <h5 className="card-title">{movie ? movie.title : 'Movie Title'}</h5>
                        <p className="card-text">{movie ? movie.abstract : 'Movie Abstract'}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{movie ? movie.director : 'Movie Director'}</li>
                        <li className="list-group-item">{movie ? movie.genre : 'Genre'}</li>
                        <li className="list-group-item">{movie ? movie.release_year : 'Release Year'}</li>
                    </ul>
                </div>

                <div className="recensioni d-flex flex-column align-items-center justify-content-start gap-3 mt-5">

                    <h2 className="reviews-title-section">BananaReviews dei nostri recensori:</h2>

                    <div className="card" style={{ minWidth: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>

                    <div className="card" style={{ minWidth: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}