// src/features/cars/services/carService.js
import API from '../../../services/api';

const fallbackCars = [
  {
    id: '1',
    name: 'Toyota Avanza',
    category: 'MPV',
    pricePerDay: 350000,
    seats: 7,
    transmission: 'Manual',
    image: '/images/avanza.jpg',
    description: 'Mobil keluarga terfavorit, irit bahan bakar, dan sangat nyaman untuk perjalanan dalam maupun luar kota Pontianak.'
  },
  {
    id: '2',
    name: 'Honda Brio',
    category: 'City Car',
    pricePerDay: 300000,
    seats: 5,
    transmission: 'Automatic',
    image: '/images/brio.jpg',
    description: 'Lincah di perkotaan, mudah diparkir, serta hemat bahan bakar untuk mobilitas harian di Pontianak.'
  },
  {
    id: '3',
    name: 'Toyota Innova Reborn',
    category: 'MPV Premium',
    pricePerDay: 600000,
    seats: 7,
    transmission: 'Automatic',
    image: '/images/innova.jpg',
    description: 'Kenyamanan kelas atas untuk perjalanan bisnis maupun liburan keluarga besar dengan kabin yang sangat luas.'
  }
];

export const carService = {
  async getAllCars() {
    try {
      const response = await API.get('/cars');
      const data = response.data || response;
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
      return fallbackCars;
    } catch (error) {
      console.warn('Menggunakan data cadangan lokal:', error.message);
      return fallbackCars;
    }
  },

  async getCarDetail(id) {
    try {
      const response = await API.get(`/cars/${id}`);
      const data = response.data || response;
      return data;
    } catch (error) {
      const found = fallbackCars.find((c) => c.id === id);
      if (found) return found;
      throw error;
    }
  }
};