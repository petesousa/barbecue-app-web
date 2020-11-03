import React, { useCallback } from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../../hooks/auth';

import { useToast } from '../../../hooks/toast';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
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
      {`Olá ${user.username.replace('.', ' ')}`}
      <button type="button" onClick={handleLogout}>
        <FiPower size={18} />
      </button>
    </Container>
  );
};

export default Header;
