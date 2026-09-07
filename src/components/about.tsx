"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about-section padding-global">
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
                <div className="body-md">About Us</div>
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
                  Not just trips pilgrimages that <br />
                  nurture faith and soul
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="about grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="about__visual"
          >
            <Image
              src="/images/kaaba-pilgrims.jpg"
              alt="Pilgrims at the Kaaba in Makkah"
              width={800}
              height={600}
              className="about__illustration w-full h-auto object-cover"
            />
          </motion.div>

          <div className="about__content flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="about__head body-xl mobile-font-size-22 mobile-no-br mb-10"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vita
              Travel&nbsp; is a premium Umrah travel agency <br />
              that blends the ease of booking with the care of a <br />
              personal concierge. Discover curated packages, match <br />
              them with hotels near the Haram, and book seamlessly.
            </motion.div>

            <div className="about__items grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="about-item pb-[30px]">
                <div className="about-item__head flex flex-col gap-5 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h3"
                  >
                    10K+
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="body-l"
                  >
                    Total pilgrims <br />
                    served
                  </motion.div>
                </div>
                <div className="about-item__footer">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="body-md color-white-60"
                  >
                    Trusted by pilgrims looking for more than ordinary
                    travel.
                  </motion.div>
                </div>
              </div>

              <div className="about-item pb-[30px]">
                <div className="about-item__head flex flex-col gap-5 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h3"
                  >
                    1 472+
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="body-l"
                  >
                    Total Umrah packages <br />
                    completed
                  </motion.div>
                </div>
                <div className="about-item__footer">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="about-item__logos flex items-center gap-6"
                  >
                    <Image
                      src="/icons/logo-1.svg"
                      alt="Partner logo"
                      width={40}
                      height={40}
                      className="about-item__logo"
                    />
                    <Image
                      src="/icons/logo-2.svg"
                      alt="Partner logo"
                      width={40}
                      height={40}
                      className="about-item__logo"
                    />
                    <Image
                      src="/icons/logo-3.svg"
                      alt="Partner logo"
                      width={40}
                      height={40}
                      className="about-item__logo hidden md:block"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
