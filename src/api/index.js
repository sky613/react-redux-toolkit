import axios from 'axios';

import ListMgt from './listMgt';
/* http 객체 생성 :: axios 모듈 사용 */
export const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const errorHandle = async (error) => {
  const {
    config,
    response: { status, data },
  } = error;

  return Promise.reject(error);
};

const interceptRequest = async (config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers.Authorization = ' 토큰 값';
  return config;
};

const interceptError = async (error) => {
  const {
    config,
    response: { status, data },
  } = error;
  return Promise.reject(error);
};

http.interceptors.request.use(interceptRequest, interceptError);
http.interceptors.response.use((response) => response, errorHandle);

export default {
  ListMgt: ListMgt({ http }),

};
