import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Details() {

    const { id } = useParams();
    const url = `http://localhost:3000/movies/${id}`;


    const [movie, setMovie] = useState(null);

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMovie(data);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchData(url);
    }, []);

    return (
        <>

            <div>

                <div className="row row-cols-2 g-4">


                    <div className="card my-4 mx-auto" style={{ minWidth: '18rem' }}>
                        <img src={movie ? `http://localhost:3000/movies_cover/${movie.image}` : "https://placehold.co/600x400?text=Hello+World"} className="card-img-top w-50 mx-auto" alt={movie ? movie.title : ""} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{movie ? movie.title : 'Movie Title'}</h5>
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

                        {movie && movie?.reviews.length > 0 && (
                            movie.reviews.map(review => (
                                <div className="card mb-3" key={review.id}>
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <div> <i className="bi bi-person-bounding-box"></i> {review.name}</div>
                                        <div>Rating: {review.vote}/5</div>
                                    </div>
                                    <div className="card-body">

                                        <p className="card-text">{review.text}</p>

                                    </div>
                                </div>
                            ))
                        )}

                        {movie && movie?.reviews.length === 0 && (
                            <div className="alert alert-info text-center" role="alert">
                                No reviews yet. Be the first to review this book!
                            </div>
                        )}



                        <section id="add_review_form" className="my-5">
                            <div className="container">
                                <div className="card p-5">
                                    <h2>Lascia la TUA recensione</h2>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Dicci chi sei.</label>
                                            <input type="text" className="form-control" id="username" name="username" placeholder='Anonymous' autoComplete="off" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="rating" className="form-label">Quante stelle merita il film?</label>
                                            <select className="form-select" id="rating" name="rating">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="review" className="form-label">Raccontaci la tua esperienza con il film.</label>
                                            <textarea className="form-control" id="review" name="review" rows="3"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Invia la tua recensione!</button>
                                    </form>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark my-3">
                        <Link to="/">GO BACK HOME</Link></button>
                </div>
            </div>
        </>
    )
}