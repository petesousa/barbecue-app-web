import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

export const ToggleButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  min-height: 160px;

  h5 {
    margin-top: 14px;
    height: 36px;

    display: flex;
    flex-direction: column;
    span {
      button {
        border: none;
        background: transparent;
        color: #ff5500;
        margin-top: 7px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
