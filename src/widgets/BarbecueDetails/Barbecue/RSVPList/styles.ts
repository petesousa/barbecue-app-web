import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    color: #282828;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: 13px;
      width: 160px;
      color: #555;
    }
  }
`;

export const SetHasPaid = styled.span`
  cursor: pointer;
`;
