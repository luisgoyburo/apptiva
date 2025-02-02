"use client";

import React from "react";
import Image from "next/image";
import branding from "../../../../public/branding.png";
import content from "../../../../public/content.jpg";
import graphicdesign from "../../../../public/graphicdesign.jpg";
import socialnetwork from "../../../../public/socialnetwork.png";

interface CreativeContentProps {
  dictionary: {
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    description: string;
    services: {
      branding: { title: string; description: string };
      socialDesigns: { title: string; description: string };
      contentDevelopment: { title: string; description: string };
      graphicDesign: { title: string; description: string };
    };
  };
}

const CreativeContent: React.FC<CreativeContentProps> = ({ dictionary }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          <span>{dictionary.title.before} </span>
            <span className="text-[#009387] font-covered text-5xl lg:text-6xl font-normal">{dictionary.title.highlight}</span>
            <span> {dictionary.title.after}</span>
          </h2>
          <p className="text-gray-600 text-lg">{dictionary.description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={branding}
              alt={dictionary.services.branding.title}
              width={240}
              height={134}
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              {dictionary.services.branding.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {dictionary.services.branding.description}
            </p>
          </div>

          {/* Social Designs */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={socialnetwork}
              alt={dictionary.services.socialDesigns.title}
              width={240}
              height={134}
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              {dictionary.services.socialDesigns.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {dictionary.services.socialDesigns.description}
            </p>
          </div>

          {/* Content Development */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={content}
              alt={dictionary.services.contentDevelopment.title}
              width={240}
              height={134}
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              {dictionary.services.contentDevelopment.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {dictionary.services.contentDevelopment.description}
            </p>
          </div>

          {/* Graphic Design */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={graphicdesign}
              alt={dictionary.services.graphicDesign.title}
              width={240}
              height={134}
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              {dictionary.services.graphicDesign.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {dictionary.services.graphicDesign.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeContent;
