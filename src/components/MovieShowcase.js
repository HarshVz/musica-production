import React from 'react';


function MovieShowcase() {

  const Movie1 = 'https://drive.google.com/uc?id=1UL06Ac9EaAxDKnWanHGw3LZMJITQQk2H';
  const Movie2 = 'https://drive.google.com/uc?id=1zq0MYFkvDf2qrlppvfh70Pre0umryc7D';
  const Movie3 = 'https://drive.google.com/uc?id=1buDOw7F7sL0I-0wCJ-9mDsHJwvgq7atc';
  const Movie4 = 'https://drive.google.com/uc?id=1CU9L_78pS8pWRhF-CY-Rt3pCPGJ5rzBy';
  const Movie5 = 'https://drive.google.com/uc?id=1G2w04nuwhnxJsELT3Kqo-xbV7_nV65bR';
  const Movie6 = 'https://drive.google.com/uc?id=1rqQY1wc2Bj63z14qiW0oz1b-momxU3Bd';
  const Movie7 = 'https://drive.google.com/uc?id=1djT9fhDR4xcYJ-bGXpA72OwjYZzliHMK';
  const Movie9 = 'https://drive.google.com/uc?id=1qUuKdBraQAyJejOBGg1WlCBob5umOJDN';
  const Movie10 = 'https://drive.google.com/uc?id=1sc_sEB4CvKhn_LhGnmMdSDG06mt87Vu0';
  const Movie13 = 'https://drive.google.com/uc?id=1bS37EwsBR152rAbnN-ufpi9-wjBQYgVA';

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content text-center">
              <span>MOVIE SHOWCASE</span>
              <h2 className="fw-bold">MOVIES DUBBED BY US</h2>
              <p>
              These are a selection of movies that have undergone the musical production process for dubbing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie5} alt="" />
                  </div>
                  <div className="col-12 col-lg-6 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie3} alt="" />
                  </div>
                  <div className="col-12 col-md-4 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie1} alt="" />
                  </div>
                  <div className="col-12 col-md-4 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie4} alt="" />
                  </div>
                  <div className="col-12 col-md-4 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie2} alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col">
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie6} alt="" />
                  </div>
                  <div className="col-12 col-lg-6 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie13} alt="" />
                  </div>
                  <div className="col-12 col-md-4 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie7} alt="" />
                  </div>
                  <div className="col-12 col-md-4 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie10} alt="" />
                  </div>
                  <div className="col-12 col-md-4 p-2">
                    <img className="img-fluid rounded" loading="lazy" src={Movie9} alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      

    </div>
  );
}

export default MovieShowcase;
