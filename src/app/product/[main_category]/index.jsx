"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

import an1 from "@/assets/Group 16.png";
import an2 from "@/assets/Group 8.png";
import an3 from "@/assets/Group 28.png";
import an4 from "@/assets/Group 15.png";
import an5 from "@/assets/Group 16.png";

const productData۲ = {
  name: "پرده شید مدل اسنو",
  category: "پرده شید",
  main_category: {
    "name": "پرده",
    "slug": "pardeh"
  },
  sub_category: {
    "name": "پرده زبرا چاپی",
    "slug": "پرده-زبرا-چاپی"
  },
  code: "۱۳۳۶۶۷",
  fittings: "جنس قاب آلمینیوم",
  fabric_material: "پارچه قابل شستشو",
  warranty: "دارای اصالت",
  price_per_meter: "۱۲۰,۰۰۰",
  price: "۲,۲۸۰,۰۰۰",
  description:
    "توضیحات تکمیلی: پرده زبرا طرح پله‌ای با رنگ‌های دلخواه و مورد پسند در دکوراسیون داخلی مدرن، محبوب و پرطرفدار است. این پرده با طراحی دو اهرم خود امکان عبور نور را کنترل می‌کند و به شما اجازه می‌دهد میزان روشنایی فضای داخلی را متناسب با نیاز و موقعیت تنظیم کنید. ترکیب رنگ طلایی و سفید، جلوه‌ای شیک و آرامش‌بخش به فضا می‌بخشد.",
  average_rating: 4.5,
  reviews_count: 1238,
  images: [
    {"image":an1, "name":"test"},
    {"image":an2, "name":"test"},
    {"image":an3, "name":"test"},
    {"image":an4, "name":"test"},
    {"image":an5, "name":"test"}],
    reviews: [
    {
      name: "علی رضایی",
      create_at: "۸ دی ۱۴۰۴",
      rating: 4,
      comment: "پرده زبرا طرح پله‌ای با رنگ‌های دلخواه و مورد پسند در دکوراسیون داخلی مدرن، محبوب و پرطرفدار است. این پرده با طراحی دو اهرم خود امکان عبور نور را کنترل می‌کند و به شما اجازه می‌دهد میزان روشنایی فضای داخلی را متناسب با نیاز و موقعیت تنظیم کنید. ترکیب رنگ طلایی و سفید، جلوه‌ای شیک و آرامش‌بخش به فضا می‌بخشد.",
    },
    {
      name: "محمد تونا",
      create_at: "۸ دی ۱۴۰۴",
      rating: 5,
      comment: "پرده زبرا طرح پله‌ای با رنگ‌های دلخواه و مورد پسند در دکوراسیون داخلی مدرن، محبوب و پرطرفدار است. این پرده با طراحی دو اهرم خود امکان عبور نور را کنترل می‌کند و به شما اجازه می‌دهد میزان روشنایی فضای داخلی را متناسب با نیاز و موقعیت تنظیم کنید. ترکیب رنگ طلایی و سفید، جلوه‌ای شیک و آرامش‌بخش به فضا می‌بخشد.",
    },
  ],
};

// کامپوننت مجزا برای نمایش رتبه بندی (بدون تغییر)
function RatingStars({ rating }) {
  const starColor = "#f0a500";
  return (
    <div className="flex flex-row-reverse items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? `text-amber-500` : "text-gray-300"}
        />
      ))}
    </div>
  );
}

// ----------------------------------------------------------------
// **کامپوننت جدید: گالری تمام صفحه (Image Modal)**
// ----------------------------------------------------------------
function ImageModal({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const totalImages = images.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 sm:p-8"
      dir="rtl"
    >
      {/* دکمه بستن (X) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-20"
      >
        <X size={28} />
      </button>

      {/* عنوان محصول */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-white z-20 text-lg font-bold">
        {productData.name}
      </div>

      {/* محفظه اصلی عکس */}
      <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
        {/* دکمه ناوبری قبلی */}
        <button
          onClick={goToPrev}
          className="absolute right-0 sm:-right-12 p-4 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-white z-10"
          aria-label="عکس قبلی"
        >
          <ChevronRight size={30} />
        </button>

        {/* عکس بزرگ مرکزی */}
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex]['image']}
            alt={`تصویر ${currentIndex + 1} از ${productData.name}`}
            fill={true}
            sizes="100vw"
            style={{ objectFit: "contain" }} // از contain استفاده می‌کنیم تا کل عکس دیده شود
            priority
          />
        </div>

        {/* دکمه ناوبری بعدی */}
        <button
          onClick={goToNext}
          className="absolute left-0 sm:-left-12 p-4 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-white z-10"
          aria-label="عکس بعدی"
        >
          <ChevronLeft size={30} />
        </button>
      </div>

      {/* شورت‌کات Thumbnail ها در پایین (مشابه دیجی‌کالا) */}
      <div className="mt-6 flex justify-center space-x-3 space-x-reverse overflow-x-auto w-full max-w-5xl">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-16 h-16 rounded-md overflow-hidden cursor-pointer transition-all duration-200 flex-shrink-0 ${
              index === currentIndex
                ? "border-4 border-[#f0a500] shadow-lg"
                : "border-2 border-transparent hover:border-white/50"
            }`}
          >
            <Image
              src={img['image']}
              alt={`Thumbnail ${index + 1}`}
              fill={true}
              sizes="10vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* شماره عکس */}
      <div className="mt-3 text-sm text-white font-medium">
        {currentIndex + 1} از {totalImages}
      </div>
    </div>
  );
}
// ----------------------------------------------------------------
// **پایان کامپوننت Modal**
// ----------------------------------------------------------------

export default function ProductDetailPage({ productData }) {
  // const { slug } = params;
  console.log(productData)

  const [meterCount, setMeterCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // وضعیت مودال
  const [initialImageIndex, setInitialImageIndex] = useState(0); // ایندکس شروع مودال


  const totalPrice = productData.final_price

  // const totalPrice = (
  //   parseFloat(productData.price_per_meter.replace(/,/g, "")) * meterCount
  // ).toLocaleString("fa-IR");

  const openModal = (index) => {
    setInitialImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]" dir="rtl">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 pb-10 sm:pb-16 text-right">
        {/* Breadcrumb (بدون تغییر) */}
        <div className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
          <Link href="/" className="hover:text-[#246e72]">
            خانه
          </Link>
          {/* <span className="mx-1 sm:mx-2">/</span>
          <Link href="/products" className="hover:text-[#246e72]">
            لیست محصولات
          </Link> */}
          <span className="mx-1 sm:mx-2">/</span>
           <Link href={`/${productData.main_category['slug']}`} className="hover:text-[#246e72]">
            {productData.main_category['name']}
          </Link>

          <span className="mx-1 sm:mx-2">/</span>
           <Link href={`/${productData.main_category['slug']}/${productData.sub_category['slug']}`} className="hover:text-[#246e72]">
            {productData.sub_category['name']}
          </Link>

          <span className="mx-1 sm:mx-2">/</span>
          <span className="font-bold text-[#3a3a3a] text-sm">
            {productData.name}
          </span>
        </div>

        {/* ---------------------------------------------------- */}
        {/* ردیف ۱: گالری تصاویر (چینش شبیه تصویر ارسالی) */}
        {/* ---------------------------------------------------- */}
        <div className="w-full mb-6 lg:mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-3">
            {/* ستون چپ: عکس بزرگ عمودی (8 ستون از 12) */}
            {/* **قابلیت کلیک برای باز کردن مودال اضافه شد** */}
            <div
              className="col-span-2 md:col-span-4 lg:col-span-8 relative rounded-lg overflow-hidden shadow-xl border border-gray-100 cursor-pointer"
              onClick={() => openModal(4)} // عکس زبرا (اندیس ۴)
            >
              <Image
                src={productData.gallery[4]['image']}
                alt="پرده زبرا بزرگ"
                fill={true}
                sizes="(max-width: 1024px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
                priority
              />
              {/* دکمه‌های اشتراک و ذخیره - بالای عکس بزرگ عمودی */}
              <div className="absolute top-3 left-3 flex space-x-2 space-x-reverse z-10">
                <button
                  className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors text-gray-700 shadow-md backdrop-blur-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Share2 size={18} />
                </button>
                <button
                  className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors text-[#246e72] shadow-md backdrop-blur-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Bookmark size={18} fill="currentColor" />
                </button>
              </div>
            </div>

            {/* ستون راست: عکس‌های کوچک‌تر (4 ستون از 12) */}
            <div className="col-span-2 md:col-span-2 lg:col-span-4 grid grid-cols-2 gap-3">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md border border-gray-100 cursor-pointer"
                  onClick={() => openModal(index)} // باز کردن مودال با کلیک روی هر عکس
                >
                  <Image
                    src={productData.gallery[index]['image']}
                    alt={`گالری ${index + 1}`}
                    fill={true}
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    style={{ objectFit: "cover" }}
                    priority={index < 2}
                  />
                  {/* دکمه "نمایش همه" روی عکس سوم */}
                  {index === 2 && (
                    <div
                      className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity hover:bg-black/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(index);
                      }}
                    >
                      <button className="text-white text-sm font-bold flex items-center bg-black/40 p-3 rounded-xl backdrop-blur-sm hover:bg-black/60 transition-colors">
                        <ExternalLink size={16} className="ml-1" />
                        نمایش همه
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* ردیف ۲: محتوای اصلی و خرید (بدون تغییر) */}
        {/* ---------------------------------------------------- */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* ستون ۱ (توضیحات و نظرات) */}
          <div className="w-full lg:w-7/12 space-y-4 sm:space-y-6 order-1">
            {/* توضیحات محصول */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm space-y-3 sm:space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-[#3a3a3a] border-b border-gray-200 pb-3 mb-3">
                توضیحات تکمیلی
              </h2>
              <h1 className="text-lg sm:text-xl font-extrabold text-[#3a3a3a] leading-relaxed">
                {productData.name}
              </h1>
              <div className="text-xs sm:text-sm text-gray-600">
                <span className="ml-2 font-bold">{productData.category}</span> |
                <span className="mr-2">کد: {productData.code}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-normal sm:leading-loose whitespace-pre-wrap">
                {productData.description}
              </p>
            </div>

            {/* بخش نقد و بررسی و دیدگاه‌ها */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm space-y-3 sm:space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-[#3a3a3a] border-b border-gray-200 pb-3 mb-3">
                ثبت امتیاز و دیدگاه
              </h2>
              <div className="flex flex-row-reverse justify-between items-center text-sm">
                <div className="flex flex-col items-end">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#246e72]">
                    {productData.average_rating}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600">
                    امتیاز کاربران
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <RatingStars rating={productData.rating} />
                  <span className="text-xs sm:text-sm text-gray-500 mt-1">
                    از {productData.reviews_count} دیدگاه
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <textarea
                  rows="3"
                  placeholder="نظر خود را با دیگران در میان بگذارید..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#246e72] focus:border-[#246e72] resize-none text-xs sm:text-sm placeholder-gray-500"
                ></textarea>
                <button className="w-full mt-2 py-2 bg-[#92d0c2] text-[#246e72] font-bold rounded-md hover:bg-[#72b7a9] transition-colors shadow-sm text-sm">
                  ثبت دیدگاه
                </button>
              </div>
            </div>

            {/* لیست دیدگاه‌ها */}
            <div className="space-y-4">
              {productData.reviews.length > 0  && productData.reviews.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm space-y-2"
                >
                  <div className="flex flex-row-reverse justify-between items-center">
                    <span className="font-extrabold text-[#3a3a3a] text-xs sm:text-sm">
                      {comment.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {comment.create_at}
                    </span>
                  </div>
                  <RatingStars rating={comment.rating} />
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-2">
                    {comment.comment}
                  </p>
                  <div className="flex flex-row-reverse justify-start items-center space-x-4 space-x-reverse text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span className="flex items-center hover:text-red-500 cursor-pointer transition-colors">
                      <Heart size={14} className="ml-1" /> پسندیدن (2)
                    </span>
                    <span className="flex items-center hover:text-[#246e72] cursor-pointer transition-colors">
                      <CheckCircle size={14} className="ml-1" /> پاسخ
                    </span>
                  </div>
                </div>
              ))}
            </div>
          
          
          </div>

          {/* ستون ۲ (قیمت و خرید) */}
          <div className="w-full lg:w-5/12 space-y-4 sm:space-y-6 order-2">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-lg lg:sticky lg:top-6 space-y-3 sm:space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-[#3a3a3a] border-b border-gray-200 pb-3 mb-3">
                مشخصات فنی
              </h2>
              <div className="space-y-2 text-xs sm:text-sm pt-2">
                <p className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                  <span className="text-gray-600">جنس قاب:</span>
                  <span className="font-medium text-[#3a3a3a]">
                    {productData.fittings}
                  </span>
                </p>
                <p className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                  <span className="text-gray-600">پارچه:</span>
                  <span className="font-medium text-[#3a3a3a]">
                    {productData.fabric_material}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">گارانتی:</span>
                  <span className="font-medium text-[#3a3a3a]">
                    {productData.warranty}
                  </span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-1">
                  قیمت درج شده برای هر متر مربع
                </p>
                <p className="text-xl sm:text-2xl font-extrabold text-[#246e72] mb-2">
                  {productData.price_per_meter} تومان
                </p>
                <div className="flex items-center justify-between mt-3 sm:mt-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <button
                      onClick={() => setMeterCount((m) => Math.max(1, m - 1))}
                      className="p-1.5 bg-white border border-gray-300 rounded-full text-[#246e72] hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={meterCount <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-extrabold text-lg sm:text-xl text-[#3a3a3a]">
                      {meterCount}
                    </span>
                    <button
                      onClick={() => setMeterCount((m) => m + 1)}
                      className="p-1.5 bg-white border border-gray-300 rounded-full text-[#246e72] hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    متر مربع
                  </span>
                </div>
                <p className="mt-3 text-base sm:text-lg font-extrabold text-[#f0a500] text-center p-2 rounded-md bg-[#fef5e6]">
                  قیمت کل: {totalPrice} تومان
                </p>
              </div>
              <button className="w-full flex items-center justify-center bg-[#f0a500] text-white font-bold py-3 rounded-md hover:bg-[#d99500] transition-colors shadow-lg shadow-[#f0a500]/30 mt-4 text-sm sm:text-base">
                <ShoppingCart size={20} className="mr-2" />
                افزودن به سبد خرید
              </button>
              <button className="w-full text-red-600 text-xs sm:text-sm font-medium flex items-center justify-center hover:text-red-700 transition-colors pt-2">
                <MessageCircle size={16} className="ml-1" />
                گزارش مشکل
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* **کامپوننت Modal در پایین صفحه (فقط در صورت نیاز نمایش داده می‌شود)** */}
      {isModalOpen && (
        <ImageModal
          images={productData.gallery}
          initialIndex={initialImageIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
