import React from 'react';
import './Testimonials.css';
import leftImg from '../../assets/images/flash 2.png';
import { Col, Container, Row } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <div className="testimonial-card">
      <Container className="testimonial-content m-auto">
        <Row>
          <Col xs={12} md={5} className='d-flex justify-content-center flex-column align-items-center'>
            <div className="testimonial-image">
              <img src={leftImg} alt="Testimonial" />
            </div>
          </Col>

          <Col xs={12} md={7} className='text-start testimonial-card-right'>
            <div className="testimonial-text">
              <h2 className="testimonial-name">WILLIAM JOHNSON</h2>
              <p className="testimonial-title">Regional Sales Director, Effective HVAC</p>
              <p className="testimonial-quote mb-4">
                In the end, Leadbull made sustainable improvements to our business lead gen strategy. We no longer conduct any door-knocking for prospecting, which frees up time for higher-value tasks.
              </p>
              
              <p className="testimonial-quote">
                Leadbull all-inclusive telemarketing and digital marketing solution also provided us a reliable source of high-quality leads, which allowed our sales reps to accelerate their goals.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
