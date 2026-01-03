// src/components/InstallmentCalculator.jsx
"use client";
import { Calculator, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function InstallmentCalculator() {
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [installmentPeriod, setInstallmentPeriod] = useState(3);
  const [result, setResult] = useState(null);

  const calculateInstallment = () => {
    const amount = parseFloat(purchaseAmount.replace(/,/g, ""));
    if (isNaN(amount) || amount <= 0) return;

    // Formula: (price - (price * 20%)) / 3 months
    const downPayment = amount * 0.2; // 20% down payment
    const remainingAmount = amount - downPayment;
    const monthlyInstallment = remainingAmount / installmentPeriod;

    setResult({
      totalAmount: amount,
      downPayment: downPayment,
      remainingAmount: remainingAmount,
      monthlyInstallment: monthlyInstallment,
      period: installmentPeriod,
    });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    calculateInstallment();
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20"
      dir="rtl"
    >
      <div className="text-right">
        <span className="block text-xl sm:text-2xl leading-tight font-bold text-[#3a3a3a]">
          محاسبه‌گر اقساط
        </span>
        <span className="block text-xs sm:text-sm mb-4 font-normal text-gray-700">
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
        <div className="w-full lg:w-3/4 p-6 sm:p-10 lg:p-12 text-right">
          {/* فرم ماشین حساب */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-end">
            {/* ورودی مبلغ خرید */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                مبلغ خرید
              </label>
              <div className="flex flex-row-reverse rounded-lg overflow-hidden border border-gray-300 bg-white">
                <input
                  type="text"
                  value={purchaseAmount}
                  onChange={(e) =>
                    setPurchaseAmount(e.target.value.replace(/[^0-9,]/g, ""))
                  }
                  placeholder="مبلغ خرید خود را وارد کنید"
                  className="w-full p-3 text-right bg-transparent text-sm focus:outline-none"
                />
                <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 p-3 flex items-center border-l border-gray-300">
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
                  value={installmentPeriod}
                  onChange={(e) =>
                    setInstallmentPeriod(parseInt(e.target.value))
                  }
                  className="appearance-none w-full p-3 text-right border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#246e72]"
                >
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
              <button
                onClick={handleCalculate}
                className="w-full flex flex-row-reverse items-center justify-center bg-[#f0a500] hover:bg-[#d99500] transition-colors text-white py-3 px-4 rounded-lg text-base sm:text-lg font-bold shadow-md"
              >
                <span>محاسبه</span>
                <Calculator size={20} className="mr-2" />
              </button>
            </div>
          </div>

          {/* نتیجه محاسبه */}
          {result && (
            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-[#3a3a3a] mb-4 text-center">
                نتیجه محاسبه
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">قیمت کل:</p>
                  <p className="text-lg font-bold text-[#3a3a3a]">
                    {formatNumber(result.totalAmount)} تومان
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">پیش‌پرداخت (۲۰٪):</p>
                  <p className="text-lg font-bold text-blue-700">
                    {formatNumber(result.downPayment)} تومان
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">مبلغ باقی‌مانده:</p>
                  <p className="text-lg font-bold text-[#3a3a3a]">
                    {formatNumber(result.remainingAmount)} تومان
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                  <p className="text-sm text-gray-600">
                    قسط ماهانه ({result.period} ماه):
                  </p>
                  <p className="text-xl font-extrabold text-green-700">
                    {formatNumber(result.monthlyInstallment)} تومان
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-700 text-right">
                  فرمول: (قیمت - (قیمت × ۲۰٪)) ÷ {result.period} ماه ={" "}
                  {formatNumber(result.monthlyInstallment)} تومان
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
