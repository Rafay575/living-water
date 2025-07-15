// src/pages/TestimonialsMain.tsx

import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";
import styles from "./TestimonialsMain.module.css";
const randomizedDescs = [
  "Can't even begin to say how great this water is, The colder it is the tastier and more boost it gives. Can't Explain it, but hell it awesome",
  "When I tried this one day in the morning before training the kids, I had to grab 10 more... They say not to over hydrate, but this well I drank it all",
  "During Coaching Kids in Houston Tx, this water revitalized me in the southern Heat, it is FANTASTIC!!!",
  "This water has helped me improve my off-seasons training by boosting my energy!",
  "I drank a few of the bottles throughout the day and I did not have sore muscles after training or in the morning."
];

const testimonials = [
  // 5 athlete blurbs
  {
    id: 1,
    name: "Ainias Smith",
    desig: "Wide Receiver, Philadelphia Eagles",
    image: "/img/testimonial/1.jpeg",
    imageSmall: "/img/testimonial/1.jpeg",
    desc: randomizedDescs[0],
  },
  {
    id: 2,
    name: "Layden Robinson",
    desig: "Guard, New England Patriots",
    image: "/img/testimonial/2.jpeg",
    imageSmall: "/img/testimonial/2.jpeg",
    desc: randomizedDescs[1],
  },
  {
    id: 3,
    name: "Jalyx Hunt",
    desig: "Linebacker, Philadelphia Eagles",
    image: "/img/testimonial/3.jpeg",
    imageSmall: "/img/testimonial/3.jpeg",
    desc: randomizedDescs[2],
  },
  {
    id: 4,
    name: "Isiah Spiller",
    desig: "Running Back, Los Angeles Chargers",
    image: "/img/testimonial/4.jpeg",
    imageSmall: "/img/testimonial/4.jpeg",
    desc: randomizedDescs[3],
  },
  {
    id: 5,
    name: "Lean O'Neal Jr",
    desig: "Safety, San Francisco 49ers",
    image: "/img/testimonial/5.jpeg",
    imageSmall: "/img/testimonial/5.jpeg",
    desc: randomizedDescs[4],
  },

  
  {
    id: 6,
    name: "Morgan Lee",
    desig: "Fitness Coach, PureFit Gym",
    image: "/img/testimonial/1.jpg",
    imageSmall: "/img/testimonial/1.jpg",
    desc: "Since switching to these bottles, my clients stay hydrated longer and recover faster!",
  },
 
  {
    id: 8,
    name: "Taylor Nguyen",
    desig: "Outdoor Enthusiast",
    image: "/img/testimonial/2.jpg",
    imageSmall: "/img/testimonial/2.jpg",
    desc: "Hiked 10 miles in the desert—this water kept me cool and energized the entire trek!",
  },
  {
    id: 9,
    name: "Cameron Diaz",
    desig: "Nutritionist, Healthy Habits Co.",
    image: "/img/testimonial/3.jpg",
    imageSmall: "/img/testimonial/3.jpg",
    desc: "I recommend these to all my clients—clean, pure, and an unbeatable taste profile.",
  },
 
];


const TestimonialsMain = () => (
  <main>
    <HeroPrimary title="Testimonials" text="What our clients say" />

        <div>

      <h2 className={styles.heading}>Our Happy Clients</h2>
      <p className={styles.subheading}>Hear what they’re saying about us</p>
        </div>
    <section className={styles.container}>

      {testimonials.map((t, i) => {
        const sideClass = i % 2 === 0 ? styles.left : styles.right;
        return (
          <div key={t.id} className={`${styles.item} ${sideClass}`}>
            <div className={styles.header}>
              <img
                src={t.imageSmall}
                alt={`${t.name} avatar`}
                className={styles.avatar}
              />
              <div>
                <h4 className={styles.name}>{t.name}</h4>
                <p className={styles.desig}>{t.desig}</p>
              </div>
            </div>
            <p className={styles.quote}>{t.desc}</p>
          </div>
        );
      })}
    </section>
  </main>
);

export default TestimonialsMain;
