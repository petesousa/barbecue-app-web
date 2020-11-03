import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../service/api';

interface User {
  id: string;
  username: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInResponseWrapper {
  token: string;
  user: User;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextWrapper {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextWrapper>({} as AuthContextWrapper);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@BarbecueApp:token');
    const user = localStorage.getItem('@BarbecueApp:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

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

  const signOut = useCallback(() => {
    localStorage.removeItem('@BarbecueApp:token');
    localStorage.removeItem('@BarbecueApp:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextWrapper {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
