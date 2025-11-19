// src/components/ProductList.jsx
"use client";
import { Star, ShoppingCart, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ... (داده‌های products و sortOptions بدون تغییر)
const products = [
  // داده‌های تکراری برای شبیه‌سازی محصولات
  {
    id: 1,
    name: "پرده شید مدل اسنو",
    price: "2,280,000",
    image: "/path/to/product1.jpg",
    rating: 4.5,
    slug: "product-1",
  },
  {
    id: 2,
    name: "پرده شید مدل آستو",
    price: "2,280,000",
    image: "/path/to/product2.jpg",
    rating: 4.2,
    slug: "product-2",
  },
  {
    id: 3,
    name: "پرده شید مدل آستو",
    price: "2,280,000",
    image: "/path/to/product3.jpg",
    rating: 4.8,
    slug: "product-3",
  },
  {
    id: 4,
    name: "پرده شید مدل اسنو",
    price: "2,280,000",
    image: "/path/to/product4.jpg",
    rating: 3.9,
    slug: "product-4",
  },
  {
    id: 5,
    name: "پرده شید مدل اسنو",
    price: "2,280,000",
    image: "/path/to/product5.jpg",
    rating: 4.1,
    slug: "product-5",
  },
  {
    id: 6,
    name: "پرده شید مدل آستو",
    price: "2,280,000",
    image: "/path/to/product6.jpg",
    rating: 4.7,
    slug: "product-6",
  },
  {
    id: 7,
    name: "پرده شید مدل آستو",
    price: "2,280,000",
    image: "/path/to/product7.jpg",
    rating: 4.4,
    slug: "product-7",
  },
  {
    id: 8,
    name: "پرده شید مدل اسنو",
    price: "2,280,000",
    image: "/path/to/product8.jpg",
    rating: 4.6,
    slug: "product-8",
  },
  {
    id: 9,
    name: "پرده شید مدل زبرا",
    price: "2,280,000",
    image: "/path/to/product9.jpg",
    rating: 4.3,
    slug: "product-9",
  },
];

const sortOptions = [
  { label: "مرتبط‌ترین", value: "relevant" },
  { label: "جدیدترین", value: "newest" },
  { label: "پربازدیدترین", value: "most-visited" },
  { label: "ارزان‌ترین", value: "cheapest" },
  { label: "گران‌ترین", value: "expensive" },
  { label: "پرفروش‌ها", value: "best-sellers" },
];


function ProductCard({ product }) {
  return (
    // 💡 ریسپانسیو: 1/2 عرض در موبایل، 1/3 در تبلت/لپ‌تاپ کوچک، 1/4 در دسکتاپ بزرگتر
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-3">
      <Link href={`/products/${product.slug}`} passHref>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#246e72] transform hover:scale-[1.01] cursor-pointer h-full flex flex-col">
          {/* بخش تصویر */}
          <div className="relative w-full pt-[100%]">
            <Image
              src={product.image}
              alt={product.name}
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />

            {/* رتبه بندی - موقعیت و استایل شیک‌تر */}
            <div className="absolute top-3 right-3 bg-white text-[#f0a500] text-sm font-extrabold py-1 px-3 rounded-lg flex items-center shadow-md border border-gray-100">
              <span className="ml-1">{product.rating}</span>
              <Star size={14} fill="currentColor" />
            </div>
          </div>

          {/* بخش محتوا */}
          <div className="p-4 text-right flex flex-col justify-between flex-grow">
            <div>
              {/* خطای تایتل طولانی را مدیریت می‌کند */}
              <h3 className="text-base font-bold text-[#3a3a3a] mb-2 line-clamp-2 hover:text-[#246e72] transition-colors">
                {product.name}
              </h3>

              <p className="text-sm text-gray-600">
                شروع قیمت از
                <strong className="font-extrabold text-[#246e72] text-lg mr-1">
                  {product.price}
                </strong>
                تومان
              </p>
            </div>

            {/* دکمه افزودن به سبد خرید - استایل رنگ برند */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation(); /* افزودن به سبد */
              }}
              className="mt-4 w-full flex flex-row-reverse items-center justify-center 
											                    bg-[#92d0c2] text-[#246e72] font-bold 
											                    hover:bg-[#246e72] hover:text-white transition-colors 
											                    py-2 px-4 rounded-lg text-sm shadow-md"
            >
              <span>افزودن به سبد خرید</span>
              <ShoppingCart size={16} className="mr-2" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ProductList() {
  const [selectedSort, setSelectedSort] = useState("relevant");

  return (
    <div className="w-full" dir="rtl">
      {/* نوار مرتب‌سازی - استایل نوار شیک‌تر */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-200">
        <div className="flex flex-col sm:flex-row-reverse justify-between items-start sm:items-center">
          {/* عنوان */}
          <h2 className="text-xl font-extrabold text-[#3a3a3a] mb-4 sm:mb-0 ml-4">
            محصولات پرده شید ({products.length} نتیجه)
          </h2>

          {/* گزینه‌های مرتب‌سازی (ترین‌ها) */}
          <div className="flex flex-row-reverse items-center text-sm w-full sm:w-auto">

           

            <div className="flex flex-wrap flex-row-reverse space-x-1 space-x-reverse overflow-x-auto">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedSort(option.value)}
                  className={`
                                        py-2 px-4 rounded-full transition-all duration-200 text-xs sm:text-sm font-medium whitespace-nowrap
                                        ${selectedSort === option.value
                      ? "bg-[#246e72] text-white shadow-lg shadow-[#246e72]/30 " // انتخاب شده
                      : "text-gray-600 bg-gray-100 hover:bg-gray-200" // عادی
                    }
                                    `}
                >
                  {option.label}
                </button>
              ))}
            </div>
             {/* **تغییرات اصلی: انتقال متن مرتب‌سازی به بیرون حلقه** */}
            <span className="ml-3 text-gray-700 font-bold hidden sm:block whitespace-nowrap">
              مرتب‌سازی بر اساس:
            </span>
          </div>
        </div>
      </div>

      {/* لیست محصولات */}
      {/* افزایش فاصله بین کارت ها */}
      <div className="flex flex-wrap -m-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* شبیه‌سازی pagination */}
      <div className="flex justify-center mt-12">
        <button className="py-2 px-6 border-2 border-[#246e72] text-[#246e72] font-bold rounded-lg hover:bg-[#246e72] hover:text-white transition-colors shadow-md">
          مشاهده {products.length} محصول بیشتر
        </button>
      </div>
    </div>
  );
}