import { Link } from "react-router-dom"

function Navbar () {
    
    return (
    <nav className="navbar sticky-top justify-content-start bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <Link className="navbar-brand" to="/"><img src="https://i.ibb.co/jWY439f/Giorno-Icon.png" alt="GiornoIcon" width={40} /> JoJoCRUD</Link>
    <li className="nav-item">
    <Link className="btn btn-dark" to="/get">Show</Link>
    </li>
    <li className="nav-item">
    <Link className="btn btn-dark" to="/post">Create</Link>
    </li>
    <li className="nav-item">
    <Link className="btn btn-dark" to="/put">Edit</Link>
    </li>
    <li className="nav-item">
    <Link className="btn btn-dark" to="/delete">Delete</Link>
    </li>
    </nav>
    )
}

export default Navbar