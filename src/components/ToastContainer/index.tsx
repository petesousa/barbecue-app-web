import React from 'react';

import { ToastMessageWrapper } from '../../hooks/toast';

import Toast from './Toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessageWrapper[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
