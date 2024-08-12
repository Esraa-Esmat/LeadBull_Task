import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './UpdatesSection.css';

const UpdatesSection = () => {
    // State for progress values
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);
    const [progress4, setProgress4] = useState(0);
    const [progress5, setProgress5] = useState(0);

    // useInView to track visibility of each section
    const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
    const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
    const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
    const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });
    const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.5 });

    const animateProgressBar = (setProgress, target, duration) => {
        setProgress(0);
        setTimeout(() => {
            setProgress(target);
        }, 1000); // delay to allow reset animation before starting again
    };

    useEffect(() => {
        if (inView1) {
            animateProgressBar(setProgress1, 80, 1000); // Adjust duration as needed
        }
    }, [inView1]);

    useEffect(() => {
        if (inView2) {
            animateProgressBar(setProgress2, 60, 1000);
        }
    }, [inView2]);

    useEffect(() => {
        if (inView3) {
            animateProgressBar(setProgress3, 90, 1000);
        }
    }, [inView3]);

    useEffect(() => {
        if (inView4) {
            animateProgressBar(setProgress4, 75, 1000);
        }
    }, [inView4]);

    useEffect(() => {
        if (inView5) {
            animateProgressBar(setProgress5, 50, 1000);
        }
    }, [inView5]);

    return (
        <Container fluid className="py-5 updates-section text-start">
            <Container>
                <Row>
                    <Col md={6} className='d-flex justify-content-center flex-column updates-section-left'>
                        <h2 className="update-title update-title-left">2024 UPDATES</h2>
                        <p className="update-text update-text-left">
                            To increase our clients' sales revenue and push their average workflow estimates,
                            our company is developing.
                        </p>
                        <p className="update-text update-text-left">
                            And will launch a wider variety of Lead-Gen models, digital sales opportunities,
                            & ultra-targeted telemarketing services in the near future. Here’s a sneak peek at what’s in the works.
                        </p>
                    </Col>
                    <Col md={6} className="updates-list d-flex  flex-column">
                        <div ref={ref1}>
                            <h5 className="update-title">Inbound – Lead Generation</h5>
                            <p className="update-location">Leads | Location Ontario, Canada - HVAC</p>
                            <ProgressBar animated now={progress1} variant="info" />
                        </div>
                        <div ref={ref2}>
                            <h5 className="update-title">Game-Changing Virtual Deals</h5>
                            <p className="update-location">Pre Closed | Location Ontario, Canada - HVAC, Solar</p>
                            <ProgressBar animated now={progress2} variant="info" />
                        </div>
                        <div ref={ref3}>
                            <h5 className="update-title">Highest Conversion – Money Making</h5>
                            <p className="update-location">Hot Leads | Location United States - Solar</p>
                            <ProgressBar animated now={progress3} variant="info" />
                        </div>
                        <div ref={ref4}>
                            <h5 className="update-title">Expanding – New Market</h5>
                            <p className="update-location">Hot Leads | Location Quebec, Canada - HVAC</p>
                            <ProgressBar animated now={progress4} variant="info" />
                        </div>
                        <div ref={ref5}>
                            <h5 className="update-title">Top Selling – Various Prices</h5>
                            <p className="update-location">New Tier "A", "B", "C" Leads | Location Ontario, Canada - HVAC</p>
                            <ProgressBar animated now={progress5} variant="info" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default UpdatesSection;
