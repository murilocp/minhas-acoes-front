import axios from 'axios';
import { parseCookies } from 'nookies';

export const getToken = () => {
  const { '@ma.token': token } = parseCookies();

  return token;
};

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

api.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const isAxiosError = e => axios.isAxiosError(e);

export default api;
