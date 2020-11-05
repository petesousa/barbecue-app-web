import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  width: 100%;
  padding: 22px;

  h1 {
    text-align: center;
  }

  h4 {
    margin: 14px 0;
    text-align: center;
  }
`;

export const Selectors = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    & + div {
      margin-left: 10px;
    }
  }

  span {
    padding: 16px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
