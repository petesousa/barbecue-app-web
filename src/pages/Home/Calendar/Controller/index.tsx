import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { Container } from './styles';

interface Props {
  month: number;
  year: number;
  setMonth: React.Dispatch<SetStateAction<number>>;
  setYear: React.Dispatch<SetStateAction<number>>;
}

const Controller: React.FC<Props> = ({ month, year, setMonth, setYear }) => {
  const handleGoBack = useCallback(() => {
    if (month >= 1) {
      setMonth(month - 1);
    } else {
      setYear(year - 1);
      setMonth(12);
    }
  }, [month, setMonth, year, setYear]);

  const handleGoForth = useCallback(() => {
    if (month < 12) {
      setMonth(month + 1);
    } else {
      setYear(year + 1);
      setMonth(1);
    }
  }, [month, setMonth, year, setYear]);

  return (
    <Container>
      <FiArrowLeftCircle size={24} onClick={handleGoBack} />
      <span>{`${month} / ${year}`}</span>
      <FiArrowRightCircle size={24} onClick={handleGoForth} />
    </Container>
  );
};

export default Controller;
