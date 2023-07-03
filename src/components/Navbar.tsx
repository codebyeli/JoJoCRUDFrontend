function Navbar () {
    
    return (
    <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <div className="container-fluid">
    <a className="navbar-brand"><img src="https://i.ibb.co/jWY439f/Giorno-Icon.png" alt="GiornoIcon" width={30} height={30} /> JoJoCRUD
    </a>
    <a>
    <button className="navBarbutton">Show</button>
    <button className="navBarbutton">Create</button>
    <button className="navBarbutton">Edit</button>
    <button className="navBarbutton">Delete</button>
    </a>
    </div>
    </nav>
    )
}

export default Navbar