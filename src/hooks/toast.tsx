import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessageWrapper {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextWrapper {
  addToast(message: Omit<ToastMessageWrapper, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextWrapper>(
  {} as ToastContextWrapper,
);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessageWrapper[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessageWrapper, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextWrapper {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
