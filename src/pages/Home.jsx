import { NavLink } from 'react-router-dom';

export default function Home() {

    return (
        <>
            <h1 className="text-center">Homepage</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="card">
                    <img className="card-img-top" src="https://placedog.net/400x200" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://placedog.net/400x200" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://placedog.net/400x200" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>


            </div>
        </>
    )
}