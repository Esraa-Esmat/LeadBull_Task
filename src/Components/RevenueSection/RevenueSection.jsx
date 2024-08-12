import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RevenueSection.css';

const RevenueSection = () => {
    return (
        <Container fluid className="text-center p-5 revenue-section">
            <Row className="justify-content-center revenue-section-header">
                <Col md={10}>
                    <h2 className="secondSectionTitle mb-4">OVER $9 MILLION</h2>
                    <div className='revenue-section-headerDiv m-auto'>
                        <p className='text-center py-2 fw-bold'>In combined revenue generated for our contractor clients</p>
                        <p className='text-center'>Our services allow clients to gain a better chance of fulfilling customers' needs and catching their interest,
                            leading to higher net revenue and sustained customer satisfaction and loyalty.
                            Many top global contractors <a href="#readmore">Read more.</a></p>
                    </div>
                </Col>
            </Row>
            <div className='revenue-section-container1 m-auto'>
                <div className='revenue-section-container px-3 py-4 m-auto mt-xl-5 mt-md-0'>
                    <Row className=" justify-content-center w-100 my-auto my-xl-3">
                        <Col xs={12} sm={6} md={3} >
                            <div>
                                <h3>75+</h3>
                                <p>Independent Member Firms</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3} className=" border-div">
                            <div>
                                <h3>35+</h3>
                                <p>Contracting LLCs</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3} className=" border-div">
                            <div>
                                <h3>75+</h3>
                                <p>Affiliate Network</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3} className="border-div">
                            <div>
                                <h3>75+</h3>
                                <p>Countries</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default RevenueSection;
