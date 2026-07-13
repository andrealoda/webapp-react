import { NavLink } from "react-router-dom"

export default function AppHeader() {

    const menu = [
        { id: 1, path: "/", label: "Home" }
    ]

    return (
        <header>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="container">
                    <h2 className="navbar-brand text-center fs-4 fw-bold">CineBanana</h2>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-menu">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            {menu.map(item => (
                                <li key={item.id} className="nav-item">
                                    <NavLink className="nav-link" to={item.path}>{item.label}</NavLink>
                                </li>
                            ))
                            }
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search yout movie"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                🍌
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}