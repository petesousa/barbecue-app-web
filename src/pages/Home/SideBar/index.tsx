import React from 'react';

import { Container } from './styles';
import BarbecueDetails from './BarbecueDetails';

interface Props {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const SideBar: React.FC<Props> = ({ date, setDate }) => {
  return (
    <Container>
      <BarbecueDetails date={date} setDate={setDate} />
    </Container>
  );
};

export default SideBar;
