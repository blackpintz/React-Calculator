import React from 'react';
import styled from 'styled-components';
import Navbar from './Nav';

export default function Home() {
  const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const Title = styled.h3`
    font-size: 30px;
  `;
  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>Welcome to our page.</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
      </Wrapper>
    </>
  );
}
