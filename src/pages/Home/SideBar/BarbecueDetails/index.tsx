import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../../service/api';
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

interface Props {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const BarbecueDetails: React.FC<Props> = ({ date, setDate }) => {
  const [barbecue, setBarbecue] = useState<BarbecueDetailsWrapper | undefined>(
    undefined,
  );

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = String(date.getFullYear());
  const dateString = `${year}-${month}-${day}`;

  const getBarbecueDetails = useCallback(async () => {
    const getDetails = await api.get(`/barbecue/${dateString}`);
    // const getDetails = await api.get(`/barbecue/2020-11-30`);
    console.log(getDetails);
    setBarbecue(getDetails.data);
  }, [dateString]);

  const handleRefresh = useCallback(async () => {
    const getDetails = await api.get(`/barbecue/${dateString}`);
    // const getDetails = await api.get(`/barbecue/2020-11-30`);
    console.log(getDetails);
    setBarbecue(getDetails.data);
  }, [dateString]);

  useEffect(() => {
    getBarbecueDetails();
  }, [getBarbecueDetails]);

  return (
    <Container>
      {barbecue && (
        <Barbecue
          barbecue={barbecue}
          handleRefresh={handleRefresh}
          setDate={setDate}
        />
      )}
    </Container>
  );
};

export default BarbecueDetails;
