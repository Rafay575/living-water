"use client"; // If using Next.js 13+ App Router
import Image from "next/image";
import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="promo-section py-12 mb-5 bg-gray-200 border-y border-gray-200">
      <div className="promo-container max-w-7xl mx-auto px-4">
        <div className="promo-grid grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column */}
          <div className="promo-left">
            <h2 className="promo-title text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              PURE, LAVA-FILTERED HYDRATION FOR ALL
            </h2>
            <p className="promo-description text-gray-700 mb-6 leading-relaxed">
              Whether you’re chasing mountain trails or unwinding at home, Living Water delivers
              naturally purified, mineral-rich hydration straight from Costa Rica’s volcanic springs.
              No chemicals. Just pure vitality in every sip.
            </p>

            {/* Buttons */}
            <div className="promo-buttons flex flex-wrap gap-4 mb-8">
              <Link className="promo-btn-primary px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors" href="/shop">
                ORDER NOW
              </Link>
            
            </div>
          </div>
          
          {/* Right Column */}
          <div className="promo-right flex justify-center md:justify-end">
            {/* Circle Container */}
            <div className="promo-circle-container relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white rounded-full shadow-lg shadow-[#000] overflow-hidden">
              {/* "VOLCANICALLY PURE" Badge */}
              <div className="promo-flavor-badge absolute top-4 pl-20 left-8 z-20 bg-red-600 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                VOLCANICALLY PURE
              </div>
              
              {/* Main Product Image */}
              <Image
                src="/img/hero.jpg"
                alt="Living Water bottle"
                fill
                className="promo-product-image object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
