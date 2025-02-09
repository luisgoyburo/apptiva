"use client";

import React from "react";
import Image from "next/image";
import react from "../../../../public/icons/react.svg";
import angular from "../../../../public/icons/angular.svg";
import rails from "../../../../public/icons/rails.svg";
import dotnet from "../../../../public/icons/dotnet.svg";

interface WebappProps {
    dictionary: {
      title: {
        before: string;
        highlight: string;
        after: string;
      };
      description: string;
      technologies: {
        react: string;
        angular: string;
        rails: string;
        dotnet: string;
      };
      cta: string;
    };
  }

  const Webapp: React.FC<WebappProps> = ({ dictionary }) => {
    return (
        <section className="bg-white py-12" id="web">
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
                    {/* React */}
                    <div className="flex flex-col items-center">
                        <Image
                            src={react}
                            alt="React"
                            width={64} // Adjust size as needed
                            height={64}
                            priority
                        />
                        <span className="text-gray-700 font-medium mt-2"> {dictionary.technologies.react}</span>
                    </div>

                    {/* Angular */}
                    <div className="flex flex-col items-center">
                        <Image
                            src={angular}
                            alt="Angular"
                            width={64}
                            height={64}
                            priority
                        />
                        <span className="text-gray-700 font-medium mt-2">{dictionary.technologies.angular}</span>
                    </div>

                    {/* Ruby on Rails */}
                    <div className="flex flex-col items-center">
                        <Image
                            src={rails}
                            alt="Ruby on Rails"
                            width={64}
                            height={64}
                            priority
                        />
                        <span className="text-gray-700 font-medium mt-2">{dictionary.technologies.rails}</span>
                    </div>

                    {/* .NET */}
                    <div className="flex flex-col items-center">
                        <Image
                            src={dotnet}
                            alt=".NET"
                            width={64}
                            height={64}
                            priority
                        />
                        <span className="text-gray-700 font-medium mt-2">{dictionary.technologies.dotnet}</span>
                    </div>
                </div>

                {/* Call-to-Action */}
                <div className="mt-8">
                    <a
                        href="#contact"
                        className="bg-[#1FA59A] text-white py-3 px-6 rounded-lg hover:bg-[#148678] transition"
                    >
                        {dictionary.cta}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Webapp;
