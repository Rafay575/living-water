import Image from "next/image";
import React from "react";

const About5 = ({ pt }) => {
  return (
    <div className={`ltn__about-us-area ${pt ? pt : "pt-120"} pb-120`}>
      <div className="container">
        <div className="row">
          {/* Image on the left */}
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-right">
              <Image
                src="/img/others/7.jpg"
                alt="Volcanic Spring Source"
                width={300}
                height={250}
              />
            </div>
          </div>

          {/* Text on the right */}
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  Discover the Origin
                </h6>
                <h1 className="section-title">
                  Living Water <br className="d-none d-md-block" />
                </h1>
                <p>
                  Nestled beside Costa Rica’s volcanic springs, our water is naturally
                  filtered through ancient lava rock—delivering pure, chemical-free
                  hydration straight from the source.
                </p>
              </div>

              <p>
                Each drop carries life-giving minerals that support vitality and
                well-being. Inspired by a community whose average lifespan soars
                beyond 100 years, Living Water revitalizes your body and mind with
                the elemental power of fire and water.
              </p>

              <div className="about-author-info d-flex">
                <div className="author-name-designation align-self-center mr-30">
                  <h4 className="mb-0">Mariana González</h4>
                  <small>/ Spring Guardian</small>
                </div>
                <div className="author-sign align-self-center">
                  <Image
                    src="/img/icons/icon-img/author-sign.png"
                    alt="Signature"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About5;
