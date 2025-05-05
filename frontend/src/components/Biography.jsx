import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBrain, FaUsers, FaRocket, FaLightbulb, 
  FaRegCheckCircle 
} from "react-icons/fa";

const Biography = ({ imageUrl }) => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: <FaBrain />,
      title: "Professional Guidance",
      description: "Expert consultation across medical, legal, and technical domains",
      details: [
        "Healthcare Advisory Services",
        "Legal Consultation",
        "Technical Solutions"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Personal Development",
      description: "Specialized counseling services for growth and success",
      details: [
        "Career Path Planning",
        "Child Psychology Support",
        "Educational Guidance"
      ]
    },
    {
      icon: <FaRocket />,
      title: "Digital Growth",
      description: "Modern solutions for online presence and business expansion",
      details: [
        "YouTube Channel Growth",
        "Social Media Strategy",
        "Content Marketing"
      ]
    },
    {
      icon: <FaLightbulb />,
      title: "Specialized Services",
      description: "Unique consulting solutions for specific needs",
      details: [
        "Travel Planning",
        "Tools Consultation",
        "Gift Shop Advisory"
      ]
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Free consultation to understand your specific needs and goals"
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Custom solution design based on your requirements"
    },
    {
      number: 3,
      title: "Implementation Support",
      description: "Guided execution and continuous support throughout the process"
    }
  ];

  return (
    <section className="biography-section">
      <motion.div 
        className="animated-background"
        animate={{ 
          background: [
            "linear-gradient(45deg, #9333ea22, #3b82f622)",
            "linear-gradient(225deg, #9333ea22, #3b82f622)",
            "linear-gradient(45deg, #9333ea22, #3b82f622)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container">
        <motion.div 
          className="biography-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          >
            Transforming Visions Into Success
          </motion.h2>
        </motion.div>

        <div className="biography-content">
          <motion.div className="feature-showcase">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={`feature-card ${selectedFeature === index ? 'active' : ''}`}
                onClick={() => setSelectedFeature(index)}
                whileHover={{ scale: 1.02 }}
                layoutId={`feature-${index}`}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                
                <AnimatePresence>
                  {selectedFeature === index && (
                    <motion.div 
                      className="feature-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {feature.details.map((detail, idx) => (
                        <motion.div 
                          key={idx}
                          className="detail-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <FaRegCheckCircle className="check-icon" />
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="process-visualization">
            <div className="process-line" />
            {processSteps.map((step) => (
              <motion.div 
                key={step.number}
                className="process-step"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Biography;

