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


    function getStars(vote) {
        return "❤️".repeat(vote) + "🤍".repeat(5 - vote);
    }

    const initialFormData = {
        name: "",
        vote: "",
        text: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitting review to', url);

        const reviewURL = `${url}/reviews`;


        fetch(reviewURL, {
            method: 'POST',
            headers: {
                'COntent-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('review added', data);
                setFormData(initialFormData);

            })
            .catch(error => console.error('Error adding review', error));
    }



    return (
        <>

            <div className="container">

                <div className="row row-cols-1">


                    <div className="card my-4 mx-auto shadow-lg bg-white rounded-5 p-5" style={{ minWidth: "12rem" }}>
                        <img src={movie ? `http://localhost:3000/movies_cover/${movie.image}` : "https://placehold.co/600x400?text=Hello+World"} className="card-img-top w-25 mx-auto" alt={movie ? movie.title : ""} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{movie ? movie.title : 'Movie Title'}</h5>
                            <p className="card-text text-center">{movie ? movie.abstract : 'Movie Abstract'}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Director: </strong>{movie ? movie.director : 'Movie Director'}</li>
                            <li className="list-group-item"><strong>Genre: </strong>{movie ? movie.genre : 'Genre'}</li>
                            <li className="list-group-item"><strong>Year fo release: </strong>{movie ? movie.release_year : 'Release Year'}</li>
                        </ul>
                    </div>

                    <div className="row row-cols-1 row-cols-lg-2 recensioni d-flex align-items-start justify-content-start shadow-lg bg-white rounded-5 p-5">
                        <section>

                            <h2 className="reviews-title-section text-center">BananaReviews:</h2>

                            {movie && movie?.reviews.length > 0 && (
                                movie.reviews.map(review => (
                                    <div className="card mb-3" key={review.id}>
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <div> <i className="bi bi-person-bounding-box"></i> {review.name}</div>
                                            <div>Rating: {getStars(review.vote)}</div>
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


                        </section>

                        <section id="add_review_form" className="my-5">
                            <div className="container">
                                <div className="card p-5 shadow-lg bg-white rounded-5">
                                    <h2>Lascia la TUA recensione</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Dicci chi sei.</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder='Anonymous' autoComplete="off" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="rating" className="form-label">Quante stelle merita il film?</label>
                                            <select className="form-select" id="vote" name="vote" value={formData.vote} onChange={e => setFormData({ ...formData, vote: e.target.value })}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="review" className="form-label">Raccontaci la tua esperienza con il film.</label>
                                            <textarea className="form-control" id="review" name="review" rows="3" value={formData.text} onChange={e => setFormData({ ...formData, text: e.target.value })}></textarea>
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