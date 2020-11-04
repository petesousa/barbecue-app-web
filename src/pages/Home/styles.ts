import styled from 'styled-components';
import signInBackgroundImage from '../../assets/barbecue-image-3.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  /* background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover; */

  background: #eee;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  /* background: red; */
  height: calc(100vh - 52px);
  overflow: hidden;
`;
