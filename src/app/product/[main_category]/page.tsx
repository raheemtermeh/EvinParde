
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';
import ProductSidebar from '@/components/ProductSidebar';
import ProductList from '@/components/ProductList';

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProductDetailPage from './index'
import Link from 'next/link';




interface ProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  images?: string[];
  category?: string;
  subcategory?: string;
}

async function getProductData(
  main_category: string,
): Promise<ProductData | null> {
  try {
    const baseUrl = 'http://localhost:3000';
    
    const res = await fetch(
      `${baseUrl}/api/product/${main_category}/`,
      {
        next: { revalidate: 300 },
        cache: 'no-store'
      }
    );

    if (!res.ok) {
      console.error(`API Error: ${res.status} - ${res.statusText}`);
      return null;
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Response is not JSON:', contentType);
      const text = await res.text();
      console.error('Response body:', text);
      return null;
    }

    const data = await res.json();
    return data;
    
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// ✅ Metadata برای SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    main_category: string;
  }>;
}): Promise<Metadata> {
  const { main_category } = await params;
  
  try {
    const productData = await getProductData(main_category);

    if (!productData) {
      return {
        title: 'محصول یافت نشد',
        description: 'این محصول در دسترس نیست',
      };
    }

    return {
      title: `${productData.name} | فروشگاه`,
      description: productData.description || `خرید ${productData.name}`,
      keywords: [productData.name, main_category],
      openGraph: {
        title: productData.name,
        description: productData.description,
        images: productData.images || [],
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Metadata generation error:', error);
    return {
      title: 'محصول',
      description: 'صفحه محصول',
    };
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    main_category: string;
  }>;
}) {
  const { main_category } = await params;

  const productData = await getProductData(main_category);

  if (!productData) {
    notFound();
  }
  console.log(productData)
  console.log("productData")
  console.log("productData")

  return (
    <>


    {/* <ProductDetailPage   productData={productData}/> */}
      
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />

        
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-16">
        
        {/* نوار Breadcrumb */}
        <div className="text-right text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-[#246e72]">خانه</Link>
            <span className="mx-2">/</span>
            <span className="font-bold">{productData?.category_detail.name}</span>

        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8">
          
          
          
          {/* ستون اصلی محصولات */}
          {productData?.product && productData?.product.length > 0 && 
          <ProductList products={productData.product} />
          }

          {/* ستون فیلترها (Sidebar) */}
          <ProductSidebar />
        </div>
      </main>

      <Footer />
    </div>

    </>
  );
}