import React from 'react';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Home: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <button type="button" onClick={() => signOut()}>
        Logout
      </button>
    </Container>
  );
};

export default Home;
