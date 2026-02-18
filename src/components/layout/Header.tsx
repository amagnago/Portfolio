import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SocialLinks from "../ui/SocialLinks";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container-custom flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className="gradient-text text-2xl md:text-3xl font-bold">
            &lt;Game/Dev&gt;
          </span>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Navigation />
        </div>

        {/* Social Links */}
        <div className="hidden md:flex">
          <SocialLinks />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? styles.active : ""} />
          <span className={isMenuOpen ? styles.active : ""} />
          <span className={isMenuOpen ? styles.active : ""} />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <Navigation onNavigate={() => setIsMenuOpen(false)} />
            <SocialLinks />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
