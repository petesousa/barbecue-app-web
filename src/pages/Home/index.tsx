import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/auth';

import { useToast } from '../../hooks/toast';

import { Container } from './styles';

const Home: React.FC = () => {
  const { signOut } = useAuth();
  const { addToast } = useToast();

  const handleLogout = useCallback(() => {
    addToast({
      type: 'success',
      title: 'Logout realizado com sucesso!',
      description: 'Volte sempre :)',
    });
    signOut();
  }, [addToast, signOut]);

  return (
    <Container>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </Container>
  );
};

export default Home;
