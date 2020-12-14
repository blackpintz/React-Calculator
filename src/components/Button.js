import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button({ name, btnPress }) {
  const Button = styled.button`
  &:last-child {
    background-color: orange;
  }
`;
  return (
    <>
      <Button type="button" className="button" onClick={() => btnPress(name)}>{name}</Button>
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
