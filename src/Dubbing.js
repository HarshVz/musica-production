import React from "react";
import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import { Link } from "react-router-dom";
import Preloader from "./components/Preloader";

const ankit = "https://lh3.googleusercontent.com/pw/ADCreHcKsBLyNhBZRKG1ZNjkIADb0eD2Kh4X9s5XwiwdG8-Izkh4nrjUmBgDvPAH06EMxjQJF2-uay0ZAE3DFQXmMwDNy5pTKB5hF-aymhHLBuWJ1vHBl2N3C6qQBGSQRoN7uPq0kkUlrsWrYJ8a53Ag80RI=w943-h943-s-no-gm?authuser=0"
const artist2 = "https://lh3.googleusercontent.com/pw/ADCreHclMMMCnwIBHB09qxuNEy0Mm6syzCa0IjNn7Gfs77qQ-NxjSMY_xxaB49VTshp6xan68YwuZh7HfFYf3EEm5tpA8tCX5p2x2MlXQmFBAXYqblEF9svJDt5HhGCM4NUjH3v9lsnsUF4znIv13Z9LSEPa=w943-h943-s-no-gm?authuser=0"
const mixing = "https://lh3.googleusercontent.com/pw/ADCreHcF6YMI-1Q0AS7W2OtTQWYJFoJSp6REAO7ejD5Q2fHnDbayRosZIH3_JpwzUCVGBSiZMrCSigZfZl-z7XUsPz62pgO_JROk_WG8Y572Sgc3H3i-UwK8AiM1qEPgudTqCYABFIXF9GGG3Qvpgwy_Ets5=w943-h943-s-no-gm?authuser=0"
const rental = "https://lh3.googleusercontent.com/pw/ADCreHdD7_0z71VdzAWwI6a0SCagdDHjiT3zH0wXXnOrRcWkAWCMw83UzVV0aUwNhh1K0V2l4VSbbVhdhC9l5k3oTgj5JV7f4XBxafpkS9xwtjivZpHqmWwgJSP-ltywMfNZo3Vg_0pFTIE05Vg__fZv2Opm=w943-h943-s-no-gm?authuser=0"

function Dubbing() {
  return (
    <>

      <Preloader />

      <div id="background-d" className="img" style={{ height: '720px', width: 'auto', position: 'relative' }}>

        <Nav />
       

        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-sm-12">
              <div id="content">
                <p className="text-uppercase fs-6 mb-3 active text-center" style={{ letterSpacing: "5px" }}>
                  OUR SERVICES
                </p>
                <h2 className="text-center">
                  Musica Production provides complete solutions for films, TV series, documentaries, webisodes, infomercials and much more.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="bg-white">
        <div className="row">
          <div className="col text-center">
            <p className="hero_full fs-4 text-dark m-5">
              To ensure the quality and consistency of each project, a dedicated project manager oversees each project from start to finish, and serves as your personal guarantee that your product meets the highest quality standards.
            </p>
          </div>
        </div>
      </div>

      {/* Voice Over Section */}
      <div className="container mt-5 mb-5" id="voice">
        <div className="container1 d-flex justify-content-center align-items-center" style={{ padding: "1.5rem" }}>
          <div className="row align-items-md-stretch">
            <div className="col-md-6 order-md-2" data-aos="fade-down">
              <img src={ankit} className="img-fluid rounded" alt="artist" loading="lazy" style={{ maxWidth: "100%", height: "auto", width: "90%" }} />
            </div>
            <div className="col-md-5 order-md-1 m-auto" style={{ marginTop: "3rem", paddingLeft: "3rem", padding: "2rem" }} data-aos="fade-down">
              <div className="conz">
                <h2 className="display-6" style={{ fontWeight: 600, letterSpacing: "-1px" }}>
                  Voice Over
                </h2>
                <p className="fw-normal">
                  We use a wide range of accomplished voice actors and professional speakers for our voice-over and speak productions. When finding the right voice talent for a job, we pay close attention to details like diction, intonation, and acoustic management – all to achieve a perfect and natural-sounding result.
                </p>
                <p className="fw-normal">
                  Research and pre-production are essential parts of any project. This helps ensure the quality of all aspects of your speak and voice-over, from dialects and accents to signal pathways and technical specifications.
                </p>
                <Link to="/" className="btn btn-sm text-dark btn-outline-dark" style={{ marginTop: "1rem" }}>
                  Check Our Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dubbing Section */}
      <div className="container" style={{ marginBottom: "8rem" }} id="dubbing">
        <div className="mt-4 container1 d-flex justify-content-center align-items-center" style={{ padding: "1.5rem" }}>
          <div className="row align-items-md-stretch">
            <div className="col-md-6" data-aos="fade-down">
              <img src={artist2} className="img-fluid rounded" alt="artist" loading="lazy" style={{ maxWidth: "100%", height: "auto", width: "90%" }} />
            </div>
            <div className="col-md-5 order-md-1 m-auto" style={{ marginTop: "3rem", paddingLeft: "3rem", padding: "2rem" }} data-aos="fade-down">
              <div className="conz">
                <h2 className="display-6" style={{ fontWeight: 600, letterSpacing: "-1px" }}>
                  Dubbing
                </h2>
                <p className="fw-normal">
                  Dubbing a project is a complex process, involving a number of stages, each demanding careful execution for the final result to stay true to both style and content of the source material.
                </p>
                <p className="fw-normal">
                  We handle all of these aspects with an inspired and effective workflow – including translation, adaptation, casting, directing, recording, editing, and mixing.
                </p>
                <Link to="/" className="btn btn-sm text-dark btn-outline-dark" style={{ marginTop: "1rem" }}>
                  Check Our Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recording and Mixing Section */}
      <div className="container mt-5 mb-5" id="mixing">
        <div className="container1 d-flex justify-content-center align-items-center" style={{ padding: "1.5rem" }}>
          <div className="row align-items-md-stretch">
            <div className="col-md-6 order-md-2" data-aos="fade-down">
              <img src={mixing} className="img-fluid rounded" alt="artist" loading="lazy" style={{ maxWidth: "100%", height: "auto", width: "90%" }} />
            </div>
            <div className="col-md-5 order-md-1 m-auto" style={{ marginTop: "3rem", paddingLeft: "3rem", padding: "2rem" }} data-aos="fade-down">
              <div className="conz">
                <h2 className="display-6" style={{ fontWeight: 600, letterSpacing: "-1px" }}>
                  Recording and Mixing
                </h2>
                <p className="fw-normal">
                  Our music sound recording and mixing services offer a professional and immersive audio experience for musicians, bands, and artists of all genres. We understand that capturing the essence and quality of your music is crucial, and our skilled engineers and state-of-the-art equipment ensure exceptional results.
                </p>
                <p className="fw-normal">
                  When it comes to sound recording, our dedicated recording studio provides a controlled environment that is acoustically treated to capture every nuance of your performance. Whether you're a solo artist laying down tracks, a band recording together, or an ensemble capturing a live performance, our engineers will work closely with you to achieve the desired sound. We use high-quality microphones, preamps, and other recording gear to ensure pristine audio capture.
                </p>
                <Link to="/" className="btn btn-sm text-dark btn-outline-dark" style={{ marginTop: "1rem" }}>
                  Check Our Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Studio Rental Section */}
      <div className="container" style={{ marginBottom: "8rem" }} id="rental">
        <div className="mt-4 container1 d-flex justify-content-center align-items-center" style={{ padding: "1.5rem" }}>
          <div className="row align-items-md-stretch">
            <div className="col-md-6" data-aos="fade-down">
              <img src={rental} className="img-fluid rounded" alt="artist" loading="lazy" style={{ maxWidth: "100%", height: "auto", width: "90%" }} />
            </div>
            <div className="col-md-5 order-md-1 m-auto" style={{ marginTop: "3rem", paddingLeft: "3rem", padding: "2rem" }} data-aos="fade-down">
              <div className="conz">
                <h2 className="display-6" style={{ fontWeight: 600, letterSpacing: "-1px" }}>
                  Studio Rental
                </h2>
                <p className="fw-normal">
                  Dubbing Studio Rental services, where precision and professionalism meet to enhance your audio production endeavors. Whether you're a filmmaker, content creator, voice actor, or musician, our state-of-the-art studio provides the perfect environment for all your dubbing needs.
                </p>
                <p className="fw-normal">
                  Our Dubbing Studio Rental offers a meticulously designed space equipped with cutting-edge technology and acoustically treated rooms, ensuring optimal sound quality and clarity. With a focus on delivering exceptional audio experiences, we provide the tools and resources necessary to bring your dubbed content to life.
                </p>
                <Link to="/" className="btn btn-sm text-dark btn-outline-dark" style={{ marginTop: "1rem" }}>
                  Check Our Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />


    </>
  );
}

export default Dubbing;
