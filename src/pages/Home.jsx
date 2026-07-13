import { NavLink } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

export default function Home() {

    return (
        <>
            <div class="container">
                <h1 className="text-center">Homepage</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <MovieCard />
                </div>
            </div>
        </>
    )
}