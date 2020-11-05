import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${transparentize(0.8, '#b1c1d0')};
  border: 2px solid #b1c1d0;
  &:hover {
    background: ${transparentize(0.4, '#b1c1d0')};
  }
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
