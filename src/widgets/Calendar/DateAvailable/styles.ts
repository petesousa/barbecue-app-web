import { shade, transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${transparentize(0.8, '#D7F171')};
  border: 2px solid ${transparentize(0.4, '#D7F171')};
  &:hover {
    background: ${transparentize(0.4, '#D7F171')};
  }
  cursor: pointer;
  color: ${shade(0.4, '#d7f171')};

  display: flex;
  align-items: center;
  justify-content: center;
`;
