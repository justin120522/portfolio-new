import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      image: '/project1.jpg',
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A productivity app built with React and Firebase',
      image: '/project2.jpg',
      link: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather app using OpenWeather API',
      image: '/project3.jpg',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;