import styled from 'styled-components';
import signInBackgroundImage from '../../assets/barbecue.png';

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

  background: rgba(255, 255, 255, 0.5);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(215, 215, 215, 0) 0%,
    rgba(215, 215, 215, 0.6) 50%,
    rgba(215, 215, 215, 0) 100%
  );

  img {
    width: 86px;
    height: 86px;
  }

  form {
    width: 340px;
    text-align: center;

    background: #fcfcfc;

    box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.3);
    padding: 24px;
    h1 {
      margin-bottom: 28px;
      font-weight: bold;
      font-size: 28px;
    }
  }
`;
