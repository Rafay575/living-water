import TestimonialCard2 from "@/components/shared/cards/TestimonialCard2";
import getAllTestimonials from "@/libs/getAllTestimonials";
const randomizedDescs = [
  "Can't even begin to say how great this water is, The colder it is the tastier and more boost it gives. Can't Explain it, but hell it awesome",
  "When I tried this one day in the morning before training the kids, I had to grab 10 more... They say not to over hydrate, but this well I drank it all",
  "During Coaching Kids in Houston Tx, this water revitalized me in the southern Heat, it is FANTASTIC!!!",
  "This water has helped me improve my off-seasons training by boosting my energy!",
  "I drank a few of the bottles throughout the day and I did not have sore muscles after training or in the morning."
];

// Static assignment of randomized descriptions
const testimonials = [
  {
    id: 1,
    name: "Ainias Smith",
    image: "/img/testimonial/1.jpeg",
    imageSmall: "/img/testimonial/1.jpeg",
    desig: "Wide Receiver, Philadelphia Eagles",
    desc: randomizedDescs[0]
  },
  {
    id: 2,
    name: "Layden Robinson",
    image: "/img/testimonial/2.jpeg",
    imageSmall: "/img/testimonial/2.jpeg",
    desig: "Guard, New England Patriots",
    desc: randomizedDescs[1]
  },
  {
    id: 3,
    name: "Jalyx Hunt",
    image: "/img/testimonial/3.jpeg",
    imageSmall: "/img/testimonial/3.jpeg",
    desig: "Linebacker, Philadelphia Eagles",
    desc: randomizedDescs[2]
  },
  {
    id: 4,
    name: "Isiah Spiller",
    image: "/img/testimonial/4.jpeg",
    imageSmall: "/img/testimonial/4.jpeg",
    desig: "Running Back, Los Angeles Chargers",
    desc: randomizedDescs[3]
  },
  {
    id: 5,
    name: "Lean O'Neal Jr",
    image: "/img/testimonial/5.jpeg",
    imageSmall: "/img/testimonial/5.jpeg",
    desig: "Safety, San Francisco 49ers",
    desc: randomizedDescs[4]
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
               Testimonials
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
