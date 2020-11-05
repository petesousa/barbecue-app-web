import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${transparentize(0.1, 'orange')};
  &:hover {
    background: orange;
  }
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
