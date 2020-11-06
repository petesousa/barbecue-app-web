import { useField } from '@unform/core';
import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  type: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const HourSelect: React.FC<SelectProps> = ({ name, type, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const hours = [12, 15, 18, 19, 20, 21];
  const prices = [10, 20, 30, 40, 50];

  let items: number[];
  let prefix = '';
  let suffix = '';

  if (type === 'hours') {
    items = hours;
    suffix = 'h';
  } else {
    prefix = 'R$';
    items = prices;
  }

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <select ref={selectRef} {...rest}>
        {items.map(item => (
          <option value={item}>{`${prefix}${item}${suffix}`}</option>
        ))}
      </select>
    </Container>
  );
};

export default HourSelect;
