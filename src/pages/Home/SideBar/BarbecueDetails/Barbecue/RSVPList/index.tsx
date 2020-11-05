import React, { useCallback, useState } from 'react';
import { FaCocktail, FaDrumstickBite } from 'react-icons/fa';
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
  rsvpList: BarbecueRSVPDetailsDTO[];
  handleRefresh(): void;
}

const RSVPList: React.FC<Props> = ({ rsvpList, handleRefresh }) => {
  const { addToast } = useToast();
  const handleChangeRSVPHasPaid = useCallback(
    async (id: string) => {
      try {
        await api.put(`/barbecue-rsvp/${id}/paid`);

        handleRefresh();
      } catch (err) {
        const { status, message } = JSON.parse(err.request.response);
        addToast({
          type: 'error',
          title: 'Falha na operação',
          description: message,
        });
      }
    },
    [handleRefresh, addToast],
  );

  return (
    <Container>
      <h3>Confirmados</h3>
      {rsvpList.map(rsvp => {
        return (
          <div key={rsvp.id}>
            <h4>{rsvp.user.username}</h4>
            <span>
              <FiUserCheck size={24} color="#20a020" />
            </span>
            <span>
              {rsvp.willEat && <FaDrumstickBite size={24} color="#ffcc00" />}
              {!rsvp.willEat && <FaDrumstickBite size={24} color="#eee" />}
            </span>
            <span>
              {rsvp.willDrink && <FaCocktail size={24} color="#ff5500" />}
              {!rsvp.willDrink && <FaCocktail size={24} color="#eee" />}
            </span>
            <span>
              {rsvp.hasPaid && (
                <FiDollarSign
                  size={24}
                  color="#20a020"
                  onClick={() => handleChangeRSVPHasPaid(rsvp.id)}
                />
              )}
              {!rsvp.hasPaid && (
                <FiDollarSign
                  size={24}
                  color="#eee"
                  onClick={() => handleChangeRSVPHasPaid(rsvp.id)}
                />
              )}
            </span>
          </div>
        );
      })}
    </Container>
  );
};

export default RSVPList;
