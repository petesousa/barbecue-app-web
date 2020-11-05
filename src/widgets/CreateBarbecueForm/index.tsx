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

import { Container } from './styles';
import api from '../../service/api';
import { useDate } from '../../hooks/date';

interface CreateBarbecueFormData {
  title: string;
  description: string;
  mealPrice: number;
  drinksPrice: number;
  hour: number;
}

const CreateBarbecueForm: React.FC = () => {
  const createBarbecueFormRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { content } = useDate();

  const handleSubmit = useCallback(
    async (data: CreateBarbecueFormData) => {
      try {
        createBarbecueFormRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Faltou o nome!').max(48),
          description: Yup.string()
            .required('O que vai rolar no churras?')
            .max(144),
          hour: Yup.number()
            .required('Que horas vai ser??')
            .min(12, 'Pelo menos depois do meio dia né ;)')
            .max(22, 'Pode ir até tarde, mas tem que começar antes das 22h ;)'),
          mealPrice: Yup.number()
            .required('Quantos $$ pra comer?')
            .min(0, 'Vai pagar pros convidados irem?')
            .max(50, 'Aloou? Vai ter rodízio de entrecot?'),
          drinksPrice: Yup.number()
            .required('Quantos $$ pra beber?')
            .min(0, 'Mais barato que de graça não dá ;)')
            .max(50, 'Vai ter caipirinha de Absolute??'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/barbecue', {
          date: content.date,
          hour: data.hour,
          title: data.title,
          description: data.description,
          mealPrice: data.mealPrice,
          drinksPrice: data.drinksPrice,
        });

        addToast({
          type: 'success',
          title: 'Agora é só curtir :D!',
          description: 'Seu churras foi marcado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          createBarbecueFormRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro ao marcar o churras',
          description: 'Dá um check nas informações e tenta de novo ;)',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Form ref={createBarbecueFormRef} onSubmit={handleSubmit}>
        <h1>{content.date.toLocaleDateString('pt-BR')}</h1>
        <h4>Não tem churras marcado nessa data... bora marcar um?!?</h4>
        <Input name="title" placeholder="Como você quer chamar o churras?" />
        <Input name="description" placeholder="O que vai rolar?" />
        <Input
          type="number"
          min={0}
          name="hour"
          placeholder="Que horas vai ser??"
        />
        <Input
          type="number"
          name="drinksPrice"
          placeholder="Quanto para bebida?"
        />
        <Input
          type="number"
          name="mealPrice"
          placeholder="Quanto para comida?"
        />

        <Button type="submit">Marcar Churras!</Button>
      </Form>
    </Container>
  );
};

export default CreateBarbecueForm;
