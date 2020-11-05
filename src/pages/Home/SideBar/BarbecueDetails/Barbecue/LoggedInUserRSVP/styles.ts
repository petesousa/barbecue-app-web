import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    height: 100%;
    width: 25%;

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

    & + div {
      svg {
        cursor: pointer;
      }
    }
  }
`;
