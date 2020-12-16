import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const Nav = styled.nav`
    display: flex;
    width: 90%;
    margin: 0 20px;
    box-sizing: border-box;
    & h2 {
        margin: 0;
        flex-grow: 1;
    }
    & a {
        padding: 9px 5px 0;
    }
    & span {
        padding-top: 9px;
    }
  `;
  return (
    <Nav>
      <h2>Math Magicians</h2>
      <Link to="/">Home</Link>
      <span>|</span>
      <Link to="/calculator">Calculator</Link>
      <span>|</span>
      <Link to="/quote">Quote</Link>
    </Nav>
  );
}
