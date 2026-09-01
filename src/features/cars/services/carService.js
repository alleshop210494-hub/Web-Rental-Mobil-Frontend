// src/features/cars/services/carService.js
import API from '../../../services/api';

export const carService = {
  async getAllCars() {
    try {
      const response = await API.get('/cars');
      return response.data; // Mengembalikan array data mobil
    } catch (error) {
      throw error;
    }
  },

  async getCarDetail(id) {
    try {
      const response = await API.get(`/cars/${id}`);
      return response.data; // Mengembalikan detail mobil spesifik
    } catch (error) {
      throw error;
    }
  }
};