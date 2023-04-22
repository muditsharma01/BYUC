import { useState } from 'react';
import '../Styles/Signup.css'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem('user', JSON.stringify(formData));
  console.log('User registered successfully');
  navigate('/login');
}

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0 signup-title">Sign up</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="signup-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label signup-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control signup-input"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label signup-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control signup-input"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label signup-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control signup-input"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary signup-button">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Signup;
