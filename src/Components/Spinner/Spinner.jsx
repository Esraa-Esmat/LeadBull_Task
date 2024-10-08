import React from 'react';
import { Triangle } from 'react-loader-spinner';
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner-container">
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="#027fca"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default Spinner;
