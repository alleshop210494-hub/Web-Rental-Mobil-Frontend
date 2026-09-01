// src/features/cars/components/CarCard.jsx
import React, { useState } from 'react';
import { formatRupiah } from '../../../utils/formatCurrency';
import { Users, Settings, Car as CarIcon } from 'lucide-react';

export const CarCard = ({ car, onSelect }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-neutral-900/35 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-amber-500/30 transition-all duration-300 hover:shadow-amber-500/20 hover:border-amber-500/60 flex flex-col justify-between">
      <div>
        <div className="relative h-48 bg-neutral-950/50 overflow-hidden flex items-center justify-center border-b border-amber-500/20">
          {!hasError && car.image ? (
            <img 
              src={car.image} 
              alt={car.name} 
              onError={() => setHasError(true)}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 flex items-center justify-center text-amber-400 relative">
              <div className="absolute inset-0 bg-amber-500/5"></div>
              <CarIcon size={64} className="relative z-10 drop-shadow-[0_5px_10px_rgba(245,158,11,0.3)]" />
            </div>
          )}
          <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-amber-400 border border-amber-500/40 text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
            {car.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 tracking-wide drop-shadow">{car.name}</h3>
          <p className="text-gray-200 text-sm mb-6 line-clamp-2 font-light">{car.description}</p>
          
          <div className="flex items-center justify-between text-gray-200 text-sm mb-6 border-t border-b border-amber-500/20 py-3">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-amber-400" />
              <span>{car.seats} Kursi</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings size={16} className="text-amber-400" />
              <span>{car.transmission}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 flex items-center justify-between mt-auto">
        <div>
          <span className="text-xs text-gray-300 block tracking-wider uppercase">Tarif / Hari</span>
          <span className="text-lg font-extrabold text-amber-400 drop-shadow">{formatRupiah(car.pricePerDay)}</span>
        </div>
        <button 
          onClick={() => onSelect(car)}
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-amber-500/20"
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};