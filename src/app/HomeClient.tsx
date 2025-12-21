// app/HomeClient.tsx
"use client";

import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import CategoryBar from "../components/CategoryBar";
import FeaturesSection from "../components/FeaturesSection";
import LatestProducts from "../components/LatestProducts";
import InstallmentCalculator from "../components/InstallmentCalculator";
import SpecialSales from "../components/SpecialSales";
import ServicesBar from "../components/ServicesBar";
import Footer from "../components/Footer";
import { headers } from "next/headers";

export default function HomeClient({ data }: { data: any }) {
  return (
    <div className="min-h-screen bg-white text-right app-font-iranian-sans" dir="rtl">
      <Header data={data?.data.header} />
      <main>
        <HeroBanner data={data?.data.slider}  />
        <CategoryBar  data={data?.data?.box.find(item => item.idd == "home-category") ?? null} />
        <FeaturesSection  />
        <LatestProducts  data={data?.data?.box.find(item => item.idd == "home-product-new") ?? null} />
        <InstallmentCalculator  />
        <SpecialSales    data={data?.data?.box.find(item => item.idd == "home-product-suggested") ?? null} />
        <ServicesBar  />
      </main>
      <Footer />
    </div>
  );
}
