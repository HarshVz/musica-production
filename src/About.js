import React from "react";
import './App.css';
import Nav from './components/nav';
import ClientLogo from './components/ClientLogo';
import Footer from './components/footer';
import Preloader from "./components/Preloader";
import { Link } from "react-router-dom";

const rental = "https://lh3.googleusercontent.com/pw/ADCreHdD7_0z71VdzAWwI6a0SCagdDHjiT3zH0wXXnOrRcWkAWCMw83UzVV0aUwNhh1K0V2l4VSbbVhdhC9l5k3oTgj5JV7f4XBxafpkS9xwtjivZpHqmWwgJSP-ltywMfNZo3Vg_0pFTIE05Vg__fZv2Opm=w943-h943-s-no-gm?authuser=0"


function About() {
  return (
    <>

    <Preloader />

    <div className="img" id="background-about" style={{ height: '720px', width: 'auto', position: 'relative' }}>
      <Nav />
    </div>

      {/* Text */}
      <div className="bg-white">
        <div className="row">
          <div className="col text-center">
            <p className="hero_full fs-4 text-dark m-5">
              With over 35 years of experience, dubbing blockbuster films including films and TV series for Netflix, and thousands of episodes of popular animated TV series, Musica Production is among the best and most appreciated localization providers for the world's leading broadcasters, distributors, and content creators.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="container mt-5 mb-5">
        <div className="container1 d-flex justify-content-center align-items-center" style={{ padding: '1.5rem' }}>
          <div className="row align-items-md-stretch">
            <div className="col-md-6 order-md-2" data-aos="fade-down">
              <div className="container">
                <img src={rental} className="img-fluid rounded" alt="Image" loading="lazy" style={{ maxWidth: '100%', height: 'auto', width: '90%' }} />
              </div>
            </div>
            <div className="col-md-5 order-md-1 m-auto" style={{ marginTop: '3rem', paddingLeft: '3rem', padding: '2rem' }} data-aos="fade-down">
              <div className="conz">
                <h2 className="display-6" style={{ fontWeight: 600, letterSpacing: '-1px' }}>About Us</h2>
                <p className="fw-normal">
                  Welcome to Musica Productions, a premier dubbing studio dedicated to bringing the magic of language and music together. With a passion for precision and a commitment to excellence, we specialize in delivering exceptional dubbing services that enhance the audiovisual experience for audiences worldwide.
                </p>
                <p className="fw-normal">
                  At Musica Productions, we understand the pivotal role that dubbing plays in bridging cultures and enabling the global appreciation of diverse cinematic treasures. Our talented team of linguists, voice actors, and sound engineers work in harmony to ensure that every line of dialogue resonates with authenticity, capturing the essence and emotions of the original performances.
                </p>
                <Link to="/" className="btn btn-sm text-dark btn-outline-dark" style={{ marginTop: '1rem' }} >Check Our Works</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    <ClientLogo />
    <Footer />
    </>
  );
}

export default About;
