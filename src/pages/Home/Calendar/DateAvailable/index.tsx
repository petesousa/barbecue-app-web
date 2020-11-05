import React from 'react';

import { Container } from './styles';

interface Props {
  day: number;
  month: number;
  year: number;
  setDisplayDate(date: Date): void;
}

const DateAvailabe: React.FC<Props> = ({
  day,
  month,
  year,
  setDisplayDate,
}) => {
  const dateString = new Date(year, month - 1, day);

  return (
    <Container onClick={() => setDisplayDate(dateString)}>
      {`${day}/${month}/${year}`}
    </Container>
  );
};

export default DateAvailabe;
