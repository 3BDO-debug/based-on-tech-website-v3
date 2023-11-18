"use client";
import React from "react";

function BlobShape() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(64, 255, 239, 1)"></stop>
          <stop offset="100%" stopColor="rgba(117, 117, 253, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        stroke="url(#sw-gradient)"
        strokeWidth="0"
        d="M31-29.9c7.4 6.3 10.4 18.1 8.6 28.1-1.8 10-8.3 18.3-15.7 24.7-7.4 6.4-15.7 11-22.6 9.7-7-1.2-12.7-8.4-17.8-14.8-5.2-6.4-9.7-12.1-10.9-18.9-1.1-6.9 1.2-14.9 6.3-21.2 5.1-6.4 13.1-11.1 23-13 9.9-1.9 21.7-1 29.1 5.4z"
        transform="translate(50 50)"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
  );
}

export default BlobShape;
