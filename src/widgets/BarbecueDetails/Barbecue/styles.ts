import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* color: #fff; */
  padding: 12px;

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
  }

  p,
  h2,
  h3 {
    margin-top: 7px;
    color: #888;
  }

  h4 {
    font-size: 18px;
    margin-top: 14px;
    font-weight: bold;
  }

  h5 {
    color: #555;
  }
`;

export const PriceDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    color: #555;
    min-height: 64px;

    display: flex;
    align-items: center;

    font-size: 32px;
    font-weight: bold;

    svg {
      margin-right: 7px;
    }
  }
`;

export const RsvpProgress = styled.div`
  font-weight: bold;
  color: #888;

  span {
    font-size: 20px;
    color: #555;
  }
`;
