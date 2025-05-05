import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComments } from "react-icons/fa";

const MessageForm = () => {
  //  state management
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  //  handleMessage function
  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="message-form-section">
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
          className="form-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-header">
            <motion.h2
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            >
              Get In Touch
            </motion.h2>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <form onSubmit={handleMessage} className="contact-form">
            <div className="form-grid">
              <motion.div 
                className="input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaUser className="input-icn" />
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </motion.div>

              <motion.div 
                className="input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaUser className="input-icn" />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </motion.div>

              <motion.div 
                className="input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaEnvelope className="input-icn" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

              <motion.div 
                className="input-group"
                whileHover={{ scale: 1.02 }}
              >
                <FaPhone className="input-icn" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </motion.div>
            </div>

            <motion.div 
              className="input-group message-group"
              whileHover={{ scale: 1.02 }}
            >
              <FaComments className="input-icn" />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane className="button-icon" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageForm;
