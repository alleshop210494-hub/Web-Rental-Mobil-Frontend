// src/services/api.js
import axios from 'axios';

// Sesuaikan baseURL dengan URL backend Anda (misal URL StackBlitz backend atau port lokal)
const API = axios.create({
  baseURL: 'http://localhost:3000/api', // Ubah jika backend berjalan di domain/port lain
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor untuk menangani respons atau error global
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