/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { FiDollarSign, FiUser, FiUserCheck } from 'react-icons/fi';
import { addHours } from 'date-fns';

import { Container, PostItHeader, PostItBody, PostItFooter } from './styles';

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
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const BarbecuePostIt: React.FC<Props> = ({ barbecue, setDate }) => {
  return (
    <Container onClick={() => setDate(addHours(new Date(barbecue.date), 3))}>
      <PostItHeader>{barbecue.date}</PostItHeader>
      <PostItBody>{barbecue.title}</PostItBody>
      <PostItFooter>
        <div>
          <FiUserCheck size={14} />
          {`${barbecue.rsvp?.yes} de ${barbecue.rsvp?.yes + barbecue.rsvp?.no}`}
        </div>
        <div>
          {`$${barbecue.priceRange?.from} - $${barbecue.priceRange?.to}`}
        </div>
      </PostItFooter>
    </Container>
  );
};

export default BarbecuePostIt;
