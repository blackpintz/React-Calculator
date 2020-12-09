import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, display }) => (
  <>
    <h1>
      {result === null ? display : result }
    </h1>
  </>
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
