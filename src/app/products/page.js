// src/app/products/page.js
// فرض می‌کنیم Header و Footer در یک Layout یا مستقیماً اینجا Import می‌شوند

import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import ProductSidebar from '../../components/ProductSidebar';
import ProductList from '../../components/ProductList';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white font-['Vazirmatn']" dir="rtl">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-16">
        
        {/* نوار Breadcrumb */}
        <div className="text-right text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-[#246e72]">خانه</Link>
            <span className="mx-2">/</span>
            <span className="font-bold">لیست محصولات</span>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8">
          
          {/* ستون فیلترها (Sidebar) */}
          <ProductSidebar />
          
          {/* ستون اصلی محصولات */}
          <ProductList />
          
        </div>
      </main>

      <Footer />
    </div>
  );
}