import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import { 
  FaUser, FaEnvelope, FaPhone, FaCalendarAlt,
  FaBriefcase, FaMapMarkerAlt, FaCheckCircle,
  FaUserShield, FaClock, FaHandshake
} from "react-icons/fa";

const AppointmentForm = () => {
  // state management
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Medical Consultancy");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const trustFeatures = [
    {
      icon: <FaUserShield />,
      title: "Secure & Confidential",
      description: "Your information is protected with enterprise-grade security"
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries"
    },
    {
      icon: <FaHandshake />,
      title: "Expert Consultation",
      description: "Professional guidance from industry experts"
    }
  ];

  const servicesArray = [
    "Medical Consultancy",
    "Legal Advisory",
    "Technology Solutions",
    "Travel Planning",
    "Child Counselling",
    "Career Counselling",
    "YouTube Marketing",
    "Educational Services",
    "Gift Shop Advisory",
    "Current Affairs Analysis"
  ];

  //  handleAppointment function
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          appointment_date: appointmentDate,
          department,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAppointmentDate("");
      setDepartment("Medical Consultancy");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="appointment-section">
      <motion.div 
        className="animated-background"
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
          className="trust-features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {trustFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className="trust-feature"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="appointment-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Schedule Your Consultation</h2>
          <p>Book a session with our expert consultants</p>
        </motion.div>
       
        <motion.form
          className="appointment-form"
          onSubmit={handleAppointment}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-grid">
            <motion.div
              className="input-group"
              whileHover={{ scale: 1.02 }}
            >
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </motion.div>            <motion.div
              className="input-group"
              whileHover={{ scale: 1.02 }}
            >
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </motion.div>            <motion.div
              className="input-group"
              whileHover={{ scale: 1.02 }}
            >
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>            <motion.div
              className="input-group"
              whileHover={{ scale: 1.02 }}
            >
              <FaPhone className="input-icon" />
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </motion.div>            <motion.div
              className="input-group"
              whileHover={{ scale: 1.02 }}
            >
              <FaCalendarAlt className="input-icon" />
              <input
                type="datetime-local"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
              />
            </motion.div>            <motion.div
              className="input-group"
              whileHover={{ scale: 1.02 }}
            >
              <FaBriefcase className="input-icon" />
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                {servicesArray.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>          <motion.div
            className="input-group address-group"
            whileHover={{ scale: 1.02 }}
          >
            <FaMapMarkerAlt className="input-icon" />
            <textarea
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="4"
            />
          </motion.div>          <motion.div
            className="checkbox-group"
            whileHover={{ scale: 1.02 }}
          >
            <label>
              <input
                type="checkbox"
                checked={hasVisited}
                onChange={(e) => setHasVisited(e.target.checked)}
              />
              <span>Have you consulted with us before?</span>
            </label>
          </motion.div>          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Consultation
          </motion.button>
        </motion.form>
      </div>
        
    </section>
  );
};

export default AppointmentForm;
