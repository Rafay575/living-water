import TestimonialCard2 from "@/components/shared/cards/TestimonialCard2";
import getAllTestimonials from "@/libs/getAllTestimonials";
const testimonials = [
  {
    id: 1,
    name: "Ainias Smith",
    image: "/img/testimonial/1.jpeg",
    imageSmall: "/img/testimonial/1.jpeg",
    desig: "Wide Receiver, Philadelphia Eagles",
    desc: "This platform has transformed how I train off-season. The guidance is top-notch."
  },
  {
    id: 2,
    name: "Layden Robinson",
    image: "/img/testimonial/2.jpeg",
    imageSmall: "/img/testimonial/2.jpeg",
    desig: "Guard, New England Patriots",
    desc: "I appreciate the seamless experience and the dedication of the coaching staff."
  },
  {
    id: 3,
    name: "Jalyx Hunt",
    image: "/img/testimonial/3.jpeg",
    imageSmall: "/img/testimonial/3.jpeg",
    desig: "Linebacker, Philadelphia Eagles",
    desc: "Their attention to detail and personalized feedback have taken my game to the next level."
  },
  {
    id: 4,
    name: "Isiah Spiller",
    image: "/img/testimonial/4.jpeg",
    imageSmall: "/img/testimonial/4.jpeg",
    desig: "Running Back, Los Angeles Chargers",
    desc: "I’ve never felt more prepared for each game thanks to these insights."
  },
  {
    id: 5,
    name: "Lean O'Neal Jr",
    image: "/img/testimonial/5.jpeg",
    imageSmall: "/img/testimonial/5.jpeg",
    desig: "Safety, San Francisco 49ers",
    desc: "The support and resources provided are unparalleled in the league."
  }
];

const Testimonials3 = ({ pt }) => {
  
  return (
    <div
      className={`ltn__testimonial-area section-bg-1   pb-70 ${
        pt ? pt : "pt-290"
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                {"//"} Testimonials
              </h6>
              <h1 className="section-title">
                NFLPlayers<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
          {testimonials?.map((testimonial, idx) => (
            <div className="col-lg-12" key={idx}>
              <TestimonialCard2 testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials3;
