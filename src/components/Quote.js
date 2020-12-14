import React from 'react';
import styled from 'styled-components';
import Navbar from './Nav';
import '../App.css';

export default function Quote() {
  const PTag = styled.p`
    font-size: 30px;
    width: 90%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
  `;
  return (
    <>
      <Navbar />
      <PTag>
        Mathematics is not about numbers, equations, computations or
        algorithms: it is about understanding. - William Paul Thurston
      </PTag>
    </>
  );
}
