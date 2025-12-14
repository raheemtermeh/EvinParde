// src/components/HeroBanner.jsx
import DOMPurify from "isomorphic-dompurify";
import rectangle from "../assets/Rectangle61.png";

export default function HeroBanner({ data }) {
  const rawHtml = data[0].summery
    "";

  const cleanHtml = DOMPurify.sanitize(rawHtml);

  return (
    <>
    <section
      className="relative h-[450px] sm:h-[600px] bg-[#f3f3e6] overflow-hidden"
      dir="rtl"
    >
      <div className="absolute inset-0">
        <img
          src={rectangle.src}
          alt="Curtain background"
          className="w-full h-full object-cover object-center lg:object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3f3e6] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </div>

      <div className="hidden w-full lg:w-1/2 text-right text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-[#3a3a3a] text-[#246e72] text-base sm:text-lg text-gray-700 space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex flex-row-reverse items-center justify-center bg-[#f0a500] hover:bg-[#d99500] transition-colors text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-lg sm:text-xl shadow-xl mr-3 underline" />
    </section>
  </>
  );
}


{/* 
      <div className="absolute inset-0">
        <img
          src={rectangle.src}
          alt="Curtain background"
          className="w-full h-full object-cover object-center lg:object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3f3e6] via-transparent to-transparent"></div>
      </div>
      <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full lg:w-1/2 text-right">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3a3a3a] leading-tight mb-4 sm:mb-6">
            <span className="block">پرده دلخواهت رو همین امروز بخر،</span>
            <span className="block text-[#246e72] mt-1 sm:mt-2">
              بعداً <span className="underline font-bold">پرداخت</span> کن
            </span>
          </h2>

          <div className="text-base sm:text-lg text-gray-700 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <p>خرید اقساطی آسان بدون ضامن</p>
            <p>
              فقط با چک شخصی پیش‌پرداخت از <strong>۳۰٪</strong> و تسویه تا
              <strong>۶ ماه</strong>
            </p>
          </div>

          <button className="flex flex-row-reverse items-center justify-center bg-[#f0a500] hover:bg-[#d99500] transition-colors text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-lg sm:text-xl font-bold shadow-xl">
            <span>شروع خرید اقساطی</span>
            <ArrowLeft size={20} className="mr-3" />
          </button>
        </div>
      </div> */}