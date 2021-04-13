import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/header-logo.png';

const style = {
  letterSpacing: '0.5rem'
};

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
`;

const Header = () => (
  <Container>
    <img src={logo} alt="Tie Notes Logo" />
    <h1 style={style}>Tie Notes</h1>
  </Container>
);

export default Header;
