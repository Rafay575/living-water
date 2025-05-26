"use client";
import ButtonOpenMobileMenu from "@/components/shared/buttons/ButtonOpenMobileMenu";
import { useCartContext } from "@/providers/CartContext";
import { useHeaderContex } from "@/providers/HeaderContex";
import Link from "next/link";
import React from "react";
import HeaderCurrency from "./HeaderCurrency";
import countTotalPrice from "@/libs/countTotalPrice";
import HeaderCartShow from "./HeaderCartShow";

const HeaderRight = () => {
  const { headerStyle } = useHeaderContex();
  const { cartProducts } = useCartContext();
  const totalProduct = cartProducts?.length;
  const totalPrice = countTotalPrice(cartProducts);
  return (
    <div
      className={`ltn__header-options  ${
        headerStyle === 3 ? "col" : "ltn__header-options-2"
      }`}
    >
      {headerStyle === 3 ? <HeaderCurrency /> : ""}
      {/* <!-- header-search-1 --> */}{" "}
   
      {/* <!-- mini-cart --> */}
      {<HeaderCartShow />}
      {/* <!-- mini-cart --> */}
      {/* <!-- Mobile Menu Button --> */}
      <ButtonOpenMobileMenu />
    </div>
  );
};

export default HeaderRight;
