import React from 'react';
import PropTypes from 'prop-types';
import Group from './Group';
import '../App.css';

function ButtonPanel({ clickBtn }) {
  const group1 = ['AC', '+/-', '%', '/'];
  const group2 = ['7', '8', '9', '*'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];
  return (
    <>
      <Group group={group1} btnPress={clickBtn} />
      <Group group={group2} btnPress={clickBtn} />
      <Group group={group3} btnPress={clickBtn} />
      <Group group={group4} btnPress={clickBtn} />
      <Group group={group5} btnPress={clickBtn} />
    </>
  );
}

ButtonPanel.propTypes = {
  clickBtn: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickBtn(name) { return name; },
};
export default ButtonPanel;
