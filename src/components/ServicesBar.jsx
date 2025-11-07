// src/components/ServicesBar.jsx
import { Truck, CheckCircle, CreditCard, Clock } from 'lucide-react';

const services = [
  { text: "امکان ارسال سریع", icon: Truck },
  { text: "امکان پرداخت در محل", icon: CreditCard },
  { text: "ضمانت اصل بودن کالا", icon: CheckCircle },
  { text: "پشتیبانی ۲۴ ساعته", icon: Clock },
];

export default function ServicesBar() {
  return (
    <section className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* کانتینر خدمات (ریسپانسیو با فاصله یکسان) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-gray-100 rounded-full mb-3">
                {/* نمایش آیکون با رنگ برند */}
                <service.icon size={24} className="text-[#f0a500]" />
              </div>
              <p className="text-sm font-semibold text-[#3a3a3a]">{service.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}