
import React from "react"
import './App.css';
import Container from './components/container';
import Nav from './components/nav';
import MovieShowcase from './components/MovieShowcase';
import ClientLogo from './components/ClientLogo';
import Footer from './components/footer';
import Loader from './components/loaderjs';
import MySwiperComponent from './components/MySwiperComponent';
import Works from './components/Works';

function Home() {



  return (
    <div>

<Loader />
        
        <div id="background" className="img" style={{ height: '720px', width: 'auto', position: 'relative' }}>
             <Nav />
            <div className="container">
            <div className="row align-items-center min-vh-100">
            <div className="col-sm-12">
                <div id="content">
                <p className="text-uppercase fs-6 mb-3 active text-center" style={{ letterSpacing: '5px' }}>
                    DUBBING &amp; LOCALIZATION
                </p>
                <h2 className="text-center">
                Years of experience providing the highest quality for the world’s leading broadcasters, distributors &amp; content creators.
                </h2>
                </div>
            </div>
            </div>
        </div>


        </div>

      <Container />
      <MovieShowcase />
      <MySwiperComponent />
      <Works />
      <ClientLogo />



      <Footer />


    </div>
  )
}

export default Home;
