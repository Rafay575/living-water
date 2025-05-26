"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-white text-dark pt-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Logo */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex align-items-center">
            <Image
              src="/img/logo.png"
              alt="Living Water"
              width={120}
              height={60}
            />
            <h5 className="ms-3 mb-0">Living Water</h5>
          </div>

          {/* Navigation */}
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="footer-nav list-unstyled d-flex justify-content-center mb-0">
              <li><Link href="/"><span>Home</span></Link></li>
              <li><Link href="/about"><span>About</span></Link></li>
              <li><Link href="/shop"><span>Shop</span></Link></li>
              <li><Link href="/contact"><span>Contact</span></Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
            <div className="footer-social d-flex align-items-center">
              <a href="#" aria-label="Facebook" className="me-3">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="me-3">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

        </div>

        <hr className="my-4" />

        {/* Bottom Bar */}
        <div className="row">
          <div className="col text-center text-muted small">
            <p className="mb-1">Protected Spring • Costa Rica</p>
            <p className="mb-0">
              © {new Date().getFullYear()} Living Water. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
