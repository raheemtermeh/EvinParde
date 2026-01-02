import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "http://curtain.linooxel.com:5042/api/ui/page/home",
      {
        next: { revalidate: 300 }
      }
    );

    if (!res.ok) {
      throw new Error(`API failed: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
