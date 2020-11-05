import styled from 'styled-components';

export const Container = styled.div`
  /* background: orange; */
  background: #454e5e;
  color: #fff;
  padding: 12px;

  h2,
  h3 {
    margin-top: 14px;
  }

  p {
    margin: 14px 0;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const PriceDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
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
