import { createContext, useEffect, useState } from 'react';
import Router from 'next/router';

import { setCookie } from 'nookies';

import api, { isAxiosError } from '../services/api';

import { AuthContextData, AuthCredentials, InvestorData } from '../types/Auth';

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }) {
  const [investor, setInvestor] = useState({} as InvestorData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = async ({ username, password }: AuthCredentials) => {
    try {
      const response = await api.post('http://localhost:8000/authenticate', {
        username: username,
        password: password,
      });

      const { token, investor } = response.data;

      setCookie(undefined, '@ma.token', token, {
        maxAges: 60 * 60 * 24 * 7, // 7 dias
        path: '/',
      });

      setInvestor(investor);
      setIsAuthenticated(true);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      Router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  const verifyAuthentication = async () => {
    try {
      const response = await api.get('/investor/me');

      const { investor } = response.data;

      setInvestor(investor);
      setIsAuthenticated(true);
    } catch (err) {
      if (isAxiosError(err) && err.response.status === 401) {
        setIsAuthenticated(false);
        Router.push('/login');
      }
    }
  };

  useEffect(() => {
    verifyAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, investor }}>
      {children}
    </AuthContext.Provider>
  );
}
