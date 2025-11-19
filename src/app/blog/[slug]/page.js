// src/app/blog/[slug]/page.js (پیشنهاد شده برای مسیر وبلاگ)
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

// فرض بر این است که مسیرهای زیر به فایل‌های واقعی شما اشاره دارند:
import mainCurtain from "../../../assets/image.png"; // تصویر زبرا
import sideCurtainPlaceholder from "../../../assets/Group 11.png"; // تصویر پرده سفید
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ----------------------------------------------------------------
// داده‌های شبیه‌سازی محتوای مقاله و دیدگاه‌ها
// ----------------------------------------------------------------
const articleData = {
  title: "بهترین پرده ها تا ۲۰ میلیون",
  date: "۱۳ دی ۱۴۰۴",
  readTime: "۴ دقیقه",
  imageZebra: mainCurtain,
  imageWhite: sideCurtainPlaceholder,

  paragraph1:
    "انتخاب پرده مناسب یکی از تأثیرگذارترین بخش‌های دکوراسیون داخلی است؛ زیرا پرده نقشی مهمی در زیبایی ظاهری خانه، کنترل نور، ایجاد حریم خصوصی و حتی حس آرامش فضا دارد. پرده‌ها نه‌تنها یک المان تزئینی عمل می‌کنند بلکه با انتخاب صحیح، می‌توانند ابعاد فضا را بزرگ‌تر نشان دهند. نور طبیعی را مدیریت و هماهنگی میان اجزای دکوراسیون را تقویت کنند. در سال‌های اخیر با تغییر سبک زندگی و...",

  paragraph2:
    "افزایش توجه به طراحی داخلی، اهمیت انتخاب پرده مناسب بیشتر شده است و خریداران اکنون به دنبال پرده‌هایی هستند که علاوه بر زیبایی، از نظر جنس، دوخت، مکانیزم و هماهنگی با فضا، کاملاً استاندارد و حرفه‌ای باشند. برای انتخاب پرده، اولین موضوعی که باید به آن توجه کرد، نوع فضای مورد استفاده است. پرده مناسب پذیرایی با پرده مناسب اتاق خواب با آشپزخانه تفاوت زیادی دارد. در پذیرایی که به عنوان مهم‌ترین بخش خانه شناخته می‌شود، معمولاً از پرده‌های سنگین‌تر و لوکس‌تر مانند مخمل، ساتن یا ترکیب حریر به همراه والان‌های تشریفاتی استفاده می‌شود تا جلوه‌ای رسمی و چشمگیر ایجاد شود. در مقابل، برای اتاق خواب پرده‌هایی مانند بلک‌اوت یا پارچه‌های ضخیم انتخاب می‌شود تا میزان نور ورودی به حداقل برسد و محیطی آرام و تاریک برای خواب فراهم شود. در آشپزخانه که رطوبت و چربی بیشتر است، پرده‌های شید، رول، زبرا یا شیدهای پلی‌استر قابل شستشو بهترین گزینه هستند زیرا نظافت ساده‌تر و دوام بیشتری دارند.",
};

// شبیه سازی دیدگاه‌ها برای نمایش در لیست
const sampleComments = [
  {
    name: "علیرضا بیاتی",
    date: "۸ دی ۱۴۰۴",
    text: "پرده زبرا طرح پله‌ای با رنگ‌های دلخواه و محبوب در دکوراسیون داخلی مدرن به شمار می‌آید. این پرده با طراحی دو اهرم خود، امکان عبور نور به‌صورت کنترل‌شده را فراهم می‌کند و به شما اجازه می‌دهد میزان روشنایی فضای داخلی را متناسب با نیاز و موقعیت تنظیم کنید. ترکیب رنگ طوسی و سفید به تنها جلوه‌ای شیک و آرامش‌بخش به فضا می‌بخشد.",
    likes: 2,
    dislikes: 0,
  },
  {
    name: "محمد توانا",
    date: "۸ دی ۱۴۰۴",
    text: "پرده زبرا طرح پله‌ای با رنگ‌های دلخواه و محبوب در دکوراسیون داخلی مدرن به شمار می‌آید. این پرده با طراحی دو اهرم خود، امکان عبور نور به‌صورت کنترل‌شده را فراهم می‌کند و به شما اجازه می‌دهد میزان روشنایی فضای داخلی را متناسب با نیاز و موقعیت تنظیم کنید. ترکیب رنگ طوسی و سفید به تنها جلوه‌ای شیک و آرامش‌بخش به فضا می‌بخشد.",
    likes: 1,
    dislikes: 1,
  },
  {
    name: "علیرضا آقایی",
    date: "۸ دی ۱۴۰۴",
    text: "پرده زبرا طرح پله‌ای با رنگ‌های دلخواه و محبوب در دکوراسیون داخلی مدرن به شمار می‌آید. این پرده با طراحی دو اهرم خود، امکان عبور نور به‌صورت کنترل‌شده را فراهم می‌کند و به شما اجازه می‌دهد میزان روشنایی فضای داخلی را متناسب با نیاز و موقعیت تنظیم کنید. ترکیب رنگ طوسی و سفید به تنها جلوه‌ای شیک و آرامش‌بخش به فضا می‌بخشد.",
    likes: 3,
    dislikes: 0,
  },
];

// ----------------------------------------------------------------
// کامپوننت آیتم دیدگاه
// ----------------------------------------------------------------
const CommentItem = ({ comment }) => {
  return (
    <div className="border-b border-gray-100 pb-4 mb-4">
      <div className="flex flex-row-reverse justify-between items-center mb-2">
        <span className="font-extrabold text-[#3a3a3a] text-sm">
          {comment.name}
        </span>
        <span className="text-xs text-gray-500">{comment.date}</span>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        {comment.text}
      </p>

      <div className="flex justify-between items-center text-xs text-gray-500">
        {/* دکمه‌های لایک و دیس‌لایک */}
        <div className="flex space-x-2 space-x-reverse">
          <button className="flex items-center p-1 rounded-full hover:bg-green-100 text-green-600 transition-colors">
            <ThumbsUp size={14} className="ml-1" /> {comment.likes}
          </button>
          <button className="flex items-center p-1 rounded-full hover:bg-red-100 text-red-600 transition-colors">
            <ThumbsDown size={14} className="ml-1" /> {comment.dislikes}
          </button>
        </div>

        {/* دکمه گزارش مشکل */}
        <button className="flex items-center text-red-500 hover:text-red-700 transition-colors">
          <AlertTriangle size={14} className="ml-1" /> گزارش مشکل
        </button>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------
// کامپوننت اصلی صفحه مقاله
// ----------------------------------------------------------------
export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* -------------------- بخش ۱: تصویر در راست (Zebra Image) -------------------- */}
        <section className="bg-white">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <div className="w-full lg:w-5/12 order-1 relative h-[300px] lg:h-[450px]">
              <Image
                src={articleData.imageZebra}
                alt={articleData.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className="w-full lg:w-7/12 order-2 text-right space-y-6 pt-4">
              <div className="flex justify-start items-center text-xs text-gray-500 mb-6 space-x-4 space-x-reverse">
                <span className="flex items-center">
                  <Clock size={14} className="ml-1" />
                  زمان مطالعه: {articleData.readTime}
                </span>
                <span className="flex items-center">
                  <Calendar size={14} className="ml-1" />
                  تاریخ انتشار: {articleData.date}
                </span>
                <span className="text-gray-400">۲۹ دیدگاه</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#3a3a3a] leading-relaxed">
                {articleData.title}
              </h1>

              <p className="text-base text-gray-700 leading-loose">
                انتخاب پرده مناسب یکی از تأثیرگذارترین بخش‌های دکوراسیون داخلی
                است؛ زیرا پرده نقشی مهمی در زیبایی ظاهری خانه، کنترل نور، ایجاد
                حریم خصوصی و حتی حس آرامش فضا دارد.
                <span className="font-extrabold text-[#3a3a3a]">
                  پرده‌ها نه‌تنها یک المان تزئینی عمل می‌کنند بلکه با انتخاب
                  صحیح، می‌توانند ابعاد فضا را بزرگ‌تر نشان دهند. نور طبیعی را
                  مدیریت و هماهنگی میان اجزای دکوراسیون
                </span>
                را تقویت کنند. در سال‌های اخیر با تغییر سبک زندگی و...
              </p>
            </div>
          </div>
        </section>

        {/* -------------------- بخش ۲: تصویر در چپ (White Curtain Image) -------------------- */}
        <section className="mt-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-5/12 order-1 relative h-[450px] rounded-none overflow-hidden shadow-lg border-none">
              <Image
                src={articleData.imageWhite}
                alt="پرده حریر سفید"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="w-full lg:w-7/12 order-2 text-right space-y-4 text-sm text-gray-700 leading-relaxed pt-4">
              <p className="leading-loose">
                افزایش توجه به طراحی داخلی، اهمیت انتخاب پرده مناسب بیشتر شده
                است و خریداران اکنون به دنبال پرده‌هایی هستند که علاوه بر
                زیبایی، از نظر جنس، دوخت، مکانیزم و هماهنگی با فضا، کاملاً
                استاندارد و حرفه‌ای باشند.
                <span className="font-extrabold text-[#3a3a3a]">
                  برای انتخاب پرده، اولین موضوعی که باید به آن توجه کرد، نوع
                  فضای مورد استفاده است.
                </span>
                پرده مناسب پذیرایی با پرده مناسب اتاق خواب با آشپزخانه تفاوت
                زیادی دارد. در پذیرایی که به عنوان مهم‌ترین بخش خانه شناخته
                می‌شود، معمولاً از پرده‌های سنگین‌تر و لوکس‌تر مانند مخمل، ساتن
                یا ترکیب حریر به همراه والان‌های تشریفاتی استفاده می‌شود تا
                جلوه‌ای رسمی و چشمگیر ایجاد شود. در مقابل، برای اتاق خواب
                پرده‌هایی مانند بلک‌اوت یا پارچه‌های ضخیم انتخاب می‌شود تا میزان
                نور ورودی به حداقل برسد و محیطی آرام و تاریک برای خواب فراهم
                شود. در آشپزخانه که رطوبت و چربی بیشتر است، پرده‌های شید، رول،
                زبرا یا شیدهای پلی‌استر قابل شستشو بهترین گزینه هستند زیرا نظافت
                ساده‌تر و دوام بیشتری دارند.
              </p>
            </div>
          </div>
        </section>

        {/* -------------------- بخش ۳: نظرات و ثبت دیدگاه (جدید - مطابق عکس) -------------------- */}
        <section className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ستون راست (ثبت دیدگاه) - lg:col-span-1 */}
            <div className="lg:col-span-1 order-1 text-right bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-fit lg:sticky lg:top-8">
              <h3 className="text-lg font-extrabold text-[#3a3a3a] mb-2">
                ثبت دیدگاه
              </h3>
              <p className="text-xs text-gray-500 mb-4 border-b pb-3 border-gray-100">
                شما هم درباره این بلاگ دیدگاه ثبت کنید
              </p>

              <form className="space-y-4">
                <label className="block text-sm font-bold text-[#3a3a3a]">
                  ثبت دیدگاه:
                </label>
                <textarea
                  placeholder="نظر خود را در مورد این کالا با کاربران دیگر به اشتراک بگذارید..."
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#f0a500] focus:border-[#f0a500] resize-none text-sm placeholder-gray-500 bg-gray-50"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#f0a500] text-white font-bold rounded-lg hover:bg-[#d99500] transition-colors shadow-md text-base"
                >
                  ثبت دیدگاه
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                دیدگاه شما به محض موفقیت انتشار، قابل نمایش است.
              </p>
            </div>

            {/* ستون چپ (لیست دیدگاه‌ها) - lg:col-span-2 */}
            <div className="lg:col-span-2 order-2 text-right">
              <h3 className="text-xl font-extrabold text-[#3a3a3a] mb-6">
                ۳ دیدگاه
              </h3>

              {/* لیست آیتم‌های دیدگاه */}
              <div className="space-y-4">
                {sampleComments.map((comment, index) => (
                  <CommentItem key={index} comment={comment} />
                ))}
              </div>

              {/* دکمه نمایش بیشتر */}
              <div className="mt-8 text-center">
                <button className="py-2 px-6 border border-gray-300 text-[#246e72] font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center mx-auto">
                  نمایش بیشتر <ArrowLeft size={16} className="mr-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
