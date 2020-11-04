import React from 'react';

import { AuthProvider } from './auth';
import { DateProvider } from './date';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <DateProvider>{children}</DateProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
