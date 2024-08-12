import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import './MainSection.css';
import LeadBullImage from '../../assets/images/Group 407.png';
import logo2 from '../../assets/images/logo2.png';

const MainSection = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Leads & Sales, Let's Prey ", ""];
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        const fullText = toRotate[0];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container className="align-items-center bannerContainer">
                <TrackVisibility>
                    {({ isVisible }) => (
                        <Row className={isVisible ? "animate__animated animate__fadeIn text-center" : "text-center"}>
                            <Col xs={12}>
                                <img src={LeadBullImage} alt="Lead Bull" className="img-fluid" />
                            </Col>
                            <Col xs={12}>
                                <h1 className="text-white mt-4">
                                    Ultra Targeted <span dataPeriod="1000" data-rotate={toRotate}>
                                        <span className="wrap">{text}</span>
                                    </span>
                                </h1>
                            </Col>
                            <Col xs={12}>
                                <img className="mt-5 logo2" src={logo2} alt="Logo 2" />
                            </Col>
                        </Row>
                    )}
                </TrackVisibility>
            </Container>
        </section>
    );
};

export default MainSection;
