"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PlusIcon from "@/components/plus-icon";

const contactMethods = [
  {
    icon: "✉",
    title: "Email Us",
    value: "vita-travels@gmail.com",
    href: "mailto:vita-travels@gmail.com",
    note: "We reply within 24 hours",
  },
  {
    icon: "☎",
    title: "Call Us",
    value: "+1 012 345 678",
    href: "tel:+1012345678",
    note: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: "◈",
    title: "Visit Us",
    value: "Umrah Desk, Suite 12",
    href: "#",
    note: "By appointment only",
  },
];

const faqs = [
  {
    q: "How do I book an Umrah package?",
    a: "Browse our curated packages, select your dates, and complete a single seamless checkout. Instant confirmations are available for most packages.",
  },
  {
    q: "Can I customize a package?",
    a: "Absolutely. Add flights, visa processing, hotel upgrades, and ziyarah tours to any package — all in one checkout with our concierge support.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Most packages offer free cancellation up to 14 days before departure. Specific terms are shown on each package page.",
  },
  {
    q: "Do you help with Umrah visas?",
    a: "Yes, we handle visa processing for all our packages. Our team guides you through every document and requirement.",
  },
];

export default function ContactsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-2xl border border-white-10 bg-[#0a1e24] px-5 py-4 text-white placeholder-white-40 outline-none transition-colors duration-300 focus:border-[#d4af37]";

  return (
    <>
      <Navbar />
      <main>
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pt-40 pb-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(13,46,55,0.6),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(251,161,58,0.15),transparent_50%)]" />
          <div className="container">
            <div className="max-w-3xl">
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
                <span className="body-md color-white-60">Get in Touch</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="h2 mb-6"
              >
                Let&apos;s plan your <br />
                <span className="text-[#d4af37]">Umrah journey</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="body-xl color-white-60 max-w-xl"
              >
                Whether you have a question about a package, need help with your
                visa, or want a bespoke itinerary — our concierge team is here
                for you.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ============ CONTACT METHODS ============ */}
        <section className="pb-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="group flex flex-col gap-4 rounded-3xl border border-white-10 bg-[#0a1e24] p-8 transition-colors duration-300 hover:border-white-20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-2xl text-[#d4af37] transition-colors duration-300 group-hover:bg-[#d4af37] group-hover:text-[#071418]">
                    {method.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-white-50">
                      {method.title}
                    </span>
                    <span className="body-lg-semibold text-white">
                      {method.value}
                    </span>
                    <span className="body-sm color-white-60">{method.note}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FORM + INFO ============ */}
        <section className="border-y border-white-10 bg-[#0a1e24] py-24">
          <div className="container">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h2 className="h3 mb-2">Send us a message</h2>
                <p className="body-md color-white-60 mb-10">
                  Fill out the form and we&apos;ll get back to you within one
                  business day.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 rounded-3xl border border-[#d4af37]/30 bg-[#d4af37]/5 p-12 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37] text-3xl text-[#071418]">
                      ✓
                    </div>
                    <h3 className="h4">Message sent!</h3>
                    <p className="body-md color-white-60 max-w-sm">
                      Thank you, {form.name || "pilgrim"}. Our concierge team
                      will reach out to you shortly at{" "}
                      <span className="text-white">{form.email}</span>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="btn-secondary mt-4"
                    >
                      <span className="button-sm color-white">Send another</span>
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="body-sm color-white-60">
                          Full name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="body-sm color-white-60">
                          Email address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="body-sm color-white-60">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="body-sm color-white-60">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your dream Umrah..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <button type="submit" className="btn-primary mt-2 self-start">
                      <span className="button-sm color-brand-green">Send Message</span>
                      <span className="btn-icon">
                        <PlusIcon fill="#0D2E37" />
                      </span>
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Info / FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col gap-10"
              >
                <div>
                  <h2 className="h3 mb-8">Frequently asked questions</h2>
                  <div className="flex flex-col divide-y divide-white-10">
                    {faqs.map((faq) => (
                      <details key={faq.q} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                          <span className="body-lg-semibold text-white">
                            {faq.q}
                          </span>
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white-20 text-white-60 transition-transform duration-300 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="body-md color-white-60 mt-4 max-w-md">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-[#d4af37]/20 bg-[#d4af37]/5 p-8">
                  <h3 className="h4 mb-3">Prefer a personal touch?</h3>
                  <p className="body-md color-white-60 mb-6">
                    Book a free 15-minute consultation with an Umrah travel
                    specialist to design your perfect journey.
                  </p>
                  <Link href="#" className="btn-primary">
                    <span className="button-sm color-brand-green">Book a Consultation</span>
                    <span className="btn-icon">
                      <PlusIcon fill="#0D2E37" />
                    </span>
                  </Link>
                </div>
              </motion.div>
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
                Ready to begin <br />
                your Umrah?
              </h2>
              <p className="body-xl color-white-60 mb-10">
                Browse our curated collection of Umrah packages across
                Makkah and Madinah.
              </p>
              <Link href="/packages" className="btn-primary">
                <span className="button-sm color-brand-green">View Packages</span>
                <span className="btn-icon">
                  <PlusIcon fill="#0D2E37" />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
