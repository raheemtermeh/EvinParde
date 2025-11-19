import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MessageSquare, ArrowLeft, ArrowRight } from "lucide-react";

// مسیرهای فرضی برای تصاویر
import mainCurtain from "../../assets/Group 11.png";
import sideCurtain1 from "../../assets/Group 11.png";
import sideCurtain2 from "../../assets/Group 11.png";
import saleShid from "../../assets/Group 11.png";
import saleZebra from "../../assets/Group 11.png";

// داده‌های شبیه‌سازی شده
const productPlaceholder = {
  title: "بهترین رنگ پرده",
  description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
  reviewCount: 24,
  link: "#",
};

const latestProducts = Array(4).fill(productPlaceholder);
const mostVisitedProducts = Array(4).fill(productPlaceholder);

// ----------------------------------------------------------------
// کامپوننت کارت محصول (ProductCard)
// ----------------------------------------------------------------
const ProductCard = ({ product, index }) => {
  // فرض می‌کنیم هر کارت یک عکس placeholder دارد
  const imageSrc = product.image || mainCurtain;

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex-shrink-0 p-3">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden text-right hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-base font-extrabold text-[#3a3a3a]">
            {product.title}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500 pt-1 border-t border-gray-100">
            <Link
              href={product.link}
              className="font-bold text-[#246e72] hover:text-[#1a5559] transition-colors flex items-center"
            >
              نمایش بیشتر <ArrowLeft size={12} className="mr-1" />
            </Link>
            <span className="flex items-center">
              {product.reviewCount}{" "}
              <MessageSquare size={14} className="ml-1 text-[#f0a500]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------
// کامپوننت باکس فروش ویژه (SaleBox)
// ----------------------------------------------------------------
const SaleBox = ({ title, type, image, colorClass, isReverse = false }) => {
  const textColor =
    colorClass === "bg-[#f0a500]" ? "text-[#3a3a3a]" : "text-white";
  const buttonClass =
    colorClass === "bg-[#f0a500]"
      ? "bg-white text-[#3a3a3a] hover:bg-gray-100"
      : "bg-white/90 text-[#3a3a3a] hover:bg-white";

  return (
    <div
      className={`w-full md:w-1/2 h-56 rounded-xl overflow-hidden shadow-2xl relative ${colorClass} p-6 flex items-center ${
        isReverse ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`relative h-full w-1/3 flex-shrink-0 ${
          isReverse ? "mr-4" : "ml-4"
        }`}
      >
        {/* Image Component - از فیلد Image ورودی استفاده کنید */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="33vw"
          style={{ objectFit: "cover" }}
          className="rounded-lg shadow-xl"
        />
      </div>

      <div
        className={`flex flex-col ${
          isReverse ? "items-start" : "items-end"
        } justify-center h-full w-2/3 ${textColor}`}
      >
        <h3 className="text-xl sm:text-3xl font-extrabold mb-1 drop-shadow-md">
          {title} <span className="text-sm font-normal block">{type}</span>
        </h3>
        <Link
          href="#"
          className={`mt-3 py-2 px-6 rounded-full font-bold text-sm transition-colors ${buttonClass} shadow-lg`}
        >
          نمایش همه
        </Link>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------
// کامپوننت اصلی صفحه (page)
// ----------------------------------------------------------------
const page = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen" dir="rtl">
        {/* -------------------- بخش ۱: گالری بزرگ -------------------- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* ستون راست (8/12 - عکس بزرگ زبرا) */}
            <div className="col-span-1 md:col-span-8 relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={mainCurtain}
                alt="بهترین پرده"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ objectFit: "cover" }}
                priority
              />
              {/* پوشش سیاه و سفید و محتوای روی عکس */}
              <div className="absolute inset-0 bg-black/5 flex flex-col justify-end p-6 text-white text-right">
                <h2 className="text-2xl sm:text-4xl font-extrabold mb-2 drop-shadow-lg">
                  بهترین پرده تا ۲۰ میلیون
                </h2>
                <p className="text-sm font-medium drop-shadow-md">
                  لک ایپسوم متن ساختگی | تاریخ انتشار: ۱۳ دی ۱۴۰۴
                </p>
                <div className="flex justify-end mt-2 space-x-2 space-x-reverse">
                  <span className="p-1 bg-white/20 rounded-full backdrop-blur-sm">
                    <Star size={16} fill="#f0a500" className="text-[#f0a500]" />
                  </span>
                  <span className="p-1 bg-white/20 rounded-full backdrop-blur-sm">
                    <MessageSquare size={16} />
                  </span>
                </div>
              </div>
            </div>

            {/* ستون چپ (4/12 - گالری کوچک) */}
            <div className="col-span-1 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
              {[sideCurtain1, sideCurtain2, sideCurtain1, sideCurtain2].map(
                (img, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"
                  >
                    <Image
                      src={img}
                      alt={`گالری کوچک ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-3 text-white text-right transition-opacity group-hover:bg-black/20">
                      <h4 className="text-sm font-bold">بهترین رنگ پرده</h4>
                      <p className="text-xs">
                        لورم ایپسوم متن ساختگی با تولید سادگی ...
                      </p>
                      <Link
                        href="#"
                        className="mt-1 text-[#f0a500] text-xs font-bold flex items-center justify-end hover:text-white transition-colors"
                      >
                        نمایش بیشتر <ArrowLeft size={12} className="mr-1" />
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* -------------------- بخش ۲: محصولات جدید -------------------- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-extrabold text-[#3a3a3a] mb-6 text-right border-b-2 border-gray-200 pb-2">
            جدید ترین ها
          </h2>
          <div className="flex overflow-x-auto -mx-3 pb-4 space-x-3 space-x-reverse snap-x">
            {latestProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2 space-x-reverse">
            <span className="w-2 h-2 bg-[#246e72] rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </section>

        {/* -------------------- بخش ۳: فروش ویژه -------------------- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row-reverse gap-4">
            <SaleBox
              title="فروش ویژه"
              type="شید"
              image={saleShid}
              colorClass="bg-[#f0a500]"
              isReverse={false}
            />
            <SaleBox
              title="فروش ویژه"
              type="زبرا"
              image={saleZebra}
              colorClass="bg-[#246e72]"
              isReverse={true}
            />
          </div>
        </section>

        {/* -------------------- بخش ۴: محصولات پربازدید -------------------- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-extrabold text-[#3a3a3a] mb-6 text-right border-b-2 border-gray-200 pb-2">
            پربازدیدترین ها
          </h2>
          <div className="flex overflow-x-auto -mx-3 pb-4 space-x-3 space-x-reverse snap-x">
            {mostVisitedProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2 space-x-reverse">
            <span className="w-2 h-2 bg-[#246e72] rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
