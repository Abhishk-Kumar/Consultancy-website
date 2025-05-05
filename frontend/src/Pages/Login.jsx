import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password, confirmPassword, role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="login-section">
      <motion.div 
        className="login-background"
        animate={{ 
          background: [
            "linear-gradient(45deg, #9333ea15, #3b82f615)",
            "linear-gradient(225deg, #9333ea15, #3b82f615)",
            "linear-gradient(45deg, #9333ea15, #3b82f615)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <motion.div 
        className="login-form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="login-header">
          <motion.h2
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          >
            Welcome Back
          </motion.h2>
          <p>Access your personalized consultation dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <motion.div 
            className="login-input-group"
            whileHover={{ scale: 1.02 }}
          >
            <FaEnvelope className="login-input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div 
            className="login-input-group"
            whileHover={{ scale: 1.02 }}
          >
            <FaLock className="login-input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>

          <motion.div 
            className="login-input-group"
            whileHover={{ scale: 1.02 }}
          >
            <FaLock className="login-input-icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </motion.div>

          <div className="login-register-link">
            <p>Don't have an account?</p>
            <Link to="/register">Register Here</Link>
          </div>

          <motion.button
            type="submit"
            className="login-submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login <FaArrowRight className="login-btn-icon" />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Login;


