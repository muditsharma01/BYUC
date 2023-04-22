import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Styles/Aboutus.css'
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Aboutus = () => {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4">About Us</h2>
          <p>
          BUYC Corp is a leading online marketplace for buying and selling high-quality second-hand cars. We provide a convenient and easy-to-use platform for dealers to list their inventory of cars, and for buyers to browse through a wide range of vehicles and make informed purchase decisions.

At BUYC Corp, we understand that buying a car is a significant investment, and we strive to make the process as smooth and hassle-free as possible. Our team of experienced professionals works tirelessly to ensure that every car listed on our platform meets our high standards for quality and reliability.









          </p>
          <p>
          We are committed to providing our customers with exceptional service and support, and we pride ourselves on our ability to deliver customized solutions that meet their unique needs and preferences. Whether you are looking to buy or sell a car, we are here to help you every step of the way.

With our extensive selection of second-hand cars and our commitment to excellence, BUYC Corp is the ideal choice for anyone looking for a reliable and convenient way to buy or sell a car online.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://static7.depositphotos.com/1192060/779/i/600/depositphotos_7794432-stock-photo-business-executive-stood-outdoors.jpg"
            alt="About Us"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6">
          <h2 className="mb-4">Our Team</h2>
          <p>
            Our team consists of highly skilled and experienced professionals
            who are dedicated to delivering exceptional results for our clients.
            We believe in collaboration, communication, and continuous learning,
            and we work closely with our clients to ensure that their needs are
            met and their expectations are exceeded.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://media.istockphoto.com/id/504709775/photo/its-not-work-for-me.jpg?s=612x612&w=0&k=20&c=XZbDc8jSrJ1CZ4BSN-mf7PY1OcQaTiC2uaQrKLOMZoc="
            alt="Our Team"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6">
          <h2 className="mb-4">Connect With Us</h2>
          <p>
            Follow us on social media to stay up-to-date with our latest projects
            and updates. We would love to hear from you!
          </p>
          <div className="d-flex">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-3"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-3"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com
              /"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-3"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
);
};

export default Aboutus;    