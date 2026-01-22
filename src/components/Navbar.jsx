import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.h1
          className="navbar-logo"
          whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(102, 126, 234, 0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          My Portfolio
        </motion.h1>
        <div className="navbar-center">
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a href="#hero" className="nav-links" onClick={toggleMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={toggleMenu}>About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-links" onClick={toggleMenu}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-links" onClick={toggleMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-links" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-actions">
          <motion.button
            className="dark-mode-btn"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </motion.button>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;