// src/layouts/MainLayout.jsx
import React from 'react';
import { Car, Phone, MapPin } from 'lucide-react';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-md">
              <Car size={26} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">Rental Mobil Pontianak</h1>
              <p className="text-xs text-gray-500">Aman, Nyaman, & Terpercaya</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#hero" className="hover:text-blue-600 transition">Beranda</a>
            <a href="#catalog" className="hover:text-blue-600 transition">Katalog Mobil</a>
            <a href="#features" className="hover:text-blue-600 transition">Keunggulan</a>
          </nav>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md flex items-center gap-2 text-sm transition"
          >
            <Phone size={16} /> WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Car size={22} />
              </div>
              <span className="text-lg font-bold">Rental Mobil Pontianak</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solusi transportasi terbaik dan terpercaya di Pontianak dan sekitarnya. Melayani sewa harian, mingguan, maupun mobil pengantin.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-200">Kontak Kami</h4>
            <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
              <MapPin size={16} className="text-blue-500" /> Jl. A. Yani, Kota Pontianak, Kalimantan Barat
            </p>
            <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
              <Phone size={16} className="text-emerald-500" /> +62 812-3456-7890
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-200">Jam Operasional</h4>
            <p className="text-gray-400 text-sm mb-1">Senin - Minggu: 24 Jam</p>
            <p className="text-gray-400 text-sm">Layanan darurat & antar jemput bandara selalu siap.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          &copy; 2026 Rental Mobil Pontianak. All rights reserved.
        </div>
      </footer>
    </div>
  );
};