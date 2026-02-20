import React from 'react';
import '../style/Footer.css'; // Asegúrate de importar el CSS nuevo
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="minimal-footer">
      <div className="footer-content">
        
        {/* 1. MARCA / TÍTULO */}
        <h2 className="footer-brand">KSA Security</h2>

        {/* 2. BARRA DE NAVEGACIÓN */}
        <nav className="footer-nav">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#about">Nosotros</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* 3. REDES SOCIALES (Círculos) */}
        <div className="footer-socials">
          <a href="#" className="social-circle" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="social-circle" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="social-circle" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="social-circle" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

        {/* 4. COPYRIGHT & CREDITOS */}
        <div className="footer-legal">
          <p>
            Copyright © 2026 KSA Security. Todos los derechos reservados.
          </p>
          <p className="tech-stack">
            Diseñado con <span className="highlight">React</span> & <span className="highlight">CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;