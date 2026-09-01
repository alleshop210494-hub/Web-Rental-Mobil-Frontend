// src/pages/Home.jsx
import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { useCars } from '../features/cars/hooks/useCars';
import { CarCard } from '../features/cars/components/CarCard';
import { BookingModal } from '../features/cars/components/BookingModal';
import { ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';

export const Home = () => {
  const { cars, loading, error } = useCars();
  const [selectedCar, setSelectedCar] = useState(null);

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  return (
    <MainLayout>
      <section id="hero" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-800/85 border border-blue-500/30 text-blue-200 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6">
              <Sparkles size={14} /> Layanan Rental Mobil #1 di Pontianak
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Jelajahi Pontianak dengan Kenyamanan Maksimal
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Sediakan armada terbaik untuk perjalanan bisnis, wisata keluarga, atau acara penting Anda di Pontianak dengan harga terjangkau dan pilihan lepas kunci atau dengan pengemudi berpengalaman.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#catalog" 
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-7 py-3.5 rounded-xl shadow-lg transition"
              >
                Lihat Katalog Mobil
              </a>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80" 
              alt="Rental Mobil Pontianak" 
              className="rounded-2xl shadow-2xl border-4 border-white/10 object-cover h-[400px] w-full"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-3">Mengapa Memilih Kami?</h3>
            <p className="text-gray-600">Komitmen kami memberikan pengalaman berkendara yang aman, nyaman, dan transparan di Pontianak.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Armada Terawat & Aman</h4>
              <p className="text-gray-600 text-sm">Seluruh unit mobil rutin diservis, bersih, wangi, dan dipastikan dalam kondisi prima sebelum diserahkan.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Layanan 24 Jam</h4>
              <p className="text-gray-600 text-sm">Tim dukungan pelanggan kami siap melayani pemesanan dan kebutuhan darurat Anda kapanpun dibutuhkan.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Antar Jemput Gratis</h4>
              <p className="text-gray-600 text-sm">Gratis layanan antar jemput unit langsung ke lokasi Anda di dalam wilayah kota Pontianak atau Bandara Supadio.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-3">Pilihan Armada Mobil</h3>
            <p className="text-gray-600">Pilih kendaraan yang sesuai dengan kebutuhan perjalanan Anda di Pontianak.</p>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
              <p className="text-gray-500 mt-2">Memuat katalog mobil...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center max-w-md mx-auto">
              {error}
            </div>
          )}

          {!loading && !error && cars.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Belum ada mobil yang tersedia saat ini.
            </div>
          )}

          {!loading && !error && cars.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} onSelect={handleSelectCar} />
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedCar && (
        <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </MainLayout>
  );
};