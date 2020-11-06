import React, { HTMLAttributes } from 'react';
import { FaCocktail, FaDrumstickBite } from 'react-icons/fa';
import { FiDollarSign, FiUserCheck } from 'react-icons/fi';

import { Container } from './styles';

interface IconProps extends HTMLAttributes<HTMLElement> {
  name: string;
  size: number;
  color: string;
  handleAction?(): void;
}

const Icon: React.FC<IconProps> = ({
  name,
  size,
  color,
  handleAction,
  ...rest
}) => {
  const icons = {
    user: 'user',
    food: 'food',
    drinks: 'drinks',
    dollar: 'dollar',
  };
  return (
    <Container color={color} {...rest}>
      {name === icons.user && (
        <FiUserCheck size={size} color={color} onClick={handleAction} />
      )}
      {name === icons.food && (
        <FaDrumstickBite size={size} color={color} onClick={handleAction} />
      )}
      {name === icons.drinks && (
        <FaCocktail size={size} color={color} onClick={handleAction} />
      )}
      {name === icons.dollar && (
        <FiDollarSign size={size} color={color} onClick={handleAction} />
      )}
    </Container>
  );
};

export default Icon;
