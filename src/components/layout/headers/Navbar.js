'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useHeaderContex } from '@/providers/HeaderContex';
import NavItem from './NavItem';
import Logo from './Logo';

export default function Navbar() {
  const { headerStyle, headerSize, isNavbarAppointmentBtn, isTextWhite } =
    useHeaderContex();
  const { token } = useSelector((state) => state.auth);

  /* ───────── gate that flips true only on the client ───────── */
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  /* ----------------------------------------------------------- */

  const navItems = [
    { name: 'Home',     path: '/',       dropdown: null },
    { name: 'About',    path: '/about',  dropdown: null },
    { name: 'Purchase', path: '/shop',   dropdown: null },
    { name: 'Testimonials', path: '/testimonials',   dropdown: null },
    { name: 'Contact',  path: '/contact',dropdown: null },
  ];

  return (
    <div
      className={`col header-menu-column ${
        headerStyle === 2 || isTextWhite
          ? 'menu-color-white'
          : headerStyle === 5
          ? 'justify-content-center align-items-center'
          : ''
      }`}
    >
      {headerStyle === 5 && <Logo sticky={true} />}

      <div
        className={`header-menu ${
          headerStyle === 5 ? 'header-menu-2' : 'd-none d-xl-block'
        }`}
      >
        <nav>
          <div className="ltn__main-menu">
            <ul>
              {navItems.map((item, idx) => (
                <NavItem key={idx} item={item} />
              ))}

              {/* auth-dependent link: render only after hydration */}
              {isClient && (
                token ? (
                  <NavItem
                    item={{ name: 'Order Tracking', path: '/order', dropdown: null }}
                  />
                ) : (
                  <NavItem
                    item={{ name: 'Login', path: '/login', dropdown: null }}
                  />
                )
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
