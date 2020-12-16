import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Display = ({ result, display }) => (
  <div className="Display">
    <h1>
      {result === null ? display : result }
    </h1>
  </div>
);

Display.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Display.defaultProps = {
  result: '0',
  display: '0',
};

export default Display;
