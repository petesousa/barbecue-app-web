import React from 'react';

import { Container } from './styles';
import BarbecueDetails from './BarbecueDetails';

const SideBar: React.FC = () => {
  return (
    <Container>
      <BarbecueDetails />
    </Container>
  );
};

export default SideBar;
