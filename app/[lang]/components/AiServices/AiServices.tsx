"use client";

import React from "react";
import Image from "next/image";
import chatbots from "../../../../public/chatbots.jpg";
import dataAnalysis from "../../../../public/dataAnalysis.jpg";
import ai_content_creation from "../../../../public/ai_content_creation.png";
import ai_video_analysis from "../../../../public/ai_video_analysis.png";
import ai_industry_solutions from "../../../../public/ai_industry_solutions.webp";
import Link from "next/link"

interface AiServicesProps {
    dictionary: {
        title: {
            before: string;
            highlight: string;
            after: string;
        };
        description: string;
        services: {
            chatbots: { title: string };
            dataAnalysis: { title: string };
            contentCreation: { title: string };
            imageVideoAnalysis: { title: string };
            industrySolutions: { title: string };
        };
        try: string;
        tryLink: string;
    };
}

const AiServices: React.FC<AiServicesProps> = ({ dictionary }) => {

    return (
        <section className="bg-[#EEECFF] text-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Title and Description */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">
                        <span>{dictionary.title.before} </span>
                        <span className="text-[#009387] font-covered text-5xl lg:text-6xl font-normal">{dictionary.title.highlight}</span>
                        <span> {dictionary.title.after}</span>
                    </h2>
                    <p className="text-lg">{dictionary.description}</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* chatbots */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={chatbots}
                            alt={dictionary.services.chatbots.title}
                            width={240}
                            height={134}
                        />
                        <h3 className="text-xl font-bold text-gray-800 mt-4">
                            {dictionary.services.chatbots.title}
                        </h3>
                    </div>

                    {/* dataAnalysis */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={dataAnalysis}
                            alt={dictionary.services.dataAnalysis.title}
                            width={240}
                            height={134}
                        />
                        <h3 className="text-xl font-bold text-gray-800 mt-4">
                            {dictionary.services.dataAnalysis.title}
                        </h3>
                    </div>

                    {/* ai_content_creation 
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={ai_content_creation}
                            alt={dictionary.services.contentCreation.title}
                            width={240}
                            height={134}
                        />
                        <h3 className="text-xl font-bold text-gray-800 mt-4">
                            {dictionary.services.contentCreation.title}
                        </h3>
                    </div>*/}

                    {/* ai_video_analysis */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={ai_video_analysis}
                            alt={dictionary.services.imageVideoAnalysis.title}
                            width={240}
                            height={134}
                        />
                        <h3 className="text-xl font-bold text-gray-800 mt-4">
                            {dictionary.services.imageVideoAnalysis.title}
                        </h3>
                    </div>

                    {/* ai_industry_solutions */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={ai_industry_solutions}
                            alt={dictionary.services.industrySolutions.title}
                            width={240}
                            height={134}
                        />
                        <h3 className="text-xl font-bold text-gray-800 mt-4">
                            {dictionary.services.industrySolutions.title}
                        </h3>
                    </div>


                </div>
                <div className="text-center mt-12 mb-12">
                <span className="text-4xl">{dictionary.try} </span>
                <span className="text-4xl font-bold text-[#009387]"><Link href="/ai_chat" className="hover:text-[#009387] transition">
                    {dictionary.tryLink}
                </Link></span>
                </div>
            </div>

        </section>

    );
};

export default AiServices;