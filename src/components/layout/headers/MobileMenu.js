"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useWishlistContext } from "@/providers/WshlistContext";
import { useCartContext } from "@/providers/CartContext";
import countDataLength from "@/libs/countDataLength";

const MobileMenu = () => {
  const { wishlistProducts } = useWishlistContext();
  const { cartProducts } = useCartContext();
  const totalCartProduct = countDataLength(cartProducts);
  const totalWishlistProduct = countDataLength(wishlistProducts);
  const navItems =  [
    {
      name: "Home",
      path: "/",
      dropdown: null,
      dropdownSection: [
        {
          title: null,
          path: "/",
          // dropdownItems: [
          //   {
          //     name: "Home Style - 01",
          //     img: homeImage1,
          //     path: "/",
          //   },
          //   {
          //     name: "Home Style - 02",
          //     img: homeImage2,
          //     path: "/home-2",
          //   },
          //   {
          //     name: "Home Style - 03",
          //     img: homeImage3,
          //     path: "/home-3",
          //   },
          //   {
          //     name: "Home Style - 04",
          //     img: homeImage4,
          //     path: "/home-4",
          //   },
          //   {
          //     name: "Home Style - 05",
          //     img: homeImage5,
          //     path: "/home-5",
          //     label: "video",
          //   },
          //   {
          //     name: "Home Style - 06",
          //     img: homeImage6,
          //     path: "/home-6",
          //   },
          //   {
          //     name: "Home Style - 07",
          //     img: homeImage7,
          //     path: "/home-7",
          //   },
          //   {
          //     name: "Home Style - 08",
          //     img: homeImage8,
          //     path: "/home-8",
          //     label: null,
          //   },
          //   {
          //     name: "Home Style - 09",
          //     img: homeImage9,
          //     path: "/home-9",
          //   },
          //   {
          //     name: "Home Style - 10",
          //     img: homeImage10,
          //     path: "/home-10",
          //   },
          //   {
          //     name: "Home Style - 11",
          //     img: homeImage11,
          //     path: "/home-11",
          //     label: "Service",
          //   },
          // ],
        },
      ],
    },
    {
      name: "About",
      path: "/about",
      dropdown: null,
      // dropdownSection: [
      //   {
      //     title: null,
      //     path: "#",
      //     dropdownItems: [
      //       {
      //         name: "About",

      //         path: "/about",
      //       },
      //       {
      //         name: "Services",

      //         path: "/services",
      //       },
      //       {
      //         name: "Service Details",

      //         path: "/services/1",
      //       },
      //       {
      //         name: "Gallery",

      //         path: "/portfolio",
      //       },
      //       {
      //         name: "Gallery - 02",

      //         path: "/portfolio-2",
      //       },
      //       {
      //         name: "Gallery Details",
      //         path: "/portfolio/1",
      //       },
      //       {
      //         name: "Team",

      //         path: "/team",
      //       },
      //       {
      //         name: "Team Details",

      //         path: "/team/1",
      //       },
      //       {
      //         name: "FAQ",

      //         path: "/faq",
      //       },
      //       {
      //         name: "Google Map Locations",

      //         path: "/locations",
      //       },
      //     ],
      //   },
      // ],
    },
    {
      name: "Purchase",
      path: "/shop",
      dropdown: null,
      // dropdownSection: [
      //   {
      //     title: null,
      //     path: "#",
      //     dropdownItems: [
      //       {
      //         name: "About",

      //         path: "/about",
      //       },
      //       {
      //         name: "Services",

      //         path: "/services",
      //       },
      //       {
      //         name: "Service Details",

      //         path: "/services/1",
      //       },
      //       {
      //         name: "Gallery",

      //         path: "/portfolio",
      //       },
      //       {
      //         name: "Gallery - 02",

      //         path: "/portfolio-2",
      //       },
      //       {
      //         name: "Gallery Details",
      //         path: "/portfolio/1",
      //       },
      //       {
      //         name: "Team",

      //         path: "/team",
      //       },
      //       {
      //         name: "Team Details",

      //         path: "/team/1",
      //       },
      //       {
      //         name: "FAQ",

      //         path: "/faq",
      //       },
      //       {
      //         name: "Google Map Locations",

      //         path: "/locations",
      //       },
      //     ],
      //   },
      // ],
    }
,
  
   
    {
      name: "Contact",
      path: "/contact",
      dropdown: null,
    },
  ];
  return (
    <div
      id="ltn__utilize-mobile-menu"
      className="ltn__utilize ltn__utilize-mobile-menu"
    >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <div className="site-logo">
            <Link href="/">
              <Image src="/img/logo.png" alt="Logo" width={154} height={42} />
            </Link>
          </div>
          <button className="ltn__utilize-close">×</button>
        </div>
      
        <div className="ltn__utilize-menu">
          <ul>
            {navItems?.map(({ name, path, accordionItems }, idx) => (
              <li key={idx}>
                <Link href={path}>{name}</Link>
                {accordionItems ? (
                  <ul className="sub-menu">
                    {accordionItems?.map(
                      ({ name: name1, path: path1, label }, idx1) => (
                        <li key={idx1}>
                          <Link href={path1}>
                            {name1}{" "}
                            {label ? (
                              <span className="menu-item-badge">{label}</span>
                            ) : (
                              ""
                            )}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
          <ul>
            <li>
              <Link href="/account" title="My Account">
                <span className="utilize-btn-icon">
                  <i className="far fa-user"></i>
                </span>
                My Account
              </Link>
            </li>
            <li>
              <Link href="/wishlist" title="Wishlist">
                <span className="utilize-btn-icon">
                  <i className="far fa-heart"></i>{" "}
                  <sup>{totalWishlistProduct}</sup>
                </span>
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="/cart" title="Shoping Cart">
                <span className="utilize-btn-icon">
                  <i className="fas fa-shopping-cart"></i>{" "}
                  <sup>{totalCartProduct}</sup>
                </span>
                Shoping Cart
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="ltn__social-media-2">
          <ul>
            <li>
              <Link href="https://www.facebook.com" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com" title="Twitter">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com" title="Linkedin">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com" title="Instagram">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
