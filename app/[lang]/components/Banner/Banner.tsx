"use client";

import React from "react";
import Image from "next/image";
import bannerImage from "../../../../public/banner_image.jpg"; // Replace with your actual image

interface BannerProps {
  dictionary: {
    headline: string;
    paragraph: string;
    button: string;
  };
}

const Banner: React.FC<BannerProps> = ({ dictionary }) => {
  return (
    <section
      className="bg-[#1FA59A] text-white flex flex-col md:flex-row items-center justify-between px-6 py-12 lg:px-16 lg:py-20"
    >
      {/* Text Content */}
      <div className="max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          {dictionary.headline}
        </h1>
        <p className="text-lg mb-6">{dictionary.paragraph}</p>
        <button className="bg-[#FF6D2D] hover:bg-[#E65C1A] text-white py-3 px-6 rounded-lg transition">
          {dictionary.button}
        </button>
      </div>

      {/* Image */}
      <div className="mt-6 md:mt-0 md:ml-8">
        <Image
          src={bannerImage}
          alt="Banner"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
};

export default Banner;
