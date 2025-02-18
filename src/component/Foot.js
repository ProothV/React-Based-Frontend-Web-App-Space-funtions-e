import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container bg-dark text-light">
        <div className="container py-5">
          <div className="row">
            {/* Logo and Intro */}
            <div className="col-md-5">
              <h2 className="footer-logo">
                Spacia
              </h2>
              <p className="footer-intro">
                Exploring the universe and beyond. Join us in our journey through the stars.
              </p>
            </div>

            {/* Features */}
            <div className="col-md-2">
              <h5>Features</h5>
              <ul className="list-unstyled">
                <li>Satellite</li>
                <li>Rocket</li>
                <li>Spacecraft</li>
                <li>Moonwalk</li>
                <li>Orbix</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-md-2">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About Us</li>
                <li>Contacts</li>
                <li>Services</li>
                <li>Get Started</li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-md-2">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li>Contact</li>
                <li>Travel</li>
                <li>Nanohour</li>
                <li>Scopilo</li>
                <li>Particles</li>
              </ul>
            </div>
          </div>

          {/* Contact and Social Icons */}
          <div className="row mt-4">
            <div className="col-md-4">
              <FaMapMarkerAlt className="footer-icon" /> Skyland, P-Tower 4531-09, Pune, 400002
            </div>
            <div className="col-md-4">
              <FaEnvelope className="footer-icon" /> info@spacia.com
            </div>
            <div className="col-md-4">
              <FaPhoneAlt className="footer-icon" /> +91 12345-67890
            </div>
          </div>

          {/* Social Media */}
          <div className="row mt-4 text-center">
            <div className="col-12">
              <FaFacebookF className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaTwitter className="social-icon" />
            </div>
          </div>

          {/* Footer Bottom */}
          <hr className="footer-divider" />
          <div className="row">
            <div className="col-md-12 text-center ">
              <p>
                &copy; 2024 All rights reserved | <i className="ag">This website is made by PJ</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
