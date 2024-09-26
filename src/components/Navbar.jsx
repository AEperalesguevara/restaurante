import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="dropdown">
        <button className="dropbtn" type="button">
          More
        </button>
        <div className="dropdown-content">
          <a href="#login">Login</a>
          <a href="#reservas">Reservas</a>
          <a href="#menu">Menu</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
