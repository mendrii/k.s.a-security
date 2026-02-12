import React from 'react';
import '../style/Footer.css'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Izquierda: Logo y Copyright */}
        <div className="footer-left">
          <div className="footer-logo">
            <img 
              src="logo_ksa.png" 
              alt="K.S.A SECURITY Logo" 
              className="footer-brand-img"
            />
          </div>
          <p className="footer-company-name">SEGURIDAD KSA © 2026</p>
        </div>

        {/* Centro: Contacto y Horario */}
        <div className="footer-center">
          <div className="footer-contact-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <p><span>Valparaíso, Chile</span></p>
          </div>
          <div className="footer-contact-item">
            <div className="icon-box"><FaPhoneAlt /></div>
            <p>+56 958042898</p>
          </div>
          <div className="footer-contact-item">
            <div className="icon-box"><FaEnvelope /></div>
            <p><a href="mailto:soporte@empresa.com" className="email-link">soporte@empresa.com</a></p>
          </div>
          <div className="footer-contact-item">
            <div className="icon-box"><FaClock /></div>
            <p>Lunes-Sábado: 9:00 - 19:00</p>
          </div>
        </div>

        {/* Derecha: Descripción y Redes */}
        <div className="footer-right">
          <div className="footer-about">
            <h3>ACERCA DE LA EMPRESA</h3>
            <p>
              En KSA SECURITY nos especializamos en proteger lo que más valoras. 
              Somos expertos en la instalación y mantenimiento de sistemas integrales 
              de seguridad: cámaras de alta definición, cercos eléctricos certificados, 
              citofonía avanzada, alarmas inteligentes y videoporteros. 
              Tu tranquilidad es nuestra prioridad.
            </p>
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