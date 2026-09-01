// src/features/cars/services/bookingService.js
import API from '../../../services/api';

export const bookingService = {
  async createBooking(bookingData) {
    try {
      const response = await API.post('/bookings', bookingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};