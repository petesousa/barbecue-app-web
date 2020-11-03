import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CalendarWrapper = styled.ul`
  flex: 1;

  height: 100%;
  padding: 14px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 7px;

  li {
    background: #fff;
    padding: 10px;
  }
`;
