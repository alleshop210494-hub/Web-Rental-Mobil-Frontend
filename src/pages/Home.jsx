// src/pages/Home.jsx
import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { useCars } from '../features/cars/hooks/useCars';
import { CarCard } from '../features/cars/components/CarCard';
import { BookingModal } from '../features/cars/components/BookingModal';
import { ShieldCheck, Clock, MapPin, Sparkles, Car as CarIcon } from 'lucide-react';

export const Home = () => {
  const { cars, loading, error } = useCars();
  const [selectedCar, setSelectedCar] = useState(null);
  const [heroImageError, setHeroImageError] = useState(false);

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  return (
    <MainLayout>
      <section id="hero" className="bg-black/20 backdrop-blur-xs text-white py-24 relative overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-neutral-900/50 backdrop-blur-sm border border-amber-500/40 text-amber-400 px-4 py-2 rounded-full text-xs font-semibold mb-6 shadow-lg shadow-amber-500/10">
              <Sparkles size={14} /> Layanan Rental Mobil Premium #1 di Pontianak
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
              Jelajahi Pontianak dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Kenyamanan & Kemewahan</span>
            </h2>
            <p className="text-gray-100 text-lg mb-8 leading-relaxed font-light drop-shadow">
              Sediakan armada terbaik untuk perjalanan bisnis, wisata keluarga, atau acara penting Anda di Pontianak dengan harga kompetitif dan pilihan lepas kunci atau dengan pengemudi berpengalaman.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#catalog" 
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition duration-300 transform hover:-translate-y-0.5"
              >
                Lihat Katalog Mobil
              </a>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-900/40 backdrop-blur-sm hover:bg-neutral-800/60 border border-amber-500/30 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition duration-300"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-2xl shadow-2xl shadow-black/80 border border-amber-500/40 overflow-hidden h-[450px] w-full bg-neutral-900/30 backdrop-blur-md relative flex items-center justify-center">
              {!heroImageError ? (
                <img 
                  src="/images/hero-car.jpg" 
                  alt="Rental Mobil Pontianak" 
                  onError={() => setHeroImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-neutral-900/80 to-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white p-6 text-center">
                  <CarIcon size={80} className="text-amber-400 mb-4 drop-shadow-[0_10px_10px_rgba(245,158,11,0.3)]" />
                  <span className="text-lg font-bold tracking-wide">Rental Mobil Pontianak</span>
                  <span className="text-xs text-gray-300 mt-1">Letakkan gambar Anda di folder public/images/hero-car.jpg</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-black/10 backdrop-blur-xs border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow">Mengapa Memilih Kami?</h3>
            <p className="text-gray-200 font-light drop-shadow">Komitmen kami memberikan pengalaman berkendara yang aman, elegan, dan transparan di Pontianak.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/30 backdrop-blur-md p-8 rounded-2xl border border-amber-500/30 shadow-2xl text-center transition hover:border-amber-500/50">
              <div className="bg-amber-500/20 text-amber-400 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 border border-amber-500/30 shadow-inner">
                <ShieldCheck size={26} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 drop-shadow">Armada Terawat & Aman</h4>
              <p className="text-gray-200 text-sm leading-relaxed font-light">Seluruh unit mobil rutin diservis, bersih, wangi, dan dipastikan dalam kondisi prima sebelum diserahkan.</p>
            </div>
            <div className="bg-neutral-900/30 backdrop-blur-md p-8 rounded-2xl border border-amber-500/30 shadow-2xl text-center transition hover:border-amber-500/50">
              <div className="bg-amber-500/20 text-amber-400 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 border border-amber-500/30 shadow-inner">
                <Clock size={26} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 drop-shadow">Layanan 24 Jam</h4>
              <p className="text-gray-200 text-sm leading-relaxed font-light">Tim dukungan pelanggan kami siap melayani pemesanan dan kebutuhan darurat Anda kapanpun dibutuhkan.</p>
            </div>
            <div className="bg-neutral-900/30 backdrop-blur-md p-8 rounded-2xl border border-amber-500/30 shadow-2xl text-center transition hover:border-amber-500/50">
              <div className="bg-amber-500/20 text-amber-400 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 border border-amber-500/30 shadow-inner">
                <MapPin size={26} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 drop-shadow">Antar Jemput Gratis</h4>
              <p className="text-gray-200 text-sm leading-relaxed font-light">Gratis layanan antar jemput unit langsung ke lokasi Anda di dalam wilayah kota Pontianak atau Bandara Supadio.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-black/20 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow">Pilihan Armada Mobil</h3>
            <p className="text-gray-200 font-light drop-shadow">Pilih kendaraan eksklusif yang sesuai dengan kebutuhan perjalanan Anda di Pontianak.</p>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-amber-500 border-t-transparent"></div>
              <p className="text-gray-200 mt-2">Memuat katalog mobil...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-950/40 backdrop-blur-md border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-center max-w-md mx-auto">
              {error}
            </div>
          )}

          {!loading && !error && cars.length === 0 && (
            <div className="text-center py-12 text-gray-300">
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