import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <>
    <h1>
      {result === null ? '0' : result }
    </h1>
  </>
);

Display.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Display.defaultProps = {
  result: '0',
};

export default Display;
