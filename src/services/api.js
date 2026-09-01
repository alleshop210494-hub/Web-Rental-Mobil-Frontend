// src/services/api.js
import axios from 'axios';

const getBaseUrl = () => {
  const hostname = window.location.hostname;
  if (hostname.includes('webcontainer.io') || hostname.includes('stackblitz')) {
    return window.location.origin.replace('5173', '3000') + '/api';
  }
  return 'http://localhost:3000/api';
};

const API = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const customError = {
      message: error.response?.data?.message || 'Terjadi kesalahan pada jaringan atau server',
      statusCode: error.response?.status || 500
    };
    return Promise.reject(customError);
  }
);

export default API;