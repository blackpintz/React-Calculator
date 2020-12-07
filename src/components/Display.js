import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <>
    <h1>
      Display:
      { result.next }
    </h1>
  </>
);

Display.propTypes = {
  result: PropTypes.object,
};

Display.defaultProps = {
  result: {},
};

export default Display;
