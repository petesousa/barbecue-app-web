import React from 'react';

import UserBar from '../../components/UserBar';
import SideBar from '../../components/SideBar';
import Calendar from '../../widgets/Calendar';
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
