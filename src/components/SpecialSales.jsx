// src/components/SpecialSales.jsx
"use client";
import { ArrowLeft, Star, ShoppingCart, Clock } from "lucide-react";
import Image from "next/image";

const specialProducts = [
  {
    id: 1,
    name: "پرده شید مدل اسنو",
    price: "2,280,000",
    image: "https://picsum.photos/400/400?random=11",
    rating: 4.5,
    discount: "۱۳٪",
  },
  {
    id: 2,
    name: "پرده شید مدل آستو",
    price: "2,280,000",
    image: "https://picsum.photos/400/400?random=12",
    rating: 4.5,
    discount: "۱۳٪",
    timer: "۰۵:۱۱:۱۵",
  },
  {
    id: 3,
    name: "پرده شید مدل اسنو",
    price: "2,280,000",
    image: "https://picsum.photos/400/400?random=13",
    rating: 4.5,
    discount: "۱۳٪",
  },
  {
    id: 4,
    name: "پرده شید مدل آستو",
    price: "2,280,000",
    image: "https://picsum.photos/400/400?random=14",
    rating: 4.5,
    discount: "۱۳٪",
  },
];

function SpecialProductCard({ product }) {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-2">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
        {/* تصویر محصول */}
        <div className="relative w-full pt-[100%]">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />

          {/* برچسب تخفیف */}
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
            {product.discount} تخفیف
          </div>

          {/* تایمر */}
          {product.timer && (
            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold py-1 px-2 rounded-full flex items-center shadow-md gap-1">
              <Clock size={14} />
              <span className="font-extrabold">{product.timer}</span>
            </div>
          )}

          {/* رتبه بندی */}
          <div className="absolute bottom-3 right-3 bg-white text-[#f0a500] text-sm font-bold py-1 px-2 rounded-full flex items-center shadow-md">
            <span className="ml-1">{product.rating}</span>
            <Star size={16} fill="currentColor" />
          </div>
        </div>

        {/* محتوا */}
        <div className="p-4 text-right">
          <h3 className="text-lg font-semibold text-[#3a3a3a] mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            <strong className="font-extrabold text-red-600 line-through ml-2">
              ۲,۹۸۰,۰۰۰
            </strong>
            <strong className="font-extrabold text-[#246e72]">
              {product.price}
            </strong>{" "}
            تومان
          </p>

          {/* دکمه افزودن به سبد خرید */}
          <button className="w-full flex flex-row-reverse items-center justify-center bg-[#246e72] hover:bg-[#1e5a5d] text-white transition-colors py-2 px-4 rounded-lg text-sm font-medium shadow-md">
            <span>افزودن به سبد خرید</span>
            <ShoppingCart size={16} className="mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SpecialSales() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16" dir="rtl">
      <div className="flex flex-row-reverse justify-between items-center mb-6">
        <button className="flex flex-row-reverse items-center bg-[#f0e6d6] border border-gray-300 text-[#3a3a3a] hover:bg-[#e6d9c3] transition-colors py-2 px-4 rounded-md text-sm font-medium shadow-sm">
          <span>نمایش همه</span>
          <ArrowLeft size={16} className="mr-2" />
        </button>
                <h2 className="text-2xl font-bold text-[#3a3a3a]">فروش ویژه</h2>

      </div>

      {/* لیست محصولات */}
      <div className="flex flex-wrap -m-2">
        {specialProducts.map((product) => (
          <SpecialProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
