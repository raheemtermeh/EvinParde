"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Define service data
const servicesData = [
  {
    id: "installation",
    title: "نصب پرده",
    description: "خدمات نصب حرفه‌ای انواع پرده با کیفیت بالا",
    content:
      "خدمات نصب پرده با استفاده از بهترین متریال‌ها و نصابان مجرب. ما تمامی انواع پرده را با دقت و سرعت بالا نصب می‌کنیم. نصابان ما دارای گواهینامه و تجربه بالا در نصب انواع پرده هستند و از ابزارهای حرفه‌ای برای انجام کار استفاده می‌کنند.",
  },
  {
    id: "repair",
    title: "تعمیر پرده",
    description: "تعمیر انواع پرده‌های خریداری شده از ما",
    content:
      "تعمیر پرده‌های داربست، تعمیر قطعات پرده، جایگزینی قطعات فرسوده و تنظیم مجدد سیستم کشش پرده. تیم فنی ما با استفاده از قطعات اوریجینال و تخصص خود، پرده شما را به حالت اولیه بازمی‌گرداند.",
  },
  {
    id: "design",
    title: "طراحی سفارشی",
    description: "طراحی پرده متناسب با سلیقه و فضای شما",
    content:
      "تیم طراحی متخصص ما با توجه به فضای منزل یا دفتر کار شما، نورپردازی، رنگ دیوارها و سلیقه شخصی شما، طرح‌های منحصر به فردی ارائه می‌دهد. ما از جدیدترین مدل‌های جهانی پرده برای طراحی استفاده می‌کنیم.",
  },
  {
    id: "consultation",
    title: "مشاوره رایگان",
    description: "مشاوره تخصصی در زمینه انتخاب پرده",
    content:
      "مشاوره رایگان توسط کارشناسان مجرب در زمینه انتخاب پرده مناسب با توجه به نورپردازی، فضای اتاق و سلیقه شما. مشاوران ما با توجه به نیازهای شما، بهترین گزینه را پیشنهاد می‌دهند و راهنمایی‌های لازم را ارائه می‌دهند.",
  },
  {
    id: "maintenance",
    title: "نگهداری و پشتیبانی",
    description: "خدمات پس از فروش و نگهداری پرده",
    content:
      "ارائه خدمات نگهداری و پشتیبانی فنی برای تمامی محصولات فروخته شده تا ۱۲ ماه پس از نصب. ما خدمات شویندگی، تعمیرات کوچک، تنظیمات دوره‌ای و تعویض قطعات را ارائه می‌دهیم.",
  },
  {
    id: "measurement",
    title: "اندازه‌گیری رایگان",
    description: "اندازه‌گیری حرفه‌ای پنجره‌ها و درب‌ها",
    content:
      "تیم متخصص ما با ابزارهای دقیق اندازه‌گیری را انجام داده و اطمینان حاصل می‌کند که پرده به صورت کامل نصب شود. اندازه‌گیری توسط کارشناسان مجرب انجام می‌شود تا هیچ گونه مشکلی در نصب پیش نیاید.",
  },
];

// Function to render service-specific content
const renderServiceContent = (serviceId: string) => {
  switch (serviceId) {
    case "installation":
      return (
        <div className="mt-8">
          <h3 className="font-bold text-lg text-[#246e72] mb-3">
            نکات مهم نصب پرده:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                اندازه‌گیری دقیق
              </h4>
              <p className="text-sm">
                اندازه‌گیری دقیق توسط کارشناسان متخصص برای جلوگیری از هرگونه
                مشکل در نصب
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-semibold text-[#246e72] mb-2">نصابان ماهر</h4>
              <p className="text-sm">
                نصابان دارای گواهینامه و تجربه بالا در نصب انواع پرده
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                تجهیزات حرفه‌ای
              </h4>
              <p className="text-sm">
                استفاده از ابزارهای حرفه‌ای برای انجام کار با دقت و سرعت
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-[#246e72] mb-2">گارانتی نصب</h4>
              <p className="text-sm">
                گارانتی ۱۲ ماهه برای خدمات نصب ارائه شده
              </p>
            </div>
          </div>
        </div>
      );
    case "repair":
      return (
        <div className="mt-8">
          <h3 className="font-bold text-lg text-[#246e72] mb-3">
            انواع خدمات تعمیر:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                تعمیر داربست
              </h4>
              <p className="text-sm">
                تعمیر و تعویض قطعات داربست پرده با قطعات اوریجینال
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                تعمیر مکانیزم
              </h4>
              <p className="text-sm">
                تعمیر مکانیزم‌های متحرک پرده و تنظیم مجدد سیستم کشش
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                جایگزینی قطعات
              </h4>
              <p className="text-sm">
                تعویض قطعات فرسوده با قطعات با کیفیت و مناسب
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                خدمات در محل
              </h4>
              <p className="text-sm">تعمیرات در محل با اعزام تیم فنی متخصص</p>
            </div>
          </div>
        </div>
      );
    case "design":
      return (
        <div className="mt-8">
          <h3 className="font-bold text-lg text-[#246e72] mb-3">
            خدمات طراحی:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                مشاوره طراحی
              </h4>
              <p className="text-sm">
                مشاوره رایگان توسط طراحان مجرب برای انتخاب بهترین مدل پرده
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                طراحی سفارشی
              </h4>
              <p className="text-sm">
                طراحی منحصر به فرد با توجه به سلیقه و فضای شما
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-[#246e72] mb-2">نمونه کارها</h4>
              <p className="text-sm">
                مشاهده نمونه کارهای قبلی و انتخاب مدل مورد نظر
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                پشتیبانی طراحی
              </h4>
              <p className="text-sm">پشتیبانی طراحی تا مراحل نهایی نصب</p>
            </div>
          </div>
        </div>
      );
    case "consultation":
      return (
        <div className="mt-8">
          <h3 className="font-bold text-lg text-[#246e72] mb-3">
            خدمات مشاوره:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                مشاوره رایگان
              </h4>
              <p className="text-sm">
                مشاوره کاملاً رایگان توسط کارشناسان مجرب
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                ارائه پیشنهاد
              </h4>
              <p className="text-sm">
                ارائه بهترین پیشنهاد با توجه به نیازهای شما
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-[#246e72] mb-2">ارزیابی فضا</h4>
              <p className="text-sm">ارزیابی فضای منزل یا دفتر کار شما</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                پیشنهاد متخصص
              </h4>
              <p className="text-sm">
                پیشنهاد متخصصانه با توجه به نورپردازی و سلیقه شما
              </p>
            </div>
          </div>
        </div>
      );
    case "maintenance":
      return (
        <div className="mt-8">
          <h3 className="font-bold text-lg text-[#246e72] mb-3">
            خدمات نگهداری:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                خدمات پس از فروش
              </h4>
              <p className="text-sm">
                خدمات نگهداری و پشتیبانی فنی تا ۱۲ ماه پس از نصب
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                شستشوی دوره‌ای
              </h4>
              <p className="text-sm">خدمات شویندگی تخصصی برای حفظ کیفیت پرده</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                تعمیرات کوچک
              </h4>
              <p className="text-sm">تعمیرات کوچک و تنظیمات دوره‌ای</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-[#246e72] mb-2">تعویض قطعات</h4>
              <p className="text-sm">تعویض قطعات فرسوده با قطعات اوریجینال</p>
            </div>
          </div>
        </div>
      );
    case "measurement":
      return (
        <div className="mt-8">
          <h3 className="font-bold text-lg text-[#246e72] mb-3">
            خدمات اندازه‌گیری:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                اندازه‌گیری رایگان
              </h4>
              <p className="text-sm">خدمات اندازه‌گیری کاملاً رایگان در محل</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                ابزارهای دقیق
              </h4>
              <p className="text-sm">
                استفاده از ابزارهای اندازه‌گیری دقیق و حرفه‌ای
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                کارشناسان متخصص
              </h4>
              <p className="text-sm">
                اندازه‌گیری توسط کارشناسان متخصص و با تجربه
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-[#246e72] mb-2">گزارش کامل</h4>
              <p className="text-sm">
                ارائه گزارش کامل اندازه‌گیری به همراه پیشنهادهای تخصصی
              </p>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="mt-8">
          <h3 className="font-bold text-lg text-[#246e72] mb-3">
            ویژگی‌های این خدمت:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-[#246e72] mb-2">کیفیت بالا</h4>
              <p className="text-sm">
                استفاده از بهترین متریال‌ها و ابزارهای حرفه‌ای برای ارائه خدمات
                با کیفیت بالا
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-semibold text-[#246e72] mb-2">نصابان مجرب</h4>
              <p className="text-sm">
                تیم نصابان مجرب و دارای گواهینامه برای انجام خدمات به صورت
                حرفه‌ای
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                گارانتی خدمات
              </h4>
              <p className="text-sm">
                ارائه گارانتی کامل برای تمامی خدمات ارائه شده تا ۱۲ ماه پس از
                انجام کار
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-[#246e72] mb-2">
                پشتیبانی ۲۴ ساعته
              </h4>
              <p className="text-sm">
                پشتیبانی فنی ۲۴ ساعته برای رفع هرگونه ابهام یا مشکل احتمالی
              </p>
            </div>
          </div>
        </div>
      );
  }
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header data={{ menu: [] }} />
      <main className="flex-grow bg-gray-50 py-8 rtl">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-3xl font-bold text-center mb-10 text-[#246e72]">
            خدمات ما
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Services Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">
                  لیست خدمات
                </h2>
                <ul className="space-y-3">
                  {servicesData.map((service) => (
                    <li key={service.id}>
                      <button
                        onClick={() => setActiveService(service)}
                        className={`w-full text-right p-4 rounded-xl transition-all duration-300 ${
                          activeService.id === service.id
                            ? "bg-[#246e72] text-white shadow-md"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                      >
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm mt-1 opacity-80">
                          {service.description}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Content */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-[#246e72]">
                      {activeService.title}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {activeService.content}
                    </p>

                    {renderServiceContent(activeService.id)}
                  </div>

                  <div className="md:w-2/5 flex justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                      تصویر خدمات
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-lg text-[#246e72] mb-4">
                    نمونه کارها
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center"
                      >
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-[#246e72] text-white py-3 rounded-xl font-bold hover:bg-[#1d5a5d] transition-colors">
                    درخواست خدمات
                  </button>
                  <button className="flex-1 border border-[#246e72] text-[#246e72] py-3 rounded-xl font-bold hover:bg-[#246e72] hover:text-white transition-colors">
                    تماس با ما
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
