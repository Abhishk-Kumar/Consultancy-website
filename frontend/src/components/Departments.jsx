import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUserMd, 
  FaBalanceScale, 
  FaLaptopCode, 
  FaPlane,
  FaArrowRight 
} from 'react-icons/fa';

const Departments = () => {
  const serviceData = [
    {
      id: 1,
      icon: <FaUserMd />,
      title: "Medical",
      subtitle: "Consultancy",
      description: "Expert medical guidance from experienced healthcare professionals. Get personalized health solutions and medical advice.",
      image: "/medical-bg.jpg",
      link: "/medical"
    },
    {
      id: 2,
      icon: <FaBalanceScale />,
      title: "Legal",
      subtitle: "Advisory",
      description: "Professional legal consultation services. Navigate complex legal matters with expert guidance.",
      image: "/legal-bg.jpg",
      link: "/legal"
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      title: "Technology",
      subtitle: "Solutions",
      description: "Cutting-edge tech consulting services. Transform your business with innovative technology solutions.",
      image: "/tech-bg.jpg",
      link: "/technology"
    },
    {
      id: 4,
      icon: <FaPlane />,
      title: "Travel",
      subtitle: "Planning",
      description: "Comprehensive travel consultation services. Plan your perfect journey with expert travel advisors.",
      image: "/travel-bg.jpg",
      link: "/travel"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive consultancy solutions tailored to your needs</p>
        </div>

        <div className="services-grid">
          {serviceData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-inner">
                <div className="service-header">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-title">
                    <h3>{service.title}</h3>
                    <span>{service.subtitle}</span>
                  </div>
                </div>
                <p>{service.description}</p>
                <Link to="/About" className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
              <div 
                className="service-bg" 
                style={{ backgroundImage: `url(${service.image})` }}
              />
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Need Specialized Consultation?</h3>
          <p>Get expert advice tailored to your specific requirements</p>
          <Link to="/appointment" className="btn purple-btn">
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Departments;


