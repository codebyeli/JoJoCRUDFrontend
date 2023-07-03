function Navbar () {
    
    return (
    <nav className="navbar justify-content-start bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <a className="navbar-brand"><img src="https://i.ibb.co/jWY439f/Giorno-Icon.png" alt="GiornoIcon" width={30} height={30} /> JoJoCRUD
    </a>
    <li className="nav-item">
    <a href="#" className="btn btn-dark" role="button">Show</a>
    </li>
    <li className="nav-item">
    <a href="#" className="btn btn-dark" role="button">Create</a>
    </li>
    <li className="nav-item">
    <a href="#" className="btn btn-dark" role="button">Edit</a>
    </li>
    <li className="nav-item">
    <a href="#" className="btn btn-dark" role="button">Delete</a>
    </li>
    </nav>
    )
}

export default Navbar