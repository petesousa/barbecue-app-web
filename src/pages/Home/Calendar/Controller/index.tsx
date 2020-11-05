import React, { useCallback } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { useDate } from '../../../../hooks/date';
import { Container } from './styles';

const Controller: React.FC = () => {
  const { content, setDisplayMonth } = useDate();
  const { month, year } = content;

  const handleGoBack = useCallback(() => {
    if (month > 1) {
      setDisplayMonth(month - 1, year);
    } else {
      setDisplayMonth(12, year - 1);
    }
  }, [month, year, setDisplayMonth]);

  const handleGoForth = useCallback(() => {
    if (month < 12) {
      setDisplayMonth(month + 1, year);
    } else {
      setDisplayMonth(1, year + 1);
    }
  }, [month, year, setDisplayMonth]);

  return (
    <Container>
      <FiArrowLeftCircle size={24} onClick={handleGoBack} />
      <span>{`${month} / ${year}`}</span>
      <FiArrowRightCircle size={24} onClick={handleGoForth} />
    </Container>
  );
};

export default Controller;
