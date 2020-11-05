import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../../hooks/auth';
import { useDate } from '../../../../hooks/date';
import api from '../../../../service/api';
import CreateBarbecueForm from '../../../../widgets/CreateBarbecueForm';
import Barbecue from './Barbecue';

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

interface BarbecueRSVPStatusDTO {
  loggedInUserRSVP: BarbecueRSVPDetailsDTO | undefined;
  rsvpList: BarbecueRSVPDetailsDTO[] | undefined;
  otherUsers: {
    userId: string;
    username: string;
  }[];
  rsvpProgress: {
    rsvp: number;
    noRSVP: number;
  };
  budgetProgress: {
    confirmed: number;
    paid: number;
  };
}

interface BarbecueDetailsWrapper {
  id: string;
  organizerId: string;
  organizer: string | undefined;
  date: Date;
  hour: number;
  title: string;
  description: string;
  mealPrice: number;
  drinksPrice: number;
  rsvp: BarbecueRSVPStatusDTO | undefined;
  isOrganizerLoggedIn: boolean;
}

const BarbecueDetails: React.FC = () => {
  const [barbecue, setBarbecue] = useState<BarbecueDetailsWrapper | undefined>(
    undefined,
  );

  const { content } = useDate();

  const month = String(content.date.getMonth() + 1).padStart(2, '0');
  const day = String(content.date.getDate()).padStart(2, '0');
  const year = String(content.date.getFullYear());
  const dateString = `${year}-${month}-${day}`;

  const getBarbecueDetails = useCallback(async () => {
    try {
      const getDetails = await api.get(`/barbecue/${dateString}`);
      console.log(getDetails.data);
      setBarbecue(getDetails.data);
    } catch (err) {
      console.log(err);
      setBarbecue(undefined);
    }
  }, [dateString]);

  const handleRefresh = useCallback(async () => {
    const getDetails = await api.get(`/barbecue/${dateString}`);

    console.log(getDetails);
    setBarbecue(getDetails.data);
  }, [dateString]);

  useEffect(() => {
    getBarbecueDetails();
  }, [getBarbecueDetails]);

  return (
    <Container>
      {barbecue && (
        <Barbecue barbecue={barbecue} handleRefresh={handleRefresh} />
      )}
      {!barbecue && <CreateBarbecueForm handleRefresh={handleRefresh} />}
    </Container>
  );
};

export default BarbecueDetails;
