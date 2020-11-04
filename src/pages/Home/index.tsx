import React from 'react';

import UserBar from './UserBar';
import SideBar from './SideBar';
import Calendar from './Calendar';
import { Container, Body } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <UserBar />
      <Body>
        <SideBar />
        <Calendar />
      </Body>
    </Container>
  );
};

export default Home;
