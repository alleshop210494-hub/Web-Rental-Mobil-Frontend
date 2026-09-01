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
      setCars(response.data || []);
    } catch (err) {
      setError(err.message || 'Gagal memuat katalog mobil');
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