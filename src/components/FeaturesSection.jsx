// src/components/FeaturesSection.jsx
import {
  CreditCard,
  ListChecks,
  Scissors,
  UserCheck,
  Truck,
  Headset,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import videoimg from "../assets/da2a7165907ed634d35eae84af697bd00c1b554f.jpg";

const IconMap = { CreditCard, ListChecks, Scissors, UserCheck, Truck, Headset };

const features = [
  { text: "پیش پرداخت کم (۳۰٪)", icon: "CreditCard" },
  { text: "اقساط ۳ تا ۶ ماهه", icon: "ListChecks" },
  { text: "دوخت و نصب حرفه‌ای", icon: "Scissors" },
  { text: "بدون ضامن، فقط چک شخصی", icon: "UserCheck" },
  { text: "ارسال سریع بعد از تأیید چک", icon: "Truck" },
  { text: "پشتیبانی کامل در تمام مراحل", icon: "Headset" },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16" dir="rtl">
      {/* هدر */}
      <div className="flex justify-between items-center mb-10">
        {/* عنوان راست */}
        <h2 className="text-2xl font-bold text-[#3a3a3a]">
          چرا خرید اقساطی از «پرده‌فروشی» بهترین انتخابه؟
        </h2>

        {/* دکمه چپ */}
        <button className="flex items-center bg-[#f0a500] hover:bg-[#d99500] transition-colors text-white py-2 px-4 rounded-md text-sm font-medium shadow-lg">
          <ArrowLeft size={16} className="ml-2" />
          <span>شروع خرید اقساطی</span>
        </button>
      </div>

      {/* بدنه */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* تصویر سمت راست */}
        <div className="w-full lg:w-3/5 order-1 lg:order-2">
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden border-4 border-[#246e72] shadow-xl">
            <Image
              src={videoimg}
              alt="Video about curtain installment"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center text-[#246e72] hover:bg-white transition-colors">
                <span className="text-xl font-bold">▶</span>
              </button>
            </div>
            <div className="absolute bottom-0 w-full bg-black/60 text-white text-right p-3 text-sm leading-relaxed">
              <p>
                در پرده‌فروشی، فقط فروشنده‌ی پرده نیستیم. ما یک تیم کامل طراحی،
                دوخت و نصب هستیم که از لحظه انتخاب پارچه...
              </p>
            </div>
          </div>
        </div>

        {/* لیست سمت چپ */}
        <div className="w-full lg:w-2/5 order-2 lg:order-1 p-4">
          <ul className="space-y-4">
            {features.map((feature, index) => {
              const IconComponent = IconMap[feature.icon];
              const isMiddle = index === Math.floor(features.length / 2); // آیتم وسط

              return (
                <li
                  key={index}
                  className={`flex items-center rounded-xl bg-[#e5e5e5] text-lg font-medium border-b pb-4 last:border-b-0 last:pb-0 transition-all duration-300
            ${
              isMiddle
                ? "bg-[#246e72]/10 rounded-2xl p-4 shadow-md scale-[1.02]"
                : "text-[#3a3a3a]"
            }
            hover:bg-[#f3f3e6]/70 hover:shadow-sm`}
                >
                  <div
                    className={`p-3 rounded-full border mr-6  transition-all duration-300 ${
                      isMiddle
                        ? "bg-[#246e72] border-[#1e5a5e]"
                        : "bg-[#f3f3e6] border-gray-300"
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent
                        size={22}
                        className={`${
                          isMiddle ? "text-white" : "text-[#246e72]"
                        }`}
                      />
                    )}
                  </div>
                  <span
                    className={`transition-colors mr-5 duration-300 ${
                      isMiddle ? "text-[#246e72] font-semibold" : ""
                    }`}
                  >
                    {feature.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
