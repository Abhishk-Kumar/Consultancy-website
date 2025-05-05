import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaArrowDown } from "react-icons/fa";
import { 
  FaUserMd, 
  FaBalanceScale, 
  FaLaptopCode, 
  FaPlane 
} from "react-icons/fa";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 20, density: { enable: true, value_area: 800 } },
            color: { value: "#007bff" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#007bff",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            }
          },
          retina_detect: true
        }}
      />
      
      <div className="hero container">
        <div className="banner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Multi-Domain Professional Consultancy Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert guidance in Medical, Legal, Technology, and Travel sectors. Your one-stop solution for professional consultancy needs.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/appointment" className="btn purple-btn">
                Book Consultation
              </Link>
              <Link to="/about" className="btn white-btn">
                Learn More
              </Link>
            </motion.div>

            <motion.div 
              className="domain-icons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="domain-icon">
                <FaUserMd />
                <span>Medical</span>
              </div>
              <div className="domain-icon">
                <FaBalanceScale />
                <span>Legal</span>
              </div>
              <div className="domain-icon">
                <FaLaptopCode />
                <span>Technology</span>
              </div>
              <div className="domain-icon">
                <FaPlane />
                <span>Travel</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="banner">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <img 
              src="/hero.png" 
              alt="Consultancy Services" 
              className="animated-image"
            /> 
          </motion.div> 
        </div> 
      </div>

      <motion.div 
        className="achievement-bar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="achievement-item">
          <h3>50+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="achievement-item">
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>
        <div className="achievement-item">
          <h3>5</h3>
          <p>Expert Domains</p>
        </div>
        <div className="achievement-item">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;