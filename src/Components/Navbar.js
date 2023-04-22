import { useState, useEffect } from "react";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = () => {
    navigate("/login");

    // Your authentication logic goes here
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Remove the authentication token from localStorage
    localStorage.removeItem("isAuthenticated");
    // Update the state to reflect the user is not authenticated
    setIsAuthenticated(false);
    // Redirect the user to the login page
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  useEffect(() => {
    const isAuthenticatedStr = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(isAuthenticatedStr === "true");
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-info bg-secondary"
      }`}
      style={{ height: "80px", boxShadow: "0 4px 6px rgba(0,0,0,.1)" }}
    >
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" href="#">
          BYUC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ fontSize: "1.2rem", fontFamily: "Arial, sans-serif" }}
          >
            <li className="nav-item">
              <Link
                to="/cardetails"
                className="nav-link active"
                aria-current="page"
              >
                Sell Your Car
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/aboutus"} className="nav-link active" href="#">
                About Us
              </Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <div className="d-flex align-items-center">
              <p className="mb-0 me-3 text-white">Welcome, User</p>
              <button className="btn btn-primary my-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <button
                className="btn btn-primary mx-3 my-btn login-btn"
                disabled={isAuthenticated}
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          )}
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label
              className="form-check-label"
              htmlFor="dark
ModeSwitch"
            >
              {darkMode ? (
                <DarkModeIcon style={{ color: "white" }} />
              ) : (
                <LightModeIcon style={{ color: "yellow" }} />
              )}
            </label>
          </div>
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
