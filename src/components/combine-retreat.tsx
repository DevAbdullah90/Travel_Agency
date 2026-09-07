"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Choose", subtitle: "Package" },
  { number: "02", title: "Match Hotels", subtitle: "Near Haram" },
  { number: "03", title: "Add Flights &", subtitle: "Visa" },
  { number: "04", title: "Secure", subtitle: "Payment" },
];

export default function CombineRetreat() {
  return (
    <section className="combine-section">
      <div className="combine relative aspect-[1440/863] bg-cover bg-center pt-20">
        {/* Background image (desktop) */}
        <div
          className="absolute inset-0 bg-cover bg-center mobile-hidden"
          style={{ backgroundImage: "url(/images/madinah-umbrellas.jpg)" }}
          aria-hidden="true"
        />

        <div className="container relative">
          <div className="head margin-bottom-40 mobile-margin-bottom-24">
            <div className="row align-end">
              <div className="column column-12">
                <div className="head__description">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h2 mobile-h3"
                  >
Combine Umrah
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="combine__items flex flex-col gap-2">
            {["Flights", "Hotels", "Ziyarah"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="combine__item"
              >
                <div className="h3 mobile-h4">
                  <span className="color-white-40">+</span>
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="combine__steps absolute bottom-0 left-0 right-0 grid grid-cols-1 md:grid-cols-6 backdrop-blur-[10px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="combine-step sizel-l p-10 md:col-span-2"
          >
            <div className="body-xl">
              Combine Umrah into one seamless <br />
              checkout. Instant confirmations where <br />
              available, or concierge support for <br />
              bespoke itineraries.
            </div>
          </motion.div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="combine-step relative p-10 flex flex-col gap-[5.5rem]"
            >
              <div
                className="combine-step__dec absolute top-[1px] bottom-[1px] left-0 w-px bg-white-10"
                aria-hidden="true"
              />
              <div className="combine-step__head flex flex-col">
                <div className="h3 mobile-font-size-36">{step.number}</div>
                <div className="combine-step__subtitle py-2">
                  <div className="title-xs color-white-50">Step</div>
                </div>
              </div>
              <div className="combine-step__body">
                <div className="body-lg mobile-body-md">
                  {step.title} <br />
                  {step.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
