/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  min-height: 10vh;
`;

const Footer = () => (
  <Container>
    <p>
      by{' '}
      <a href="https://github.com/study-hary-id" target="_blank">
        study-hary-id
      </a>{' '}
      &copy; 2021
    </p>
  </Container>
);

export default Footer;
