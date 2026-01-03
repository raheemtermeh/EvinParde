"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Home, 
  ShoppingBag, 
  User, 
  MessageSquare, 
  MapPin, 
  LogOut,
  Scissors,
  CheckCircle,
  Home as HomeIcon,
  Plus,
  Trash2,
  Edit,
  ChevronLeft,
  Map
} from "lucide-react";

/* ================= TYPES ================= */

type Section =
  | "overview"
  | "orders"
  | "profile"
  | "messages"
  | "addresses";

type Address = {
  id: number;
  title: string;
  fullAddress: string;
  lat?: number;
  lng?: number;
  isDefault?: boolean;
};

type OrderStatus = "در حال دوخت" | "ارسال شده" | "نصب شده" | "لغو شده";

type Order = {
  id: number;
  name: string;
  status: OrderStatus;
  date: string;
  price: string;
};

/* ================= PAGE ================= */

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/20">
      <Header data={{ menu: [] }} />

      <main className="flex-grow p-4 md:p-6 lg:p-8 rtl">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Header */}
          {isMobile && (
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">داشبورد من</h1>
              <p className="text-gray-500 text-sm mt-1">خوش آمدید علیرضا عزیز</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8">
            {/* MAIN CONTENT */}
            <main className="space-y-6 lg:space-y-8">
              {/* Welcome Card - Only on Desktop */}
              {!isMobile && (
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="text-2xl font-bold">داشبورد من</h1>
                      <p className="opacity-90 mt-1">خوش آمدید علیرضا عزیز، به مدیریت سفارش‌های پرده خود بپردازید</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <HomeIcon size={28} />
                    </div>
                  </div>
                </div>
              )}

              {/* Dynamic Section Content */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  {activeSection === "overview" && <OverviewSection />}
                  {activeSection === "orders" && <OrdersSection />}
                  {activeSection === "profile" && <ProfileSection />}
                  {activeSection === "messages" && <MessagesSection />}
                  {activeSection === "addresses" && <AddressesSection />}
                </div>
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <img
                      src="https://i.pravatar.cc/120?img=32"
                      className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                      alt="profile"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold text-lg text-gray-800">علیرضا ریاحی</p>
                    <p className="text-gray-500 text-sm mt-1">0930 159 2467</p>
                    <p className="text-gray-400 text-xs mt-1">عضویت از فروردین ۱۴۰۲</p>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="mt-6 space-y-1">
                  <MenuItem 
                    icon={<Home size={20} />} 
                    label="خلاصه فعالیت‌ها" 
                    active={activeSection === "overview"} 
                    onClick={() => setActiveSection("overview")} 
                  />
                  <MenuItem 
                    icon={<ShoppingBag size={20} />} 
                    label="سفارش‌ها" 
                    active={activeSection === "orders"} 
                    onClick={() => setActiveSection("orders")} 
                  />
                  <MenuItem 
                    icon={<User size={20} />} 
                    label="اطلاعات شخصی" 
                    active={activeSection === "profile"} 
                    onClick={() => setActiveSection("profile")} 
                  />
                  <MenuItem 
                    icon={<MessageSquare size={20} />} 
                    label="پیام‌ها" 
                    active={activeSection === "messages"} 
                    onClick={() => setActiveSection("messages")} 
                    badge="3"
                  />
                  <MenuItem 
                    icon={<MapPin size={20} />} 
                    label="آدرس‌ها" 
                    active={activeSection === "addresses"} 
                    onClick={() => setActiveSection("addresses")} 
                  />
                  <div className="border-t border-gray-100 pt-2 mt-2">
                    <MenuItem 
                      icon={<LogOut size={20} />} 
                      label="خروج از حساب" 
                      danger 
                    />
                  </div>
                </nav>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-5 border border-blue-100">
                <h3 className="font-semibold text-gray-700 mb-4">آمار سریع</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">کل سفارشات</span>
                    <span className="font-bold">۶</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">پرداخت‌های موفق</span>
                    <span className="font-bold text-green-600">۵</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">آدرس‌های ثبت‌شده</span>
                    <span className="font-bold">۳</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ================= SECTIONS ================= */

function OverviewSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-6">وضعیت سفارش‌های پرده</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="در حال دوخت" 
            value="1 سفارش" 
            icon={<Scissors className="text-blue-600" size={24} />} 
            color="bg-blue-50" 
            borderColor="border-blue-200"
          />
          <StatCard 
            title="تحویل شده" 
            value="3 سفارش" 
            icon={<CheckCircle className="text-green-600" size={24} />} 
            color="bg-green-50" 
            borderColor="border-green-200"
          />
          <StatCard 
            title="نصب شده" 
            value="2 سفارش" 
            icon={<HomeIcon className="text-indigo-600" size={24} />} 
            color="bg-indigo-50" 
            borderColor="border-indigo-200"
          />
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="font-semibold text-gray-700 mb-4">فعالیت‌های اخیر</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>سفارش پرده شید پذیرایی تحویل داده شد</span>
            <span className="text-gray-400 text-xs mr-auto">۲ روز پیش</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>آدرس جدیدی به حساب شما اضافه شد</span>
            <span className="text-gray-400 text-xs mr-auto">۵ روز پیش</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrdersSection() {
  const orders: Order[] = [
    { id: 1, name: "پرده شید پذیرایی", status: "در حال دوخت", date: "۱۴۰۲/۱۲/۱۵", price: "۲,۵۰۰,۰۰۰ تومان" },
    { id: 2, name: "پرده پانچ اتاق خواب", status: "ارسال شده", date: "۱۴۰۲/۱۲/۱۰", price: "۱,۸۰۰,۰۰۰ تومان" },
    { id: 3, name: "پرده زبرا آشپزخانه", status: "نصب شده", date: "۱۴۰۲/۱۱/۲۸", price: "۱,۲۰۰,۰۰۰ تومان" },
    { id: 4, name: "پرده کرکره‌ای آشپزخانه", status: "نصب شده", date: "۱۴۰۲/۱۱/۱۵", price: "۹۵۰,۰۰۰ تومان" },
  ];

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case "در حال دوخت": return "bg-blue-100 text-blue-800";
      case "ارسال شده": return "bg-yellow-100 text-yellow-800";
      case "نصب شده": return "bg-green-100 text-green-800";
      case "لغو شده": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">سفارش‌های پرده</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <Plus size={16} />
          سفارش جدید
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">نام سفارش</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">وضعیت</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">تاریخ</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">مبلغ</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4">
                  <div className="font-medium">{order.name}</div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600 text-sm">{order.date}</td>
                <td className="py-4 px-4 font-medium">{order.price}</td>
                <td className="py-4 px-4">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center gap-1">
                    <ChevronLeft size={16} />
                    جزئیات
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "علیرضا ریاحی",
    phone: "09301592467",
    city: "تهران",
    email: "alireza.rezaei@example.com"
  });

  const handleSave = () => {
    setIsEditing(false);
    // در اینجا می‌توان اطلاعات را ذخیره کرد
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">اطلاعات شخصی</h2>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
            isEditing 
              ? "bg-green-600 text-white hover:bg-green-700" 
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          {isEditing ? "ذخیره تغییرات" : "ویرایش اطلاعات"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
          {isEditing ? (
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          ) : (
            <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">{formData.name}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس</label>
          {isEditing ? (
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          ) : (
            <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">{formData.phone}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">شهر</label>
          {isEditing ? (
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          ) : (
            <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">{formData.city}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل</label>
          {isEditing ? (
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          ) : (
            <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">{formData.email}</div>
          )}
        </div>
      </div>

      {!isEditing && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-6">
          <p className="text-sm text-blue-800">
            برای ویرایش اطلاعات شخصی خود، روی دکمه "ویرایش اطلاعات" کلیک کنید.
          </p>
        </div>
      )}
    </div>
  );
}

function MessagesSection() {
  const messages = [
    { id: 1, title: "تأیید سفارش", content: "سفارش شما با موفقیت ثبت شد.", time: "۲ ساعت پیش", read: false },
    { id: 2, title: "به‌روزرسانی وضعیت", content: "سفارش شما در حال دوخت است.", time: "۱ روز پیش", read: true },
    { id: 3, title: "تخفیف ویژه", content: "کد تخفیف ۲۰٪ برای سفارش بعدی شما فعال شد.", time: "۳ روز پیش", read: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">پیام‌ها</h2>
        <button className="px-4 py-2 text-indigo-600 hover:text-indigo-800 text-sm">
          علامت‌خوانده‌شده به همه
        </button>
      </div>

      <div className="space-y-3">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`p-4 rounded-xl border transition-all hover:shadow-md cursor-pointer ${
                msg.read 
                  ? "bg-white border-gray-200" 
                  : "bg-indigo-50 border-indigo-200"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-800">{msg.title}</h3>
                    {!msg.read && (
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{msg.content}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs text-gray-500 whitespace-nowrap">{msg.time}</span>
                  <button className="text-indigo-600 hover:text-indigo-800 text-xs">
                    جزئیات
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <MessageSquare size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">هیچ پیامی وجود ندارد.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function AddressesSection() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      title: "منزل",
      fullAddress: "تهران، ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲۳، طبقه ۳، واحد ۵",
      isDefault: true,
    },
    {
      id: 2,
      title: "محل کار",
      fullAddress: "تهران، میرداماد، برج سپهر، طبقه ۸، واحد ۸۰۱",
      isDefault: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [fullAddress, setFullAddress] = useState("");

  const addAddress = () => {
    if (!title || !fullAddress) return;

    setAddresses((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        fullAddress,
        isDefault: prev.length === 0, // اگر اولین آدرس است، پیش‌فرض باشد
      },
    ]);

    setTitle("");
    setFullAddress("");
    setShowForm(false);
  };

  const setDefault = (id: number) => {
    setAddresses((prev) =>
      prev.map((a) => ({
        ...a,
        isDefault: a.id === id,
      }))
    );
  };

  const removeAddress = (id: number) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">آدرس‌های من</h2>
          <p className="text-gray-500 text-sm mt-1">مدیریت آدرس‌های ارسال و نصب پرده</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus size={18} />
          افزودن آدرس جدید
        </button>
      </div>

      {/* Address list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`rounded-xl p-5 border-2 transition-all hover:shadow-md ${
              addr.isDefault 
                ? "border-indigo-500 bg-gradient-to-br from-indigo-50 to-white" 
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <MapPin size={18} className={addr.isDefault ? "text-indigo-600" : "text-gray-400"} />
                <h3 className="font-semibold text-gray-800">{addr.title}</h3>
                {addr.isDefault && (
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    پیش‌فرض
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {!addr.isDefault && (
                  <button
                    onClick={() => setDefault(addr.id)}
                    className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="انتخاب به عنوان پیش‌فرض"
                  >
                    <CheckCircle size={18} />
                  </button>
                )}
                <button
                  onClick={() => removeAddress(addr.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  title="حذف آدرس"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{addr.fullAddress}</p>
          </div>
        ))}
      </div>

      {/* Add address form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">ثبت آدرس جدید</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عنوان آدرس
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="مثلاً: منزل، محل کار، ویلا"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    آدرس کامل
                  </label>
                  <textarea
                    value={fullAddress}
                    onChange={(e) => setFullAddress(e.target.value)}
                    placeholder="آدرس کامل برای ارسال و نصب پرده را وارد کنید..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                    rows={4}
                  />
                </div>

                {/* Map Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl overflow-hidden">
                  <div className="bg-gray-100 p-4 text-center">
                    <Map size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600 font-medium">نقشه موقعیت</p>
                    <p className="text-gray-500 text-sm mt-1">(برای نمایش نقشه، کتابخانه نقشه را اضافه کنید)</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <p className="text-sm text-gray-600">
                      موقعیت روی نقشه به صورت خودکار با وارد کردن آدرس مشخص می‌شود.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={addAddress}
                    disabled={!title || !fullAddress}
                    className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                      title && fullAddress
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    ذخیره آدرس
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                  >
                    انصراف
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, icon, color, borderColor }: any) {
  return (
    <div className={`p-5 rounded-xl border ${borderColor} ${color} transition-all hover:shadow-md`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
        </div>
        <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm">
          {icon}
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, active, danger, badge, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
        ${active && "bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 border-r-4 border-indigo-500"}
        ${danger && "text-red-600 hover:bg-red-50"}
        ${!active && !danger && "text-gray-700 hover:bg-gray-100"}
        relative
      `}
    >
      <div className={`${active ? "text-indigo-600" : danger ? "text-red-500" : "text-gray-500"}`}>
        {icon}
      </div>
      <span className="font-medium">{label}</span>
      
      {badge && (
        <span className="mr-auto bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}