import React from 'react';
import { FiUserCheck } from 'react-icons/fi';
import { addHours } from 'date-fns';

import { Container, PostItHeader, PostItBody, PostItFooter } from './styles';
import { useDate } from '../../../hooks/date';

interface Barbecue {
  id: string;
  organizer: string;
  date: Date;
  hour: number;
  title: string;
  priceRange: {
    from: number;
    to: number;
  };
  rsvp: {
    yes: number;
    no: number;
  };
  isOrganizerLoggedIn: boolean;
}

interface Props {
  barbecue: Barbecue;
}

const BarbecuePostIt: React.FC<Props> = ({ barbecue }) => {
  const date = addHours(new Date(barbecue.date), 3);

  const { setDisplayDate } = useDate();

  return (
    <Container onClick={() => setDisplayDate(date)}>
      <PostItHeader>{`${date.toLocaleDateString('pt-BR')}`}</PostItHeader>
      <PostItBody>{barbecue.title}</PostItBody>
      <PostItFooter>
        <div>
          <FiUserCheck size={14} />
          {`${barbecue.rsvp?.yes}`}
        </div>
        <div>
          {`$${barbecue.priceRange?.from} - $${barbecue.priceRange?.to}`}
        </div>
      </PostItFooter>
    </Container>
  );
};

export default BarbecuePostIt;
