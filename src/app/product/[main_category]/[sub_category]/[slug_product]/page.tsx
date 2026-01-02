import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProductDetailPage from './index'
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
  sub_category: string,
  slug_product: string
): Promise<ProductData | null> {
  try {
    const baseUrl = 'http://localhost:3000';
    
    const res = await fetch(
      `${baseUrl}/api/product/${main_category}/${sub_category}/${slug_product}`,
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
    sub_category: string;
    slug_product: string;
  }>;
}): Promise<Metadata> {
  const { main_category, sub_category, slug_product } = await params;
  
  try {
    const productData = await getProductData(main_category, sub_category, slug_product);

    if (!productData) {
      return {
        title: 'محصول یافت نشد',
        description: 'این محصول در دسترس نیست',
      };
    }

    return {
      title: `${productData.name} | فروشگاه`,
      description: productData.description || `خرید ${productData.name}`,
      keywords: [productData.name, main_category, sub_category],
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
    sub_category: string;
    slug_product: string;
  }>;
}) {
  const { main_category, sub_category, slug_product } = await params;

  const productData = await getProductData(main_category, sub_category, slug_product);

  if (!productData) {
    notFound();
  }

  return (
    <>
    

    <ProductDetailPage test="test"/>
      {/* {process.env.NODE_ENV === 'development' && (
        <details className="mt-8 bg-gray-900 text-white p-4 rounded">
          <summary className="cursor-pointer font-bold mb-2">
            🔍 دیباگ - دیتای خام
          </summary>
          <pre className="text-xs overflow-auto">
            {JSON.stringify(productData, null, 2)}
          </pre>
        </details>
      )} */}
    
    </>
  );
}