import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background: #312e38;
  /* background: ${lighten(0.5, 'orange')}; */
`;

export const Body = styled.div`
  flex: 1;
  display: flex;

  height: calc(100vh - 52px);
  overflow: hidden;
`;
