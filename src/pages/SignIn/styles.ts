import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImage from '../../assets/barbecue-image-3.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  place-content: center;

  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

  width: 100%;
  max-width: 1080px;

  background: rgba(255, 255, 255, 0.5);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 25%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.5) 75%,
    rgba(255, 255, 255, 0) 100%
  );

  img {
    width: 86px;
    height: 86px;
  }

  form {
    margin: 28px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 28px;
      font-weight: bold;
      font-size: 28px;
    }
  }
`;
