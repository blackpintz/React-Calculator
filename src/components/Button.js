import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, btnPress }) {
  return (
    <>
      <button type="button" onClick={() => btnPress(name)}>{name}</button>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  btnPress: PropTypes.func,
};

Button.defaultProps = {
  name: 'no value',
  btnPress(name) { return name; },
};

export default Button;
