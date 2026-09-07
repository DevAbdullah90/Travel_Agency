"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LogoIcon from "./logo-icon";
import PlusIcon from "./plus-icon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Packages", href: "/packages" },
    { label: "About", href: "/about" },
    { label: "Contacts", href: "/contacts" },
  ];

  return (
    <header
      className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? "is-active" : ""
      }`}
      style={{
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        background: isScrolled ? "rgba(7,20,24,0.7)" : "transparent",
      }}
    >
      <div className="header__in flex items-center justify-between px-16 py-6 max-w-[82rem] mx-auto">
        {/* Logo */}
        <Link href="/" className="header__l flex items-center gap-3 group">
          <div className="header-logo flex items-center gap-3">
            <LogoIcon className="header-logo__icon transition-colors duration-200 group-hover:[&_path]:fill-[#D4AF37]" />
            <span className="header-logo__title button-sm color-white transition-colors duration-200 group-hover:text-[#D4AF37]">
              Vita Travels
            </span>
          </div>
        </Link>

        {/* Right side - desktop */}
        <div className="header__r flex items-center gap-8">
          <ul className="header-nav hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="button-sm color-white header-nav__link transition-colors duration-200 hover:text-[#D4AF37]"
                >
                  <span className="color-white-40 md:hidden">+</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Explore link */}
          <Link
            href="#packages"
            className="header__accent hidden md:block button-sm color-white transition-colors duration-200 hover:text-[#D4AF37]"
          >
            Explore
          </Link>

          {/* Mobile Explore button */}
          <div className="md:hidden">
            <Link href="#packages" className="btn-primary">
              <span className="button-sm color-brand-green">Explore Packages</span>
              <span className="btn-icon">
                <PlusIcon fill="#0D2E37" />
              </span>
            </Link>
          </div>
        </div>

        {/* Burger */}
        <button
          className="btn-burger md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="btn-burger__in relative w-6 h-4">
            <div
              className={`btn-burger__line absolute left-0 w-6 h-px bg-white transition-all duration-400 ${
                menuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <div
              className={`btn-burger__line absolute left-0 w-6 h-px bg-white transition-all duration-400 ${
                menuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu md:hidden fixed inset-0 top-0 bg-[#071418] z-40 transition-transform duration-400 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 gap-8">
          <ul className="header-nav flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="button-sm color-white header-nav__link"
                >
                  <span className="color-white-40">+</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header__button">
            <Link
              href="#packages"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center"
            >
              <span className="button-sm color-brand-green">Explore Packages</span>
              <span className="btn-icon">
                <PlusIcon fill="#0D2E37" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
