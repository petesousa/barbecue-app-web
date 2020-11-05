import React, { useCallback } from 'react';
import Button from '../../../../components/Button';
import { useToast } from '../../../../hooks/toast';
import api from '../../../../service/api';

import { Container } from './styles';

interface Props {
  barbecueId: string;
  handleRefresh(): void;
}

const LoggedInUserCreateRSVP: React.FC<Props> = ({
  barbecueId,
  handleRefresh,
}) => {
  const { addToast } = useToast();

  const handleCreateRSVP = useCallback(async () => {
    try {
      await api.post(`/barbecue-rsvp`, {
        barbecueId,
        willDrink: false,
        willEat: false,
      });
      addToast({
        type: 'success',
        title: 'Feito!',
        description: 'Presença confirmada com sucesso',
      });
      handleRefresh();
    } catch (err) {
      const { message } = JSON.parse(err.request.response);
      addToast({
        type: 'error',
        title: 'Falha na operação',
        description: message,
      });
    }
  }, [barbecueId, addToast, handleRefresh]);

  return (
    <Container>
      <Button onClick={handleCreateRSVP}>Confirmar Presença</Button>
    </Container>
  );
};

export default LoggedInUserCreateRSVP;
