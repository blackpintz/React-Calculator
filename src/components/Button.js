import React from 'react';
import PropTypes from 'prop-types';

function Button({ name }) {
  return (
    <>
      <h4>{name}</h4>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'no value',
};

export default Button;
