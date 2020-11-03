import React, { useState } from 'react';

import SideBar from './SideBar';
import Calendar from './Calendar';
import { Container, Body } from './styles';

const Home: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Container>
      <Body>
        <SideBar date={date} setDate={setDate} />
        <Calendar setDate={setDate} />
      </Body>
    </Container>
  );
};

export default Home;
