import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Controller = styled.div`
  background: coral;
  height: 60px;
`;

export const CalendarWrapper = styled.ul`
  flex: 1;
  background: teal;

  height: 100%;
  padding: 14px;
  /* overflow: scroll; */

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 7px;

  li {
    background: #fff;
    padding: 12px;

    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;
