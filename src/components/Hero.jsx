import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [profileImage, setProfileImage] = useState('/image/profile.jpg');

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    setProfileImage(isDarkMode ? '/image/profile2.jpg' : '/image/profile.jpg');

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme');
      setProfileImage(theme === 'dark' ? '/image/profile2.jpg' : '/image/profile.jpg');
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="highlight">Tejano</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A passionate Full Stack Developer
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.92, y: -1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.92, y: -1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img 
            key={profileImage}
            src={profileImage} 
            alt="Tejano"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;