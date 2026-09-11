"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PlusIcon from "@/components/plus-icon";

type Package = {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  tag: string;
  rating: string;
  description: string;
};

const categories = ["All", "Economy", "Premium", "Ramadan", "Family", "Ziyarah"];

const packages: Package[] = [
  {
    id: "economy-umrah",
    title: "7 Day Economy Umrah Package",
    category: "Economy",
    location: "Makkah, Saudi Arabia",
    duration: "7 days · 6 nights",
    price: "$1,000",
    image: "/images/kaaba-hero.jpg",
    tag: "Bestseller",
    rating: "4.9",
    description:
      "Hotels steps from the Haram, group transport, and guided tawaf support for a smooth first Umrah.",
  },
  {
    id: "premium-madinah",
    title: "10 Day Premium Umrah & Madinah",
    category: "Premium",
    location: "Makkah & Madinah, Saudi Arabia",
    duration: "10 days · 9 nights",
    price: "$1,328",
    image: "/images/madinah-dome.jpg",
    tag: "Popular",
    rating: "4.8",
    description:
      "Five-star stays near the Haram and Masjid Nabawi with private transfers and VIP ziyarah.",
  },
  {
    id: "ramadan-umrah",
    title: "15 Day Ramadan Umrah Experience",
    category: "Ramadan",
    location: "Makkah, Saudi Arabia",
    duration: "15 days · 14 nights",
    price: "$5,575",
    image: "/images/haram-zamzam.jpg",
    tag: "Signature",
    rating: "5.0",
    description:
      "Spend the last ten nights of Ramadan in Makkah with iftar at the hotel and nightly taraweeh.",
  },
  {
    id: "ziyarah-tour",
    title: "8 Day Umrah & Ziyarah Tour",
    category: "Ziyarah",
    location: "Makkah & Madinah, Saudi Arabia",
    duration: "8 days · 7 nights",
    price: "$3,829",
    image: "/images/kaaba-archway.jpg",
    tag: "New",
    rating: "4.7",
    description:
      "Guided ziyarah to the historic and blessed sites of Makkah, Madinah, and the places in between.",
  },
  {
    id: "family-umrah",
    title: "8 Day Family Umrah Package",
    category: "Family",
    location: "Makkah, Saudi Arabia",
    duration: "8 days · 7 nights",
    price: "$1,294",
    image: "/images/madinah-window.jpg",
    tag: "Family",
    rating: "4.6",
    description:
      "Kid-friendly hotels, family rooms, and a flexible schedule designed for pilgrims of all ages.",
  },
  {
    id: "solo-umrah",
    title: "7 Day Solo Umrah Journey",
    category: "Economy",
    location: "Makkah & Madinah, Saudi Arabia",
    duration: "7 days · 6 nights",
    price: "$406",
    image: "/images/kaaba-pilgrims.jpg",
    tag: "Solo",
    rating: "4.9",
    description:
      "A focused journey for solo pilgrims — shared rooms, group guidance, and a like-minded community.",
  },
  {
    id: "twenty-day-umrah",
    title: "20 Day Umrah Package",
    category: "Premium",
    location: "Makkah & Madinah, Saudi Arabia",
    duration: "20 days · 13 nights",
    price: "PKR 245,000",
    image: "/images/kaaba-hero.jpg",
    tag: "Extended",
    rating: "4.8",
    description:
      "7 nights at Hadaya Kubra 2 Hotel in Makkah with shuttle service, then 6 nights at Shaza Munawara Hotel in Madinah. Five room options from sharing to single.",
  },
];

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white-10 bg-[#0a1e24] transition-colors duration-300 hover:border-white-20"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e24] via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="rounded-full bg-[#d4af37] px-3 py-1 text-xs font-semibold text-[#071418]">
            {pkg.tag}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-[#071418]/70 px-3 py-1 backdrop-blur-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#d4af37">
            <path d="M12 2l2.9 6.26L21 9.27l-4.5 4.38L17.8 20 12 16.77 6.2 20l1.3-6.35L3 9.27l6.1-1.01L12 2z" />
          </svg>
          <span className="text-xs font-medium text-white">{pkg.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-[#d4af37]">
            {pkg.category}
          </span>
          <span className="text-xs text-white-50">{pkg.duration}</span>
        </div>

        <h3 className="h4 leading-tight">{pkg.title}</h3>

        <p className="body-sm color-white-60">{pkg.description}</p>

        <div className="mt-auto flex items-center justify-between border-t border-white-10 pt-4">
          <div className="flex flex-col">
            <span className="text-xs text-white-50">from</span>
            <span className="body-lg-semibold">{pkg.price}</span>
          </div>
          <Link
            href="#"
            className="btn-secondary"
            aria-label={`Explore ${pkg.title}`}
          >
            <span className="button-sm color-white">Explore</span>
            <span className="btn-icon">
              <PlusIcon fill="white" />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function PackagesPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main>
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pt-40 pb-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(13,46,55,0.6),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(251,161,58,0.15),transparent_50%)]" />
          <div className="container">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-6 flex items-center gap-2"
              >
                <Image
                  src="/icons/logo-mini.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="logo-mini"
                />
                <span className="body-md color-white-60">Umrah Packages</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="h2 mb-6"
              >
                Umrah packages crafted for <br />
                <span className="text-[#d4af37]">every kind of pilgrim</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="body-xl color-white-60 max-w-xl"
              >
                From economy to Ramadan, explore hand-picked
                Umrah journeys designed to bring you closer to the Haram.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ============ FILTER + GRID ============ */}
        <section className="pb-24">
          <div className="container">
            {/* Filters */}
            <div className="mb-12 flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? "border-[#d4af37] bg-[#d4af37] text-[#071418]"
                      : "border-white-20 text-white-60 hover:border-white-60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((pkg, i) => (
                  <PackageCard key={pkg.id} pkg={pkg} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ============ VALUE STRIP ============ */}
        <section className="border-y border-white-10 bg-[#0a1e24] py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {[
                {
                  icon: "✦",
                  title: "Expertly Curated",
                  text: "Every package is vetted by our Umrah specialists and verified pilgrim reviews.",
                },
                {
                  icon: "◈",
                  title: "All-Inclusive Ease",
                  text: "Combine flights, hotels, visa, and ziyarah into one seamless checkout.",
                },
                {
                  icon: "❋",
                  title: "Flexible Booking",
                  text: "Free cancellation up to 14 days before departure on most packages.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-2xl text-[#d4af37]">
                    {item.icon}
                  </div>
                  <h3 className="h4">{item.title}</h3>
                  <p className="body-md color-white-60">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative overflow-hidden py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(13,46,55,0.8),transparent_70%)]" />
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mx-auto max-w-2xl"
            >
              <h2 className="h2 mb-6">
                Not sure where to <br />
                start your journey?
              </h2>
              <p className="body-xl color-white-60 mb-10">
                Tell us your dates and our concierge team will match you with
                the perfect Umrah package.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contacts" className="btn-primary">
                  <span className="button-sm color-brand-green">Talk to an Expert</span>
                  <span className="btn-icon">
                    <PlusIcon fill="#0D2E37" />
                  </span>
                </Link>
                <Link href="/about" className="btn-secondary">
                  <span className="button-sm color-white">About Vita Travel</span>
                  <span className="btn-icon">
                    <PlusIcon fill="white" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
