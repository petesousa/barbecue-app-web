import styled from 'styled-components';

export const Container = styled.li`
  background: #fff;

  height: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;

  font-size: 14px;
  cursor: pointer;
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
