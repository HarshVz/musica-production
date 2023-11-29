import React, { useEffect } from 'react';
import './Preloader.css';

function Preloader() {
  useEffect(() => {
    const blackScreen = document.getElementById('black-screen');

    if (blackScreen) {
      blackScreen.style.display = 'block';

      // Check if gsap is available before using it
      if (window.gsap) {
        window.gsap.to(blackScreen, {
          duration: 1.5,
          height: 0,
          ease: 'power2.inOut',
          onComplete: function () {
            blackScreen.style.display = 'none';
          },
        });
      } else {
        console.error('GSAP not available');
      }
    }
  }, []);

  return (
    <>
      <div id="black-screen"></div>
    </>
  );
}

export default Preloader;
