import React from 'react';
import TheMovingPixelLogo from './Clients/TheMovingPixel.png';
import GujaratTourismLogo from './Clients/GujaratTourism.png';
import DiscoveryLogo from './Clients/Discovery.png';
import DDLogo from './Clients/DD.png';
import Network18Logo from './Clients/Network18.png';
import GovtOfGujLogo from './Clients/Govt.Of.Guj.png';
import LalujiSonsLogo from './Clients/Laluji_sons.png';
import ApproductionLogo from './Clients/approduction.jpg';

const ClientLogo = () => {
  return (
    <section className="client-logo-area client-logo-one" style={{ marginBottom: '10rem', marginTop: '8rem' }}>
      <div className="section-title-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content text-center mb-5 pb-5">
                <span> Our Partners </span>
                <h2 className="fw-bold">Our Awesome Clients</h2>
                <p>
                At the heart of our journey, we're proud to call our clients not just partners but the architects of our shared success story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="client-logo-item text-center">
              <img src={TheMovingPixelLogo} alt="Logo" loading="lazy" className="img-fluid small-logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="client-logo-item text-center">
              <img src={GujaratTourismLogo} alt="Logo" loading="lazy" className="img-fluid small-logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="client-logo-item text-center">
              <img src={DiscoveryLogo} id="discovery" alt="Logo" loading="lazy" className="img-fluid small-logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="client-logo-item text-center">
              <img src={DDLogo} alt="Logo" loading="lazy" className="img-fluid small-logo" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3 col-6">
            <div className="client-logo-item text-center">
              <img src={Network18Logo} alt="Logo" loading="lazy" className="img-fluid small-logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="client-logo-item text-center">
              <img src={GovtOfGujLogo} alt="Logo" loading="lazy" className="img-fluid small-logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="client-logo-item text-center">
              <img src={LalujiSonsLogo} id="img" alt="Logo" loading="lazy" className="img-fluid small-logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="client-logo-item text-center">
              <img src={ApproductionLogo} alt="Logo" loading="lazy" className="img-fluid small-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
