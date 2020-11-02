import React, { createContext, useCallback } from 'react';

interface AuthContextWrapper {
  username: string;
  signIn(): void;
}
export const AuthContext = createContext<AuthContextWrapper>(
  {} as AuthContextWrapper,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signIn');
  }, []);
  return (
    <AuthContext.Provider value={{ username: 'pedro.sousa', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
