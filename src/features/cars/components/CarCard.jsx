// src/features/cars/components/CarCard.jsx
import React, { useState } from 'react';
import { formatRupiah } from '../../../utils/formatCurrency';
import { Users, Settings, Car as CarIcon } from 'lucide-react';

export const CarCard = ({ car, onSelect }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
      <div>
        <div className="relative h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
          {!hasError && car.image ? (
            <img 
              src={car.image} 
              alt={car.name} 
              onError={() => setHasError(true)}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <CarIcon size={64} className="relative z-10 text-white/90 drop-shadow-md" />
            </div>
          )}
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow z-10">
            {car.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{car.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{car.description}</p>
          
          <div className="flex items-center justify-between text-gray-500 text-sm mb-4 border-t border-b border-gray-100 py-2">
            <div className="flex items-center gap-1.5">
              <Users size={16} className="text-blue-600" />
              <span>{car.seats} Kursi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Settings size={16} className="text-blue-600" />
              <span>{car.transmission}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0 flex items-center justify-between mt-auto">
        <div>
          <span className="text-xs text-gray-500 block">Tarif / Hari</span>
          <span className="text-lg font-extrabold text-blue-600">{formatRupiah(car.pricePerDay)}</span>
        </div>
        <button 
          onClick={() => onSelect(car)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200 shadow-sm"
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};