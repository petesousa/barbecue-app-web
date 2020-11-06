import React, { useCallback, useEffect, useState } from 'react';

import { endOfDay } from 'date-fns/esm';
import api from '../../service/api';
import BarbecuePostIt from './BarbecuePostIt';

import Controller from './Controller';
import DateAvailable from './DateAvailable';

import {
  Container,
  CalendarWrapper,
  DateUnavailable,
  WeekDay,
  Blank,
} from './styles';
import { useDate } from '../../hooks/date';

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

  const dateToGet = endOfDay(new Date(year, month - 1, 1));
  const weekDayToStart = dateToGet.getDay();
  const blanks = Array.from({ length: 6 - weekDayToStart });

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
        {['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'].map(weekDay => (
          <WeekDay>{weekDay}</WeekDay>
        ))}
        {blanks.map(() => {
          return <Blank />;
        })}
        {monthDays.map(day => {
          if (day.barbecue) {
            return (
              <BarbecuePostIt key={day.barbecue.id} barbecue={day.barbecue} />
            );
          }

          if (day.isDateAvailable) {
            return (
              <DateAvailable
                day={day.day}
                month={month}
                year={year}
                setDisplayDate={setDisplayDate}
              />
            );
          }

          return (
            <DateUnavailable key={day.day}>
              {`${day.day}/${month}/${year}`}
            </DateUnavailable>
          );
        })}
      </CalendarWrapper>
    </Container>
  );
};

export default Calendar;
