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

export default function HomeClient({ data }: { data: any }) {
  return (
    <div className="min-h-screen bg-white text-right app-font-iranian-sans" dir="rtl">
      <Header />
      <main>
        <HeroBanner  />
        <CategoryBar  />
        <FeaturesSection  />
        <LatestProducts  />
        <InstallmentCalculator  />
        <SpecialSales  />
        <ServicesBar  />
      </main>
      <Footer />
    </div>
  );
}
