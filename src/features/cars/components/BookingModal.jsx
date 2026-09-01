// src/features/cars/components/BookingModal.jsx
import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle } from 'lucide-react';
import { bookingService } from '../services/bookingService';
import { formatRupiah } from '../../../utils/formatCurrency';

export const BookingModal = ({ car, onClose }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    startDate: '',
    endDate: ''
  });
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const response = await bookingService.createBooking({
        carId: car.id,
        ...formData
      });
      setSuccessData(response.data);
    } catch (err) {
      setError(err.message || 'Gagal memproses pemesanan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
        <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Form Pemesanan Unit</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-center gap-4">
            <img src={car.image} alt={car.name} className="w-20 h-16 object-cover rounded-lg" />
            <div>
              <h4 className="font-bold text-gray-900">{car.name}</h4>
              <p className="text-sm text-blue-600 font-semibold">{formatRupiah(car.pricePerDay)} / hari</p>
            </div>
          </div>

          {successData ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Pemesanan Berhasil!</h4>
              <p className="text-gray-600 text-sm mb-6">
                ID Booking Anda: <span className="font-mono font-bold text-blue-600">{successData.id}</span>. Silakan lanjutkan konfirmasi melalui WhatsApp admin kami.
              </p>
              <a
                href={`https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20konfirmasi%20pemesanan%20dengan%20ID:%20${successData.id}%20atas%20nama%20${successData.customerName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition w-full text-center"
              >
                Konfirmasi via WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Nama Lengkap</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    name="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Nomor WhatsApp</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Phone size={16} />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Mulai Sewa</label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Selesai Sewa</label>
                  <input
                    type="date"
                    name="endDate"
                    required
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow transition mt-2 disabled:opacity-50"
              >
                {loading ? 'Memproses...' : 'Kirim Pemesanan'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};