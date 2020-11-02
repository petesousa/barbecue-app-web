import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo-trinca.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Trinca" />

      <form>
        <h1>Tá por um churras?</h1>
        <Input name="username" icon={FiUser} placeholder="username" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="senha"
        />
        <Button type="submit">Vem!</Button>
      </form>
    </Content>
  </Container>
);

export default SignIn;
