import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { FaCocktail, FaDrumstickBite, FaUserTimes } from 'react-icons/fa';
import { FiDollarSign, FiUserCheck } from 'react-icons/fi';
import { useToast } from '../../../../../../hooks/toast';
import api from '../../../../../../service/api';

import { Container } from './styles';

interface BarbecueRSVPDetailsDTO {
  id: string;
  user: {
    userId: string;
    username: string | undefined;
  };
  barbecueId: string;
  willDrink: boolean;
  willEat: boolean;
  hasPaid: boolean;
  rsvp: boolean;
}

interface Props {
  userRSVP: BarbecueRSVPDetailsDTO;
  handleRefresh(): void;
}

const LoggedInUserRSVP: React.FC<Props> = ({ userRSVP, handleRefresh }) => {
  const [isGoing, setIsGoing] = useState(userRSVP.rsvp);
  const [willEat, setWillEat] = useState(userRSVP.willEat);
  const [willDrink, setWillDrink] = useState(userRSVP.willDrink);
  const [hasPaid, setHasPaid] = useState(userRSVP.hasPaid);

  const { addToast } = useToast();

  const handleChangeRSVPWillEat = useCallback(async () => {
    await api.put(`/barbecue-rsvp/${userRSVP.id}/meal`);
    setWillEat(!willEat);
    handleRefresh();
  }, [willEat, userRSVP.id, handleRefresh]);

  const handleChangeRSVPWillDrink = useCallback(async () => {
    await api.put(`/barbecue-rsvp/${userRSVP.id}/drinks`);
    setWillDrink(!willDrink);
    handleRefresh();
  }, [willDrink, userRSVP.id, handleRefresh]);

  const handleChangeRSVPHasPaid = useCallback(async () => {
    try {
      await api.put(`/barbecue-rsvp/${userRSVP.id}/paid`);
      setHasPaid(!hasPaid);
      handleRefresh();
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha na operação',
        description:
          'Somente o organizador do churrasco pode alterar essa informação',
      });
    }
  }, [hasPaid, userRSVP.id, handleRefresh]);

  return (
    <Container>
      <h5>
        {isGoing ? (
          <FiUserCheck size={36} color="#20a020" />
        ) : (
          <FaUserTimes size={36} color="#ddd" />
        )}
      </h5>
      <h5>
        {willEat ? (
          <FaDrumstickBite
            size={36}
            color="#ffcc00"
            onClick={handleChangeRSVPWillEat}
          />
        ) : (
          <FaDrumstickBite
            size={36}
            color="#ddd"
            onClick={handleChangeRSVPWillEat}
          />
        )}
      </h5>
      <h5>
        {willDrink ? (
          <FaCocktail
            size={36}
            color="#ff5500"
            onClick={handleChangeRSVPWillDrink}
          />
        ) : (
          <FaCocktail
            size={36}
            color="#ddd"
            onClick={handleChangeRSVPWillDrink}
          />
        )}
      </h5>
      <h5>
        {hasPaid ? (
          <FiDollarSign
            size={36}
            color="#20a020"
            onClick={handleChangeRSVPHasPaid}
          />
        ) : (
          <FiDollarSign
            size={36}
            color="#ddd"
            onClick={handleChangeRSVPHasPaid}
          />
        )}
      </h5>
    </Container>
  );
};

export default LoggedInUserRSVP;
