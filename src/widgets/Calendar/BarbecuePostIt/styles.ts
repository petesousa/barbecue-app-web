import { shade, transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.li`
  background: ${transparentize(0.8, '#f6e4e2')};
  border: 2px solid #f6e4e2;
  &:hover {
    background: ${transparentize(0.4, '#f6e4e2')};
  }
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  color: ${shade(0.4, '#f6e4e2')};
  box-shadow: 1px 2px 3px 0px rgba(125, 125, 125, 0.3);
`;

export const PostItHeader = styled.div``;

export const PostItBody = styled.div``;

export const PostItFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  div {
    text-align: center;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
`;
