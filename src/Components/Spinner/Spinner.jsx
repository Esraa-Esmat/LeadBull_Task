import React from 'react';
import { Triangle } from 'react-loader-spinner';
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner-container">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default Spinner;
