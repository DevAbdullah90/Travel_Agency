"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Umrah Packages",
    subtitle: "/ 12+ Options",
    image: "/images/kaaba-archway.jpg",
  },
  {
    title: "Ramadan Umrah",
    subtitle: "/ 6+ Options",
    image: "/images/haram-zamzam.jpg",
  },
  {
    title: "Ziyarah Tours",
    subtitle: "/ 20+ Options",
    image: "/images/madinah-minaret.jpg",
  },
];

export default function Statistics() {
  return (
    <section className="statistic-section padding-global">
      <div className="container mb-16">
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
                <div className="body-md">Pilgrimage</div>
              </div>
            </div>
            <div className="column column-9">
              <div className="head__description">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="h2 mobile-font-size-36 mobile-no-br"
                >
                  We&apos;ve crafted Umrah journeys for <br />
                  more than 10,000 pilgrims <br />
                  See for yourself
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="statistic__wrapper relative">
        <div className="statistic__items grid grid-cols-1 md:grid-cols-3 border-t border-b border-white-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className={`statistic-item p-8 md:p-10 ${
                i < stats.length - 1 ? "md:border-r border-white-10" : ""
              }`}
            >
              <div className="statistic-item__head flex items-baseline justify-between mb-4">
                <div className="body-lg-semibold">{stat.title}</div>
                <div className="body-md color-white-50">{stat.subtitle}</div>
              </div>
              <div className="statistic-item__visual aspect-[400/437]">
                <Image
                  src={stat.image}
                  alt={stat.title}
                  width={400}
                  height={437}
                  className="statistic-item__illustration w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
