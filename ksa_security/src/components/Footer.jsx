import React from 'react';
import '../style/Footer.css'; // Importante importar tu CSS
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Izquierda */}
        <div className="footer-left">
          <div className="footer-logo">Company<span>logo</span></div>
          <div className="footer-links">
            <a href="#">Home</a> | <a href="#">Blog</a> | <a href="#">Pricing</a> | <a href="#">About</a> | <a href="#">Faq</a> | <a href="#">Contact</a>
          </div>
          <p className="footer-company-name">Company Name © 2015</p>
        </div>

        {/* Centro */}
        <div className="footer-center">
          <div className="footer-contact-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <p>444 S. Cedros Ave <br /><span>Solana Beach, California</span></p>
          </div>
          <div className="footer-contact-item">
            <div className="icon-box"><FaPhoneAlt /></div>
            <p>+1.555.555.5555</p>
          </div>
          <div className="footer-contact-item">
            <div className="icon-box"><FaEnvelope /></div>
            <p><a href="mailto:support@company.com" className="email-link">support@company.com</a></p>
          </div>
        </div>

        {/* Derecha */}
        <div className="footer-right">
          <div className="footer-about">
            <h3>About the company</h3>
            <p>Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaGithub /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;