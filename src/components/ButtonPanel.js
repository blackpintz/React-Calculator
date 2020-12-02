import React from 'react';
import Group from './Group';
import '../App.css';

function ButtonPanel() {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];
  return (
    <>
      <Group group={group1} />
      <Group group={group2} />
      <Group group={group3} />
      <Group group={group4} />
      <Group group={group5} />
    </>
  );
}

export default ButtonPanel;
