import React from "react"
import iconlogo from "./logo.png"
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-lg-size" style={{ backgroundColor: 'black', zIndex: 99998 }}>
      <div className="container-xl">
        <Link to="/" className="navbar-brand">
          <img src={iconlogo} alt="..." className="img-fluid rounded" loading="lazy" style={{ width: 'auto', height: 64, objectFit: 'cover', padding: '0.2rem' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-lg-auto">
            <Link className="nav-item nav-link active" to="/" style={{fontFamily: 'Poppins'}}>Home</Link>
            <Link className="nav-item nav-link" to="/services" style={{fontFamily: 'Poppins'}}>Services</Link>
            <Link className="nav-item nav-link" to="/contactus" style={{fontFamily: 'Poppins'}}>Contact</Link>
            <Link className="nav-item nav-link" to="/about" style={{fontFamily: 'Poppins'}}>About</Link>
          </div>
          <div className="navbar-nav ms-lg-4">
            <div className="row">
              <div className="col">
                <a href="https://www.youtube.com/channel/UCpvVnysR3biIl6D5RQJ4z7Q"><i className="fa-brands fa-youtube"></i></a>
              </div>
              <div className="col">
                <a href="https://www.facebook.com/Community.Musica/"><i className="fa-brands fa-facebook"></i></a>
              </div>
              <div className="col">
                <a href="https://www.instagram.com/studiomusica_/"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
