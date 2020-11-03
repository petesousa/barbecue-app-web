import React, { useCallback, useEffect, useState } from 'react';

import api from '../../../service/api';

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

const Calendar: React.FC = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  console.log(month, year);

  const [monthDays, setMonthDays] = useState<CalendarDay[]>([]);

  const getMonthBarbecue = useCallback(async () => {
    const getMonthCalendar = await api.get(
      `/barbecue?month=${month}&year=${year}`,
    );
    console.log(getMonthCalendar);
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
            <li>
              <div>{day.barbecue?.date}</div>
              <div>{day.barbecue?.title}</div>
              <div>
                {`${day.barbecue?.rsvp?.yes} de ${
                  day.barbecue?.rsvp?.yes + day.barbecue?.rsvp?.no
                }`}
              </div>
              <div>
                {`${day.barbecue?.priceRange?.from} - ${day.barbecue?.priceRange?.to}`}
              </div>
            </li>
          ) : (
            <li>{day.isDateAvailable ? 'disponível' : 'no passado'}</li>
          );
        })}
      </CalendarWrapper>
    </Container>
  );
};

export default Calendar;
