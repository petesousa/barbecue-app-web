import React, { SetStateAction } from 'react';
import { FaCloudMeatball, FaCocktail, FaDrumstickBite } from 'react-icons/fa';
import { addHours } from 'date-fns';
import { number } from 'yup';
import LoggedInUserRSVP from './LoggedInUserRSVP';
import OtherUsers from './OtherUsers';
import RSVPList from './RSVPList';

import { Container, PriceDetails } from './styles';

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
  barbecue: BarbecueDetailsWrapper;
  handleRefresh(): void;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const Barbecue: React.FC<Props> = ({ barbecue, handleRefresh, setDate }) => {
  const date = addHours(new Date(barbecue.date), 3);

  let totalInvited = 0;
  if (barbecue.rsvp) {
    const { rsvpProgress } = barbecue.rsvp;
    const { rsvp, noRSVP } = rsvpProgress;
    totalInvited = rsvp + noRSVP;
  }

  return (
    <Container>
      <h1>{barbecue.title}</h1>
      <h3>
        {`${date.toLocaleDateString('pt-BR', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          weekday: 'short',
        })}, às ${barbecue.hour}h`}
      </h3>
      <h4>{`Organizado por ${barbecue.organizer}`}</h4>
      <p>{barbecue.description}</p>

      <PriceDetails>
        <div>
          <FaDrumstickBite size={32} />
          {`R$${barbecue.mealPrice}`}
        </div>

        <div>
          <FaCocktail size={32} />
          {`R$${barbecue.drinksPrice}`}
        </div>
      </PriceDetails>

      {barbecue.rsvp && (
        <>
          <div>
            {`${barbecue.rsvp?.rsvpProgress?.rsvp} de ${totalInvited} confirmados`}
          </div>

          <div>
            {`R$${barbecue.rsvp?.budgetProgress?.paid} de R$${barbecue.rsvp?.budgetProgress?.confirmed} arrecadados`}
          </div>

          {barbecue.rsvp?.loggedInUserRSVP && (
            <LoggedInUserRSVP
              userRSVP={barbecue.rsvp.loggedInUserRSVP}
              handleRefresh={handleRefresh}
            />
          )}

          {barbecue.rsvp?.rsvpList && (
            <RSVPList rsvpList={barbecue.rsvp.rsvpList} />
          )}

          {barbecue.rsvp?.otherUsers && (
            <OtherUsers otherUsers={barbecue.rsvp.otherUsers} />
          )}
        </>
      )}
    </Container>
  );
};

export default Barbecue;
