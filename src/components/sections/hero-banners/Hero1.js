import Image from "next/image";
import Link from "next/link";

const Hero1 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-3  section-bg-1">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* <!-- ltn__slide-item --> */}
       <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
  <div className="ltn__slide-item-inner">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <div className="slide-item-info">
            <div className="slide-item-info-inner ltn__slide-animation">
              <h6 className="slide-sub-title animated">
                Straight from Costa Rica’s Volcanic Springs
              </h6>
              <h1 className="slide-title animated">
                Pure Lava-Filtered <br /> Mineral Water
              </h1>
              <div className="btn-wrapper animated">
                <Link
                  href="/shop"
                  className="theme-btn-1 text-uppercase btn btn-effect-1"
                >
                  Discover the Purity
                </Link>
              </div>
            </div>
          </div>
          <div className="slide-item-img">
            <Image
              priority={false}
              src="/img/1.png"
              alt="Lava-filtered spring water"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* second slide */}
<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
  <div className="ltn__slide-item-inner text-right text-end">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 align-self-center">
          <div className="slide-item-info">
            <div className="slide-item-info-inner ltn__slide-animation">
              <h6 className="slide-sub-title animated">
                Naturally Mineral-Rich & Chemical-Free
              </h6>
              <h1 className="slide-title animated">
                Taste the Essence <br /> of Fire & Water
              </h1>
              <div className="slide-brief animated">
                <p>
                  Living Water is free of additives and packed with
                  life-giving minerals—crafted by volcanic lava, celebrated by
                  century-long lifespans.
                </p>
              </div>
              <div className="btn-wrapper animated">
                <Link
                  href="/shop"
                  className="theme-btn-1 text-uppercase btn btn-effect-1"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
          <div className="slide-item-img slide-img-left">
            <Image
              priority={false}
              src="/img/favicon.png"
              alt="Living Water branded bottle"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* <!--  --> */}
      </div>
    </div>
  );
};

export default Hero1;
