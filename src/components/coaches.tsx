"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const coaches = [
  {
    name: "Ahmed Al-Rashid",
    role: "Umrah Guide",
    location: "Makkah",
    image: "/images/coach-1.webp",
    bio: "I guide pilgrims through every step of Umrah — from ihram and tawaf to sa'i — with clear, patient instruction. My focus is on helping you worship with confidence and presence, without rush or confusion.",
    bio2: "My approach is grounded, structured, and accessible for first-time and returning pilgrims alike.",
    countries: "14",
    retreats: "18",
  },
  {
    name: "Yusuf Karim",
    role: "Visa & Logistics Specialist",
    location: "Jeddah",
    image: "/images/coach-2.webp",
    bio: "I handle the paperwork so you can focus on your worship. From Umrah visas and permits to transport and hotel bookings, I make sure every detail is arranged before you land.",
    bio2: "I support pilgrims with smooth arrivals, clear documentation, and dependable logistics throughout their stay.",
    countries: "19",
    retreats: "56",
  },
  {
    name: "Fatima Noor",
    role: "Ziyarah Coordinator",
    location: "Madinah",
    image: "/images/coach-3.webp",
    bio: "I design guided ziyarah visits to the historic and blessed sites of Makkah and Madinah. My tours are calm, well-paced, and rich with context — so every visit deepens your connection to the journey.",
    bio2: "",
    countries: "17",
    retreats: "89",
  },
  {
    name: "Omar Haddad",
    role: "Hospitality Manager",
    location: "Makkah",
    image: "/images/coach-4.webp",
    bio: "I look after your comfort — from hotels steps from the Haram to daily meals and prayer-time reminders. My team ensures your stay is restful, so you can devote your energy to worship.",
    bio2: "",
    countries: "14",
    retreats: "18",
  },
];

export default function Coaches() {
  return (
    <section className="practitioners-section padding-global">
      <div className="practitioners grid grid-cols-1 lg:grid-cols-2">
        {/* Coach grid (left) */}
        <div className="practitioners__list grid grid-cols-2 border-t border-b border-white-10">
          {coaches.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className={`coaches-person group relative p-10 ${
                i % 2 === 0 ? "md:border-r border-white-10" : ""
              } ${i < 2 ? "md:border-b border-white-10" : ""}`}
            >
              <div className="coaches-person__visual relative overflow-hidden aspect-[373/387]">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  width={373}
                  height={387}
                  className="coaches-person__photo w-full h-full object-cover"
                />
                <div className="coaches-person__head absolute bottom-4 left-0 right-0 flex flex-col gap-1 z-10">
                  <div className="body-lg">{coach.name}</div>
                  <div className="body-sm">{coach.role}</div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Hover info */}
              <div className="coaches-person-info absolute inset-0 bg-[#0a1e24] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10 flex flex-col justify-between z-20">
                <div className="coaches-person-info__location body-md">
                  {coach.location}
                </div>
                <div className="coaches-person-info__body flex flex-col gap-8">
                  <div className="coaches-person-info__head flex flex-col gap-4">
                    <div className="coaches-person-info__headline flex flex-col gap-1">
                      <div className="body-lg">{coach.name}</div>
                      <div className="body-sm">{coach.role}</div>
                    </div>
                    <div className="body-sm color-white-60">
                      {coach.bio}
                      {coach.bio2 && (
                        <>
                          <br />
                          <br />
                          {coach.bio2}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="coaches-person-info__footer">
                    <div className="coaches-person-info__items flex gap-2">
                      <div className="coaches-person-info__item flex gap-2">
                        <div className="body-sm">Cities served:</div>
                        <div className="body-sm">{coach.countries}</div>
                      </div>
                      <div className="coaches-person-info__item flex gap-2">
                        <div className="body-sm">Pilgrims guided:</div>
                        <div className="body-sm">{coach.retreats}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text column (right) */}
        <div className="practitioners__text grid grid-rows-2">
          <div className="practitioners__row p-10">
            <div className="head flex flex-col gap-[18px]">
              <div className="head__title flex items-center gap-2">
                <Image
                  src="/icons/logo-mini.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="logo-mini"
                />
                <div className="body-md">Guides &amp; Team</div>
              </div>
              <div className="head__description">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="h2 mobile-font-size-36"
                >
                  The experts <br />
                  behind your Umrah journey
                </motion.div>
              </div>
            </div>
          </div>

          <div className="practitioners__row padding-top-0 px-10 pb-14">
            <div className="practitioners__items grid grid-cols-1 md:grid-cols-2">
              <div className="practitioners-item flex gap-6">
                <Image
                  src="/icons/plus.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="practitioners-item__icon shrink-0 self-start mt-1"
                />
                <div className="practitioners-item__content flex flex-col gap-4">
                  <div className="body-lg">
                    Your Journey, Our Experts
                  </div>
                  <div className="body-md color-white-60">
                    Each guide is carefully selected to <br />
                    deliver the highest quality support <br />
                    in visa, accommodation, and <br />
                    spiritual guidance.
                  </div>
                </div>
              </div>
              <div className="practitioners-item flex gap-6">
                <Image
                  src="/icons/plus.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="practitioners-item__icon shrink-0 self-start mt-1"
                />
                <div className="practitioners-item__content flex flex-col gap-4">
                  <div className="body-xl mobile-font-size-22">
                    At Vita Travel we&apos;ve brought <br />
                    together a dedicated team of <br />
                    200+ guides, scholars, and <br />
                    hospitality experts — all <br />
                    devoted to your journey.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
