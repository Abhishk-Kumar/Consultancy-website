import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaAward } from 'react-icons/fa';

const Associations = () => {
  const partners = [
    {
      name: "Hospital and Institute of Integrated Medical Sciences",
      logo: "../departments/1.png", 
      description: "Premier institution integrating modern medicine with traditional healing practices",
      type: "Medical Institution"
    },
    {
      name: "Indo-Vietnam Medical Board",
      logo: "../departments/2.png",
      description: "International medical collaboration promoting healthcare excellence",
      type: "International Board"
    },
    {
      name: "Dayanand Ayurvedic College Jalandhar",
      logo: "../departments/3.png",
      description: "Leading institution in Ayurvedic education and research",
      type: "Educational Institution"
    },
    {
      name: "Shridhar University",
      logo: "../departments/4.png",
      description: "Excellence in higher education and professional development",
      type: "University"
    }
  ];

  return (
    <section className="associations-section">
      <motion.div 
        className="associations-background"
        animate={{ 
          background: [
            "linear-gradient(45deg, #9333ea15, #3b82f615)",
            "linear-gradient(225deg, #9333ea15, #3b82f615)",
            "linear-gradient(45deg, #9333ea15, #3b82f615)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container">
        <motion.div 
          className="associations-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaHandshake className="header-icon" />
          <h2>Our Trusted Partners</h2>
          <p>Collaborating with leading institutions to deliver excellence in healthcare and education</p>
        </motion.div>

        <motion.div 
          className="partners-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="partner-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.2)"
              }}
            >
              <div className="partner-logo-container">
                <motion.img 
                  src={partner.logo} 
                  alt={partner.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="partner-info">
                <span className="partner-type">{partner.type}</span>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
              <FaAward className="certification-icon" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="association-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h4>Committed to Excellence</h4>
          <p>Our partnerships enable us to provide comprehensive healthcare solutions and educational guidance</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Associations;
