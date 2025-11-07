"use client";

// src/app/products/[slug]/page.js
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ShoppingCart,
  Share2,
  Bookmark,
  ExternalLink,
  Minus,
  Plus,
  MessageCircle,
  Heart,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

// داده‌های استاتیک برای شبیه‌سازی
const productData = {
  name: "پرده شید مدل اسنو",
  category: "پرده شید",
  code: "۱۳۳۶۶۷",
  material: "جنس قاب آلمینیوم",
  washable: "پارچه قابل شستشو",
  warranty: "دارای اصالت",
  pricePerMeter: "۱۲۰,۰۰۰",
  price: "۲,۲۸۰,۰۰۰",
  description:
    "توضیحات تکمیلی: پرده زبرا طرح پله‌ای با رنگ‌های دلخواه و مورد پسند در دکوراسیون داخلی مدرن، محبوب و پرطرفدار است. این پرده با طراحی دو اهرم خود امکان عبور نور را کنترل می‌کند و به شما اجازه می‌دهد میزان روشنایی فضای داخلی را متناسب با نیاز و موقعیت تنظیم کنید. ترکیب رنگ طلایی و سفید، جلوه‌ای شیک و آرامش‌بخش به فضا می‌بخشد.",
  rating: 4.5,
  totalReviews: 1238,
  images: [
    "/path/to/main-image.jpg",
    "/path/to/thumb1.jpg",
    "/path/to/thumb2.jpg",
    "/path/to/thumb3.jpg",
    "/path/to/thumb4.jpg",
  ],
  comments: [
    {
      name: "علی رضایی",
      date: "۸ دی ۱۴۰۴",
      rating: 4,
      text: "پرده زبرا طرح پله‌ای با رنگ‌های دلخواه و مورد پسند در دکوراسیون داخلی مدرن، محبوب و پرطرفدار است. این پرده با طراحی دو اهرم خود امکان عبور نور را کنترل می‌کند و به شما اجازه می‌دهد میزان روشنایی فضای داخلی را متناسب با نیاز و موقعیت تنظیم کنید. ترکیب رنگ طلایی و سفید، جلوه‌ای شیک و آرامش‌بخش به فضا می‌بخشد.",
    },
    {
      name: "محمد تونا",
      date: "۸ دی ۱۴۰۴",
      rating: 5,
      text: "پرده زبرا طرح پله‌ای با رنگ‌های دلخواه و مورد پسند در دکوراسیون داخلی مدرن، محبوب و پرطرفدار است. این پرده با طراحی دو اهرم خود امکان عبور نور را کنترل می‌کند و به شما اجازه می‌دهد میزان روشنایی فضای داخلی را متناسب با نیاز و موقعیت تنظیم کنید. ترکیب رنگ طلایی و سفید، جلوه‌ای شیک و آرامش‌بخش به فضا می‌بخشد.",
    },
  ],
};

// کامپوننت مجزا برای نمایش رتبه بندی
function RatingStars({ rating }) {
  return (
    <div className="flex flex-row-reverse items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "text-[#f0a500]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function ProductDetailPage({ params }) {
  const { slug } = params;

  // شبیه‌سازی قیمت متغیر بر اساس تعداد متر
  const [meterCount, setMeterCount] = useState(1);
  const totalPrice = (
    parseFloat(productData.pricePerMeter.replace(/,/g, "")) * meterCount
  ).toLocaleString("fa-IR");

  return (
    <div className="min-h-screen bg-white font-['Vazirmatn']" dir="rtl">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-16 text-right">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#246e72]">
            خانه
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#246e72]">
            لیست محصولات
          </Link>
          <span className="mx-2">/</span>
          <span className="font-bold">{productData.category}</span>
        </div>

        {/* بخش اصلی محصول (سه ستونی در دسکتاپ) */}
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          {/* ستون ۱: گالری تصاویر (lg:w-1/2) */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {/* تصویر اصلی بزرگ */}
              <div className="col-span-2 relative aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={productData.images[0]}
                  alt={productData.name}
                  layout="fill"
                  objectFit="cover"
                />
                {/* دکمه‌های اشتراک و ذخیره */}
                <div className="absolute top-3 left-3 flex space-x-2 space-x-reverse">
                  <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Share2 size={18} />
                  </button>
                  <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Bookmark size={18} />
                  </button>
                </div>
              </div>
              {/* تصاویر کوچک */}
              {productData.images.slice(1, 4).map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer group"
                >
                  <Image
                    src={img}
                    alt={`${productData.name} - ${index}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* شبیه‌سازی دکمه "نمایش همه" روی یکی از تصاویر */}
                  {index === 2 && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button className="text-white text-sm font-bold flex items-center">
                        نمایش همه
                        <ExternalLink size={16} className="mr-1" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ستون ۲: قیمت، مشخصات و خرید (lg:w-1/4) */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="border border-gray-200 rounded-lg p-5 shadow-sm space-y-4">
              <h1 className="text-xl font-extrabold text-[#3a3a3a]">
                {productData.name}
              </h1>
              <div className="text-sm text-gray-600">
                <span className="ml-2 font-bold">{productData.category}</span> |
                <span className="mr-2">کد: {productData.code}</span>
              </div>

              {/* مشخصات کوتاه */}
              <div className="space-y-2 text-sm">
                <p className="flex justify-between border-b border-dotted pb-1">
                  <span>جنس قاب:</span> <span>{productData.material}</span>
                </p>
                <p className="flex justify-between border-b border-dotted pb-1">
                  <span>پارچه:</span> <span>{productData.washable}</span>
                </p>
                <p className="flex justify-between">
                  <span>گارانتی:</span> <span>{productData.warranty}</span>
                </p>
              </div>

              {/* قیمت و تعداد */}
              <div className="pt-4 border-t">
                <p className="text-xl font-extrabold text-[#246e72] mb-2">
                  {productData.price} تومان
                </p>
                <p className="text-xs text-gray-500">
                  قیمت درج شده برای هر متر مربع
                </p>

                {/* کادر تعداد متر */}
                <div className="flex items-center justify-between mt-4 bg-gray-50 p-3 rounded-lg border">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <button
                      onClick={() => setMeterCount((m) => Math.max(1, m - 1))}
                      className="p-1 bg-white border rounded-full text-[#246e72] hover:bg-gray-100"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="font-bold text-lg">{meterCount}</span>
                    <button
                      onClick={() => setMeterCount((m) => m + 1)}
                      className="p-1 bg-white border rounded-full text-[#246e72] hover:bg-gray-100"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    متر مربع
                  </span>
                </div>

                <p className="mt-3 text-lg font-extrabold text-[#f0a500]">
                  قیمت کل: {totalPrice} تومان
                </p>
              </div>

              {/* دکمه خرید */}
              <button className="w-full flex items-center justify-center bg-[#f0a500] text-white font-bold py-3 rounded-md hover:bg-[#d99500] transition-colors mt-4">
                <ShoppingCart size={20} className="mr-2" />
                افزودن به سبد خرید
              </button>

              <button className="w-full text-red-600 text-sm font-medium flex items-center justify-center hover:text-red-700 transition-colors pt-2">
                <MessageCircle size={16} className="ml-1" />
                گزارش مشکل
              </button>
            </div>
          </div>

          {/* ستون ۳: توضیحات و امتیاز (lg:w-1/4) */}
          <div className="w-full lg:w-1/4 space-y-6">
            {/* توضیحات تکمیلی */}
            <div className="border border-gray-200 rounded-lg p-5 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-[#3a3a3a] border-b pb-3 mb-3">
                توضیحات تکمیلی
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {productData.description}
              </p>
            </div>

            {/* نقد و بررسی */}
            <div className="border border-gray-200 rounded-lg p-5 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-[#3a3a3a] border-b pb-3 mb-3">
                ثبت امتیاز و دیدگاه
              </h2>

              {/* خلاصه امتیاز */}
              <div className="flex flex-row-reverse justify-between items-center text-sm">
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-extrabold text-[#246e72]">
                    {productData.rating}
                  </span>
                  <span className="text-gray-600">امتیاز کاربران</span>
                </div>

                <div className="flex flex-col items-end">
                  <RatingStars rating={productData.rating} />
                  <span className="text-gray-500 mt-1">
                    از {productData.totalReviews} دیدگاه
                  </span>
                </div>
              </div>

              {/* کادر ثبت دیدگاه */}
              <div className="pt-4 border-t">
                <textarea
                  rows="3"
                  placeholder="نظر خود را با دیگران در میان بگذارید..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#246e72] focus:border-[#246e72] resize-none text-sm"
                ></textarea>
                <button className="w-full mt-2 py-2 bg-[#92d0c2] text-[#246e72] font-bold rounded-md hover:bg-[#72b7a9] transition-colors">
                  ثبت دیدگاه
                </button>
              </div>
            </div>

            {/* لیست دیدگاه‌ها */}
            <div className="space-y-4">
              {productData.comments.map((comment, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 shadow-sm space-y-2"
                >
                  <div className="flex flex-row-reverse justify-between items-center">
                    <span className="font-bold text-[#3a3a3a]">
                      {comment.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {comment.date}
                    </span>
                  </div>
                  <RatingStars rating={comment.rating} />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {comment.text}
                  </p>
                  <div className="flex flex-row-reverse justify-start items-center space-x-3 space-x-reverse text-xs text-gray-500 pt-2 border-t">
                    <span className="flex items-center hover:text-red-500 cursor-pointer">
                      <Heart size={14} className="ml-1" /> پسندیدن (2)
                    </span>
                    <span className="flex items-center hover:text-[#246e72] cursor-pointer">
                      <CheckCircle size={14} className="ml-1" /> پاسخ
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
