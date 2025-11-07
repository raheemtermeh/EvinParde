// src/components/InstallmentCalculator.jsx
"use client";
import { Calculator, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function InstallmentCalculator() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div className="text-right">
        <span className="block text-2xl leading-tight">محاسبه‌گر اقساط</span>
        <span className="block text-sm mb-4 font-normal text-gray-700">
          مبلغ قسط خودتو همین حالا حساب کن
        </span>
      </div>
      <div className="bg-[#f0e6d6] rounded-xl shadow-lg flex flex-col lg:flex-row-reverse overflow-hidden">
        {/* تصویر شخص - راست */}
        <div className="hidden lg:block w-full lg:w-1/4 relative bg-[#d6e0e5]">
          <Image
            src="https://picsum.photos/400/400?random=5" // تصویر آنلاین جایگزین
            alt="محاسبه‌گر اقساط"
            layout="fill"
            objectFit="cover"
            className="rounded-r-xl"
          />
        </div>

        {/* بخش ماشین‌حساب - چپ */}
        <div className="w-full lg:w-3/4 p-8 sm:p-12 text-right">
          {/* فرم ماشین حساب */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* ورودی مبلغ خرید */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                مبلغ خرید
              </label>
              <div className="flex flex-row-reverse rounded-lg overflow-hidden border border-gray-300 bg-white">
                <input
                  type="text"
                  placeholder="مبلغ خرید خود را وارد کنید"
                  className="w-full p-3 text-right bg-transparent focus:outline-none"
                />
                <span className="text-sm text-gray-500 bg-gray-100 p-3 flex items-center border-l border-gray-300">
                  تومان
                </span>
              </div>
            </div>

            {/* دراپ‌داون تعداد اقساط */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تعداد اقساط
              </label>
              <div className="relative">
                <select
                  defaultValue=""
                  className="appearance-none w-full p-3 text-right border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#246e72]"
                >
                  <option value="" disabled>
                    تعداد اقساط خود را انتخاب کنید
                  </option>
                  <option value="3">۳ ماهه</option>
                  <option value="6">۶ ماهه</option>
                </select>

                <ArrowDown
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                />
              </div>
            </div>

            {/* دکمه محاسبه */}
            <div className="relative mt-2 md:mt-0">
              <button className="w-full flex flex-row-reverse items-center justify-center bg-[#f0a500] hover:bg-[#d99500] transition-colors text-white py-3 px-4 rounded-lg text-lg font-bold shadow-md">
                <span>محاسبه</span>
                <Calculator size={20} className="mr-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
