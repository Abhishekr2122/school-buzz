import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content-container">
        <button className="navbar-item">
          <a href="#" className="navbar-item-link ">
            Home
          </a>
        </button>
        <button className="navbar-item">
          <a href="#" className="navbar-item-link">
            About us
          </a>
        </button>
        <button className="navbar-item">
          <a href="#" className="navbar-item-link">
            Academics
          </a>
        </button>
        <button className="navbar-item">
          <a href="#" className="navbar-item-link">
            Admissions
          </a>
        </button>
        <button className="navbar-item">
          <a href="#" className="navbar-item-link">
            Faculty
          </a>
        </button>
        <button className="navbar-item">
          <a href="#" className="navbar-item-link">
            Students
          </a>
        </button>
        <button className="navbar-item">
          <a href="#" className="navbar-item-link">
            Gallery
          </a>
        </button>
        <button className="navbar-item">
          <a href="#" className="navbar-item-link">
            Contact us
          </a>
        </button>
      </div>
    </div>
  );
}
