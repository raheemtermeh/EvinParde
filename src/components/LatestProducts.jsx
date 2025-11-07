// src/components/LatestProducts.jsx
"use client";
import { ArrowLeft, Star, ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "پرده شید مدل اسنو",
    price: "2,280,000",
    image: "https://picsum.photos/400/400?random=1",
    rating: 4.5,
  },
  {
    id: 2,
    name: "پرده شید مدل آستو",
    price: "2,280,000",
    image: "https://picsum.photos/400/400?random=2",
    rating: 4.2,
  },
  {
    id: 3,
    name: "پرده شید مدل آستو",
    price: "2,280,000",
    image: "https://picsum.photos/400/400?random=3",
    rating: 4.8,
  },
  {
    id: 4,
    name: "پرده شید مدل اسنو",
    price: "2,280,000",
    image: "https://picsum.photos/400/400?random=4",
    rating: 4.6,
  },
];

function ProductCard({ product, index }) {
  const isMiddle = index === 1 || index === 2; // آیتم های وسطی برای کمی استایل ویژه

  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-3">
      <div
        className={`bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] border ${
          isMiddle ? "border-[#246e72]" : "border-gray-100"
        }`}
      >
        {/* تصویر محصول */}
        <div className="relative w-full pt-[100%]">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="brightness-95"
          />
          {/* رتبه بندی */}
          <div className="absolute top-3 right-3 bg-[#f0a500] text-white text-xs font-bold py-1 px-2 rounded-full flex items-center">
            <span className="ml-1">{product.rating}</span>
            <Star size={12} fill="currentColor" />
          </div>
        </div>

        {/* محتوا */}
        <div className="p-4 text-right">
          <h3
            className={`text-base font-semibold mb-2 ${
              isMiddle ? "text-[#246e72]" : "text-[#3a3a3a]"
            }`}
          >
            {product.name}
          </h3>

          <p className="text-sm text-gray-600">
            شروع قیمت از{" "}
            <strong className="font-extrabold text-[#246e72]">
              {product.price}
            </strong>{" "}
            تومان
          </p>

          {/* دکمه افزودن به سبد خرید */}
          <button className="mt-4 w-full flex flex-row-reverse items-center justify-center bg-[#246e72]/10 text-[#246e72] border border-[#246e72] hover:bg-[#246e72] hover:text-white transition-colors py-2 px-4 rounded-md text-sm font-medium shadow-md">
            <span className="ml-2">افزودن به سبد خرید</span>
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LatestProducts() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16" dir="rtl">
      <div className="flex flex-row-reverse justify-between items-center mb-6">
        {/* دکمه نمایش همه */}
        <button className="flex flex-row-reverse items-center bg-transparent border border-gray-300 text-[#3a3a3a] hover:bg-gray-100 transition-colors py-2 px-4 rounded-md text-sm font-medium shadow-sm">
          <span>نمایش همه</span>
          <ArrowLeft size={16} className="ml-2" />
        </button>

        {/* عنوان */}
        <h2 className="text-2xl font-bold text-[#3a3a3a]">جدیدترین محصولات</h2>
      </div>

      {/* لیست محصولات */}
      <div className="flex flex-wrap -m-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
