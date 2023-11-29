import React from "react"
import { Link } from "react-router-dom";

function Container() {
    return (
        <div class="Main_Text">

      <div className="bg-color">
        <div className="row">
          <div className="col text-center">
            <p className="hero_full fs-4 text-white m-5">For decades, Studio Musica has been among the leading players in creating and developing the industry standard for dubbing and media services across all platforms and we remain innovative in the field of localization technologies.</p>
          </div>
        </div>
      </div>

      <div className="bg-white mt-3 services-section">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 m-5 p-3">
          <div className="col px-5">
            <h3 className="mb-3">
              Dubbing
            </h3>
            <p className="mb-4">
              Dubbing a project is a complex process, involving a number of stages, each demanding careful execution for the final result to stay true to both style and content of the source material.
            </p>
          </div>
          <div className="col px-5">
            <h3 className="mb-3">
              Voice over
            </h3>
            <p style={{ marginBottom: '2.9rem' }}>
              We use a wide range of accomplished voice actors and professional speakers for our voice-over and speak productions.
            </p>
          </div>
          <div className="col px-5">
            <h3 className="mb-3">
              Recording and Mixing
            </h3>
            <p className="mb-5">
              We have recording and mixing facilities equipped with professional audio equipment and software. We handle the recording of voice actor's performances and mix them with the original audio, sound effects, and music to create a seamless dubbed version.
            </p>
          </div>
          <div className="col px-5">
            <h3 className="mb-3">
              Studio Rental
            </h3>
            <p className="mb-5">
              We've invested significant time and effort to ensure the inclusion of top-notch audio equipment, soundproofing, acoustics, and air-conditioning. Our spacious recording studio offers the highest quality audio experience.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white btns" style={{ marginTop: '-5.5rem' }}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 m-5 p-3">
          <div className="col px-5">
            <Link to="/services" className="btn btn-sm text-dark btn-outline-dark w-2 mb-5">
              Read More
            </Link>
          </div>
          <div className="col px-5">
            <Link to="/services" className="btn btn-sm text-dark btn-outline-dark w-2 mb-5">
              Read More
            </Link>
          </div>
          <div className="col px-5">
            <Link to="/services" className="btn btn-sm text-dark btn-outline-dark w-2 mb-5">
              Read More
            </Link>
          </div>
          <div className="col px-5">
            <Link to="/services" className="btn btn-sm text-dark btn-outline-dark w-2 mb-5">
              Read More
            </Link>
          </div>
        </div>
      </div>


    </div>

    )
}

export default Container;