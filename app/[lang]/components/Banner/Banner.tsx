"use client";

import React from "react";
import Image from "next/image";
import bannerImage from "../../../../public/banner_image.png"; // Replace with your actual image

interface BannerProps {
  dictionary: {
    headline: {
      before: string;
      highlight: string;
      after: string;
    };
    paragraph: string;
    button: string;
  };
}

const Banner: React.FC<BannerProps> = ({ dictionary }) => {
  return (
    <section
      className="bg-[#E0F8F2] text-black flex flex-col md:flex-row items-center justify-between px-6 py-12 lg:px-16 lg:py-20"
    >
      {/* Text Content */}
      <div className="max-w-lg">
        <h1 className="font-inter text-4xl lg:text-5xl font-bold mb-4">
        <span>{dictionary.headline.before} </span>
          <span className="text-[#009387] font-covered text-5xl lg:text-6xl font-normal">{dictionary.headline.highlight}</span>
          <span> {dictionary.headline.after}</span>
        </h1>
        <p className="font-roboto text-lg mb-6">{dictionary.paragraph}</p>
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
