"use client";
import { useHeaderContex } from "@/providers/HeaderContex";
import Link from "next/link";
import React from "react";

const HeaderTop = () => {
  const { headerStyle, headerSize, headerTopBg } = useHeaderContex();
  return (
    <div
      className={`ltn__header-top-area ${
        headerStyle === 2 || headerStyle === 4 || headerTopBg === "dark"
          ? "top-area-color-white "
          : ""
      } ${headerSize === "lg" ? "plr--9" : ""}`}
    >
      <div
        className={` ${headerSize === "lg" ? "container-fluid" : "container"}`}
      >
        <div className="row">
          <div className="col-md-7 py-2">
            <div className="ltn__top-bar-menu">
              <ul>
                {" "}
                <li>
                  <Link href="/locations">
                    <i className="icon-placeholder"></i> 16706 Yaklin Meadow Court. Humble.  Tx 77346
                  </Link>
                </li>{" "}
                <li>
                  <Link href="mailto:info@livingwaterbt.com?Subject=Flower%20greetings%20to%20you">
                    <i className="icon-mail"></i> info@livingwaterbt.com
                  </Link>
                </li>{" "}
              </ul>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
