import React, { useCallback } from 'react';
import { FaCocktail, FaDrumstickBite, FaUserTimes } from 'react-icons/fa';
import { FiDollarSign } from 'react-icons/fi';
import { useToast } from '../../../../../../hooks/toast';
import api from '../../../../../../service/api';

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
      addToast({
        type: 'error',
        title: 'Falha na operação',
        description: 'Não foi possível confirmar sua presença',
      });
    }
  }, [barbecueId, addToast, handleRefresh]);

  return (
    <Container>
      <h5>
        <FaUserTimes size={36} color="#ddd" onClick={handleCreateRSVP} />
      </h5>
      <h5>
        <FaDrumstickBite size={36} color="#ddd" />
      </h5>
      <h5>
        <FaCocktail size={36} color="#ddd" />
      </h5>
      <h5>
        <FiDollarSign size={36} color="#ddd" />
      </h5>
    </Container>
  );
};

export default LoggedInUserCreateRSVP;
