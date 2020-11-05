import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  color: #ff5500;
  color: #fff;
  background: #232129;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  transition: background-color 0.2s;

  &:hover {
    background: ${transparentize(0.2, '#232129')};
    color: #fff;
  }
`;
