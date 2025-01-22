"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as styles from "./styles";
import logo from "../../../../public/logoLGapptiva.png";
import LocaleSwitcher from "../locale-switcher";

interface HeaderProps {
  dictionary: {
    webApp: string;
    uxui: string;
    creativeContent: string;
    aiServices: string;
    login: string;
    createFreeAccount: string;
  };
}

const Header: React.FC<HeaderProps> = ({ dictionary }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="Apptiva Solutions Logo"
            width={129} // 289 * (100/225) to maintain proportions
            height={100}
            priority
          />
        </div>

        {/* Navigation Bar */}
        <nav className={styles.nav}>
          <a href="#web" className={styles.navLink}>
            {dictionary.webApp}
          </a>
          <a href="#uxui" className={styles.navLink}>
            {dictionary.uxui}
          </a>
          <a href="#creative" className={styles.navLink}>
            {dictionary.creativeContent}
          </a>
          <a href="#ai" className={styles.navLink}>
            {dictionary.aiServices}
          </a>
        </nav>

        {/* Buttons and LocaleSwitcher */}
        <div className={styles.buttonWrapper}>
          <LocaleSwitcher />
          <button className={styles.loginButton}>{dictionary.login}</button>
          <button className={styles.signupButton}>
            {dictionary.createFreeAccount}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuButton}>
          <button aria-label="Open menu" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#web" className={styles.mobileMenuLink}>
            {dictionary.webApp}
          </a>
          <a href="#creative" className={styles.mobileMenuLink}>
            {dictionary.creativeContent}
          </a>
          <a href="#ai" className={styles.mobileMenuLink}>
            {dictionary.aiServices}
          </a>
          <button className={`${styles.loginButton} w-full text-left`}>
            {dictionary.login}
          </button>
          <button className={`${styles.signupButton} w-full text-left`}>
            {dictionary.createFreeAccount}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
