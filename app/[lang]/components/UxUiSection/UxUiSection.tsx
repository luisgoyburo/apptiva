"use client";

import React from "react";
import Image from "next/image";

import figma from "../../../../public/icons/figma.png";
import sketch from "../../../../public/icons/sketch.png";
import adobe_xd from "../../../../public/icons/adobe-xd.png";
import photoshop from "../../../../public/icons/photoshop.png";

interface UxUiSectionProps {
  dictionary: {
    title: {
        before: string;
        highlight: string;
        after: string;
      };
    description: string;
    technologies: {
      figma: string;
      sketch: string;
      adobeXd: string;
      prototyping: string;
    };
    cta: string;
  };
}

const UxUiSection: React.FC<UxUiSectionProps> = ({ dictionary }) => {
  return (
    <section className="bg-[#FDF3EA] py-12" id="uxui">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl mb-4">
            <span>{dictionary.title.before} </span>
            <span className="text-[#009387] font-covered text-5xl lg:text-6xl font-normal">{dictionary.title.highlight}</span>
            <span> {dictionary.title.after}</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          {dictionary.description}
        </p>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Figma */}
          <div className="flex flex-col items-center">
            <Image
              src={figma}
              alt="Figma"
              width={64}
              height={64}
              priority
            />
            <span className="text-gray-700 font-medium mt-2">
              {dictionary.technologies.figma}
            </span>
          </div>

          {/* Sketch */}
          <div className="flex flex-col items-center">
            <Image
              src={sketch}
              alt="Sketch"
              width={64}
              height={64}
              priority
            />
            <span className="text-gray-700 font-medium mt-2">
              {dictionary.technologies.sketch}
            </span>
          </div>

          {/* Adobe XD */}
          <div className="flex flex-col items-center">
            <Image
              src={adobe_xd}
              alt="Adobe XD"
              width={64}
              height={64}
              priority
            />
            <span className="text-gray-700 font-medium mt-2">
              {dictionary.technologies.adobeXd}
            </span>
          </div>

          {/* Prototyping */}
          <div className="flex flex-col items-center">
            <Image
              src={photoshop}
              alt="Prototyping"
              width={64}
              height={64}
              priority
            />
            <span className="text-gray-700 font-medium mt-2">
              {dictionary.technologies.prototyping}
            </span>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-8">
          <a
            href="#contact"
            className="bg-[#FF6D2D] text-white py-3 px-6 rounded-lg hover:bg-[#E65C1A] transition"
          >
            {dictionary.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default UxUiSection;
