import React from 'react';
import logo from "./logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-color mt-5" data-bs-theme="dark">
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-12 col-md text-white">
            <img
              src={logo}
              alt="Logo"
              loading="lazy"
              className="img-fluid rounded"
              style={{ width: 'auto', height: '50', objectFit: 'cover' }}
            />
            <small className="d-block my-3 text-muted">
              State-of-art recording studios for music production & audio post-production based out of A'bad.
            </small>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-white">
              <b>Services</b>
            </h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="/services">
                  Dubbing
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/services">
                  Voice over
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/services">
                  Recording and Mixing
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/services">
                  Studio Rental
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5 className="text-white">
              <b>Pages</b>
            </h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="https://www.instagram.com/studiomusica_/">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://www.youtube.com/channel/UCpvVnysR3biIl6D5RQJ4z7Q">
                  Youtube
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://www.facebook.com/Community.Musica/">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://www.google.com/maps/place/Musica+Productions/@23.0314237,72.5546313,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPXc_bhfEf10FBtV7O-uelwgJeo66QXoD-E-hUZ!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPXc_bhfEf10FBtV7O-uelwgJeo66QXoD-E-hUZ%3Dw203-h114-k-no!7i4032!8i2268!4m9!3m8!1s0x395e84ee6ef1ae75:0x104aef22fbe59ee8!8m2!3d23.0315657!4d72.5546167!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11clyl_vmt?hl=en&entry=ttu">
                  Images
                </a>
              </li>
              <li>
                <Link className="text-muted" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/contactus">
                  Get In Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7877084614115!2d72.55204177499112!3d23.031565679167404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ee6ef1ae75%3A0x104aef22fbe59ee8!2sMusica%20Productions!5e0!3m2!1sen!2sin!4v1685785954968!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
