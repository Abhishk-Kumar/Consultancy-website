import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/patient/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/logo.png" alt="Gyan Consultancy" className="logo-img" />
          </Link>
        </div>

        <div className={`nav-links ${show ? "show" : ""}`}>
          <div className="nav-items">
            <Link 
              to="/" 
              onClick={() => setShow(false)}
              className={isActive("/") ? "active" : ""}
            >
              Home
            </Link>
            <Link 
              to="/appointment" 
              onClick={() => setShow(false)}
              className={isActive("/appointment") ? "active" : ""}
            >
              Book Consultation
            </Link>
            <Link 
              to="/about" 
              onClick={() => setShow(false)}
              className={isActive("/about") ? "active" : ""}
            >
              About Us
            </Link>
          </div>

          <div className="nav-auth">
            {isAuthenticated ? (
              <button className="nav-btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="nav-btn login-btn"
                onClick={() => navigateTo("/login")}
              >
                Login
              </button>
            )}
          </div>
        </div>

        <div className="nav-toggle" onClick={() => setShow(!show)}>
          {show ? <IoMdClose size={28} /> : <RiMenu3Fill size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;