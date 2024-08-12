import React from 'react';
import './SecondSection.css';
import arrowImage from '../../assets/images/arrow image.png'


function SecondSection() {
  return (
    <section className="hero pb-5">
      <h2 className=' secondSectionTitle'>Huge Updates On-The-Way </h2>
      <div style={{ font: 'Roboto Flex', fontSize: '20px', fontWeight: '500', width: '35%' }} className=' m-auto'>
        <li>Expanding in existing markets: Canada, UK, and US and promoting our upgraded leads services there</li>
        <li>Entering new targeted markets: UAE</li>
      </div>
      <img src={arrowImage} className='arrowImage m-auto' alt="arrowImage" />

      <div className='d-flex justify-content-around'>
        <div class="history-section rounded-5">
          <h2 class="history-title">History</h2>
          <p class="history-content mt-3">
            As the leading company in the marketing industry with a passion for innovation and A+ excellence, Leadbull has become a household name in the digital sales world, known for its groundbreaking lead generation.
          </p>
        </div>
        <div class="history-section rounded-5">
          <h2 class="history-title">About us</h2>
          <p class="history-content mt-3">
          Leadbull stays current with the market trends aiming not only to thrive but also to enhance in such a rapidly evolving digital age, and to keep up its marketing services with the client’s expectations worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
