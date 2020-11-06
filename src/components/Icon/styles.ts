import { transparentize } from 'polished';
import styled from 'styled-components';

interface Props {
  color: string;
}

export const Container = styled.button<Props>`
  width: 100%;

  background: #fefefe;
  border: 2px solid ${props => props.color};
  border-radius: 50%;
  padding: 12px 8px;
  box-shadow: 5px 7px 9px 0px rgba(175, 175, 175, 0.4),
    -4px -3px 7px 0px rgba(175, 175, 175, 0.4);

  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => transparentize(0.9, props.color)};
  }
`;
