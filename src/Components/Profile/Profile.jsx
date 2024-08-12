import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Profile.css';
import logo2 from '../../assets/images/logo2.png';

const Profile = () => {
    return (
        <div className="profile">
            <Container fluid className="profile-section text-center d-flex flex-column justify-content-center">
                <h2 className="profile-title">PROFILE</h2>
                <Container className='py-4'>
                    <Row className="justify-content-center">
                        <Col md={4} sm={12} className="my-auto p-xl-5 p-md-0">
                            <Col md={12} sm={12} >
                                <Card className="text-center bg-transparent text-white profile-box">
                                    <Card.Body>
                                        <h2 className="profile-box-title fw-bold rounded-5">Vision</h2>
                                        <Card.Text>
                                            We enhance our data centers to personalize the contractor clients experience through telemarketing.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} sm={12} className='mt-xl-5 mt-md-2 p-xl-5 p-md-0'>
                                <Card className="text-center bg-transparent text-white profile-box">
                                    <Card.Body>
                                        <h2 className="profile-box-title fw-bold rounded-5">Values</h2>
                                        <Card.Text>
                                            Our core values include the elimination of privacy concerns, and adherence to global marketing regulations.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col>
                        <Col md={4} sm={12} className=" my-auto  p-xl-5 ps-md-2">
                            <Card className="text-center bg-transparent text-white profile-box">
                                <Card.Body>
                                    <h2 className="profile-box-title fw-bold rounded-5">Mission</h2>
                                    <Card.Text>
                                        Our mission is to be the leading innovator in the telemarketing industry through our cloud-based Lead-Gen solutions.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} sm={12} className="text-center my-auto  p-xl-5 p-md-4">
                            <Image src={logo2} alt="Leadbull LLC" className="profile-image mb-2" fluid />
                            <p className="company-name">LEADBULL LLC</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default Profile;
