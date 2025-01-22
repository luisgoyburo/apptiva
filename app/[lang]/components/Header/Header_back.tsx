"use client"; // Ensure this file runs in the client environment

import React, { useState } from "react";
import Image from "next/image";
import * as styles from "./styles";
import logo from "../../../../public/logoLGapptiva.png"; // Adjust the path if necessary
// import LanguageSwitcher from "../LanguageSwitcher"

const Header: React.FC = () => {
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
            Web/App
          </a>
          <a href="#uxui" className={styles.navLink}>
            UX/UI
          </a>
          <a href="#creative" className={styles.navLink}>
            Creative Content
          </a>
          <a href="#ai" className={styles.navLink}>
            AI Services
          </a>

        </nav>

        {/* Buttons */}
        <div className={styles.buttonWrapper}>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.signupButton}>Create Free Account</button>
        </div>
        {/* <LanguageSwitcher /> */}

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
            Web Development
          </a>
          <a href="#creative" className={styles.mobileMenuLink}>
            Creative Content
          </a>
          <a href="#ai" className={styles.mobileMenuLink}>
            Generative AI
          </a>
          <a href="#prices" className={styles.mobileMenuLink}>
            Prices
          </a>
          <button className={`${styles.loginButton} w-full text-left`}>
            Login
          </button>
          <button className={`${styles.signupButton} w-full text-left`}>
            Create Free Account
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
