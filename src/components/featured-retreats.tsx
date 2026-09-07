"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PlusIcon from "./plus-icon";

type Retreat = {
  title: string;
  cost: string;
  image: string;
  location: string;
  date: string;
  dateNote: string;
  guests: string;
  trusted: string;
  href: string;
};

const retreats: Retreat[] = [
  {
    title: "7 Day Economy Umrah Package",
    cost: "$1,000",
    image: "/images/kaaba-hero.jpg",
    location: "Makkah, Saudi Arabia",
    date: "Feb 15 - 21, 2026",
    dateNote: "(7 days, 6 nights)",
    guests: "12 pilgrims",
    trusted: "Trusted by 190+",
    href: "/umrah-package-economy",
  },
  {
    title: "10 Day Premium Umrah & Madinah",
    cost: "$1,328",
    image: "/images/madinah-dome.jpg",
    location: "Makkah & Madinah, Saudi Arabia",
    date: "Jan 15 - 24, 2026",
    dateNote: "(10 days, 9 nights)",
    guests: "6 pilgrims",
    trusted: "Trusted by 125+",
    href: "/umrah-package-premium",
  },
  {
    title: "15 Day Ramadan Umrah Experience",
    cost: "$5,575",
    image: "/images/haram-zamzam.jpg",
    location: "Makkah, Saudi Arabia",
    date: "March 06 - 20, 2026",
    dateNote: "(15 days, 14 nights)",
    guests: "18 pilgrims",
    trusted: "Trusted by 312+",
    href: "/umrah-package-ramadan",
  },
  {
    title: "8 Day Umrah & Ziyarah Tour",
    cost: "$3,829",
    image: "/images/kaaba-archway.jpg",
    location: "Makkah & Madinah, Saudi Arabia",
    date: "April 12 - 20, 2026",
    dateNote: "(8 days, 7 nights)",
    guests: "6 pilgrims",
    trusted: "Trusted by 412+",
    href: "/umrah-package-ziyarah",
  },
  {
    title: "8 Day Family Umrah Package",
    cost: "$1,294",
    image: "/images/madinah-window.jpg",
    location: "Makkah, Saudi Arabia",
    date: "Feb 06 - 14, 2026",
    dateNote: "(8 days, 7 nights)",
    guests: "12 pilgrims",
    trusted: "Trusted by 112+",
    href: "/umrah-package-family",
  },
  {
    title: "7 Day Solo Umrah Journey",
    cost: "$406",
    image: "/images/kaaba-pilgrims.jpg",
    location: "Makkah & Madinah, Saudi Arabia",
    date: "Jan | Feb | Mar | Apr | May",
    dateNote: "(7 days, 6 nights)",
    guests: "Solo",
    trusted: "Trusted by 287+",
    href: "/umrah-package-solo",
  },
];

function PropertyIcon({ type }: { type: "pin" | "calendar" | "users" | "stars" }) {
  const src = {
    pin: "/icons/pin.svg",
    calendar: "/icons/calendar.svg",
    users: "/icons/users.svg",
    stars: "/icons/stars.svg",
  }[type];
  return (
    <Image
      src={src}
      alt=""
      width={16}
      height={16}
      className={`opacity-20 ${type === "stars" ? "w-5 h-5" : "w-4 h-4"}`}
    />
  );
}

export default function FeaturedRetreats() {
  return (
    <section id="packages" className="featured-section padding-global">
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
                  Featured <span className="mobile-fw">Umrah Packages</span>
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
                  className="body-md color-white-60 mobile-no-br"
                >
                  Complete packages with flights, hotels near the <br />
                  Haram, and guided ziyarah — designed to make your <br />
                  pilgrimage seamless and serene.
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="featured">
          <div className="featured__items grid grid-cols-1 md:grid-cols-2 md:-mx-10">
            {retreats.map((retreat, i) => (
              <motion.div
                key={retreat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`featured-item p-10 ${
                  i % 2 === 0 ? "md:border-r border-white-10" : ""
                } ${i < 4 ? "md:border-b border-white-10" : ""} ${
                  i < 2 ? "border-b border-white-10 md:border-b-0" : ""
                }`}
              >
                <div className="featured-item__in grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 h-full">
                  {/* Text side */}
                  <div className="featured-item__text flex flex-col justify-between">
                    <div className="featured-item__head flex items-start justify-between gap-6">
                      <div className="h4">{retreat.title}</div>
                      <div className="featured-item__cost flex flex-col items-end shrink-0">
                        <div className="body-md color-white-60">from</div>
                        <div className="body-lg-semibold">{retreat.cost}</div>
                      </div>
                    </div>

                    {/* Mobile image */}
                    <div className="featured-item__visual md:hidden mb-8">
                      <Image
                        src={retreat.image}
                        alt={retreat.title}
                        width={600}
                        height={400}
                        className="featured-item__illustration w-full h-full object-cover"
                      />
                    </div>

                    <div className="featured-item__body flex flex-col gap-6">
                      <div className="featured-item__properties flex flex-col gap-[9.6px]">
                        <div className="featured-item-property flex items-center justify-between gap-4">
                          <div className="featured-item-property__title">
                            <div className="title-xs">{retreat.location}</div>
                          </div>
                          <PropertyIcon type="pin" />
                        </div>
                        <div className="featured-item-property flex items-center justify-between gap-4">
                          <div className="featured-item-property__title">
                            <div className="title-xs">
                              {retreat.date}{" "}
                              <span className="color-white-60">
                                {retreat.dateNote}
                              </span>
                            </div>
                          </div>
                          <PropertyIcon type="calendar" />
                        </div>
                        <div className="featured-item-property flex items-center justify-between gap-4">
                          <div className="featured-item-property__title">
                            <div className="title-xs">{retreat.guests}</div>
                          </div>
                          <PropertyIcon type="users" />
                        </div>
                        <div className="featured-item-property flex items-center justify-between gap-4">
                          <div className="featured-item-property__title">
                            <div className="title-xs">
                              {retreat.trusted}{" "}
                              <span className="color-white-60">
                                clients worldwide
                              </span>
                            </div>
                          </div>
                          <PropertyIcon type="stars" />
                        </div>
                      </div>

                      <div className="featured-item__button">
                        <Link href={retreat.href} className="btn-secondary">
                          <span className="button-sm color-white">
                            Explore Package
                          </span>
                          <span className="btn-icon">
                            <PlusIcon fill="white" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Desktop image */}
                  <div className="featured-item__visual hidden md:block">
                    <Image
                      src={retreat.image}
                      alt={retreat.title}
                      width={300}
                      height={322}
                      className="featured-item__illustration w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
