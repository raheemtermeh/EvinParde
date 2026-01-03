import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { 
    params: Promise<{ 
      main_category: string; 
      sub_category: string; 
    }> 
  }
) {
  try {
    const { main_category, sub_category } = await params;

    console.log('Fetching:', { main_category, sub_category });

    const apiUrl = `http://curtain.linooxel.com:5042/api/product/${main_category}/`;

    const res = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log('API Response Status:', res.status);

    if (!res.ok) {
      console.error('API returned error:', res.status);
      return NextResponse.json(
        { error: 'محصول پیدا نشد' },
        { status: res.status }
      );
    }

    const contentType = res.headers.get('content-type');
    console.log('Content-Type:', contentType); // دیباگ
    
    if (!contentType || !contentType.includes('application/json')) {
      const text = await res.text();
      console.error('Response is not JSON:', text);
      return NextResponse.json(
        { error: 'فرمت پاسخ نامعتبر است' },
        { status: 500 }
      );
    }

    const data = await res.json();
    console.log('API Data:', data); // دیباگ
    
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت اطلاعات', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}