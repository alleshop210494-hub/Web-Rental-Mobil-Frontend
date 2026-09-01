// src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import { Car as CarIcon, Phone } from 'lucide-react';

export const MainLayout = ({ children }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      <header className="bg-black/70 backdrop-blur-md border-b border-amber-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {!logoError ? (
              <img 
                src="/images/logo1.png" 
                alt="Logo Rental Mobil Pontianak" 
                onError={() => setLogoError(true)}
                className="w-12 h-12 object-contain rounded-xl shadow-lg shadow-amber-500/10 bg-neutral-900 border border-amber-500/30 p-1.5"
              />
            ) : (
              <div className="w-12 h-12 bg-amber-500 text-black rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 font-bold">
                <CarIcon size={24} />
              </div>
            )}
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-wide">Rental Mobil Pontianak</h1>
              <p className="text-xs text-amber-400/90 font-medium tracking-wider uppercase">Aman, Nyaman, & Terpercaya</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-amber-400 font-medium transition">Beranda</a>
            <a href="#catalog" className="text-gray-300 hover:text-amber-400 font-medium transition">Katalog Mobil</a>
            <a href="#features" className="text-gray-300 hover:text-amber-400 font-medium transition">Keunggulan</a>
          </nav>

          <div>
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-neutral-950 text-gray-400 py-12 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 text-black rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20 font-bold">
                <CarIcon size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Rental Mobil Pontianak</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solusi transportasi terpercaya untuk perjalanan bisnis, liburan, dan acara penting Anda di seluruh wilayah Pontianak dan sekitarnya dengan sentuhan kemewahan eksklusif.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-base tracking-wide">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition">Beranda</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition">Katalog Mobil</a></li>
              <li><a href="#features" className="hover:text-amber-400 transition">Keunggulan Kami</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-base tracking-wide">Hubungi Kami</h4>
            <p className="text-gray-400 text-sm mb-2">Jl. Contoh Alamat No. 123, Kota Pontianak, Kalimantan Barat</p>
            <p className="text-gray-400 text-sm mb-2">Telepon / WhatsApp: 0812-3456-7890</p>
            <p className="text-gray-400 text-sm">Email: info@rentalmobilpontianak.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Rental Mobil Pontianak. Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
};