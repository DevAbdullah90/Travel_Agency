"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    icon: "/icons/how-1.svg",
    count: "01",
    title: "Tell us your ",
    titleBold: "dates",
    description: "Share your preferred dates and ",
    description2: "group size with us.",
  },
  {
    icon: "/icons/how-2.svg",
    count: "02",
    title: "Get curated",
    titleBold: " packages",
    description: "We recommend Umrah packages ",
    description2: "that fit your budget.",
  },
  {
    icon: "/icons/how-3.svg",
    count: "03",
    title: "Customize your",
    titleBold: " journey",
    description: "Add flights, visa, and ",
    description2: "ziyarah in one checkout.",
  },
  {
    icon: "/icons/how-4.svg",
    count: "04",
    title: "Travel with",
    titleBold: " peace of mind",
    description: "24/7 support from Makkah ",
    description2: "to Madinah.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-works-section padding-global">
      <div className="container">
        <div className="head">
          <div className="row align-end mobile-column">
            <div className="column column-6">
              <div className="head__description mobile-margin-bottom-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="h2 mobile-h3"
                >
                  How Umrah Works
                </motion.div>
              </div>
            </div>
            <div className="column column-6">
              <div className="featured-section__head">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  className="body-md color-white-60"
                >
                  From visa to ziyarah — we handle every <br />
                  step with care and transparency.
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-works grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {items.map((item, i) => (
            <motion.div
              key={item.count}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="how-works-item flex flex-col gap-[134px]"
            >
              <div className="how-works-item__head flex gap-3">
                <Image
                  src={item.icon}
                  alt=""
                  width={49}
                  height={49}
                  className="how-works-item__icon"
                />
                <div className="how-works-item__count text-[10px] leading-[11px] color-white-50">
                  {item.count}
                </div>
              </div>
              <div className="how-works-item__body flex flex-col gap-4">
                <div className="body-md">
                  <span className="mobile-fw">{item.title}</span>
                  {item.titleBold}
                </div>
                <div className="body-md color-white-50 mobile-no-br">
                  {item.description}
                  <br />
                  {item.description2}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
