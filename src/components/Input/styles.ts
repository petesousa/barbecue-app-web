import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 16px;
  width: 100%;
  color: #424242;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 14px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #848484;
    }
  }

  svg {
    margin-right: 14px;
    color: #848484;
  }
`;
