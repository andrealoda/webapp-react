import { NavLink } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Ring } from 'ldrs/react'



export default function Home() {

    return (
        <>



            <div className="container">
                <h1 className="text-center">Homepage</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
                    <MovieCard />
                </div>
            </div>


        </>
    )
}