import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../service/api';
import UserBar from './UserBar';

import { Container } from './styles';
import BarbecueDetails from './BarbecueDetails';

interface Props {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const SideBar: React.FC<Props> = ({ date, setDate }) => {
  return (
    <Container>
      <UserBar />

      <BarbecueDetails date={date} setDate={setDate} />
    </Container>
  );
};

export default SideBar;
