import React, { useCallback, useRef } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

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

        await signIn({ username: data.username, password: data.password });

        addToast({
          type: 'success',
          title: 'Login efetuado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro no login',
          description: 'Não foi possível fazer login com estas credenciais :(',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
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
