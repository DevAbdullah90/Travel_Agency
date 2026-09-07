"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PlusIcon from "./plus-icon";

export default function Hero() {
  return (
    <section className="intro relative aspect-[1440/922] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/kaaba-hero.jpg"
        alt=""
        fill
        priority
        className="intro-bg-part intro-bg-part--1 object-cover object-center"
        sizes="100vw"
      />
      <div className="intro-bg-dark absolute inset-0 bg-black/40" />

      <div className="container relative z-10">
        <div className="intro__in">
          <div className="intro__text">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h1 mobile-margin-bottom-16 intro__headline"
            >
              Umrah
            </motion.h1>
            <div className="margin-bottom-32 z-index-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="body-xxl"
              >
                With devotion. Book complete Umrah <br />
                packages — flights, hotels, and ziyarah&nbsp; in one place.
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="intro__button hidden md:block z-index-3"
            >
              <Link href="/packages" className="btn-primary">
                <span className="button-sm color-brand-green">Explore Packages</span>
                <span className="btn-icon">
                  <PlusIcon fill="#0D2E37" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile button */}
      <div className="intro__button md:hidden z-10">
        <Link href="/packages" className="btn-primary w-full justify-center">
          <span className="button-sm color-brand-green">Explore Packages</span>
          <span className="btn-icon">
            <PlusIcon fill="#0D2E37" />
          </span>
        </Link>
      </div>
    </section>
  );
}
