/* global Swiper */

import React from 'react';

    const artist1 = "https://lh3.googleusercontent.com/pw/ADCreHc7kZzLXTNptSA5d3Sh0Z3kyGTufVQRG_6I_F29m8E91dzcuXgYs7e88Hu5SsD6Prrpu-NDSjpL1xo46WLR0uAHdJHT3-aiBGmiMaPQTnhdmkxvP_oCLmX5Lo5XABDPHHfGLmIxGhyRi_yqJvJqA0mD=w943-h943-s-no-gm?authuser=0";
    const artist2 = "https://lh3.googleusercontent.com/pw/ADCreHclMMMCnwIBHB09qxuNEy0Mm6syzCa0IjNn7Gfs77qQ-NxjSMY_xxaB49VTshp6xan68YwuZh7HfFYf3EEm5tpA8tCX5p2x2MlXQmFBAXYqblEF9svJDt5HhGCM4NUjH3v9lsnsUF4znIv13Z9LSEPa=w943-h943-s-no-gm?authuser=0"
    const artist3 = "https://lh3.googleusercontent.com/pw/ADCreHdMqUclN0RyZItVTteP7VSkaJxMqxpIMKKQjLWNZD-rvDZE6M8Du279qyOdmCPbqCWzas0Fel1u8KVjV3vYqqloBiHgaGUgkzJY25ahDkbUYsXp64_Vs-38Ex4Yq1vgdJFgNPzQ286Rosd0WqWhlcL5=w943-h943-s-no-gm?authuser=0"
    const artist4 = "https://lh3.googleusercontent.com/pw/ADCreHenhbE6Qy_-K2XpWTIez2iXRAlWFITZlRhDQvTC-J0rnYvON-JXOMmQpAm53O9uZ60VgoVonfUcIqOaQ1wLiMdupzVIgZba7Hq1WzpFLC3h4hHVKAG7Ugksqq_0kr1qjZFU1FWGglfrBGYITTD5ohh4=w943-h943-s-no-gm?authuser=0"
    const ankit = "https://lh3.googleusercontent.com/pw/ADCreHcKsBLyNhBZRKG1ZNjkIADb0eD2Kh4X9s5XwiwdG8-Izkh4nrjUmBgDvPAH06EMxjQJF2-uay0ZAE3DFQXmMwDNy5pTKB5hF-aymhHLBuWJ1vHBl2N3C6qQBGSQRoN7uPq0kkUlrsWrYJ8a53Ag80RI=w943-h943-s-no-gm?authuser=0" 

class MySwiperComponent extends React.Component {
  componentDidMount() {
     // Initialize Swiper when the component mounts
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is <= 768px
        0: {
            slidesPerView: 1,
        },
        568: {
          slidesPerView: 1,
        },
        // when window width is <= 992px
        768: {
          slidesPerView: 3,
        },
      },

    });

    // Save the Swiper instance as a property of the component
    this.swiper = swiper;
  }

  componentWillUnmount() {
    // Clean up Swiper instance when the component unmounts
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  render() {
    return (
<div className='mt-5'>
    <div className="container">
      <div className="section-title mb-2">
        <h4 className="title gg-title" style={{fontWeight: 700}}>Multi-Language Dubbing In More Than 40 Languages</h4>
        <p className="text">
          {/* Your paragraph text goes here */}
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          {/* Your content for the col-lg-6 goes here */}
        </div>
      </div>
    </div>

      <div className="container mb-4">
        <div className="row">
          {/* Swiper */}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="img-container-grid" loading="lazy" src={ankit} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="img-container-grid" loading="lazy" src={artist2} alt="" />
              </div> <div className="swiper-slide">
                <img className="img-container-grid" loading="lazy" src={artist3} alt="" />
              </div> <div className="swiper-slide">
                <img className="img-container-grid" loading="lazy" src={artist4} alt="" />
              </div>
              <div className="swiper-slide">
                <img className="img-container-grid" loading="lazy" src={artist1} alt="" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

          {/* Swiper JS */}
          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        </div>
        <br />
      </div>
      </div>
    );
  }
}

export default MySwiperComponent;
