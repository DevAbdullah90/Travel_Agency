import Image from "next/image";
import Link from "next/link";
import LogoIcon from "./logo-icon";

export default function Footer() {
  return (
    <footer className="footer relative">
      <div className="container">
        <div className="footer__in">
          {/* Footer visual background */}
          <div className="footer__visual absolute inset-0 -z-10">
            <Image
              src="/images/madinah-window.jpg"
              alt=""
              fill
              className="footer__illustration object-cover"
              sizes="100vw"
            />
            <div className="footer__layer absolute inset-0 bg-[#071418]/80" />
          </div>

          <div className="footer-top py-20">
            <div className="row mobile-column mobile-gap-56">
              <div className="column column-4">
                <Link href="/" className="footer-logo flex items-center gap-3">
                  <LogoIcon className="footer-logo__icon" />
                  <span className="footer-logo__title button-sm color-white">
                    Vita Travels
                  </span>
                </Link>
              </div>
              <div className="column column-8">
                <div className="row mobile-column mobile-gap-56">
                  <div className="column column-6">
                    <div className="footer-top__links flex flex-col gap-6">
                      <div className="footer-top__link">
                        <Link href="/packages" className="h3 color-white">
                          <span className="color-white-40">+</span>Packages
                        </Link>
                      </div>
                      <div className="footer-top__link">
                        <Link href="/about" className="h3 color-white">
                          <span className="color-white-40">+</span>About
                        </Link>
                      </div>
                      <div className="footer-top__link">
                        <Link href="/contacts" className="h3 color-white">
                          <span className="color-white-40">+</span>Contacts
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="column column-6">
                    <div className="footer-top__contacts flex flex-col gap-6">
                      <div className="footer-top__contact">
                        <a
                          href="tel:+923330304317"
                          className="body-lg color-white"
                        >
                          0333 0304317
                        </a>
                      </div>
                      <div className="footer-top__contact">
                        <a
                          href="mailto:vita-travels@gmail.com"
                          className="body-lg color-white"
                        >
                          vita-travels@gmail.com
                        </a>
                      </div>
                      <div className="footer-top__contact">
                        <a
                          href="https://www.instagram.com/karwanusmaneghani"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="body-lg color-white"
                        >
                          Instagram
                        </a>
                      </div>
                      <div className="footer-top__contact">
                        <a
                          href="https://www.facebook.com/share/18dDdeS7u3/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="body-lg color-white"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom border-t border-white-10 py-8">
            <div className="footer-bottom__in flex flex-wrap items-center justify-between gap-6">
              <div className="footer__l flex items-center gap-8">
                <div className="footer__copy">
                  <div className="button-sm color-white-60">
                    ©All Rights Reserved. Vita Travel, 2026
                  </div>
                </div>
                <a
                  href="https://phenomenonstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-made-by hidden md:flex items-center gap-2"
                >
                  <div className="button-sm color-white-60">Made by</div>
                  <div className="footer-made-by__visual">
                    <div className="button-sm color-white-60">
                      Phenomenon Studio
                    </div>
                  </div>
                </a>
              </div>
              <div className="footer-bottom__links flex items-center gap-8">
                <div className="footer-bottom__link">
                  <Link
                    href="/terms-and-conditions"
                    className="button-sm color-white-60"
                  >
                    Terms and Conditions
                  </Link>
                </div>
                <div className="footer-bottom__link">
                  <Link
                    href="/privacy-policy"
                    className="button-sm color-white-60"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="footer-made-by md:hidden flex items-center gap-2">
                <div className="button-sm color-white-60">Made by</div>
                <div className="footer-made-by__visual">
                  <div className="button-sm color-white-60">
                    Phenomenon Studio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
