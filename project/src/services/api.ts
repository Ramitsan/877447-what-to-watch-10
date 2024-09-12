import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://10.react.htmlacademy.pro/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  //обновляем config для работы с токеном
  //достаем токен из localStorage, создаем заголовок 'x-token' и записываем в него токен
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if(token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  return api;
};

