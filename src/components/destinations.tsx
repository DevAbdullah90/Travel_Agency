"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
  {
    name: "Makkah",
    count: "/ 12+ Hotels",
    image: "/images/kaaba-hero.jpg",
  },
  {
    name: "Madinah",
    count: "/ 8+ Hotels",
    image: "/images/madinah-dome.jpg",
  },
  {
    name: "Jeddah",
    count: "/ 5+ Hotels",
    image: "/images/madinah-columns.jpg",
  },
];

export default function Destinations() {
  return (
    <section className="destination-section">
      <div
        className="destination relative aspect-[1440/1013] py-20"
        style={{
          backgroundImage: "url(/images/destination-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="head">
            <div className="row mobile-column">
              <div className="column column-3">
                <div className="head__title mobile-margin-bottom-24">
                  <Image
                    src="/icons/logo-mini.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="logo-mini"
                  />
                  <div className="body-md">City</div>
                </div>
              </div>
              <div className="column column-9">
                <div className="head__description">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h2 mobile-font-size-36"
                  >
                    Explore the Holy Cities{" "}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="body-xl mobile-lg mobile-no-br"
                  >
                    Discover the sacred journey! <br />
                    Choose from hotels steps from the Haram in Makkah with 12{" "}
                    <br />
                    options, serene stays in Madinah with 8 experiences, and the
                    <br />
                    convenient gateway of Jeddah featuring 5 unique stays.
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Destination cards - mobile only */}
          <div className="destination-mobile md:hidden grid grid-cols-1 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                className="destination-mobile-item"
              >
                <div className="destination-mobile-item__head flex items-baseline justify-between">
                  <div className="body-lg">{dest.name}</div>
                  <div className="body-sm color-white-50">{dest.count}</div>
                </div>
                <div className="destination-mobile-item__visual">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    width={400}
                    height={300}
                    className="destination-mobile-item__illustration w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative dots */}
        <svg
          className="destination__dots absolute left-[1%] bottom-[24%] w-[90%] h-auto pointer-events-none"
          width="1312"
          height="287"
          viewBox="0 0 1312 287"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="787" cy="92.3335" r="2" fill="#D4AF37" />
          <circle cx="682" cy="87.3335" r="4" fill="#D4AF37" />
          <circle cx="650" cy="143.333" r="2" fill="#D4AF37" />
          <circle cx="590" cy="125.333" r="2" fill="#D4AF37" />
          <circle cx="559" cy="51.3335" r="4" fill="#D4AF37" />
          <circle cx="708" cy="149.333" r="4" fill="#D4AF37" />
          <circle cx="609" cy="65.3335" r="2" fill="#D4AF37" />
          <circle cx="744" cy="131.333" r="2" fill="#D4AF37" />
          <circle cx="755" cy="171.333" r="2" fill="#D4AF37" />
          <circle cx="734" cy="199.333" r="2" fill="#D4AF37" />
          <circle cx="39.9998" cy="41.3333" r="5.33333" fill="#D4AF37" />
          <circle cx="542" cy="196.333" r="4" fill="#D4AF37" />
          <circle cx="530" cy="268.333" r="2" fill="#D4AF37" />
          <circle cx="1280" cy="210.333" r="4" fill="#D4AF37" />
        </svg>
      </div>
    </section>
  );
}
