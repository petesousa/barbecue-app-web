import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;

  padding: 24px;
  height: calc(100vh - 52px);
  overflow: hidden;
`;
