import React from 'react';

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
}

const RSVPList: React.FC<Props> = ({ rsvpList }) => {
  return (
    <Container>
      <h3>Confirmados</h3>
      {rsvpList.map(rsvp => {
        return <h5 key={rsvp.id}>{rsvp.user.username}</h5>;
      })}
    </Container>
  );
};

export default RSVPList;
