import axios from "axios";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaVenusMars, FaLock, FaArrowRight } from 'react-icons/fa';

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  //  state management
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  //handleRegistration function
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/patient/register",
          { firstName, lastName, email, phone, gender, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="register-section">
      <motion.div 
        className="register-background"
        animate={{ 
          background: [
            "linear-gradient(45deg, #9333ea15, #3b82f615)",
            "linear-gradient(225deg, #9333ea15, #3b82f615)",
            "linear-gradient(45deg, #9333ea15, #3b82f615)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="register-container">
        <motion.div 
          className="register-form-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="register-header">
            <motion.h2
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            >
              Create Account
            </motion.h2>
            <p>Join our community of professionals</p>
          </div>

          <form onSubmit={handleRegistration} className="register-form">
            <div className="register-form-grid">
              <motion.div 
                className="register-input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaUser className="register-input-icon" />
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </motion.div>

              <motion.div 
                className="register-input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaUser className="register-input-icon" />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </motion.div>

              <motion.div 
                className="register-input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaEnvelope className="register-input-icon" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

              <motion.div 
                className="register-input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaPhone className="register-input-icon" />
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </motion.div>

              <motion.div 
                className="register-input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaVenusMars className="register-input-icon" />
                <select 
                  value={gender} 
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </motion.div>

              <motion.div 
                className="register-input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaLock className="register-input-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </motion.div>
            </div>

            <div className="register-login-link">
              <p>Already have an account?</p>
              <Link to="/login">Login Here</Link>
            </div>

            <motion.button
              type="submit"
              className="register-submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register <FaArrowRight className="register-btn-icon" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;

