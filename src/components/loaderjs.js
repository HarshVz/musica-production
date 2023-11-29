import React, { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    // Get the loader element
    var loader = document.getElementById('page-loader');

    // Function to hide the loader
    const hideLoader = () => {
      // Set opacity to 0 over 1 second with an ease-out transition
      loader.style.transition = 'opacity 1s ease-out';
      loader.style.opacity = '0';

      // Set visibility to hidden after the transition completes
      setTimeout(function () {
        loader.style.visibility = 'hidden';
      }, 1000); // 1 second
    };

    // Check if the loader exists
    if (loader) {
      // Set initial opacity to 1
      loader.style.opacity = '1';

      // Hide the page loader after the DOM is fully loaded
      document.addEventListener('DOMContentLoaded', function () {
        hideLoader();
      });

      // Fallback to hide the loader after 3 seconds (in case DOMContentLoaded is not triggered)
      setTimeout(function () {
        hideLoader();
      }, 3000); // 3 seconds
    }
  }, []);

  return (
    <div>
      <div id="page-loader">
        <div className="loaderzz" id="loaderzz">
          <div className="music-loader">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
      {/* Your HTML content */}
    </div>
  );
};

export default Loader;
