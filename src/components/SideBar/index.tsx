import React from 'react';

import BarbecueDetails from '../../widgets/BarbecueDetails';
import { Container } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <BarbecueDetails />
    </Container>
  );
};

export default SideBar;
