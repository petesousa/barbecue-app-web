import React from 'react';

import Header from './Header';
import Calendar from './Calendar';
import { Container, Body, BarbecueDetails } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <BarbecueDetails />
        <Calendar />
      </Body>
    </Container>
  );
};

export default Home;
