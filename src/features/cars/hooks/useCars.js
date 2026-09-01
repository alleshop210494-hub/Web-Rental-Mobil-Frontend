// src/features/cars/hooks/useCars.js
import { useState, useEffect } from 'react';
import { carService } from '../services/carService';

export const useCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCars = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await carService.getAllCars();

      let carData = [];
      if (Array.isArray(response)) {
        carData = response;
      } else if (response && Array.isArray(response.data)) {
        carData = response.data;
      } else if (response && response.data && Array.isArray(response.data.data)) {
        carData = response.data.data;
      }

      setCars(carData);
    } catch (err) {
      setError(err.message || 'Gagal memuat katalog mobil');
      setCars([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return {
    cars,
    loading,
    error,
    refetch: fetchCars
  };
};