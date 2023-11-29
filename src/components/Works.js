/* global Swiper */
import React from 'react';

const YoutubeEmbed = ({ videoSrc }) => (
  <div className="card" style={{ width: 'auto', height: 'auto', }}>
    <iframe className="embed-responsive-item yt" src={videoSrc} allowFullScreen title="YouTube Video"></iframe>
  </div>
);

class Works extends React.Component {

  componentDidMount() {
    // Initialize Swiper when the component mounts
    this.swiper = new Swiper(".mySwiper1", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination1",
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
          slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
      },
    });
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
        
        <div className="container"  >
          <div className="section-title mb-4">
            <h4 className="title gg-title" style={{textAlign: 'center', marginBottom: '1rem', fontWeight: 700}}> A Showcase of YouTube Videos Featuring Songs Crafted in Our Studio.</h4>
            <p className="text">
              {/* Your paragraph text goes here */}
            </p>
          </div>
        </div>

        <div className="container" >
          <div className="row">
            {/* Swiper */}
            <div className="swiper mySwiper1">
              <div className="swiper-wrapper">
                                    
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/74Geq1tJQ5E" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/Wo0mWiyB6Ho" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/NVbafp23oS4" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/-MHA1OPF9ZU" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/Nf-dCX6b3a4" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/xs4jWHfksxY" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/W20oskF4e94" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/J2EEDB1VRFE" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/cYiW3D2kJ5A" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/W20oskF4e94" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/J2EEDB1VRFE" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/cYiW3D2kJ5A" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/AVg8-cBNcPQ" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/IlnDxBUQMuo" />
                    </div>
                    <div className="swiper-slide">
                    <YoutubeEmbed videoSrc="https://www.youtube.com/embed/h3WuiEonZ8A" />
                    </div>
                
              </div>
              <div className="swiper-pagination swiper-pagination1"></div>
            </div>

            {/* Swiper JS */}
            {/* Instead of including the script here, consider adding it to the HTML file's head */}
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Works;
