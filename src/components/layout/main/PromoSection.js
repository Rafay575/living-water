"use client"; // If using Next.js 13+ App Router
import NextImage from "next/image";
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
            <div className="btn-wrapper animated">
                <Link
                  href="/shop"
                  className="theme-btn-1 text-uppercase btn btn-effect-1"
                >
                  Order Now
                </Link>
              </div>
          </div>
          
          {/* Right Column */}
          <div className="promo-right flex justify-center md:justify-end">
            {/* Circle Container */}
     <div
  style={{
    position: 'relative',
    width: '300px',
    height: '300px',
    borderRadius: '9999px', // makes it a circle
    overflow: 'hidden'
  }}
>
  <img
    src="/img/hero.jpg"
    alt="Living Water bottle"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    }}
  />
</div>


          </div>

        </div>
      </div>
    </section>
  );
}
