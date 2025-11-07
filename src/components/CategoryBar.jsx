// src/components/CategoryBar.jsx
"use client";
import Image from "next/image";

const categories = [
  { name: "پرده شید", slug: "shade-curtain", image: "https://picsum.photos/id/1011/400/500" },
  { name: "پرده ورتیکال", slug: "vertical-curtain", image: "https://picsum.photos/id/1015/400/500" },
  { name: "پرده دومکانیزم", slug: "duplex-curtain", image: "https://picsum.photos/id/1020/400/500" },
  { name: "پرده زبرا چاپی", slug: "printed-zebra", image: "https://picsum.photos/id/1025/400/500" },
  { name: "پرده پذیرایی", slug: "living-room", image: "https://picsum.photos/id/1030/400/500" },
];

export default function CategoryBar() {
  return (
    <div className="mt-8 relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row-reverse overflow-x-auto space-x-4 space-x-reverse pb-6 scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-transparent hover:border-[#f0a500]"
          >
            <div className="relative w-full h-full">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 group-hover:opacity-90 rounded-xl"
              />

              <div className="absolute bottom-0 w-full bg-[#246e72] bg-opacity-90 text-white text-center py-3 z-10">
                <h3 className="text-lg font-bold">{category.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
