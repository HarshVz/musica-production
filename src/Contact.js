import React from "react";
import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import Preloader from "./components/Preloader";
import './components/contact.css';


function Contact() {
  return (
    <div className="contact-us">

    <Preloader />

    <div className="img" id="backgroundcontact" style={{ height: '720px', width: 'auto', position: 'relative' }}>
      {/* Navbar */}
      <Nav />
    </div>

    <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div id="content">
              <p className="text-uppercase fs-6 mb-3 active text-center" style={{ letterSpacing: '5px' }}>
                JOIN WITH US
              </p>
              <h2 className="text-center">
                Musica Production provides complete solutions for films, TV series, documentaries, webisodes, infomercials, and much more.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white">
        <div className="row">
          <div className="col text-center">
            <p className="hero_full fs-4 text-dark m-5">
              Join us on this extraordinary journey as we elevate the power of dubbing, weaving together the strands of language and music to create a symphony of audiovisual excellence. Experience the unparalleled commitment and craftsmanship that Musica Productions brings to every project, and let us transform your films into masterpieces.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '8rem' }}>
      <div className="container d-flex justify-content-center align-items-center w-100">
        <div className="contactus custom-contact d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h4 className="text-primary mb-3">Get in touch</h4>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput2" className="form-label">Contact Number</label>
                  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
              </div>
              <div className="col-md-5">
                <h4 style={{ marginLeft: '0.6rem' }}>Contact us</h4>
                <hr />
                <div className="mt-4">
                  <div className="d-flex">
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>Address: D-16, 'Jayant Smruti', Rajhans Society, <br />
                      Nr.Nabard Vihar, Lane Opp. Mohan Hair Dressers, <br /> St. Xaviers College Corner, Navrangpura, <br />Ahmedabad, Gujarat 380006</p>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <i className="bi bi-telephone-fill"></i>
                    <p>Contact: 8888888888</p>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <i className="bi bi-envelope-fill"></i>
                    <p>Email: musica.productions@gmail.com</p>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <i className="bi bi-browser-chrome"></i>
                    <p>Website: <a href="https://studiomusica.in" className="text-primary">studiomusica.in</a></p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Contact;
