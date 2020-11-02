import React, { useCallback, useRef, useContext } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import logoImg from '../../assets/logo-trinca.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string()
            .required('Ei, precisamos saber seu username :)')
            .lowercase()
            .trim()
            .max(40),
          password: Yup.string().min(
            6,
            'A senha deve ter pelo menos 8 caracteres',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({ username: data.username, password: data.password });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Trinca" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Tá por um churras?</h1>
          <Input name="username" icon={FiUser} placeholder="username" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="senha"
          />
          <Button type="submit">Vem!</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
