"use client";
// src/components/ProductList.jsx
import { Star, ShoppingCart, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // برای لینک دادن به صفحه جزئیات

const products = [
    // داده‌های تکراری برای شبیه‌سازی محصولات
    { id: 1, name: "پرده شید مدل اسنو", price: "2,280,000", image: "/path/to/product1.jpg", rating: 4.5, slug: 'product-1' },
    { id: 2, name: "پرده شید مدل آستو", price: "2,280,000", image: "/path/to/product2.jpg", rating: 4.5, slug: 'product-2' },
    { id: 3, name: "پرده شید مدل آستو", price: "2,280,000", image: "/path/to/product3.jpg", rating: 4.5, slug: 'product-3' },
    { id: 4, name: "پرده شید مدل اسنو", price: "2,280,000", image: "/path/to/product4.jpg", rating: 4.5, slug: 'product-4' },
    { id: 5, name: "پرده شید مدل اسنو", price: "2,280,000", image: "/path/to/product5.jpg", rating: 4.5, slug: 'product-5' },
    { id: 6, name: "پرده شید مدل آستو", price: "2,280,000", image: "/path/to/product6.jpg", rating: 4.5, slug: 'product-6' },
    { id: 7, name: "پرده شید مدل آستو", price: "2,280,000", image: "/path/to/product7.jpg", rating: 4.5, slug: 'product-7' },
    { id: 8, name: "پرده شید مدل اسنو", price: "2,280,000", image: "/path/to/product8.jpg", rating: 4.5, slug: 'product-8' },
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
    // 💡 ریسپانسیو: 1/2 عرض در موبایل، 1/3 در تبلت، 1/4 در دسکتاپ
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <Link href={`/products/${product.slug}`} passHref>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer h-full flex flex-col">
                
                {/* بخش تصویر */}
                <div className="relative w-full pt-[100%]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                    />
                    
                    {/* رتبه بندی */}
                    <div className="absolute bottom-3 right-3 bg-white text-[#f0a500] text-sm font-bold py-1 px-2 rounded-full flex items-center shadow-md">
                        <span className="ml-1">{product.rating}</span>
                        <Star size={16} fill="currentColor" />
                    </div>
                </div>

                {/* بخش محتوا */}
                <div className="p-4 text-right flex flex-col justify-between flex-grow">
                    <div>
                        <h3 className="text-base font-semibold text-[#3a3a3a] mb-2">{product.name}</h3>
                        
                        <p className="text-sm text-gray-600">
                            شروع قیمت از <strong className="font-extrabold text-[#246e72]">{product.price}</strong> تومان
                        </p>
                    </div>

                    {/* دکمه افزودن به سبد خرید */}
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); /* افزودن به سبد */ }} 
                            className="mt-4 w-full flex flex-row-reverse items-center justify-center bg-[#e0f1e0] text-[#246e72] border border-[#246e72] hover:bg-[#246e72] hover:text-white transition-colors py-2 px-4 rounded-md text-sm font-medium">
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
    return (
        <div className="w-full lg:w-3/4 p-4 lg:p-8">
            
            {/* نوار مرتب‌سازی */}
            <div className="flex flex-col sm:flex-row-reverse justify-between items-start sm:items-center pb-4 border-b border-gray-200 mb-8">
                
                {/* عنوان و تعداد محصولات */}
                <h2 className="text-lg font-bold text-[#3a3a3a] mb-3 sm:mb-0">لیست محصولات</h2>

                {/* گزینه‌های مرتب‌سازی */}
                <div className="flex flex-row-reverse items-center text-sm">
                    <span className="ml-3 text-gray-700 font-semibold">مرتب‌سازی:</span>
                    <div className="flex flex-wrap flex-row-reverse space-x-3 space-x-reverse">
                        {sortOptions.map((option, index) => (
                            <button 
                                key={option.value}
                                className={`py-1 px-3 rounded-full transition-colors ${option.value === 'relevant' ? 'bg-[#246e72] text-white font-bold' : 'text-gray-700 hover:text-[#246e72]'}`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* لیست محصولات */}
            <div className="flex flex-wrap -m-2">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* شبیه‌سازی pagination */}
            <div className="flex justify-center mt-12">
                 <button className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">مشاهده بیشتر</button>
            </div>
        </div>
    );
}