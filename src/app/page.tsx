// src/app/page.js
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import CategoryBar from "../components/CategoryBar";
import FeaturesSection from "../components/FeaturesSection";
import LatestProducts from "../components/LatestProducts";
import InstallmentCalculator from "../components/InstallmentCalculator";
import SpecialSales from "../components/SpecialSales";
import ServicesBar from "../components/ServicesBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-['ShabnamFD']" dir="rtl">
      <Header />

      <main>
        <HeroBanner />
        <CategoryBar />

        <FeaturesSection />
        <LatestProducts />

        <InstallmentCalculator />
        <SpecialSales />
        <ServicesBar />
      </main>
      <Footer />
      {/* می‌توانید Footernpm را در اینجا اضافه کنید */}
    </div>
  );
}
