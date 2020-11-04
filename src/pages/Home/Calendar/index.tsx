/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useState } from 'react';

import api from '../../../service/api';
import BarbecuePostIt from './BarbecuePostIt';

import Controller from './Controller';

import { Container, CalendarWrapper } from './styles';
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

interface CalendarDay {
  day: number;
  barbecue: Barbecue;
  isDateAvailable: boolean;
}

const Calendar: React.FC = () => {
  const { content, setDisplayDate } = useDate();
  const { month, year } = content;
  const [monthDays, setMonthDays] = useState<CalendarDay[]>([]);

  const getMonthBarbecue = useCallback(async () => {
    const getMonthCalendar = await api.get(
      `/barbecue?month=${content.month}&year=${content.year}`,
    );
    setMonthDays(getMonthCalendar.data);
  }, [content]);

  useEffect(() => {
    getMonthBarbecue();
  }, [getMonthBarbecue]);

  return (
    <Container>
      <Controller />
      <CalendarWrapper>
        {monthDays.map(day => {
          if (day.barbecue) {
            return (
              <BarbecuePostIt key={day.barbecue.id} barbecue={day.barbecue} />
            );
          }

          if (day.isDateAvailable) {
            const dateString = new Date(year, month, day.day);
            return (
              <li key={day.day} onClick={() => setDisplayDate(dateString)}>
                {`${day.day}/${month}/${year}`}
              </li>
            );
          }

          return <li key={day.day}>{`${day.day}/${month}/${year}`}</li>;
        })}
      </CalendarWrapper>
    </Container>
  );
};

export default Calendar;
