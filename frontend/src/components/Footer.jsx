import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaLocationArrow, FaPhone, FaYoutube,
  FaLinkedin, FaTwitter, FaInstagram
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday - Friday",
      time: "(9:00 AM - 6:00 PM)",
    },
    {
      id: 2,
      day: "Saturday", 
      time: "(10:00 AM - 4:00 PM)",  
    },
    {
      id: 3,
      day: "Sunday",
      time: "(Closed)",
    }
  ];

  return (
    <footer className="footer-section">
      <motion.div 
        className="footer-background"
        animate={{ 
          background: [
            "linear-gradient(45deg, #9333ea15, #3b82f615)",
            "linear-gradient(225deg, #9333ea15, #3b82f615)",
            "linear-gradient(45deg, #9333ea15, #3b82f615)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="footer-content container">
        <div className="footer-main">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/logo.png" alt="Gyan Consultancy" className="footer-logo"/>
            <h3>Gyan Consultancy Services</h3>
            <p className="founder-info">
              Anshul Srivastava<br/>
              <span>Advocate, Circadian Expert and Naturopath</span><br/>
              <span>HUMS</span>
            </p>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/appointment">Book Consultation</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Services</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-hours"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4>Business Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span className="day">{element.day}</span>
                  <span className="time">{element.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4>Contact Information</h4>
            <div className="contact-info">
              <p><FaPhone /> <span>9888888888, 9999999999</span></p>
              <p><MdEmail /> <span>shhhhhh@gmail.com</span></p>
              <p><FaLocationArrow /> <span>Flat no.406, Apartements,<br/>
                Road, Varanasi<br/>
                Pin Code-222222</span></p>
            </div>
            <div className="social-links">
              <a href="https://www.youtube.com/@GyanPodcast-ip5rw" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="youtube" />
              </a>
              <a href="https://www.youtube.com/@sangeet18" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="youtube" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="copyright">
            &copy; {new Date().getFullYear()} Abhishek. All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


