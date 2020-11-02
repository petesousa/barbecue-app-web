import React, { createContext, useCallback, useState } from 'react';

import api from '../service/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInResponseWrapper {
  token: string;
  user: object;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextWrapper {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextWrapper>(
  {} as AuthContextWrapper,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@BarbecueApp:token');
    const user = localStorage.getItem('@BarbecueApp:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post<SignInResponseWrapper>('session', {
      username,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@BarbecueApp:token', token);
    localStorage.setItem('@BarbecueApp:user', JSON.stringify(user));

    setData({ token, user });
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
