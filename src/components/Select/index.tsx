import { useField } from '@unform/core';
import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  items: number[];
  icon?: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<SelectProps> = ({
  name,
  items,
  icon: Icon,
  ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
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
          <option>{item}</option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
