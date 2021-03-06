import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { FaClock, FaCocktail, FaDrumstickBite } from 'react-icons/fa';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Selectors } from './styles';
import api from '../../service/api';
import { useDate } from '../../hooks/date';
import HourSelect from './HourSelect';

interface CreateBarbecueFormData {
  title: string;
  description: string;
  mealPrice: number;
  drinksPrice: number;
  hour: number;
}

interface Props {
  handleRefresh(): void;
}

const CreateBarbecueForm: React.FC<Props> = ({ handleRefresh }) => {
  const createBarbecueFormRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { content, setDisplayMonth } = useDate();

  const handleSubmit = useCallback(
    async (data: CreateBarbecueFormData) => {
      try {
        createBarbecueFormRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Faltou o nome!').max(48),
          description: Yup.string()
            .required('O que vai rolar no churras?')
            .max(144),
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
        handleRefresh();
        setDisplayMonth(
          content.date.getMonth() + 1,
          content.date.getFullYear(),
        );
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
    [addToast, content.date, handleRefresh, setDisplayMonth],
  );

  return (
    <Container>
      <Form ref={createBarbecueFormRef} onSubmit={handleSubmit}>
        <h1>{content.date.toLocaleDateString('pt-BR')}</h1>
        <h4>Não tem churras marcado nessa data... bora marcar um?!?</h4>
        <Input name="title" placeholder="Como você quer chamar o churras?" />
        <Input name="description" placeholder="O que vai rolar?" />
        <Selectors>
          <span>
            <FaClock size={36} color="#ccc" />
          </span>
          <span>
            <FaDrumstickBite size={36} color="#ccc" />
          </span>
          <span>
            <FaCocktail size={36} color="#ccc" />
          </span>
        </Selectors>
        <Selectors>
          <HourSelect
            name="hour"
            type="hours"
            placeholder="Que horas vai ser??"
          />
          <HourSelect
            name="drinksPrice"
            type="price"
            placeholder="Quanto para bebida?"
          />
          <HourSelect
            name="mealPrice"
            type="price"
            placeholder="Quanto para comida?"
          />
        </Selectors>

        <Button type="submit">Marcar Churras!</Button>
      </Form>
    </Container>
  );
};

export default CreateBarbecueForm;
