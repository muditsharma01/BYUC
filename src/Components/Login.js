import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user:", user);
    if (user && user.email === loginData.email && user.password === loginData.password) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };
  
  

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <div className="login-container">
      <div className="login-card">
        <div className="card-body">
          <h5 className="card-title mb-4">Log in to your account</h5>
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                value={loginData.email}
                onChange={handleInput}
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleInput}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="show-password-icon"
                onClick={handleShowPassword}
              />
            </div>
            <div className="d-grid gap-2 mb-3">
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <span>Don't have an account?</span>
              <Link to="/signup">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="login-card-before"></div>
        <div className="login-card-after"></div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
