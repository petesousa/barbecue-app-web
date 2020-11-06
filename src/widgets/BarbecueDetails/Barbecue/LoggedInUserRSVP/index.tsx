import React, { useCallback, useState } from 'react';

import Icon from '../../../../components/Icon';
import { useToast } from '../../../../hooks/toast';
import api from '../../../../service/api';

import { Container, ToggleButton } from './styles';

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

  const { addToast } = useToast();

  const handleCancelRSVP = useCallback(async () => {
    try {
      await api.delete(`/barbecue-rsvp/${userRSVP.id}`);
      addToast({
        type: 'success',
        title: 'Foi! Operação concluída :)',
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
  }, [userRSVP.id, handleRefresh, addToast]);

  const handleChangeRSVPWillEat = useCallback(async () => {
    try {
      await api.put(`/barbecue-rsvp/${userRSVP.id}/meal`);
      addToast({
        type: 'success',
        title: 'Foi! Operação concluída :)',
      });
      setWillEat(!willEat);
      handleRefresh();
    } catch (err) {
      const { message } = JSON.parse(err.request.response);
      addToast({
        type: 'error',
        title: 'Falha na operação',
        description: message,
      });
    }
  }, [willEat, userRSVP.id, handleRefresh, addToast]);

  const handleChangeRSVPWillDrink = useCallback(async () => {
    try {
      await api.put(`/barbecue-rsvp/${userRSVP.id}/drinks`);
      addToast({
        type: 'success',
        title: 'Foi! Operação concluída :)',
      });
      setWillDrink(!willDrink);
      handleRefresh();
    } catch (err) {
      const { message } = JSON.parse(err.request.response);
      addToast({
        type: 'error',
        title: 'Falha na operação',
        description: message,
      });
    }
  }, [willDrink, userRSVP.id, handleRefresh, addToast]);

  const handleChangeRSVPHasPaid = useCallback(async () => {
    try {
      await api.put(`/barbecue-rsvp/${userRSVP.id}/paid`);
      addToast({
        type: 'success',
        title: 'Foi! Operação concluída :)',
      });
      setHasPaid(!hasPaid);
      handleRefresh();
    } catch (err) {
      const { message } = JSON.parse(err.request.response);
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
        <ToggleButton>
          <Icon
            name="user"
            size={32}
            color="#4791db"
            onClick={handleCancelRSVP}
          />
          <h5>
            <span>Você vai</span>
            <span>
              <button type="button" onClick={handleCancelRSVP}>
                não vou mais
              </button>
            </span>
          </h5>
        </ToggleButton>
      )}
      {willEat ? (
        <ToggleButton>
          <Icon
            name="food"
            size={32}
            color="#ffb74d"
            onClick={handleChangeRSVPWillEat}
          />
          <h5>Vai comer?</h5>
        </ToggleButton>
      ) : (
        <ToggleButton>
          <Icon
            name="food"
            size={32}
            color="#ddd"
            onClick={handleChangeRSVPWillEat}
          />

          <h5>Vai comer?</h5>
        </ToggleButton>
      )}
      {willDrink ? (
        <ToggleButton>
          <Icon
            name="drinks"
            size={32}
            color="#e33371"
            onClick={handleChangeRSVPWillDrink}
          />

          <h5>Vai beber?</h5>
        </ToggleButton>
      ) : (
        <ToggleButton>
          <Icon
            name="drinks"
            size={32}
            color="#ddd"
            onClick={handleChangeRSVPWillDrink}
          />

          <h5>Vai beber?</h5>
        </ToggleButton>
      )}
      {hasPaid ? (
        <ToggleButton>
          <Icon
            name="dollar"
            size={32}
            color="#81c784"
            onClick={handleChangeRSVPHasPaid}
          />
          <h5>Você já pagou!</h5>
        </ToggleButton>
      ) : (
        <ToggleButton>
          <Icon
            name="dollar"
            size={32}
            color="#ddd"
            onClick={handleChangeRSVPHasPaid}
          />
          <h5>Você ainda não pagou</h5>
        </ToggleButton>
      )}
    </Container>
  );
};

export default LoggedInUserRSVP;
