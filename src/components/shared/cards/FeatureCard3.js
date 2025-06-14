import Link from "next/link";
import React from "react";

const FeatureCard3 = ({ feature }) => {
  const { title, desc, icon, path } = feature;
  return (
    <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
      <div className="ltn__feature-icon-title">
        <div className="ltn__feature-icon">
          {icon}
        </div>
        <h3>
          <Link href={path}>{title}</Link>
        </h3>
      </div>
      <div className="ltn__feature-info">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard3;
