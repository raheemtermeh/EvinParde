// src/components/ProductSidebar.jsx
"use client";
import { Filter, ChevronDown, Trash2, ChevronUp } from 'lucide-react';
import { useState } from 'react'; // اضافه کردن useState برای مدیریت وضعیت باز و بسته شدن

const categories = [
    { label: "همه کالاها", type: "all" },
    { label: "پرده دومکانیزم", type: "duplex" },
    { label: "پرده زبرا", type: "zebra" },
    { label: "چاپی", type: "printed" },
    { label: "عادی", type: "normal" },
];

// تعریف کامپوننت Dropdown Item برای مدیریت وضعیت باز و بسته شدن
function FilterDropdown({ title, children, defaultOpen = true }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const ChevronIcon = isOpen ? ChevronUp : ChevronDown;

    return (
        <div className="mb-6 border border-gray-200 rounded-xl shadow-sm bg-white/70">
            {/* هدر دراپ‌داون */}
            <div
                className={`flex flex-row-reverse justify-between items-center p-4 cursor-pointer transition-colors duration-200 ${isOpen ? 'bg-gray-50 rounded-t-xl' : 'hover:bg-gray-100 rounded-xl'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-extrabold text-[#3a3a3a]">{title}</span>
                <ChevronIcon size={20} className={`text-[#246e72] transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
            </div>

            {/* محتوای دراپ‌داون */}
            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 border-t border-gray-100">
                    {children}
                </div>
            </div>
        </div>
    );
}


export default function ProductSidebar() {
    // فرض می‌کنیم دسته‌بندی فعلی، 'duplex' است
    const [selectedCategory, setSelectedCategory] = useState('duplex');

    return (
        <aside className="w-full lg:w-1/4 p-4 lg:p-0 lg:pr-8 hidden lg:block text-right" dir="rtl">

            {/* هدر اصلی سایدبار */}
            <div className="pb-4 mb-6 flex flex-row-reverse items-center justify-between border-b-2 border-[#246e72]">
                <button className="text-sm font-bold text-red-600 flex items-center hover:text-red-700 transition-colors py-1 px-2 rounded-md hover:bg-red-50">
                    <Trash2 size={16} className="ml-1" />
                    حذف فیلترها
                </button>   <h3 className="text-xl font-extrabold text-[#246e72] flex items-center">
                    <Filter size={24} className="ml-2 text-[#f0a500]" /> {/* آیکون فیلتر با رنگ طلایی */}
                    فیلتر
                </h3>

            </div>

            {/* بخش ۱: دسته‌بندی */}
            <FilterDropdown title="دسته‌بندی">
                <div className="pr-2 space-y-3 text-gray-700">
                    {categories.map((cat) => (
                        <div
                            key={cat.type}
                            onClick={() => setSelectedCategory(cat.type)}
                            className={`py-1 text-sm font-medium cursor-pointer transition-all duration-150 relative pr-3 
                                ${cat.type === selectedCategory
                                    ? 'text-[#246e72] font-extrabold after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-full after:bg-[#f0a500] after:rounded-r-md'
                                    : 'hover:text-[#246e72]/80'
                                }`}
                        >
                            {cat.label}
                        </div>
                    ))}
                </div>
            </FilterDropdown>

            {/* بخش ۲: نوع خرید */}
            <FilterDropdown title="نوع خرید" defaultOpen={false}>
                <div className="pr-2 space-y-3 text-gray-700">
                    <div className="flex flex-row-reverse items-center space-x-2 space-x-reverse text-sm">
                        <input type="checkbox" id="installment" defaultChecked
                            className="ml-2 w-4 h-4 text-[#246e72] border-gray-400 rounded focus:ring-[#f0a500] accent-[#246e72] cursor-pointer" />
                        <label htmlFor="installment" className="cursor-pointer">فقط اقساط</label>
                    </div>
                    <div className="flex flex-row-reverse items-center space-x-2 space-x-reverse text-sm">
                        <input type="checkbox" id="cash"
                            className="ml-2 w-4 h-4 text-[#246e72] border-gray-400 rounded focus:ring-[#f0a500] accent-[#246e72] cursor-pointer" />
                        <label htmlFor="cash" className="cursor-pointer">فقط غیر اقساط</label>
                    </div>
                </div>
            </FilterDropdown>

            {/* بخش ۳: محدوده قیمت */}
            <FilterDropdown title="محدوده قیمت">
                {/* شبیه‌سازی Range Slider */}
                <div className="px-2">
                    {/* Range Slider با رنگ برند */}
                    <input type="range" min="1000000" max="9000000" step="100000" defaultValue="4000000"
                        className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer range-lg focus:outline-none focus:ring-0 accent-[#f0a500]" />
                </div>

                {/* ورودی‌های قیمت */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-center">
                    <div className="flex flex-col border border-gray-200 rounded-lg p-2 bg-gray-50">
                        <input type="text" defaultValue="1,000,000"
                            className="w-full text-center text-sm font-bold text-[#3a3a3a] bg-transparent focus:outline-none" />
                        <span className="text-xs text-gray-500 mt-1">حداقل (تومان)</span>
                    </div>
                    <div className="flex flex-col border border-gray-200 rounded-lg p-2 bg-gray-50">
                        <input type="text" defaultValue="9,000,000"
                            className="w-full text-center text-sm font-bold text-[#3a3a3a] bg-transparent focus:outline-none" />
                        <span className="text-xs text-gray-500 mt-1">حداکثر (تومان)</span>
                    </div>
                </div>

                {/* دکمه اعمال */}
                <button className="w-full mt-6 py-2 bg-[#246e72] text-white font-bold rounded-xl hover:bg-[#1a5559] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.01]">
                    اعمال فیلتر قیمت
                </button>
            </FilterDropdown>

            {/* Placeholder برای فیلترهای دیگر (مثلا رنگ) */}
            <FilterDropdown title="رنگ">
                <div className="flex flex-row-reverse flex-wrap gap-2 justify-end">
                    {['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#000000', '#ffffff'].map((color, index) => (
                        <div
                            key={index}
                            className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform duration-150 hover:scale-110 ${color === '#ffffff' ? 'border-gray-400' : 'border-transparent'}`}
                            style={{ backgroundColor: color }}
                            aria-label={`رنگ ${color}`}
                        >
                            {/* شبیه‌سازی انتخاب رنگ */}
                            {index === 3 && (
                                <div className="w-full h-full rounded-full border-2 border-[#f0a500] ring-2 ring-white/50"></div>
                            )}
                        </div>
                    ))}
                </div>
            </FilterDropdown>

        </aside>
    );
}