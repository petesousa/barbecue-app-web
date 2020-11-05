import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  hasContent: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 3px solid #fff;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #ff9900;
      border-color: #ff9900;
    `}

  ${props =>
    props.hasContent &&
    css`
      color: #ff9900;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 14px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 14px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
