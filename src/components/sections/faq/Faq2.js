/* eslint-disable jsx-a11y/role-supports-aria-props */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Faq2 = () => {
  return (
    <div className="ltn__faq-area pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h1 className="section-title white-color---">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="ltn__faq-inner ltn__faq-inner-2">
              <div id="accordion_2">
                {/* Card 1 */}
                <div className="card">
                  <h6
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-1"
                    aria-expanded="false"
                  >
                    Where does Living Water come from?
                  </h6>
                  <div
                    id="faq-item-2-1"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        Our water originates from natural volcanic springs in
                        Costa Rica, where it&apos;s filtered naturally through
                        layers of ancient lava rock. This unique filtration
                        process ensures it&apos;s completely pure and
                        chemical-free.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="card">
                  <h6
                    className="ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-2"
                    aria-expanded="true"
                  >
                    What makes Living Water special?
                  </h6>
                  <div
                    id="faq-item-2-2"
                    className="collapse show"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        Living Water is uniquely enriched by minerals from
                        volcanic rock, offering unmatched purity and natural
                        health benefits. No additives or artificial processes
                        are involved.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="card">
                  <h6
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-3"
                    aria-expanded="false"
                  >
                    Are there any chemicals or additives?
                  </h6>
                  <div
                    id="faq-item-2-3"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        Absolutely not! Living Water is completely natural. It
                        undergoes a natural purification process through
                        volcanic rock, ensuring no chemicals or additives are
                        ever used.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="card">
                  <h6
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-4"
                    aria-expanded="false"
                  >
                    How can I order Living Water?
                  </h6>
                  <div
                    id="faq-item-2-4"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        Simply visit our online shop, select your preferred pack
                        size, and place your order securely. We ensure prompt
                        and safe delivery straight to your doorstep.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="card">
                  <h6
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-5"
                    aria-expanded="false"
                  >
                    Is Living Water sustainable?
                  </h6>
                  <div
                    id="faq-item-2-5"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        Yes! We are committed to sustainability and responsible
                        sourcing. Our volcanic springs are protected, and we
                        follow environmentally-friendly practices to preserve
                        nature&apos;s balance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <aside className="sidebar-area ltn__right-sidebar mt-60">
              {/* Banner Widget */}
              <div className="widget ltn__banner-widget">
                <Link href="/shop">
                  <Image
                    style={{ height: "auto" }}
                    src="/img/abc.png"
                    alt="Living Water Promotion"
                    width={631}
                    height={500}
                  />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq2;
