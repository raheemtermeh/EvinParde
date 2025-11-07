"use client";
// src/components/Footer.jsx
import Link from "next/link";
import { Mail, MapPin, Globe, Instagram } from "lucide-react";
import Image from "next/image";

// برای تلگرام، اگر در lucide-react موجود نبود، می‌تونیم از SVG مستقیم استفاده کنیم
const TelegramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M9.999 15.2l.001 4.8 1.8-7.8L20 7 9.999 15.2zM9.999 15.2L4 12l16-8-16 11.2z" />
  </svg>
);

const footerLinks = [
  { title: "پرفروش‌ها", href: "/best-sellers" },
  { title: "تخفیف‌ها و پیشنهادها", href: "/discounts" },
  { title: "لیست قیمت", href: "/price-list" },
  { title: "سوالات متداول", href: "/faq" },
  { title: "تماس باما", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      {/* بخش اصلی فوتر */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-right">
          {/* ستون ۱: آدرس و لوگو */}
          <div className="space-y-4 flex flex-col">
            <div className="flex flex-row-reverse items-center justify-end">
              <span className="text-3xl font-serif italic tracking-wide text-[#246e72] mr-2">
                آرتال
              </span>
              <span className="text-sm font-light text-[#246e72] self-start">
                فروشگاه پرده
              </span>
            </div>

            <div className="text-sm text-gray-700 space-y-3">
              <div className="flex flex-row-reverse items-start">
                <MapPin size={20} className="ml-2 text-[#246e72] mt-1 flex-shrink-0" />
                <p className="font-bold">
                  آدرس:{" "}
                  <span className="font-normal">
                    خیابان انقلاب، بهار جنوبی، برج بهار، طبقه اول، واحد ۲۰۵
                  </span>
                </p>
              </div>

              <div className="pt-2 text-base font-bold">
                <p>
                  آیا سوالی دارید؟
                  <a
                    href="tel:7741584407"
                    className="text-lg text-[#f0a500] hover:text-[#d99500] mr-2 transition-colors"
                  >
                    ۷۷۴۱۵۸۴۴، ۰۷
                  </a>
                </p>
              </div>

              <div className="text-base font-bold">
                <p>
                  ارتباط با ما:
                  <a
                    href="mailto:unreal@outlook.com"
                    className="text-[#f0a500] hover:text-[#d99500] mr-2 transition-colors"
                  >
                    unreal@outlook.com
                  </a>
                </p>
              </div>

              {/* آیکون‌های شبکه‌های اجتماعی */}
              <div className="flex flex-row-reverse space-x-3 space-x-reverse mt-4">
                <a
                  href="#"
                  className="p-3 bg-gray-100 text-[#246e72] rounded-full hover:bg-[#246e72] hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 text-[#246e72] rounded-full hover:bg-[#246e72] hover:text-white transition-colors"
                >
                  <TelegramIcon />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 text-[#246e72] rounded-full hover:bg-[#246e72] hover:text-white transition-colors"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* ستون ۲: عضویت در خبرنامه */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-right space-y-4">
            <h3 className="text-xl font-bold text-[#3a3a3a]">
              عضویت در خبرنامه پرده
            </h3>
            <p className="text-sm text-gray-600 max-w-lg">
              با عضویت در خبرنامه از تخفیف‌ها، سوابق سفارشات، نقد و بررسی و
              بسیاری خدمات دیگر بهره‌مند شوید.
            </p>

            <div className="w-full max-w-sm flex flex-row-reverse mt-4">
              <button className="bg-[#246e72] text-white py-3 px-6 rounded-r-lg hover:bg-[#1a5559] transition-colors font-medium text-base flex-shrink-0">
                ارسال
              </button>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-l-lg text-right focus:outline-none focus:ring-2 focus:ring-[#246e72]"
                />
                <Mail
                  size={20}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* ستون ۳: مجوزها */}
          <div className="md:col-span-1 lg:col-span-1 flex flex-col items-center md:items-end text-center md:text-right space-y-4">
            <h3 className="text-xl font-bold text-[#3a3a3a]">مجوزها</h3>
            <div className="w-24 h-24 bg-[#246e72] rounded-lg flex items-center justify-center">
              <span className="text-5xl font-extrabold text-white">i.</span>
            </div>
          </div>
        </div>
      </div>

      {/* نوار لینک‌های مفید */}
      <div className="bg-[#246e72] py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap flex-row-reverse justify-center space-x-4 space-x-reverse text-sm font-medium text-white/90">
            {footerLinks.map((link) => (
              <li key={link.title} className="p-2">
                <Link
                  href={link.href}
                  className="hover:text-[#f0a500] transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="p-2">
              <Link href="/" className="hover:text-[#f0a500] transition-colors">
                خانه
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* نوار کپی‌رایت */}
      <div className="bg-[#1a5559] py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-end">
          <p className="text-xs text-white/70 text-center md:text-right">
            © کلیه حقوق این وب سایت محفوظ و متعلق به پرده می‌باشد.
          </p>
        </div>
      </div>
    </footer>
  );
}
