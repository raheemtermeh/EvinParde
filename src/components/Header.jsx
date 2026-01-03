// src/components/Header.jsx
"use client";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartIcon from "./CartIcon";
import CartModal from "./CartModal";
// فرض می‌کنیم لوگو از طریق Image کامپوننت Next.js لود می‌شود
import Image from "next/image";
import logo from "../assets/logo.png";

// لیست لینک‌های ناوبری (ترتیب از راست به چپ در دسکتاپ)
const navLinks = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "فروش ویژه", href: "/special-sales" },
  { title: "خرید اقساطی", href: "/installment" },
  { title: "خدمات", href: "/services" },
  { title: "وبلاگ", href: "/blog" },
  { title: "تماس باما", href: "/contact" },
];

export default function Header({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // کلاس‌های مشترک برای دکمه ورود/ثبت‌نام
  // رنگ پس‌زمینه دکمه دسکتاپ را به رنگ سازمانی (سبز) تغییر می‌دهیم و متن را سفید می‌کنیم تا کنتراست بهتری با هدر سبز داشته باشد
  const loginButtonClasses =
    "flex items-center bg-white text-[#246e72] border border-white hover:bg-gray-100 transition-colors py-2 px-4 rounded-full text-sm font-bold shadow-lg";

  // استایل جدید و جذاب‌تر برای دکمه در دسکتاپ:
  const loginButtonDesktopClasses =
    "flex items-center bg-white text-[#246e72] border border-white hover:bg-gray-100 transition-all duration-200 py-2 px-4 rounded-full text-sm font-bold shadow-md hover:shadow-lg transform hover:scale-[1.03] active:scale-[0.98]";

  const { cart, toggleCart } = useCart();

  return (
    <>
      <header className="bg-[#246e72] shadow-2xl sticky top-0 z-50" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          {/* لوگو - سمت راست (چینش RTL کاملاً رعایت شده است) */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="flex items-center p-1 rounded-lg transition-all duration-300 hover:opacity-90"
            >
              {/* لوگوی Image با ابعاد مشخص */}
              <Image
                src={logo}
                alt="Artal Logo - پرده‌فروشی"
                width={40} // ابعاد ثابت برای لوگو در دسکتاپ و موبایل
                height={40}
                className="rounded-full shadow-lg border-2 border-white ml-2 sm:ml-3 flex-shrink-0"
              />

              {/* **بخش متن لوگو با استایل قوی‌تر** */}
              <div className="flex flex-col text-right leading-none text-white">
                <span className="text-xl sm:text-2xl font-black tracking-tight drop-shadow-md">
                  آرتال
                </span>
              </div>
            </Link>
          </div>
          {/* لینک‌های ناوبری - مرکز (فقط دسکتاپ) */}
          <nav className="hidden lg:flex items-center justify-center flex-grow">
            <ul className="flex space-x-6 space-x-reverse text-white text-base font-medium">
              {data?.menu.length > 0 &&
                data.menu.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="hover:text-[#FBBF24] transition-colors p-2 rounded-md relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[3px] after:bg-[#FBBF24] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          {/* دکمه ورود/ثبت‌نام، آیکون سبد خرید و دکمه منو */}
          <div className="flex items-center flex-shrink-0 space-x-3 space-x-reverse">
            {/* دکمه ورود/ثبت‌نام (دسکتاپ) */}
            <div className="hidden lg:block">
              <button className={loginButtonDesktopClasses}>
                <span className="ml-2">ورود / ثبت‌نام</span>
                <User size={18} />
              </button>
            </div>

            {/* آیکون سبد خرید */}
            <div className="text-white p-2 rounded-md hover:bg-white/20 transition cursor-pointer">
              <CartIcon />
            </div>

            {/* دکمه ورود/ثبت‌نام با آیکون در موبایل (قبل از همبرگر) */}
            <button
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/20 transition"
              aria-label="ورود به حساب کاربری"
            >
              <User size={26} />
            </button>

            {/* دکمه منوی همبرگری (موبایل) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/20 transition"
              aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* منوی بازشونده موبایل */}
        <div
          className={`lg:hidden bg-[#246e72] shadow-inner transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-screen opacity-100 border-t border-white/20"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col text-right text-white text-base font-medium py-4 px-6 space-y-3">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // بستن منو بعد از کلیک
                  className="block p-3 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}

            {/* دکمه ورود در منوی موبایل */}
            <li className="border-t border-white/20 pt-4 mt-4">
              <button
                className={`flex items-center justify-center bg-[#FBBF24] text-[#246e72] border border-white hover:bg-[#d99500] transition-colors py-3 px-4 rounded-full text-base font-bold shadow-lg w-full`}
                onClick={() => setMenuOpen(false)} // بستن منو بعد از کلیک
              >
                <span className="ml-2">ورود / ثبت‌نام</span>
                <User size={20} />
              </button>
            </li>
          </ul>
        </div>
      </header>
      <CartModal isOpen={cart.isOpen} onClose={() => toggleCart(false)} />
    </>
  );
}
