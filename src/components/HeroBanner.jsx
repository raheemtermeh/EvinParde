// src/components/HeroBanner.jsx
import { ArrowLeft } from 'lucide-react';
import rectangle from '../assets/Rectangle61.png';

export default function HeroBanner() {
  return (
    <section className="relative h-[600px] bg-[#f3f3e6] overflow-hidden">
      {/* تصویر پس‌زمینه */}
      <div className="absolute inset-0">
        <img
          src={rectangle.src}
          alt="Curtain background"
          className="w-full h-full object-fill object-center "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3f3e6] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* محتوای متنی */}
        <div className="w-full lg:w-1/2 text-right">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#3a3a3a] leading-tight mb-6">
            <span className="block">پرده دلخواهت رو همین امروز بخر،</span>
            <span className="block text-[#246e72] mt-2">
              بعداً <span className="underline font-bold">پرداخت</span> کن
            </span>
          </h2>

          <div className="text-lg text-gray-700 space-y-3 mb-8">
            <p>خرید اقساطی آسان بدون ضامن</p>
            <p>فقط با چک شخصی پیش‌پرداخت از <strong>۳۰٪</strong> و تسویه تا <strong>۶ ماه</strong></p>
          </div>

          <button className="flex flex-row-reverse items-center justify-center bg-[#f0a500] hover:bg-[#d99500] transition-colors text-white py-3 px-8 rounded-lg text-xl font-bold shadow-xl">
            <span>شروع خرید اقساطی</span>
            <ArrowLeft size={22} className="mr-3" />
          </button>

          {/* تگ‌های شناور */}
          
        </div>
      </div>

    </section>
  );
}
