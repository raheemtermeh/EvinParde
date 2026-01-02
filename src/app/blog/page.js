"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";
import { BadgeCheck, Wallet, Truck } from "lucide-react";


import mainCurtain from "@/assets/image.png";
import sideCurtainPlaceholder from "@/assets/Group 11.png";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// داده‌های شبیه‌سازی شده
const productPlaceholder = {
  title: "بهترین رنگ پرده",
  description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
  date: "۱۴ اردیبهشت",
  link: "#",
};

const latestProducts = Array(4).fill(productPlaceholder);
const suggestedProducts = Array(4).fill(productPlaceholder); // داده‌های پیشنهاد سردبیر
const mostVisitedProducts = Array(4).fill(productPlaceholder); // داده‌های پربازدیدترین ها

// سه مورد برای ستون کناری
const sidebarArticles = [
  {
    ...productPlaceholder,
    reviewCount: 24,
    image: sideCurtainPlaceholder,
    date: "۱۴ اردیبهشت",
  },
  {
    ...productPlaceholder,
    reviewCount: 18,
    image: sideCurtainPlaceholder,
    date: "۱۴ اردیبهشت",
  },
  {
    ...productPlaceholder,
    reviewCount: 30,
    image: sideCurtainPlaceholder,
    date: "۱۴ اردیبهشت",
  },
];

// ----------------------------------------------------------------
// کامپوننت کارت محصول
// ----------------------------------------------------------------
const ProductCard = ({ product }) => {
  const imageSrc = sideCurtainPlaceholder;

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 flex-shrink-0 p-3">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden text-right hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-4 space-y-2 flex flex-col flex-grow justify-between">
          <h3 className="text-base font-extrabold text-[#3a3a3a]">
            {product.title}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2">
            {product.description}
          </p>

          <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-100 mt-auto">
            <Link
              href={product.link}
              className="font-bold text-[#246e72] hover:text-[#1a5559] transition-colors flex items-center"
            >
              نمایش بیشتر <ArrowLeft size={12} className="mr-1" />
            </Link>
            <span className="flex items-center text-gray-500">
              <Calendar size={12} className="ml-1" />
              {product.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------
// کامپوننت مقاله کناری (Sidebar Article)
// ----------------------------------------------------------------
const SidebarArticleCard = ({ article }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden text-right p-4 flex flex-row-reverse items-center hover:shadow-lg transition-shadow duration-300">
      {/* تصویر کوچک سمت چپ (4/12) */}
      <div className="relative h-20 w-1/4 flex-shrink-0 rounded-lg overflow-hidden ml-3">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="10vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* محتوای متنی (8/12) */}
      <div className="flex flex-col justify-center w-3/4 space-y-1">
        <h4 className="text-sm font-bold text-[#3a3a3a] line-clamp-1">
          {article.title}
        </h4>
        <p className="text-xs text-gray-600 line-clamp-1">
          {article.description}
        </p>

        <div className="flex justify-between items-center text-xs text-gray-500 pt-1">
          <Link
            href={article.link}
            className="font-bold text-[#246e72] hover:text-[#1a5559] transition-colors flex items-center"
          >
            نمایش بیشتر <ArrowLeft size={10} className="mr-1" />
          </Link>
          <span className="flex items-center">
            <Calendar size={12} className="ml-1" />
            {article.date}
          </span>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------
// کامپوننت بنر فروش ویژه (جدید)
// ----------------------------------------------------------------


const SaleBanner = ({
  title,
  type,
  image,
  colorClass,
  titleColor,
  linkColor,
}) => {
  return (
    <div
      className={`w-full md:w-1/2 h-64 rounded-xl overflow-hidden relative flex flex-row-reverse md:flex-row items-center ${colorClass}`}
      dir="rtl"
    >
      {/* باکس متن */}
      <div className="flex flex-col justify-center items-start w-3/5 p-6 gap-2">
        <span className={`text-2xl font-medium ${titleColor}`}>
          فروش ویژه پرده
        </span>
        <h3 className={`text-3xl font-bold ${titleColor}`}>{type}</h3>
        <Link
          href="#"
          className={`mt-4 py-1.5 px-5 rounded-md text-sm font-medium transition-colors ${linkColor} hover:bg-opacity-80`}
        >
          نمایش همه
        </Link>
      </div>

      {/* تصویر */}
      <div className="relative w-2/5 h-5/6 mx-4">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};


// ----------------------------------------------------------------
// کامپوننت اصلی صفحه (page)
// ----------------------------------------------------------------
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="bg-[#f2efe9] min-h-screen pb-16" dir="rtl">
        {/* -------------------- بخش ۱: گالری بزرگ (چینش اصلی) -------------------- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* ستون راست (8/12 - عکس بزرگ زبرا) */}
            <div className="col-span-1 md:col-span-8 relative h-[300px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={mainCurtain}
                alt="بهترین پرده"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ objectFit: "cover" }}
                priority
              />
              {/* پوشش سیاه و محتوای روی عکس */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 sm:p-8 text-white text-right">
                <h2 className="text-xl sm:text-4xl font-extrabold mb-2 sm:mb-3 drop-shadow-lg">
                  بهترین پرده ها تا ۲۰ میلیون
                </h2>
                <div className="flex flex-wrap text-right justify-start items-center space-x-3 sm:space-x-4 space-x-reverse text-xs sm:text-sm font-medium drop-shadow-md">
                  <span className="flex items-center ml-10 whitespace-nowrap">
                    <Calendar size={14} className="ml-1" />
                    تاریخ انتشار: ۱۶ دی ۱۴۰۴
                  </span>
                  <span className="flex items-center whitespace-nowrap">
                    <Clock size={14} className="ml-1" />
                    زمان مطالعه: ۴ دقیقه
                  </span>
                </div>
              </div>
            </div>

            {/* ستون چپ (4/12 - گالری کوچک متنی) */}
            <div className="col-span-1 md:col-span-4 flex flex-col space-y-4">
              {sidebarArticles.map((article, index) => (
                <SidebarArticleCard key={index} article={article} />
              ))}
            </div>
          </div>
        </section>
        {/* -------------------- بخش ۲: پربازدیدترین ها (مطابق تصویر) -------------------- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#3a3a3a] mb-6 text-right pb-2">
            پربازدیدترین ها
          </h2>
          <div className="flex flex-wrap -m-3">
            {mostVisitedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-2 space-x-reverse">
            <span className="w-2 h-2 bg-[#246e72] rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="flex flex-col font-light md:flex-row-reverse gap-8">
            <SaleBanner
              title="فروش ویژه"
              type="شید"
              image={sideCurtainPlaceholder}
              colorClass="bg-[#e2a953]"
              titleColor="text-white "
              linkColor="bg-[#e8b364] text-[#3a2f28] "
            />
            <SaleBanner
              title="فروش ویژه"
              type="زبرا"
              image={mainCurtain}
              colorClass="bg-[#1c6e6e]"
              titleColor="text-white"
              linkColor="bg-[#337c7c] text-[#3a2f28] "
            />
          </div>
        </section>

        {/* -------------------- بخش ۳: پیشنهاد سردبیر (جدید - مطابق تصویر) -------------------- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#3a3a3a] mb-6 text-right pb-2">
            پیشنهاد سردبیر
          </h2>
          <div className="flex flex-wrap -m-3">
            {suggestedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      </div>
      {/* -------------------- بخش خدمات (مطابق تصویر) -------------------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-6">
        <div className="bg-white/70 rounded-2xl py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
          {/* باکس ۱ */}
          <div className="bg-white rounded-xl py-4 px-6 flex items-center gap-3 shadow-[0_2px_6px_rgba(0,0,0,0.05)] w-full md:w-auto justify-center">
            <Clock size={28} className="text-[#e6a84a]" />
            <span className="text-[#0a2342] font-semibold text-sm">
              پشتیبانی 24 ساعته
            </span>
          </div>

          {/* باکس ۲ */}
          <div className="bg-white rounded-xl py-4 px-6 flex items-center gap-3 shadow-[0_2px_6px_rgba(0,0,0,0.05)] w-full md:w-auto justify-center">
            <BadgeCheck size={28} className="text-[#e6a84a]" />
            <span className="text-[#0a2342] font-semibold text-sm">
              ضمانت اصل بودن کالا
            </span>
          </div>

          {/* باکس ۳ */}
          <div className="bg-white rounded-xl py-4 px-6 flex items-center gap-3 shadow-[0_2px_6px_rgba(0,0,0,0.05)] w-full md:w-auto justify-center">
            <Wallet size={28} className="text-[#e6a84a]" />
            <span className="text-[#0a2342] font-semibold text-sm">
              امکان پرداخت در محل
            </span>
          </div>

          {/* باکس ۴ */}
          <div className="bg-white rounded-xl py-4 px-6 flex items-center gap-3 shadow-[0_2px_6px_rgba(0,0,0,0.05)] w-full md:w-auto justify-center">
            <Truck size={28} className="text-[#e6a84a]" />
            <span className="text-[#0a2342] font-semibold text-sm">
              امکان ارسال سریع
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
