// src/components/Header.jsx
"use client";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import { useState } from "react";

// لیست لینک‌های ناوبری (ترتیب از راست به چپ در دسکتاپ)
// توجه: ترتیب این لیست باید معکوس ترتیب مورد انتظار در UI باشد اگر از flex-row-reverse استفاده می‌کنیم
const navLinks = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "فروش ویژه", href: "/special-sales" },
  { title: "خرید اقساطی", href: "/installment" },
  { title: "خدمات", href: "/services" },
  { title: "وبلاگ", href: "/blog" },
  { title: "تماس باما", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // کلاس‌های مشترک برای دکمه ورود/ثبت‌نام
  const loginButtonClasses = "flex items-center bg-white text-[#246e72] border border-white hover:bg-gray-100 transition-colors py-2 px-4 rounded-md text-sm font-medium shadow-lg";

  return (
    <header className="bg-[#246e72] shadow-md sticky top-0 z-50" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-row-reverse justify-between items-center h-20">
        
        {/* لوگو - سمت راست */}
        <div className="flex items-center space-x-2 space-x-reverse flex-shrink-0">
          <Link
            href="/"
            className="text-white text-2xl font-bold flex items-center"
          >
            {/* شبیه‌سازی لوگوی آرتال */}
            <span className="ml-2 text-3xl font-serif italic tracking-wide">آرتال</span>
            <span className="text-sm font-light mr-1 self-start">فروشگاه پرده</span>
          </Link>
        </div>

        {/* لینک‌های ناوبری - مرکز (فقط دسکتاپ) */}
        {/* توجه: از flex-row-reverse و space-x-reverse برای چیدمان RTL استفاده شده است */}
        <nav className="hidden lg:flex items-center justify-center flex-grow">
          <ul className="flex flex-row-reverse space-x-6 space-x-reverse text-white text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="hover:text-gray-200 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* دکمه ورود/ثبت‌نام (فقط دسکتاپ) و دکمه منو (فقط موبایل) */}
        <div className="flex items-center flex-shrink-0 space-x-3 space-x-reverse">
            
            {/* دکمه ورود/ثبت‌نام (دسکتاپ) */}
            <div className="hidden lg:block">
                <button className={loginButtonClasses}>
                    <span className="ml-2">ورود / ثبت‌نام</span>
                    <User size={18} className="mr-2" />
                </button>
            </div>

            {/* دکمه منوی همبرگری (موبایل) */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white p-2 rounded-md hover:bg-white/20 transition"
            >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
        </div>

      </div>

      {/* 💡 منوی بازشونده موبایل (با افکت باز و بسته شدن) */}
      <div className={`lg:hidden bg-[#246e72] shadow-lg transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col text-right text-white text-base font-medium py-4 px-6 space-y-3">
          
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)} // بستن منو بعد از کلیک
                className="block p-2 hover:bg-white/10 rounded transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}

          {/* دکمه ورود در منوی موبایل */}
          <li className="border-t border-white/20 pt-4 mt-4">
            <button 
                className={`${loginButtonClasses.replace('bg-white', 'bg-[#f0a500]')} w-full text-center text-white justify-center hover:bg-[#d99500]`}
                onClick={() => setMenuOpen(false)} // بستن منو بعد از کلیک
            >
                ورود / ثبت‌نام
            </button>
          </li>
          
        </ul>
      </div>
    </header>
  );
}