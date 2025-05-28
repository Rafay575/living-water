"use client";
import Link from "next/link";
import React from "react";

const ServiceCard4 = ({ service, type }) => {
  const { path, title, desc, icon } = service;
  return (
    <div className="ltn__service-item-1 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center">
      
      {/* Icon */}
      <div className="service-item-img ">
        <div className="w-16 h-16 mt-5 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full text-2xl">
          {icon}
        </div>
      </div>
      
      {/* Title & Description */}
      <div className="service-item-brief">
        <h3 className="text-xl font-semibold mb-2">
          <div>
            <span className="hover:text-blue-600 transition-colors">{title}</span>
          </div>
        </h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard4;
