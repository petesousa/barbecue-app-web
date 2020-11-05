import React, { useCallback, useState } from 'react';
import {
  FaCocktail,
  FaDrumstickBite,
  FaTimes,
  FaUserTimes,
} from 'react-icons/fa';
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
  const [isGoing] = useState(userRSVP.rsvp);
  const [willEat, setWillEat] = useState(userRSVP.willEat);
  const [willDrink, setWillDrink] = useState(userRSVP.willDrink);
  const [hasPaid, setHasPaid] = useState(userRSVP.hasPaid);

  console.log(hasPaid);

  const { addToast } = useToast();

  const handleCancelRSVP = useCallback(async () => {
    try {
      await api.delete(`/barbecue-rsvp/${userRSVP.id}`);
      handleRefresh();
    } catch (err) {
      const { status, message } = JSON.parse(err.request.response);
      addToast({
        type: 'error',
        title: 'Falha na operação',
        description: message,
      });
    }
  }, [willEat, userRSVP.id, handleRefresh]);

  const handleChangeRSVPWillEat = useCallback(async () => {
    try {
      await api.put(`/barbecue-rsvp/${userRSVP.id}/meal`);
      setWillEat(!willEat);
      handleRefresh();
    } catch (err) {
      const { status, message } = JSON.parse(err.request.response);
      addToast({
        type: 'error',
        title: 'Falha na operação',
        description: message,
      });
    }
  }, [willEat, userRSVP.id, handleRefresh]);

  const handleChangeRSVPWillDrink = useCallback(async () => {
    try {
      await api.put(`/barbecue-rsvp/${userRSVP.id}/drinks`);
      setWillDrink(!willDrink);
      handleRefresh();
    } catch (err) {
      const { status, message } = JSON.parse(err.request.response);
      addToast({
        type: 'error',
        title: 'Falha na operação',
        description: message,
      });
    }
  }, [willDrink, userRSVP.id, handleRefresh]);

  const handleChangeRSVPHasPaid = useCallback(async () => {
    try {
      await api.put(`/barbecue-rsvp/${userRSVP.id}/paid`);
      setHasPaid(!hasPaid);
      handleRefresh();
    } catch (err) {
      const { status, message } = JSON.parse(err.request.response);
      addToast({
        type: 'error',
        title: 'Falha na operação',
        description: message,
      });
    }
  }, [hasPaid, userRSVP.id, handleRefresh, addToast]);

  return (
    <Container>
      {isGoing && (
        <div>
          <FiUserCheck size={36} color="#20a020" />
          <h5>
            <span>Você vai</span>
            <span>
              <button type="button" onClick={handleCancelRSVP}>
                não vou mais
              </button>
            </span>
          </h5>
        </div>
      )}
      {willEat ? (
        <div>
          <FaDrumstickBite
            size={36}
            color="#ffcc00"
            onClick={handleChangeRSVPWillEat}
          />
          <h5>Vai comer?</h5>
        </div>
      ) : (
        <div>
          <FaDrumstickBite
            size={36}
            color="#ddd"
            onClick={handleChangeRSVPWillEat}
          />

          <h5>Vai comer?</h5>
        </div>
      )}
      {willDrink ? (
        <div>
          <FaCocktail
            size={36}
            color="#ff5500"
            onClick={handleChangeRSVPWillDrink}
          />

          <h5>Vai beber?</h5>
        </div>
      ) : (
        <div>
          <FaCocktail
            size={36}
            color="#ddd"
            onClick={handleChangeRSVPWillDrink}
          />

          <h5>Vai beber?</h5>
        </div>
      )}
      {hasPaid ? (
        <div>
          <FiDollarSign
            size={36}
            color="#20a020"
            onClick={handleChangeRSVPHasPaid}
          />
          <h5>Você já pagou!</h5>
        </div>
      ) : (
        <div>
          <FiDollarSign
            size={36}
            color="#ddd"
            onClick={handleChangeRSVPHasPaid}
          />
          <h5>Você ainda não pagou :B</h5>
        </div>
      )}
    </Container>
  );
};

export default LoggedInUserRSVP;
