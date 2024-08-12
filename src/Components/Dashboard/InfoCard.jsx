import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const InfoCard = ({ title, children, className }) => (
  <Card className={`mb-4 rounded-5 inner-shadow ${className}`}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      
      {children}
    </Card.Body>
  </Card>
);

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

InfoCard.defaultProps = {
  className: '',
};

export default InfoCard;
