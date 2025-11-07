// src/components/ProductSidebar.jsx
"use client"; // این دستور برای اطمینان از سازگاری در صورت افزودن تعاملات در آینده ضروری است.
import { Filter, ChevronDown, Trash2 } from 'lucide-react';

const categories = [
    { label: "همه کالاها", type: "all" },
    { label: "پرده دومکانیزم", type: "duplex" },
    { label: "پرده زبرا", type: "zebra" },
    { label: "چاپی", type: "printed" },
    { label: "عادی", type: "normal" },
];

export default function ProductSidebar() {
    return (
        <aside className="w-full lg:w-1/4 p-4 lg:p-0 lg:pr-6 hidden lg:block text-right">
            
            {/* عنوان و دکمه حذف فیلترها */}
            <div className="pb-4 mb-6 flex flex-row-reverse items-center justify-between">
                <h3 className="text-xl font-bold text-[#3a3a3a] flex items-center">
                    فیلترها
                </h3>
                <button className="text-sm font-medium text-red-600 flex items-center hover:text-red-700 transition-colors">
                    <Trash2 size={16} className="ml-1" />
                    حذف فیلترها
                </button>
            </div>

            {/* بخش ۱: دسته‌بندی */}
            <div className="mb-6 border border-gray-200 rounded-lg p-4">
                <div className="flex flex-row-reverse justify-between items-center mb-4 cursor-pointer text-[#3a3a3a] font-bold">
                    <span>دسته‌بندی</span>
                    <ChevronDown size={18} className="text-[#246e72]" />
                </div>
                <div className="pr-2 space-y-2 text-gray-700">
                    {categories.map((cat) => (
                        <div 
                            key={cat.type} 
                            // 💡 استایل بهتر: استفاده از رنگ برند برای حالت فعال
                            className={`py-1 text-sm font-medium cursor-pointer transition-colors ${cat.type === 'duplex' ? 'text-[#246e72] font-extrabold border-r-2 border-[#f0a500] pr-2' : 'hover:text-[#246e72]'}`}
                        >
                            {cat.label}
                        </div>
                    ))}
                </div>
            </div>

            {/* بخش ۲: نوع خرید */}
            <div className="mb-6 border border-gray-200 rounded-lg p-4">
                <div className="flex flex-row-reverse justify-between items-center mb-4 cursor-pointer text-[#3a3a3a] font-bold">
                    <span>نوع خرید</span>
                    <ChevronDown size={18} className="text-[#246e72]" />
                </div>
                <div className="pr-2 space-y-2 text-gray-700">
                    <div className="flex flex-row-reverse items-center space-x-2 space-x-reverse text-sm">
                        {/* 💡 استایل چک‌باکس با رنگ برند */}
                        <input type="checkbox" id="installment" defaultChecked className="ml-2 w-4 h-4 text-[#246e72] border-gray-300 rounded focus:ring-[#246e72] cursor-pointer" />
                        <label htmlFor="installment">اقساط</label>
                    </div>
                    <div className="flex flex-row-reverse items-center space-x-2 space-x-reverse text-sm">
                        <input type="checkbox" id="cash" className="ml-2 w-4 h-4 text-[#246e72] border-gray-300 rounded focus:ring-[#246e72] cursor-pointer" />
                        <label htmlFor="cash">غیر اقساط</label>
                    </div>
                </div>
            </div>

            {/* بخش ۳: محدوده قیمت */}
            <div className="mb-6 border border-gray-200 rounded-lg p-4">
                <div className="flex flex-row-reverse justify-between items-center mb-4 cursor-pointer text-[#3a3a3a] font-bold">
                    <span>محدوده قیمت</span>
                    <ChevronDown size={18} className="text-[#246e72]" />
                </div>
                
                {/* شبیه‌سازی Range Slider */}
                <div className="px-2">
                    {/* 💡 استایل بهتر برای Range Slider */}
                    <input type="range" min="1000000" max="9000000" step="100000" defaultValue="4000000" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg focus:outline-none focus:ring-0 accent-[#f0a500]" />
                </div>
                
                {/* ورودی‌های قیمت */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="flex flex-col">
                        <input type="text" defaultValue="1,000,000" className="w-full p-2 text-center text-sm border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:ring-1 focus:ring-[#246e72] focus:outline-none" />
                        <span className="text-xs text-gray-500 mt-1">تومان</span>
                    </div>
                    <div className="flex flex-col">
                        <input type="text" defaultValue="9,000,000" className="w-full p-2 text-center text-sm border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:ring-1 focus:ring-[#246e72] focus:outline-none" />
                        <span className="text-xs text-gray-500 mt-1">تومان</span>
                    </div>
                </div>

                {/* 💡 استایل دکمه اعمال */}
                <button className="w-full mt-6 py-2 bg-[#246e72] text-white font-bold rounded-md hover:bg-[#1a5559] transition-colors">
                    اعمال
                </button>
            </div>
        </aside>
    );
}