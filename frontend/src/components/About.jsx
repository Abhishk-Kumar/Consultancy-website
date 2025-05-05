import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaGraduationCap, FaAward, FaCertificate, 
    FaBalanceScale, FaLaptopCode, FaBriefcase 
  } from 'react-icons/fa';
  

const About = () => {
  const services = [
    {
      title: "Medical Consultancy",
      description: "NATURE CAN HEAL NATURE CAN REVERSE DISEASE DISORDER AND DEFICIENCY NATURAL THERAPIES AVAILABLE FOR TREATMENT:",
      features: [
        "Zero Volt Therapy",
        "Hyperthermia",
        "Circadian Rhythm",
        "Panchkarma at Home Consultancy"
      ],
      imageUrl: "../med.jpg" 
    },
    {
      title: "Legal Advisory",
      description: "Expert legal consultation providing comprehensive solutions across corporate, civil, and personal legal matters. Our experienced team ensures thorough legal guidance and support.",
      features: [
        "Corporate Law Consultation",
        "Civil Cases Support",
        "Legal Documentation",
        "Rights Protection Services"
      ],
      imageUrl: "../law.jpg" 
    },
    {
      title: "Travel Planning",
      description: "Comprehensive travel consultation services offering personalized itinerary planning, destination guidance, and travel arrangement support.",
      features: [
        "Custom Itinerary Planning",
        "Destination Research",
        "Travel Documentation",
        "Local Experience Curation"
      ],
      imageUrl: "../travel.jpg" 
    },
    {
      title: "Technology Solutions",
      description: "Innovative technology consulting services helping businesses leverage modern solutions for growth and efficiency.",
      features: [
        "Digital Transformation",
        "Tech Stack Optimization",
        "System Integration",
        "IT Strategy Planning"
      ],
      imageUrl: "../tech.jpg"
    }
  ];

  const founderInfo = {
    name: "Dr. John Doe",
    qualifications: [
      {
        title: "Medical Degree",
        institution: "Medical University",
        year: "2010"
      },
      {
        title: "Specialization in Natural Therapy",
        institution: "Institute of Natural Medicine",
        year: "2012"
      },
      {
        title: "Research Fellowship",
        institution: "International Health Research",
        year: "2015"
      },{
        title: "Legal Practice Certificate",
        institution: "National Law Institute",
        year: "2016"
      },
      {
        title: "Digital Technology Management",
        institution: "Tech Innovation Institute",
        year: "2018"
      },
      {
        title: "Advanced Business Consulting",
        institution: "Business Strategy School",
        year: "2020"
      }
    ]
  };
 

  return (
    <section className="about-section">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Our Services</h1>
        <p>Comprehensive solutions for your consulting needs</p>
      </motion.div>

      <div className="about-services">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className={`about-service-row ${index % 2 === 0 ? 'about-image-left' : 'about-image-right'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="about-service-image">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <div className="about-service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="about-service-features">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="about-founder"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2>Meet Our Founder</h2>
        <div className="about-founder-content">
          <div className="about-founder-image">
            {/* Founder image will be added later */}
          </div>
          <div className="about-founder-info">
            <h3>{founderInfo.name}</h3>
            <div className="about-qualifications">
              {founderInfo.qualifications.map((qual, index) => (
                <motion.div 
                  key={index}
                  className="about-qualification-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="about-qual-icon">
                 {index === 0 ? <FaGraduationCap /> : 
                index === 1 ? <FaAward /> : 
             index === 2 ? <FaCertificate /> :
             index === 3 ? <FaBalanceScale /> :
             index === 4 ? <FaLaptopCode /> :
   <FaBriefcase />}
</span>
                  <div>
                    <h4>{qual.title}</h4>
                    <p>{qual.institution}</p>
                    <span>{qual.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
