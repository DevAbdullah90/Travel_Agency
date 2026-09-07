"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PlusIcon from "@/components/plus-icon";

const stats = [
  { value: "200+", label: "Umrah specialists" },
  { value: "10K+", label: "Pilgrims served" },
  { value: "1,472+", label: "Packages completed" },
  { value: "4.9", label: "Average rating" },
];

const values = [
  {
    icon: "✦",
    title: "Devotion first",
    text: "Every journey is designed around your worship — from prayer times to proximity to the Haram.",
  },
  {
    icon: "◈",
    title: "Curated with care",
    text: "Each package is hand-picked and vetted by Umrah specialists and verified pilgrim reviews — never mass-produced.",
  },
  {
    icon: "❋",
    title: "Community & family",
    text: "From solo pilgrims to family groups, we build journeys that bring people closer to each other and to their faith.",
  },
  {
    icon: "☀",
    title: "Trusted & transparent",
    text: "Clear pricing, licensed operators, and 24/7 support from Makkah to Madinah.",
  },
];

const team = [
  {
    name: "Ahmed Al-Rashid",
    role: "Umrah Guide",
    location: "Makkah",
    image: "/images/coach-1.webp",
  },
  {
    name: "Yusuf Karim",
    role: "Visa & Logistics Specialist",
    location: "Jeddah",
    image: "/images/coach-2.webp",
  },
  {
    name: "Fatima Noor",
    role: "Ziyarah Coordinator",
    location: "Madinah",
    image: "/images/coach-3.webp",
  },
  {
    name: "Omar Haddad",
    role: "Hospitality Manager",
    location: "Makkah",
    image: "/images/coach-4.webp",
  },
];

export default function AboutPage() {
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
                <span className="body-md color-white-60">Our Story</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="h2 mb-6"
              >
                The experts <br />
                <span className="text-[#d4af37]">behind your Umrah journey</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="body-xl color-white-60 max-w-2xl"
              >
                Vita Travel is a premium Umrah travel agency that blends
                the ease of booking with the care of a personal concierge.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ============ STORY ============ */}
        <section className="pb-24">
          <div className="container">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl"
              >
                <Image
                  src="/images/kaaba-pilgrims.jpg"
                  alt="Pilgrims at the Kaaba in Makkah"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071418]/60 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <h2 className="h3">Not just trips — journeys of faith and devotion</h2>
                <p className="body-lg color-white-60">
                  Vita Travel was born from a simple belief: that the journey
                  to the House of Allah should be as smooth and serene as the
                  worship itself.
                </p>
                <p className="body-lg color-white-60">
                  We&apos;ve brought together a dedicated team of 200+ guides,
                  visa specialists, and hospitality experts. Discover curated
                  packages, match them with hotels near the Haram, and book
                  seamlessly — all in one place.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Link href="/packages" className="btn-primary">
                    <span className="button-sm color-brand-green">Explore Packages</span>
                    <span className="btn-icon">
                      <PlusIcon fill="#0D2E37" />
                    </span>
                  </Link>
                  <Link href="/contacts" className="btn-secondary">
                    <span className="button-sm color-white">Contact Us</span>
                    <span className="btn-icon">
                      <PlusIcon fill="white" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="border-y border-white-10 bg-[#0a1e24] py-20">
          <div className="container">
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="flex flex-col gap-2 text-center"
                >
                  <span className="h3 text-[#d4af37]">{stat.value}</span>
                  <span className="body-md color-white-60">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ VALUES ============ */}
        <section className="py-24">
          <div className="container">
            <div className="mb-16 max-w-2xl">
              <h2 className="h3 mb-4">What we stand for</h2>
              <p className="body-lg color-white-60">
                Our values shape every package we curate and every pilgrim we
                welcome.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="flex flex-col gap-5 rounded-3xl border border-white-10 bg-[#0a1e24] p-8 transition-colors duration-300 hover:border-white-20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-2xl text-[#d4af37]">
                    {value.icon}
                  </div>
                  <h3 className="h4">{value.title}</h3>
                  <p className="body-md color-white-60">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TEAM ============ */}
        <section className="border-t border-white-10 py-24">
          <div className="container">
            <div className="mb-16 max-w-2xl">
              <h2 className="h3 mb-4">Meet our team</h2>
              <p className="body-lg color-white-60">
                Each specialist is carefully selected to deliver the highest
                quality support in visa, accommodation, and spiritual guidance.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071418] via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 p-6">
                      <span className="body-lg-semibold text-white">
                        {member.name}
                      </span>
                      <span className="body-sm color-white-60">
                        {member.role} · {member.location}
                      </span>
                    </div>
                  </div>
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
                Your journey starts <br />
                with a single step
              </h2>
              <p className="body-xl color-white-60 mb-10">
                Join thousands of pilgrims who found more than a trip —
                they found peace.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/packages" className="btn-primary">
                  <span className="button-sm color-brand-green">Browse Packages</span>
                  <span className="btn-icon">
                    <PlusIcon fill="#0D2E37" />
                  </span>
                </Link>
                <Link href="/contacts" className="btn-secondary">
                  <span className="button-sm color-white">Talk to Us</span>
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
