import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CalendarWrapper = styled.ul`
  flex: 1;

  height: 100%;
  padding: 0 24px 24px 24px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 7px;
  grid-template-rows: 30px auto;

  li {
    padding: 10px;
  }
`;

export const DateUnavailable = styled.li`
  background: ${transparentize(0.9, '#414350')};
  color: ${transparentize(0.3, '#414350')};
  cursor: not-allowed;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const WeekDay = styled.li`
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Blank = styled.li`
  color: transparent;
`;
