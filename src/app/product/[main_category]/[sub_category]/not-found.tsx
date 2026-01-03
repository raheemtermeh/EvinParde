// app/[main_category]/[sub_category]/[slug_product]/not-found.tsx
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold mb-4">محصول یافت نشد</h2>
        <p className="text-gray-600 mb-6">متأسفانه این محصول در دسترس نیست</p>
        <a 
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          بازگشت به صفحه اصلی
        </a>
      </div>
    );
  }