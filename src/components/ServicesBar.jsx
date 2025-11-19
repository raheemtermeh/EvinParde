// src/components/ServicesBar.jsx
import { Truck, CheckCircle, CreditCard, Clock } from "lucide-react";

const services = [
  { text: "امکان ارسال سریع", icon: Truck },
  { text: "امکان پرداخت در محل", icon: CreditCard },
  { text: "ضمانت اصل بودن کالا", icon: CheckCircle },
  { text: "پشتیبانی ۲۴ ساعته", icon: Clock },
];

export default function ServicesBar() {
  return (
    <section className="bg-gray-50 py-10 sm:py-12 mt-16" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* کانتینر خدمات (ریسپانسیو با فاصله یکسان) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-2 sm:p-3 bg-gray-100 rounded-full mb-2 sm:mb-3">
                {/* نمایش آیکون با رنگ برند */}

                {/* 🚨 سینتکس sm:size={24} به دلیل داشتن ":" خطای Namespace ایجاد می‌کند. */}
                {/* ⭐️ راه‌حل: تنظیم سایز پایه (size) و استفاده از Tailwind برای کلاس‌های عرض/ارتفاع */}

                {/* اگر service.icon یک کامپوننت است، باید پراپ size را به صورت شرطی یا کلاس CSS اعمال کنیم */}
                <service.icon
                  // استفاده از سایز پایه (size) برای موبایل
                  size={20}
                  // 🚨 حذف sm:size={24}
                  // ⭐️ اگر لازم است سایز آیکون در sm بزرگتر شود، باید با کلاس‌های Tailwind مربوط به w/h در className اعمال شود.
                  className="text-[#f0a500] w-5 h-5 sm:w-6 sm:h-6"
                />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#3a3a3a]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
