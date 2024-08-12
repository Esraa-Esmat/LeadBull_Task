import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { ImArrowUp } from "react-icons/im";


const CountUp = ({ startNumber, targetNumber, duration, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = startNumber;
    const end = targetNumber;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration, startCounting]);

  return <span className='countingNumber'>{count.toLocaleString()}</span>;
};

const Numbers = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the div should be visible to trigger the counting
  });

  return (
    <Row className="w-100" ref={ref}>
      <Col md={6}>
        <CountUp startNumber={1000} targetNumber={1664} duration={.1} startCounting={inView} />
        <h5>New Active Leads</h5>
      </Col>
      <Col md={6}>
        <span className='countingNumber d-flex align-items-center justify-content-center'>
        <ImArrowUp size={40} className='mx-2 gradient-arrow' />
        <CountUp startNumber={0} targetNumber={6} duration={2000} startCounting={inView} /> %
        </span>
        <h5>Vs 992/day last month</h5>
      </Col>
    </Row>
  );
};

export default Numbers;
