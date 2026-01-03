"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  Shield, 
  Truck, 
  RefreshCw,
  Heart,
  Star,
  CheckCircle,
  Clock,
  Package
} from "lucide-react";

// Static data for demonstration
const STATIC_CART_ITEMS = [
  {
    id: "1",
    name: "پرده شید مدرن",
    price: 1250000,
    originalPrice: 1500000,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    attributes: {
      رنگ: "خاکستری",
      جنس: "کتان",
      ابعاد: "3×2 متر"
    },
    inStock: true
  },
  {
    id: "2",
    name: "پرده اتاق خواب کلاسیک",
    price: 980000,
    originalPrice: 1200000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w-400&h=400&fit=crop",
    attributes: {
      رنگ: "سفید",
      جنس: "حریر",
      ابعاد: "2.5×2 متر"
    },
    inStock: true
  },
  {
    id: "3",
    name: "پرده آشپزخانه مدرن",
    price: 650000,
    quantity: 3,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    attributes: {
      رنگ: "شیر شکلاتی",
      جنس: "پارچه ضد آب",
      ابعاد: "1.5×1.2 متر"
    },
    inStock: false,
    stockMessage: "موجود در ۳ روز آینده"
  }
];

const SUGGESTED_PRODUCTS = [
  {
    id: "s1",
    name: "پرده پذیرایی مجلل",
    price: 1850000,
    originalPrice: 2200000,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop",
    rating: 4.8,
    reviews: 124,
    tag: "پرفروش"
  },
  {
    id: "s2",
    name: "پرده حمام",
    price: 420000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    rating: 4.5,
    reviews: 89,
    tag: "جدید"
  },
  {
    id: "s3",
    name: "پرده اتاق کودک",
    price: 750000,
    originalPrice: 900000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=500&fit=crop",
    rating: 4.9,
    reviews: 203,
    tag: "تخفیف ویژه"
  },
  {
    id: "s4",
    name: "پرده ضد نور",
    price: 1350000,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop",
    rating: 4.7,
    reviews: 156,
    tag: "پیشنهاد ویژه"
  }
];

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    clearCart,
  } = useCart();

  const [items, setItems] = useState(STATIC_CART_ITEMS);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuantityChange = (id: string, value: number) => {
    if (value < 1) {
      removeItem(id);
      return;
    }
    
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: value } : item
    ));
    
    // In real app, you would call: updateQuantity(id, value);
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
    // In real app, you would call: removeFromCart(id);
  };

  const handleClearCart = () => {
    setItems([]);
    // In real app, you would call: clearCart();
  };

  const addToCart = (product: any) => {
    const existingItem = items.find(item => item.id === product.id);
    if (existingItem) {
      handleQuantityChange(product.id, existingItem.quantity + 1);
    } else {
      setItems(prev => [...prev, {
        ...product,
        quantity: 1,
        attributes: {
          رنگ: "پیش‌فرض",
          جنس: "کتان",
          ابعاد: "استاندارد"
        },
        inStock: true
      }]);
    }
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = items.reduce((sum, item) => 
    sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0
  );
  const shipping = subtotal > 500000 ? 0 : 50000;
  const tax = subtotal * 0.09; // 9% tax
  const total = subtotal + shipping + tax;

  const checkout = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert("در حال انتقال به صفحه پرداخت...");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header data={{ menu: [] }} />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header with progress */}
          <div className="mb-8 md:mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
            >
              <ArrowLeft className="ml-2" size={20} />
              بازگشت به فروشگاه
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              🛒 سبد خرید شما
            </h1>
            <p className="text-gray-600">
              مدیریت و بررسی محصولات انتخابی خود
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-10 relative">
            <div className="flex items-center justify-center max-w-2xl mx-auto">
              {[
                { step: 1, label: "سبد خرید", active: true },
                { step: 2, label: "اطلاعات ارسال" },
                { step: 3, label: "پرداخت" },
                { step: 4, label: "تکمیل سفارش" }
              ].map(({ step, label, active }) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center relative z-10">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
                      ${active 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200' 
                        : 'bg-gray-100 text-gray-400'
                      }
                      transition-all duration-300
                    `}>
                      {active ? <CheckCircle size={24} /> : step}
                    </div>
                    <span className={`
                      mt-3 text-sm font-medium hidden md:block
                      ${active ? 'text-indigo-600' : 'text-gray-500'}
                    `}>
                      {label}
                    </span>
                    <div className={`
                      absolute top-6 -right-16 w-32 h-0.5 hidden md:block
                      ${step < 4 ? (active ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gray-200') : ''}
                    `} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16 md:py-24">
              <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full">
                <ShoppingBag size={64} className="text-indigo-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                سبد خرید شما خالی است
              </h2>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                هنوز هیچ محصولی به سبد خرید خود اضافه نکرده‌اید. محصولات شگفت‌انگیز ما را کشف کنید!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  مشاهده محصولات
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
                >
                  بازگشت به خانه
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <ShoppingBag className="text-indigo-600" />
                        محصولات انتخابی شما
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                          {items.length} قلم
                        </span>
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                        امکان ویرایش و حذف هر کدام از محصولات وجود دارد
                      </p>
                    </div>
                    <button
                      onClick={handleClearCart}
                      className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium px-4 py-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                      پاک کردن سبد
                    </button>
                  </div>

                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="group relative bg-gradient-to-r from-white to-gray-50/50 border border-gray-200 rounded-xl p-4 hover:border-indigo-200 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row gap-4">
                          {/* Product Image */}
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 rounded-lg object-cover border-2 border-gray-100 group-hover:border-indigo-200 transition-colors"
                            />
                            {!item.inStock && (
                              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-medium bg-red-500 px-2 py-1 rounded">
                                  ناموجود
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                                  {item.name}
                                </h3>
                                <div className="flex items-center gap-4 mt-2">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-gray-900">
                                      {item.price.toLocaleString()} تومان
                                    </span>
                                    {item.originalPrice && (
                                      <span className="text-sm text-gray-500 line-through">
                                        {item.originalPrice.toLocaleString()}
                                      </span>
                                    )}
                                  </div>
                                  {item.originalPrice && (
                                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                                      {Math.round((1 - item.price / item.originalPrice) * 100)}% تخفیف
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors self-start"
                              >
                                <Trash2 size={20} />
                              </button>
                            </div>

                            {/* Attributes */}
                            <div className="flex flex-wrap gap-2 mt-3">
                              {Object.entries(item.attributes).map(([key, value]) => (
                                <div key={key} className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
                                  <span className="text-gray-600">{key}:</span>
                                  <span className="font-medium text-gray-800 mr-1"> {value}</span>
                                </div>
                              ))}
                            </div>

                            {!item.inStock && item.stockMessage && (
                              <div className="flex items-center gap-2 mt-3 text-amber-600 text-sm">
                                <Clock size={16} />
                                {item.stockMessage}
                              </div>
                            )}

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors active:scale-95"
                                >
                                  <Minus size={16} />
                                </button>
                                
                                <div className="w-16 h-10 bg-gray-50 rounded-lg flex items-center justify-center border">
                                  <span className="font-bold text-gray-900">{item.quantity}</span>
                                </div>
                                
                                <button
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors active:scale-95"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>

                              <div className="text-left">
                                <div className="text-sm text-gray-500">جمع این محصول:</div>
                                <div className="text-xl font-bold text-gray-900">
                                  {(item.price * item.quantity).toLocaleString()} تومان
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                        <Shield className="text-blue-600" size={20} />
                        <div>
                          <div className="font-medium text-sm text-gray-900">ضمانت اصالت</div>
                          <div className="text-xs text-gray-600">محصولات اورجینال</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                        <Truck className="text-green-600" size={20} />
                        <div>
                          <div className="font-medium text-sm text-gray-900">ارسال رایگان</div>
                          <div className="text-xs text-gray-600">بالای ۵۰۰ هزار تومان</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                        <RefreshCw className="text-purple-600" size={20} />
                        <div>
                          <div className="font-medium text-sm text-gray-900">بازگشت ۷ روزه</div>
                          <div className="text-xs text-gray-600">ضمانت رضایت</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                        <Package className="text-orange-600" size={20} />
                        <div>
                          <div className="font-medium text-sm text-gray-900">تحویل اکسپرس</div>
                          <div className="text-xs text-gray-600">در تهران ۲۴ ساعته</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Summary Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      📋 خلاصه سفارش
                    </h2>

                    <div className="space-y-4">
                      <div className="flex justify-between text-gray-600">
                        <span>جمع اقلام ({items.length})</span>
                        <span>{subtotal.toLocaleString()} تومان</span>
                      </div>
                      
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>تخفیف محصولات</span>
                          <span>-{discount.toLocaleString()} تومان</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between text-gray-600">
                        <span>هزینه ارسال</span>
                        <span>
                          {shipping === 0 ? (
                            <span className="text-green-600 font-medium">رایگان</span>
                          ) : (
                            `${shipping.toLocaleString()} تومان`
                          )}
                        </span>
                      </div>
                      
                      <div className="flex justify-between text-gray-600">
                        <span>مالیات (۹٪)</span>
                        <span>{tax.toLocaleString()} تومان</span>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4 mt-2">
                        <div className="flex justify-between text-lg font-bold text-gray-900">
                          <span>مبلغ قابل پرداخت</span>
                          <span>{total.toLocaleString()} تومان</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={checkout}
                      disabled={isLoading || items.some(item => !item.inStock)}
                      className={`
                        w-full mt-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02]
                        ${isLoading || items.some(item => !item.inStock)
                          ? 'bg-gray-300 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl hover:shadow-indigo-200'
                        }
                      `}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <RefreshCw className="animate-spin" size={20} />
                          در حال پردازش...
                        </div>
                      ) : items.some(item => !item.inStock) ? (
                        "برخی محصولات ناموجودند"
                      ) : (
                        "ادامه جهت تکمیل خرید"
                      )}
                    </button>

                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-500">
                        با کلیک بر روی دکمه، به صفحه پرداخت امن هدایت می‌شوید
                      </p>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      🎁 کد تخفیف دارید؟
                    </h3>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="کد تخفیف خود را وارد کنید"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                        اعمال
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      کدهای تخفیف شامل خریدهای بالای ۱ میلیون تومان می‌شوند
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Suggested Products - Always show but different when cart is empty */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {items.length === 0 ? "محصولات پرفروش" : "پیشنهاد ویژه برای شما"}
                </h2>
                <p className="text-gray-600">
                  {items.length === 0 
                    ? "برترین محصولات انتخاب شده توسط مشتریان" 
                    : "این محصولات را دیگران همراه با خرید شما انتخاب کرده‌اند"
                  }
                </p>
              </div>
              <Link 
                href="/products" 
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2"
              >
                مشاهده همه
                <ArrowLeft size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUGGESTED_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-indigo-200 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      {product.tag && (
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-bold text-white
                          ${product.tag === 'تخفیف ویژه' ? 'bg-red-500' :
                            product.tag === 'پرفروش' ? 'bg-orange-500' :
                            product.tag === 'جدید' ? 'bg-blue-500' :
                            'bg-purple-500'
                          }
                        `}>
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                      <Heart size={20} />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <div className="text-xl font-bold text-gray-900">
                          {product.price.toLocaleString()} تومان
                        </div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            {product.originalPrice.toLocaleString()} تومان
                          </div>
                        )}
                      </div>
                      
                      <button
                        onClick={() => addToCart(product)}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 flex items-center gap-2"
                      >
                        <Plus size={18} />
                        افزودن
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;