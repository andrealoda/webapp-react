export default function AppFooter() {

    return (
        <footer className="bg-light py-5">

            <div className="container">
                <div className="row rowcols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <h3>Banana Movies Reviews</h3>
                        <p>Your one-stop destination for movie reviews and recommendations.</p>
                    </div>
                    <div className="col">
                        <h3>Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Contact Us</h3>
                        <p>email: banana@movies.com</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}