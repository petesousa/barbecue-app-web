import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  height: 52px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    /* border: 0;
    background: transparent; */
    padding: 10px;
  }
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  background: red;
  height: calc(100vh - 52px);
  overflow: hidden;
`;

export const BarbecueDetails = styled.div`
  background: orange;
  width: 460px;
`;

export const Calendar = styled.ul`
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
