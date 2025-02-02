"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import instagram from "../../../../public/icons/instagram.svg";
import linkedin from "../../../../public/icons/linkedin.svg";
import twitter from "../../../../public/icons/twitter.svg";

interface FooterProps {
  dictionary: {
    aboutUs: string;
    description: string;
    quickLinks: string;
    services: string;
    contact: string;
    followUs: string;
    rightsReserved: string;
  };
}

const Footer: React.FC<FooterProps> = ({ dictionary }) => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">
            {dictionary.aboutUs}
          </h3>
          <p className="text-sm">{dictionary.description}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">
            {dictionary.quickLinks}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                {dictionary.services}
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition">
                {dictionary.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">
            {dictionary.followUs}
          </h3>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src={twitter} alt="Twitter" width={24} height={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src={instagram} alt="Instagram" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-8">
        {dictionary.rightsReserved}
      </div>
    </footer>
  );
};

export default Footer;
