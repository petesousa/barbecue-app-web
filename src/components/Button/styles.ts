import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  color: #ffcc00;
  background: #282828;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 28px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#565656')};
  }
`;
