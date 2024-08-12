import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Business Strategy</h3>
          <p>Comprehensive business strategy solutions tailored to your company's goals.</p>
        </div>
        <div className="service-item">
          <h3>Market Analysis</h3>
          <p>In-depth market research and analysis to guide your decision-making process.</p>
        </div>
        <div className="service-item">
          <h3>Consulting & Advisory</h3>
          <p>Expert consulting services to help you overcome challenges and grow your business.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
