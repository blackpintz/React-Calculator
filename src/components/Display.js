import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <>
    <h1>
      Display:
      { result }
    </h1>
  </>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 'no value',
};

export default Display;
