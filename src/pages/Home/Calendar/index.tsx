import React, { useCallback, useEffect, useState } from 'react';

import api from '../../../service/api';
import BarbecuePostIt from './BarbecuePostIt';

import Controller from './Controller';

import { Container, CalendarWrapper } from './styles';

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

interface Props {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const Calendar: React.FC<Props> = ({ setDate }) => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const [monthDays, setMonthDays] = useState<CalendarDay[]>([]);

  const getMonthBarbecue = useCallback(async () => {
    const getMonthCalendar = await api.get(
      `/barbecue?month=${month}&year=${year}`,
    );
    setMonthDays(getMonthCalendar.data);
  }, [month, year]);

  useEffect(() => {
    getMonthBarbecue();
  }, [getMonthBarbecue]);

  return (
    <Container>
      <Controller
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />
      <CalendarWrapper>
        {monthDays.map(day => {
          return day.barbecue ? (
            <BarbecuePostIt barbecue={day.barbecue} setDate={setDate} />
          ) : (
            <li>{day.isDateAvailable ? 'disponível' : 'no passado'}</li>
          );
        })}
      </CalendarWrapper>
    </Container>
  );
};

export default Calendar;
