import React, { useCallback } from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../../../hooks/auth';

import { useToast } from '../../../../hooks/toast';

import { Container } from './styles';

const UserBar: React.FC = () => {
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
      <FiPower size={20} onClick={handleLogout} />
    </Container>
  );
};

export default UserBar;
